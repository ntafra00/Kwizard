import { AUTHORIZED_LINKS, NON_AUTHORIZED_LINKS } from "@/constants";

export const getNavigationLinks = (isUserLoggedIn: boolean) => {
    return isUserLoggedIn ? AUTHORIZED_LINKS : NON_AUTHORIZED_LINKS;
}

export const validatePassword = (password: string, repeatedPassword: string) => {
    return password.localeCompare(repeatedPassword) === 0;
}