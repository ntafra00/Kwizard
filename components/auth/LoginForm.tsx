import { Text, Flex, Center, Box } from "@chakra-ui/react"
import { FormField } from "../commons/forms";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "@/constants/schemas";
import { useAuth } from "@/contexts/AuthContext";
import { FORM_ERROR_MESSAGES } from "@/constants";
import { Button } from "../commons/buttons";
import { ModalScene } from "@/enums";

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

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormField errorMessage={errors.email?.message} hasError={!!errors.email} id="email" label="Email" key="email" register={register("email")} />
            <Box pt={4}>
                <FormField errorMessage={errors.password?.message} hasError={!!errors.password} id="password" label="Password" key="password" register={register("password")} type="password" />
            </Box>
            <Flex justifyContent={"flex-end"} py="16px">
                <Button buttonAction={() => { }} text="Forgot password?" textColor="blue" variant="link" key="Forgot password" />
            </Flex>
            <Button
                backgroundColor="blue"
                text="Login"
                buttonAction={() => { }}
                textColor="white"
                borderRadius="10px"
                type="submit"
                isLoading={isSubmitting}
                fullWidth={true}
            />
            <Center gap={2} pt="40px">
                <Text color="gray" fontWeight="medium" fontSize="sm">Not a wizard yet?</Text>
                <Button buttonAction={() => handleModalSceneChange(ModalScene.REGISTER)} text="Create account" textColor="blue" variant="link" key="Create account" />
            </Center>
        </form>
    )
}

