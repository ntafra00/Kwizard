export interface NavigationLink {
    text: string,
    path: string,
}

export interface FormErrorMessage {
    [key: string]: string
}

export interface LoginCredentials {
    email: string,
    password: string,
}

export interface PostData {
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
    title: string,
    subtitle: string,
    category: string,
    author: string,
    imageUrl: string,
    imageDescription?: string,
}

export interface QuizCategory {
    name: string;
    imageUrl: string;
    subcategories: string[];
}