import { Flex, Heading } from "@/components/chakra";
import { AuthorizedRoute } from "@/components/auth";
import { PersonalInfoForm, LeftSide } from "./components";
import { COMMON_PAGE_PADDING } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Qwizard | Profile',
    description: "Qwizard's profile page"
}

export default function Profile() {
    return (
        <AuthorizedRoute>
            <Flex direction={{ base: 'column', lg: 'row' }} px={COMMON_PAGE_PADDING} pt={{ base: "20px" }} pb="80px" gap="24px" minH="100vh">
                <LeftSide />
                <Flex w={{ base: "100%", lg: "65%" }} backgroundColor="white" borderRadius="8px" px="32px" pt="16px" direction="column" gap="50px">
                    <Heading color="black" fontSize="md" fontWeight="semibold" >Profile Settings</Heading>
                    <PersonalInfoForm />
                </Flex>
            </Flex>
        </AuthorizedRoute>
    )
}