"use client"

import { Center } from "@/components/chakra"
import { Button } from "@/components/commons/buttons"
import { QuizSection, Question } from "./index"
import { useQuizCreation } from "@/contexts"

export function SecondStep() {
    const { questions, handleAddQuestion } = useQuizCreation();
    return (
        <QuizSection imageDescription="Number six" imageUrl="numberSix.png" title="Do Your Magic!" isLast={true}>
            {questions.map((question) => (
                <Question />
            ))}
            <Center>
                <Button buttonAction={handleAddQuestion} text="Add New Question" textColor="white" backgroundColor="blue" />
            </Center>
        </QuizSection>
    )
}