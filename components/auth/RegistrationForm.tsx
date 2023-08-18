import { Text, Center, Box, FormLabel, Input } from "@chakra-ui/react"
import { FormField } from "../commons/forms";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "@/contexts/AuthContext";
import { FORM_ERROR_MESSAGES } from "@/constants";
import { Button } from "../commons/buttons";
import { validatePassword } from "@/utils";
import { registrationSchema } from "@/constants/schemas/loginSchema";
import { ModalScene } from "@/enums";

import { inputProps, labelProps } from "./constants";

interface Props {
    handleModalSceneChange: (modalScene: ModalScene) => void;
}

export function RegistrationForm({ handleModalSceneChange }: Props) {

    const { registerUser, toggleModal } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(registrationSchema),
        shouldFocusError: true,
    });

    const onSubmit = async (formData: { email: string, password: string, repeatedPassword: string }) => {
        try {
            if (!validatePassword(formData.password, formData.repeatedPassword)) {
                setError("password", { message: FORM_ERROR_MESSAGES.passwordsDoNotMatch })
                setError("repeatedPassword", { message: FORM_ERROR_MESSAGES.passwordsDoNotMatch })
                return;
            }
            await registerUser(formData);
            toggleModal();
        } catch (error) {
            setError("email", { message: FORM_ERROR_MESSAGES.invalidCredentials });
            setError("password", { message: FORM_ERROR_MESSAGES.invalidCredentials });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Center>
                <Text fontSize="sm" fontWeight="medium" color="gray">
                    Alternatively, enter your email
                </Text>
            </Center>
            <Center>
                <Text fontSize="sm" fontWeight="medium" color="gray">
                    and a strong password!
                </Text>
            </Center>
            <FormField errorMessage={errors.email?.message} hasError={!!errors.email} id="email" key="email">
                <FormLabel {...labelProps}>Email</FormLabel>
                <Input {...register("email")} {...inputProps} type="text" />
            </FormField>
            <Box pt={4}>
                <FormField errorMessage={errors.password?.message} hasError={!!errors.password} id="password" key="password">
                    <FormLabel {...labelProps}>Password</FormLabel>
                    <Input {...register("password")} {...inputProps} type="password" />
                </FormField>
            </Box>
            <Box pt={4} pb="70px">
                <FormField errorMessage={errors.repeatedPassword?.message} hasError={!!errors.repeatedPassword} id="repeatedPassword" key="repeatedPassword">
                    <FormLabel {...labelProps}>Confirm password</FormLabel>
                    <Input {...register("repeatedPassword")} {...inputProps} type="password" />
                </FormField>
            </Box>
            <Button
                backgroundColor="blue"
                text="Register"
                buttonAction={() => { }}
                textColor="white"
                borderRadius="10px"
                type="submit"
                isLoading={isSubmitting}
                fullWidth={true}
            />
            <Center gap={2} pt="40px">
                <Text color="gray" fontWeight="medium" fontSize="sm">Already a wizard?</Text>
                <Button buttonAction={() => handleModalSceneChange(ModalScene.LOGIN)} text="Log in" textColor="blue" variant="link" key="Create account" />
            </Center>
        </form >
    )
}

