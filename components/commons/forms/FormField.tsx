import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
    hasError: boolean,
    errorMessage: string | undefined,
    label: string,
    id: string,
    register: UseFormRegisterReturn<string>,
    type?: "password",
}

export function FormField({ hasError, errorMessage, label, id, type, register }: Props) {
    return (
        <FormControl id={id} isInvalid={hasError}>
            <FormLabel color="gray" fontSize="sm" fontWeight="medium">{label}</FormLabel>
            <Input {...register} borderRadius="10px" border="1px solid black" background="white" boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)" fontSize="sm" fontWeight="regular" type={type ?? "text"} />
            <FormErrorMessage fontSize="sm" fontWeight="regular">
                {hasError && errorMessage}
            </FormErrorMessage>
        </FormControl>
    )
}