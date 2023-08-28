"use client"

import { Flex, Center, Avatar, AvatarBadge, Heading, Stack, Image, Text, FormLabel, Input } from "@chakra-ui/react";
import { COMMON_PAGE_PADDING } from "@/constants";
import { AuthorizedRoute } from "@/components/auth";
import { PersonalInfoForm } from "./components";

export default function Profile() {
    return (
        <AuthorizedRoute>
            <Flex direction={{ base: 'column', lg: 'row' }} px={COMMON_PAGE_PADDING} pt={{ base: "20px" }} pb="80px" gap="24px">
                <Stack w={{ base: "100%", lg: "35%" }} pt="20px" pb="46px" backgroundColor="white" borderRadius="8px">
                    <Center pb="20px">
                        <Avatar size="2xl" src="CTO.png" border="1px solid #2E3182">
                            <AvatarBadge w="40px" h="40px" bg='blue' borderColor="blue" _hover={{ cursor: "pointer" }}>
                                <Image src="camera.png" alt="Camera" />
                            </AvatarBadge>
                        </Avatar>
                    </Center>
                    <Center>
                        <Heading color="black" fontSize="l" fontWeight="semibold">Nikola Tafra</Heading>
                    </Center>
                    <Center pb="28px">
                        <Heading color="rgba(63, 61, 61, 0.54)" fontSize="sm" fontWeight="regular">CTO of Qwizard</Heading>
                    </Center>
                    <Flex justify="space-between" align="center" px="30px" pt="25px" pb="15px" borderTop="1px solid rgba(63, 61, 61, 0.54)">
                        <Text color="gray" fontSize="md" fontWeight="regular">Quizzes Created</Text>
                        <Text color="black" fontSize="md" fontWeight="medium">7</Text>
                    </Flex>
                    <Flex justify="space-between" align="center" px="30px" pt="25px" pb="15px" borderTop="1px solid rgba(63, 61, 61, 0.54)">
                        <Text color="gray" fontSize="md" fontWeight="regular">Quizzes Played</Text>
                        <Text color="black" fontSize="md" fontWeight="medium">10</Text>
                    </Flex>
                    <Flex justify="space-between" align="center" px="30px" pt="25px" pb="15px" borderTop="1px solid rgba(63, 61, 61, 0.54)" borderBottom="1px solid rgba(63, 61, 61, 0.54)">
                        <Text color="gray" fontSize="md" fontWeight="regular">Stories Posted</Text>
                        <Text color="black" fontSize="md" fontWeight="medium">7</Text>
                    </Flex>
                </Stack>
                <Flex w={{ base: "100%", lg: "65%" }} backgroundColor="white" borderRadius="8px" p="32px" direction="column" gap="50px">
                    <Heading color="black" fontSize="md" fontWeight="semibold" >Profile Settings</Heading>
                    <PersonalInfoForm />
                </Flex>
            </Flex>
        </AuthorizedRoute>
    )
}