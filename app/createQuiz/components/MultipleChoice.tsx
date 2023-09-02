"use client"

import { useState } from "react";
import { Answer } from "./Answer";
import { DEFAULT_ANSWERS } from "@/constants";

export function MultipleChoice() {
    const [answers, setAnswers] = useState(DEFAULT_ANSWERS);

    const handleAnswerToggle = (answerId: string) => {
        const foundAnswer = answers.find((answer) => answer.id === answerId);
        // if answer is already correct, on toggle do nothing
        if (foundAnswer?.isCorrect) {
            return;
        }
        setAnswers((prevAnswers) => prevAnswers.map((answer) => {
            if (answer.id === answerId) {
                return {
                    ...answer,
                    isCorrect: true,
                }
            }
            return {
                ...answer,
                isCorrect: false,
            };
        }))
    }

    return (
        <>
            {answers.map((answer, index) => (<Answer handleAnswerToggle={handleAnswerToggle} answer={answer} key={answer.id} />))}
        </>
    )
}