"use client"

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Answer } from "./Answer";
import { usePrevious } from "@/hooks";
import { DEFAULT_ANSWERS } from "@/constants";

export function Checkboxes() {
    const [answers, setAnswers] = useState(DEFAULT_ANSWERS);
    const [lastAnswerText, setLastAnswerText] = useState("");
    const previousText = usePrevious(lastAnswerText);

    const handleAnswerToggle = (answerId: string) => {
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

    const handleLastAnswerChange = (value: string) => {
        setLastAnswerText(value);
    }

    useEffect(function handleLastAnswerTextChange() {
        if (answers.length > 2 && !lastAnswerText) {
            setAnswers((prevAnswers) => prevAnswers.slice(0, -1));
            return;
        }

        if (!previousText && lastAnswerText) {
            setAnswers((prevAnswers) => [...prevAnswers, { id: uuidv4(), isCorrect: false, text: "" }])
        }
    }, [lastAnswerText, previousText, answers])

    return (
        <>
            {answers.map((answer, index) => (<Answer handleAnswerToggle={handleAnswerToggle} answer={answer} key={answer.id} onInputChange={index === answers.length - 1 ? handleLastAnswerChange : undefined} />))}
        </>
    )
}