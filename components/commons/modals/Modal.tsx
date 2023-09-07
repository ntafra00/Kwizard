import {
    Flex,
    Box,
    Heading,
    Text,
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalHeader,
    ModalCloseButton,
    Center,
    Divider,
    AbsoluteCenter
} from '@/components/chakra';
import { CompanyButton } from '../buttons';
import { LoginForm, RegistrationForm } from '@/components/auth';
import { useAuth } from '@/contexts/AuthContext';
import { ModalScene } from '@/enums';
import Image from 'next/image';

export function Modal() {

    const { isModalOpen, modalScene, toggleModal, handleModalSceneChange, signInUserWithGithub, signInUserWithGmail } = useAuth();

    const handleLoginWithGmail = async () => {
        try {
            await signInUserWithGmail();
            toggleModal();
        } catch (error) {
            console.log(error);
        }
    }

    const handleLoginWithGithub = async () => {
        try {
            await signInUserWithGithub();
            toggleModal();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ChakraModal blockScrollOnMount={false} isOpen={isModalOpen} onClose={toggleModal} size={{ base: "full", sm: "undefined" }}>
            <ModalOverlay backdropFilter='blur(1px)' />
            <ModalContent border={{ base: "none", sm: "1px solid black" }} borderRadius={{ base: "0px", sm: "50px" }} h={{ base: undefined, sm: "fit-content" }} w={{ base: undefined, sm: "70vw", md: "50vw", lg: "40vw", xl: "35vw", "2xl": "30vw" }}>
                <ModalHeader pr={{ base: "5px", sm: "0px" }} display={{ base: "block", sm: "none" }}>
                    <ModalCloseButton size="md" />
                </ModalHeader>
                {!!modalScene &&
                    <>
                        <Flex direction="column" pt="20px" px="70px">
                            <Center pb="20px">
                                <Image src="/browserIcon.png" alt="Q letter styled" width={150} height={150} />
                            </Center>
                            <Center>
                                <Heading color="gray" fontSize="md" fontWeight="semibold" textAlign="center">{modalScene === ModalScene.LOGIN ? "Welcome back!" : "Ah, so you want to be a wizard?"}</Heading>
                            </Center>
                            <Center pb="20px">
                                <Text color="smoke" fontSize="sm" fontWeight="medium" textAlign="center">{modalScene === ModalScene.LOGIN ? "Please use the options below to log in." : "Use magic and apps below to get started!"}</Text>
                            </Center>
                        </Flex>
                        <Flex gap="8px" direction="column" px="70px">
                            <CompanyButton leftIcon={<Image src="/googleLogo.png" alt="Google logo" width={32} height={32} />} text="Continue with Google" buttonAction={handleLoginWithGmail} />
                            <CompanyButton leftIcon={<Image src="/githubLogo.png" alt="Github logo" width={32} height={32} />} text="Continue with Github" buttonAction={handleLoginWithGithub} />
                        </Flex>
                        <Box position='relative' py="30px" px="4px">
                            <Divider />
                            <AbsoluteCenter bg='white' px='2px'>
                                or
                            </AbsoluteCenter>
                        </Box>
                        <ModalBody justifyContent={{ base: "center", sm: "inherit" }} alignItems={{ base: "center", sm: "inherit" }} px="80px">
                            {!!modalScene && (modalScene === ModalScene.LOGIN ? <LoginForm handleModalSceneChange={handleModalSceneChange} /> : <RegistrationForm handleModalSceneChange={handleModalSceneChange} />)}
                        </ModalBody>
                    </>
                }
            </ModalContent>
        </ChakraModal >
    );
}