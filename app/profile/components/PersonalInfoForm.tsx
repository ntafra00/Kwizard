"use client"

import { Flex, Input, FormLabel, Textarea, Box, Center } from "@/components/chakra"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { personalInfoSchema } from "@/constants/schemas";
import { Button } from "@/components/commons/buttons/Button";
import { FormField } from "@/components/commons/forms";

const inputProps = {
    borderRadius: "8px",
    border: "1px solid #E2E8F0",
    background: "white",
    fontSize: "sm",
    fontWeight: "regular",
    color: "#A0AEC0"
}

const labelProps = {
    color: "black",
    fontSize: "sm",
    fontWeight: "regular"
}

export function PersonalInfoForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(personalInfoSchema),
        shouldFocusError: true,
    });

    const onSubmit = async (formData: {}) => {
        try {
            console.log("I am in onSubmit")
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction={{ base: "column", md: "row" }} gap="22px">
                <FormField errorMessage={errors.firstName?.message} hasError={!!errors.firstName} id="firstName" key="firstName">
                    <FormLabel {...labelProps}>First Name</FormLabel>
                    <Input {...register("firstName")} {...inputProps} type="text" placeholder="John" color="black" _placeholder={{ color: "#A0AEC0" }} />
                </FormField>
                <FormField errorMessage={errors.lastName?.message} hasError={!!errors.lastName} id="lastName" key="lastName">
                    <FormLabel {...labelProps}>Last Name</FormLabel>
                    <Input {...register("lastName")} {...inputProps} type="text" placeholder="Doe" color="black" _placeholder={{ color: "#A0AEC0" }} />
                </FormField>
            </Flex>
            <Flex pt="36px" direction={{ base: "column", md: "row" }} gap="22px">
                <FormField errorMessage={errors.phoneNumber?.message} hasError={!!errors.phoneNumber} id="phoneNumber" key="phoneNumber">
                    <FormLabel {...labelProps}>Phone Number</FormLabel>
                    <Input {...register("phoneNumber")} {...inputProps} type="text" placeholder="385994287967" color="black" _placeholder={{ color: "#A0AEC0" }} />
                </FormField>
                <FormField errorMessage={errors.email?.message} hasError={!!errors.email} id="email" key="email">
                    <FormLabel {...labelProps}>Email</FormLabel>
                    <Input {...register("email")} {...inputProps} type="text" placeholder="johndoe@test.com" color="black" _placeholder={{ color: "#A0AEC0" }} />
                </FormField>
            </Flex>
            <Flex pt="36px" direction={{ base: "column", md: "row" }} gap="22px">
                <FormField errorMessage={errors.city?.message} hasError={!!errors.city} id="city" key="city">
                    <FormLabel {...labelProps}>City</FormLabel>
                    <Input {...register("city")} {...inputProps} type="text" placeholder="New York" color="black" _placeholder={{ color: "#A0AEC0" }} />
                </FormField>
                <FormField errorMessage={errors.country?.message} hasError={!!errors.country} id="country" key="country">
                    <FormLabel {...labelProps}>Country</FormLabel>
                    <Input {...register("country")} {...inputProps} type="text" placeholder="USA" color="black" _placeholder={{ color: "#A0AEC0" }} />
                </FormField>
            </Flex>
            <Box pt="36px">
                <FormField errorMessage={errors.country?.message} hasError={!!errors.country} id="country" key="country">
                    <FormLabel {...labelProps}>Description</FormLabel>
                    <Textarea {...register("description")} w="100%" borderRadius="6px" border="1px solid #E2E8F0" fontSize="18px" fontWeight="normal" color="black" _placeholder={{ color: "#A0AEC0" }} />
                </FormField>
            </Box>
            <Center pt="24px">
                <Button buttonAction={() => { }} type="submit" text="Save" textColor="white" backgroundColor="blue" />
            </Center>
        </form>
    )
}

