import { useAuth } from "@/contexts/AuthContext";
import { ModalScene } from "@/enums";
import { Center, Image, Heading, Text, Stack, Link } from "@chakra-ui/react";

export function NotAuthorized() {

    const { toggleModal, handleModalSceneChange } = useAuth()

    const handleLinkClick = () => {
        handleModalSceneChange(ModalScene.REGISTER);
        toggleModal();
    }

    return (
        <Stack pt={{ base: "50px", lg: "80px" }} pb="50px">
            <Center>
                <Heading color="black" fontWeight="extrabold" fontStyle="italic" fontSize={{ base: "l", md: "xl", lg: "3rem" }} textAlign="center">You Shall Not Pass!</Heading>
            </Center>
            <Center>
                <Image src="gandalf.png" alt="Wizard" />
            </Center>
            <Center>
                <Text color="black" fontWeight="semibold" fontSize={{ base: "md", md: "l", lg: "xl" }} textAlign="center" w="80%">... until you learn how to <Link color="blue" onClick={handleLinkClick}>register</Link> for free!</Text>
            </Center>
        </Stack>
    )
}