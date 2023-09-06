"use client"

import React, { useContext, useState, createContext, useMemo, useCallback } from "react"
import { QuizCategory, QuizData } from "@/typings";
import { QUIZZES } from "@/constants";

interface Context {
    selectedCategory: QuizCategory | undefined;
    filteredQuizzes: QuizData[];
    currentPage: number;
    handleChangeSelectedCategory: (category: QuizCategory) => void;
    handlePageIncrease: () => void;
    handlePageDecrease: () => void;
    handleOnBlurChange: (value: number) => void;
}

const QuizzesContext = createContext<Context | undefined>(undefined)

export function useQuizzes() {
    const context = useContext(QuizzesContext);
    if (context === undefined) {
        throw new Error("useQuizzes context must be within QuizzesProvider");
    }
    return context;
}

export function QuizzesProvider({ children }: { children: React.ReactNode; }) {
    const [selectedCategory, setSelectedCategory] = useState<QuizCategory>();
    const [filteredQuizzes, setFilteredQuizzes] = useState(QUIZZES);
    const [currentPage, setCurrentPage] = useState(1);

    const handleChangeSelectedCategory = useCallback((category: QuizCategory) => {
        setCurrentPage(1);
        if (selectedCategory?.id === category.id) {
            setSelectedCategory(undefined);
            setFilteredQuizzes(QUIZZES);
            return;
        }
        setSelectedCategory(category);
        setFilteredQuizzes((prevState) => prevState.filter((quiz) => quiz.category === selectedCategory?.name))
    }, [selectedCategory])

    const handlePageIncrease = useCallback(() => {
        setCurrentPage((prevPage) => prevPage + 1);
    }, [])

    const handlePageDecrease = useCallback(() => {
        setCurrentPage((prevPage) => prevPage - 1);
    }, [])

    const handleOnBlurChange = useCallback((value: number) => {
        setCurrentPage(value);
    }, [])

    const value = useMemo<Context>(() => ({
        selectedCategory, filteredQuizzes, currentPage, handleChangeSelectedCategory, handlePageDecrease, handlePageIncrease, handleOnBlurChange
    }), [selectedCategory, filteredQuizzes, currentPage, handleChangeSelectedCategory, handlePageDecrease, handlePageIncrease, handleOnBlurChange])

    return (
        <QuizzesContext.Provider value={value}>
            {children}
        </QuizzesContext.Provider>
    )
}