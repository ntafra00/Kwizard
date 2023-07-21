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