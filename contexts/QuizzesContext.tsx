"use client"

import React, { useContext, useState, createContext, useMemo, useCallback } from "react"
import { QuizCategory } from "@/typings";

interface Context {
    selectedCategory: QuizCategory | undefined;
    handleChangeSelectedCategory: (category: QuizCategory) => void;
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

    const handleChangeSelectedCategory = useCallback((category: QuizCategory) => {
        setSelectedCategory(category);
    }, [])

    const value = useMemo<Context>(() => ({
        selectedCategory, handleChangeSelectedCategory
    }), [selectedCategory, handleChangeSelectedCategory])

    return (
        <QuizzesContext.Provider value={value}>
            {children}
        </QuizzesContext.Provider>
    )
}