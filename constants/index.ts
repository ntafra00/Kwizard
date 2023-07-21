import { FormErrorMessage, NavigationLink } from "@/typings";
const COMMON_LINKS: NavigationLink[] = [{ text: "Quizzes", path: "quizzes" }, { text: "Stories", path: "stories" }, { text: "About us", path: "aboutUs" }]

export const AUTHORIZED_LINKS: NavigationLink[] = [...COMMON_LINKS, { text: "Profile", path: "profile" }, { text: "Sign out", path: "" }];
export const NON_AUTHORIZED_LINKS: NavigationLink[] = [...COMMON_LINKS, { text: "Login", path: "" }, { text: "Register", path: "" }];

export const FORM_ERROR_MESSAGES: FormErrorMessage = {
    invalidCredentials: "Invalid credentials",
    required: "Field is required",
    invalidEmail: "Invalid email address",
}