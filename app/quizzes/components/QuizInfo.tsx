import { Stack, Center, Text } from "@/components/chakra";
import Image from "next/image";

interface Props {
    imageUrl: string;
    imageDescription: string;
    text: string;
    handleOnClick: () => void;
}

export function QuizInfo({ imageUrl, text, imageDescription, handleOnClick }: Props) {
    return (
        <Stack spacing="56px" _hover={{ cursor: "pointer", backgroundColor: "#e7e7e7" }} _active={{ backgroundColor: "#eff1f2" }} onClick={handleOnClick} pb={{ base: "10px", lg: "0px" }}>
            <Center >
                <Image src={imageUrl} alt={imageDescription} width={290} height={290} />
            </Center>
            <Center>
                <Text color="blue" fontSize="md" fontWeight="medium">{text}</Text>
            </Center>
        </ Stack>
    )
}