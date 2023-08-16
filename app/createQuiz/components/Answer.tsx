import { Flex, Box, Image, Center } from "@chakra-ui/react";
import { Input } from "./Input";

interface Props {
    isCorrect: boolean;
}

export function Answer({ isCorrect }: Props) {
    return (
        <Flex w="100%" pr="15px">
            <Flex w="80%">
                <Input placeholder="Answer" backgroundColor="white" />
                <Center borderRadius="0px 6px 6px 0px" border="1px solid #E2E8F0" backgroundColor="#EDF2F7" px="8px" w="48px" h="48px" _hover={{ cursor: "pointer" }}>
                    <Image src={isCorrect ? "correctAnswer.png" : "wrongAnswer.png"} alt="Correct answer" background="transparent" />
                </Center>
            </Flex>
            <Image src="uploadImageGray.png" alt="Upload image" pl="30px" />
        </Flex >
    )
}