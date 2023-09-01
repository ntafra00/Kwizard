"use client"
import { useQuizCreation } from '@/contexts/QuizCreationContext'
import { FirstStep, SecondStep, ThirdStep } from './index';

export function Steps() {
    const { currentStep } = useQuizCreation();
    if (currentStep === 0) {
        return <FirstStep />
    }
    if (currentStep === 1) {
        return <SecondStep />
    }
    return <ThirdStep />
}