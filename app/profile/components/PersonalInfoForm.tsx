"use client"

import { Flex, Input, FormLabel, Textarea, Box, Center, useToast } from "@/components/chakra"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { personalInfoSchema } from "@/constants/schemas";
import { FormField } from "@/components/commons/forms";
import { Button } from "@/components/commons/buttons";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { updateUserData, getUserData } from "@/firebase/firestore/firestore";
import { PersonalInfo } from "@/typings";

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

    const toast = useToast();
    const { currentUser } = useAuth();
    const [userData, setUserData] = useState<PersonalInfo>(
        {
            firstName: "",
            lastName: "",
            city: "",
            country: "",
            description: "",
            email: currentUser?.email ?? "",
            phoneNumber: "",
        }
    )

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
        const data: PersonalInfo = {
            firstName: (formData as PersonalInfo).firstName || userData.firstName,
            lastName: (formData as PersonalInfo).lastName || userData.lastName,
            city: (formData as PersonalInfo).city || userData.city,
            country: (formData as PersonalInfo).country || userData.country,
            description: (formData as PersonalInfo).description || userData.description,
            email: (formData as PersonalInfo).email || userData.email,
            phoneNumber: (formData as PersonalInfo).phoneNumber || userData.phoneNumber,
        };
        const { result, error } = await updateUserData(currentUser?.uid ?? '', data);
        if (result) {
            toast({
                position: "bottom-left",
                title: "Account updated",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
        }
        if (error) {
            toast({
                position: "bottom-left",
                title: "Error while saving data",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        }
    };

    useEffect(() => {
        const getUserDetails = async () => {
            const { result, error } = await getUserData(currentUser?.uid ?? '');
            if (!error) {
                setUserData(result as PersonalInfo);
            }
        }
        getUserDetails();
    }, [currentUser])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction={{ base: "column", md: "row" }} gap="22px" pt="30px">
                <FormField errorMessage={errors.firstName?.message} hasError={!!errors.firstName} id="firstName" key="firstName">
                    <FormLabel {...labelProps}>First Name</FormLabel>
                    <Input {...register("firstName")} {...inputProps} type="text" placeholder="John" color="black" _placeholder={{ color: "#A0AEC0" }} defaultValue={userData.firstName} />
                </FormField>
                <FormField errorMessage={errors.lastName?.message} hasError={!!errors.lastName} id="lastName" key="lastName">
                    <FormLabel {...labelProps}>Last Name</FormLabel>
                    <Input {...register("lastName")} {...inputProps} type="text" placeholder="Doe" color="black" _placeholder={{ color: "#A0AEC0" }} defaultValue={userData.lastName} />
                </FormField>
            </Flex>
            <Flex pt="36px" direction={{ base: "column", md: "row" }} gap="22px">
                <FormField errorMessage={errors.phoneNumber?.message} hasError={!!errors.phoneNumber} id="phoneNumber" key="phoneNumber">
                    <FormLabel {...labelProps}>Phone Number</FormLabel>
                    <Input {...register("phoneNumber")} {...inputProps} type="text" placeholder="385994287967" color="black" _placeholder={{ color: "#A0AEC0" }} defaultValue={userData.phoneNumber} />
                </FormField>
                <FormField errorMessage={errors.email?.message} hasError={!!errors.email} id="email" key="email">
                    <FormLabel {...labelProps}>Email</FormLabel>
                    <Input {...register("email")} {...inputProps} type="text" placeholder="johndoe@test.com" color="black" _placeholder={{ color: "#A0AEC0" }} defaultValue={userData.email} />
                </FormField>
            </Flex>
            <Flex pt="36px" direction={{ base: "column", md: "row" }} gap="22px">
                <FormField errorMessage={errors.city?.message} hasError={!!errors.city} id="city" key="city">
                    <FormLabel {...labelProps}>City</FormLabel>
                    <Input {...register("city")} {...inputProps} type="text" placeholder="New York" color="black" _placeholder={{ color: "#A0AEC0" }} defaultValue={userData.city} />
                </FormField>
                <FormField errorMessage={errors.country?.message} hasError={!!errors.country} id="country" key="country">
                    <FormLabel {...labelProps}>Country</FormLabel>
                    <Input {...register("country")} {...inputProps} type="text" placeholder="USA" color="black" _placeholder={{ color: "#A0AEC0" }} defaultValue={userData.country} />
                </FormField>
            </Flex>
            <Box pt="36px">
                <FormField errorMessage={errors.country?.message} hasError={!!errors.country} id="description" key="description">
                    <FormLabel {...labelProps}>Description</FormLabel>
                    <Textarea {...register("description")} w="100%" h="150px" borderRadius="6px" border="1px solid #E2E8F0" fontSize="16px" fontWeight="normal" color="black" _placeholder={{ color: "#A0AEC0" }} defaultValue={userData.description} />
                </FormField>
            </Box>
            <Center pt="24px" pb={{ base: "24px", lg: "0px" }}>
                <Button backgroundColorOnClick="blueOnClick" text="Save" textColor="white" backgroundColor="blue" type="submit" buttonAction={() => { }} leftIcon={<Image src="/saveIcon.png" alt="Save icon" width={16} height={16} />} />
            </Center>
        </form>
    )
}

