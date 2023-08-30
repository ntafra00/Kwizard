import { Flex, Image, Center } from "@chakra-ui/react";
import { Input } from "./Input";
import { Answer as IAnswer } from "@/typings";
import { Dispatch, SetStateAction } from "react";

interface Props {
    answer: IAnswer;
    handleAnswerToggle: (answerId: string) => void;
    onInputChange?: (value: string) => void
}

export function Answer({ answer: { id, isCorrect, text }, handleAnswerToggle, onInputChange }: Props) {
    return (
        <Flex w="100%" pr="15px" gap="30px" alignItems="center">
            <Flex w="100%">
                <Input placeholder="Answer" backgroundColor="white" onChange={onInputChange} />
                <Center borderRadius="0px 6px 6px 0px" border="1px solid #E2E8F0" backgroundColor="#EDF2F7" px="8px" w="48px" h="48px" _hover={{ cursor: "pointer" }} onClick={() => handleAnswerToggle(id)}>
                    <Image src={isCorrect ? "correctAnswer.png" : "wrongAnswer.png"} alt="Correct answer" background="transparent" />
                </Center>
            </Flex>
            <Image src="uploadImageGray.png" alt="Upload image" w="36px" h="36px" />
        </Flex >
    )
}