import * as yup from "yup";

import { FORM_ERROR_MESSAGES } from "..";

export const loginSchema = yup.object().shape({
    email: yup.string().required(FORM_ERROR_MESSAGES.required).email(FORM_ERROR_MESSAGES.invalidEmail),
    password: yup.string().required(FORM_ERROR_MESSAGES.required),
});

export const registrationSchema = yup.object().shape({
    email: yup.string().required(FORM_ERROR_MESSAGES.required).email(FORM_ERROR_MESSAGES.invalidEmail),
    password: yup.string().required(FORM_ERROR_MESSAGES.required),
    repeatedPassword: yup.string().required(FORM_ERROR_MESSAGES.required),
})