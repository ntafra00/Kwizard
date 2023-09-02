"use client"

import React, { useContext, useState, createContext, useMemo, useCallback } from "react";
import { v4 as uuid } from "uuid";
import { CreatedQuestion, QuizCategory, QuizType } from "@/typings";
import { DEFAULT_ANSWERS } from "@/constants";
import { QuestionType } from "@/enums";

interface Context {
    questions: CreatedQuestion[];
    currentStep: number;
    selectedCategory: QuizCategory | undefined;
    selectedSubcategory: string | undefined;
    selectedQuizType: QuizType;
    selectedImage: string | undefined;
    handleChangeSelectedCategory: (category: QuizCategory) => void;
    handleChangeSelectedSubcategory: (subcategory: string) => void;
    handleRemoveUploadedImage: () => void;
    handleIncreaseCurrentStep: () => void;
    handleSelectedQuizTypeChange: (quizType: QuizType) => void;
    handleStepClick: (step: number) => void;
    scrollToProgressBar: () => void;
    handleSetUploadedImage: (imageUrl: string) => void;
    handleQuestionsChange: (editedQuestion: CreatedQuestion) => void;
    handleAddQuestion: () => void;
}

const QuizCreationContext = createContext<Context | undefined>(undefined)

export function useQuizCreation() {
    const context = useContext(QuizCreationContext);
    if (context === undefined) {
        throw new Error("useQuizCreation context must be within QuizCreationProvider");
    }
    return context;
}

const DEFAULT_QUESTION_DATA: CreatedQuestion = {
    id: uuid(),
    title: "",
    answers: DEFAULT_ANSWERS,
    imageUrl: "",
    type: QuestionType.MULTIPLE_CHOICE,
}

export function QuizCreationProvider({ children }: { children: React.ReactNode; }) {
    const [questions, setQuestions] = useState([DEFAULT_QUESTION_DATA])
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState<QuizCategory>();
    const [selectedSubcategory, setSelectedSubcategory] = useState<string>();
    const [selectedQuizType, setSelectedQuizType] = useState<QuizType>("public");
    const [selectedImage, setSelectedImage] = useState<string>();


    const handleChangeSelectedCategory = useCallback((category: QuizCategory) => {
        setSelectedCategory(category);
        setSelectedSubcategory(undefined);
    }, [])

    const handleChangeSelectedSubcategory = useCallback((subcategory: string) => {
        setSelectedSubcategory(subcategory);
    }, [])

    const handleSelectedQuizTypeChange = useCallback((quizType: QuizType) => {
        setSelectedQuizType(quizType);
    }, [])

    const handleRemoveUploadedImage = useCallback(() => {
        setSelectedImage(undefined);
    }, [])

    const handleSetUploadedImage = useCallback((imageUrl: string) => {
        setSelectedImage(imageUrl);
    }, [])

    const handleIncreaseCurrentStep = useCallback(() => {
        setCurrentStep((prevState) => prevState + 1);
        scrollToProgressBar();
    }, [])

    const handleStepClick = useCallback((step: number) => {
        setCurrentStep(step);
    }, [])

    const scrollToProgressBar = useCallback(() => {
        document.getElementById("progressBar")?.scrollIntoView();
    }, [])

    const handleQuestionsChange = useCallback((editedQuestion: CreatedQuestion) => {
        setQuestions((prevQuestions) => prevQuestions.map((question) => {
            if (question.id === editedQuestion.id) {
                return editedQuestion;
            }
            return question;
        }))
    }, [])

    const handleAddQuestion = useCallback(() => {
        setQuestions((prevQuestions) => [...prevQuestions, DEFAULT_QUESTION_DATA]);
    }, [])

    const value = useMemo<Context>(() => ({
        currentStep, selectedCategory, questions, selectedSubcategory, selectedImage, selectedQuizType, handleChangeSelectedCategory, handleChangeSelectedSubcategory, handleIncreaseCurrentStep, handleRemoveUploadedImage, handleStepClick, handleSelectedQuizTypeChange, handleSetUploadedImage, handleQuestionsChange, handleAddQuestion, scrollToProgressBar
    }), [currentStep, selectedCategory, questions, selectedSubcategory, selectedImage, selectedQuizType, handleChangeSelectedCategory, handleChangeSelectedSubcategory, handleIncreaseCurrentStep, handleRemoveUploadedImage, handleStepClick, handleSelectedQuizTypeChange, handleSetUploadedImage, handleQuestionsChange, handleAddQuestion, scrollToProgressBar])

    return (
        <QuizCreationContext.Provider value={value}>
            {children}
        </QuizCreationContext.Provider>
    )
}