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
}

export interface FeaturedPostData extends PostData {
    callToAction: string,
    author: string,
    date: string,
}

export interface QuizData {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    author: string;
    imageUrl: string;
    imageDescription?: string;
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
}

export interface QuizCreationStep {
    id: string;
    name: string;
}

export interface Topic {
    id: string;
    name: string;
}