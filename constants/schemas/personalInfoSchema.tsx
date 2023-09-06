import * as yup from "yup";

import { FORM_ERROR_MESSAGES, FORM_ERROR_MESSAGE_FUNCTIONS } from "..";

export const personalInfoSchema = yup.object().shape({
    firstName: yup.string(),
    lastName: yup.string(),
    phoneNumber: yup
        .string()
        .max(15, FORM_ERROR_MESSAGE_FUNCTIONS.maxLength("15")),
    city: yup.string(),
    country: yup.string(),
    description: yup.string().max(150, FORM_ERROR_MESSAGE_FUNCTIONS.maxLength("150")),
    email: yup.string().required(FORM_ERROR_MESSAGES.required).email(FORM_ERROR_MESSAGES.invalidEmail)
});