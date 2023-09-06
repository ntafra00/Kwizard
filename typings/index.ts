import { QuestionType } from "@/enums";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export interface NavigationLink {
    text: string,
    path: string,
    id: string,
}

export interface FormErrorMessage {
    [key: string]: string;
}

export interface FormErrorMessageFunction {
    [key: string]: ((value: string) => string)
}

export interface LoginCredentials {
    email: string,
    password: string,
}

export interface PostData {
    id: string,
    imageUrl: string,
    topic: string,
    description: string,
    content?: {
        headings: string[];
        texts: string[];
    },
    date: string;
    author: {
        name: string;
        about: string;
    }
    callToAction?: string;
}

export interface QuizData {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    author: string;
    imageUrl: string;
    imageDescription?: string;
    date: string;
}

export interface QuizCategory {
    id: string;
    name: string;
    imageUrl: string;
    subcategories: string[];
}

export interface Answer {
    id: string;
    text: string;
    isCorrect: boolean;
    imageUrl: string;
}

export interface QuizCreationStep {
    id: string;
    name: string;
}

export interface Topic {
    id: string;
    name: string;
    text: string;
}

export type QuizType = "private" | "public";

export interface CreatedQuestion {
    id: string;
    title: string;
    imageUrl: string;
    type: QuestionType;
    answers: Answer[]
}

export interface PersonalInfo {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    description: string;
    city: string;
    country: string;
}