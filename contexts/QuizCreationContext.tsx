"use client"

import React, { useContext, useState, createContext, useMemo, useCallback, useRef } from "react"
import { QuizCategory, QuizType } from "@/typings"

interface Context {
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
}

const QuizCreationContext = createContext<Context | undefined>(undefined)

export function useQuizCreation() {
    const context = useContext(QuizCreationContext);
    if (context === undefined) {
        throw new Error("useQuizCreation context must be within QuizCreationProvider");
    }
    return context;
}

export function QuizCreationProvider({ children }: { children: React.ReactNode; }) {
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

    const value = useMemo<Context>(() => ({
        currentStep, selectedCategory, selectedSubcategory, selectedImage, selectedQuizType, handleChangeSelectedCategory, handleChangeSelectedSubcategory, handleIncreaseCurrentStep, handleRemoveUploadedImage, handleStepClick, handleSelectedQuizTypeChange, handleSetUploadedImage, scrollToProgressBar
    }), [currentStep, selectedCategory, selectedSubcategory, selectedImage, selectedQuizType, handleChangeSelectedCategory, handleChangeSelectedSubcategory, handleIncreaseCurrentStep, handleRemoveUploadedImage, handleStepClick, handleSelectedQuizTypeChange, handleSetUploadedImage, scrollToProgressBar])

    return (
        <QuizCreationContext.Provider value={value}>
            {children}
        </QuizCreationContext.Provider>
    )
}