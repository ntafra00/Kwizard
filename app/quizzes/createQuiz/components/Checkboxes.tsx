"use client"

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Answer } from "./Answer";
import { usePrevious } from "@/hooks";
import { DEFAULT_ANSWERS } from "@/constants";

export function Checkboxes() {
    const [answers, setAnswers] = useState(DEFAULT_ANSWERS);

    const handleAnswerToggle = (answerId: string) => {
        const wrongAnswers = answers.filter((answer) => !answer.isCorrect)
        if (wrongAnswers.length === 3 && !wrongAnswers.find((answer) => answer.id === answerId)) {
            return;
        }
        setAnswers((prevAnswers) => prevAnswers.map((answer) => {
            if (answer.id === answerId) {
                return {
                    ...answer,
                    isCorrect: !answer.isCorrect
                }
            }
            return answer;
        }))
    }

    return (
        <>
            {answers.map((answer, index) => (<Answer handleAnswerToggle={handleAnswerToggle} answer={answer} key={answer.id} />))}
        </>
    )
}