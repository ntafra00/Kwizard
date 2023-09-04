import {
    Heading,
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalHeader,
    Center,
} from "@/components/chakra";

import { useAuth } from '@/contexts/AuthContext';
import { ModalScene } from '@/enums';
import { LoginForm, RegistrationForm } from '@/components/auth';

export function Modal() {

    const { isModalOpen, modalScene, toggleModal, handleModalSceneChange } = useAuth();

    return (
        <ChakraModal blockScrollOnMount={false} isOpen={isModalOpen} onClose={toggleModal} isCentered>
            <ModalOverlay backdropFilter='blur(1px)' />
            <ModalContent border="1px solid black" borderRadius="50px" px="10px" maxH="85%" maxW={{ base: "75%", md: "50%", lg: "30%", xl: "20%" }} >
                <ModalHeader>
                    {!!modalScene &&
                        < Center >
                            <Heading color="black" fontSize={{ base: "sm", lg: "md" }} fontWeight="bold" textAlign="center">{modalScene === ModalScene.LOGIN ? "Welcome back!" : "Ah, so you want to be a wizard?"}</Heading>
                        </Center>
                    }
                </ModalHeader>
                {/* <Stack px={"20px"} gap="12px">
                    <CompanyButton icon={<GoogleIcon />} text="Google" />
                    <CompanyButton icon={<GithubIcon />} text="Github" />
                </Stack> */}
                {/* <Box position='relative' py="10px" px="4px">
                    <Divider />
                    <AbsoluteCenter bg='white' px='2px'>
                        or
                    </AbsoluteCenter>
                </Box> */}
                <ModalBody px="20px">
                    {!!modalScene && (modalScene === ModalScene.LOGIN ? <LoginForm handleModalSceneChange={handleModalSceneChange} /> : <RegistrationForm handleModalSceneChange={handleModalSceneChange} />)}
                </ModalBody>
            </ModalContent>
        </ChakraModal >
    );
}