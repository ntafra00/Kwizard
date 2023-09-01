import { FormControl, FormLabel, Input, FormErrorMessage } from "@/components/chakra";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
    hasError: boolean,
    errorMessage: string | undefined,
    id: string,
    children: React.ReactNode[],
}

export function FormField({ hasError, errorMessage, id, children }: Props) {
    return (
        <FormControl id={id} isInvalid={hasError}>
            {children}
            <FormErrorMessage fontSize="sm" fontWeight="regular">
                {hasError && errorMessage}
            </FormErrorMessage>
        </FormControl>
    )
}