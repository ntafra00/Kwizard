import { FormControl, FormLabel, FormErrorMessage, Input, InputGroup, InputRightElement, Stack, Text, Link, Button, IconButton, useBoolean } from "@chakra-ui/react"

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "@/constants/schemas";
import { ClosedEyeIcon, OpenEyeIcon } from "../commons/icons";
import { useAuth } from "@/contexts/AuthContext";
import { FORM_ERROR_MESSAGES } from "@/constants";

export default function LoginForm() {

    const [isPasswordVisible, setIsPasswordVisible] = useBoolean()
    const { login, toggleModal } = useAuth();

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
            const response = await login(formData);
            console.log(response);
            toggleModal();
        } catch (error) {
            setError("email", { message: FORM_ERROR_MESSAGES.invalidCredentials });
            setError("password", { message: FORM_ERROR_MESSAGES.invalidCredentials });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="email" isInvalid={!!errors.email}>
                <FormLabel>Email address</FormLabel>
                <Input {...register("email")} placeholder='Enter email address' />
                <FormErrorMessage>
                    {errors.email && errors.email.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={!!errors.password} pt={5}>
                <FormLabel>Password</FormLabel>
                <InputGroup size='md'>
                    <Input
                        pr='4.0rem'
                        type={isPasswordVisible ? 'text' : 'password'}
                        placeholder='Enter password'
                        {...register("password")}
                    />
                    <InputRightElement >
                        <IconButton h='1.75rem' size='md' onClick={setIsPasswordVisible.toggle} backgroundColor={'transparent'} icon={isPasswordVisible ? <ClosedEyeIcon /> : <OpenEyeIcon />} aria-label="Eye icon" _hover={{ cursor: "pointer" }} />
                    </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                    {errors.password && errors.password.message}
                </FormErrorMessage>
            </FormControl>
            <Stack spacing={10} pt={10}>
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Text >Don't have an account?</Text>
                    <Link color={'blue.400'}>Create one</Link>
                </Stack>
                <Button
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                        bg: 'blue.500',
                    }}
                    type="submit"
                    isLoading={isSubmitting}
                >
                    Log in
                </Button>
            </Stack>
        </form>
    )
}

