import { AUTHORIZED_LINKS, NON_AUTHORIZED_LINKS } from "@/constants";

export const getNavigationLinks = (isUserLoggedIn: boolean) => {
    return isUserLoggedIn ? AUTHORIZED_LINKS : NON_AUTHORIZED_LINKS;
}