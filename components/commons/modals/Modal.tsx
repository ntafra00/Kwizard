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
    Image,
    Center,
    Divider,
    AbsoluteCenter
} from '@chakra-ui/react';

import { useAuth } from '@/contexts/AuthContext';
import { CompanyButton } from '@/components/commons/buttons/CompanyButton'
import { GoogleIcon, GithubIcon } from '@/components/commons/icons';
import { ModalScene } from '@/enums';
import { LoginForm, RegistrationForm } from '@/components/auth';

export function Modal() {

    const { isModalOpen, modalScene, toggleModal, handleModalSceneChange } = useAuth();

    return (
        <ChakraModal blockScrollOnMount={false} isOpen={isModalOpen} onClose={toggleModal}>
            <ModalOverlay backdropFilter='blur(1px)' />
            <ModalContent border="1px solid black" borderRadius="20px" width="57%">
                <ModalHeader>
                    <Center>
                        <Box w="150px" h="150px">
                            <Image src="browserIcon.png" />
                        </Box>
                    </Center>
                    {!!modalScene && <Flex direction="column">
                        <Center pb="8px">
                            <Heading color="black" fontSize="md" fontWeight="bold" textAlign="center">{modalScene === ModalScene.LOGIN ? "Welcome back!" : "Ah, so you want to be a wizard?"}</Heading>
                        </Center>
                        <Center pb={"30px"}>
                            <Text color="gray" fontSize="sm" fontWeight="medium">{modalScene === ModalScene.LOGIN ? "Please enter your details to sign in." : "Use magic and apps below to get started!"}</Text>
                        </Center>
                    </Flex>}
                </ModalHeader>
                <Flex px={"20px"} gap="12px">
                    <CompanyButton icon={<GoogleIcon />} text="Google" />
                    <CompanyButton icon={<GithubIcon />} text="Github" />
                </Flex>
                <Box position='relative' py="35px" px="4px">
                    <Divider />
                    <AbsoluteCenter bg='white' px='2px'>
                        or
                    </AbsoluteCenter>
                </Box>
                <ModalBody px="20px">
                    {!!modalScene && (modalScene === ModalScene.LOGIN ? <LoginForm handleModalSceneChange={handleModalSceneChange} /> : <RegistrationForm handleModalSceneChange={handleModalSceneChange} />)}
                </ModalBody>
            </ModalContent>
        </ChakraModal >
    );
}