"use client"

import { Flex, Box, FormLabel, Input, Link, Center, Text } from "@/components/chakra"
import { FormField } from "../commons/forms";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "@/constants/schemas";
import { useAuth } from "@/contexts/AuthContext";
import { FORM_ERROR_MESSAGES } from "@/constants";
import { AuthButton } from "../commons/buttons";
import { ModalScene } from "@/enums";
import { inputProps, labelProps } from "./constants";

interface Props {
    handleModalSceneChange: (modalScene: ModalScene) => void;
}

export function LoginForm({ handleModalSceneChange }: Props) {

    const { loginUser, toggleModal } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(loginSchema),
        shouldFocusError: true,
    });

    // test@gmail.com
    // test1234

    const onSubmit = async (formData: { email: string, password: string }) => {
        try {
            await loginUser(formData);
            toggleModal();
        } catch (error) {
            setError("email", { message: FORM_ERROR_MESSAGES.invalidCredentials });
            setError("password", { message: FORM_ERROR_MESSAGES.invalidCredentials });
        }
    };

    const handleCreateAccountClick = () => {
        handleModalSceneChange(ModalScene.REGISTER);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <Center pt="30px">
                <AuthButton
                    text="Login"
                />
            </Center>
            <Center gap={2} pt="40px">
                <Text color="gray" fontWeight="medium" fontSize="sm">Not a wizard yet?</Text>
                <Link color="blue" fontSize="sm" fontWeight="medium" onClick={handleCreateAccountClick}>Create account</Link>
            </Center>
        </form>
    )
}

