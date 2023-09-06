"use client"

import { Stack, Avatar, Center, Heading, Flex, Text } from "@/components/chakra";
import { Buttons } from "./Buttons";
import { useAuth } from "@/contexts/AuthContext";

export function LeftSide() {

    const { currentUser } = useAuth();
    const memberSince = `Member since ${currentUser?.metadata?.creationTime?.split(" ")[3] ?? ''}`;
    return (
        <Stack w={{ base: "100%", lg: "35%" }} pt="20px" pb="46px" backgroundColor="white" borderRadius="8px">
            <Center pb="20px">
                <Avatar size="2xl" src="/avatar.png" border="1px solid #2E3182" />
            </Center>
            <Center>
                <Heading color="black" fontSize="l" fontWeight="semibold">{currentUser?.displayName ?? currentUser?.email}</Heading>
            </Center>
            <Center pb="28px">
                <Heading color="rgba(63, 61, 61, 0.54)" fontSize="sm" fontWeight="regular">{memberSince}</Heading>
            </Center>
            <Flex justify="space-between" align="center" px="30px" pt="25px" pb="15px" borderTop="1px solid rgba(63, 61, 61, 0.54)">
                <Text color="gray" fontSize="md" fontWeight="regular">Quizzes Created</Text>
                <Text color="black" fontSize="md" fontWeight="medium">0</Text>
            </Flex>
            <Flex justify="space-between" align="center" px="30px" pt="25px" pb="15px" borderTop="1px solid rgba(63, 61, 61, 0.54)">
                <Text color="gray" fontSize="md" fontWeight="regular">Quizzes Played</Text>
                <Text color="black" fontSize="md" fontWeight="medium">0</Text>
            </Flex>
            <Flex justify="space-between" align="center" px="30px" pt="25px" pb="15px" borderTop="1px solid rgba(63, 61, 61, 0.54)" borderBottom="1px solid rgba(63, 61, 61, 0.54)">
                <Text color="gray" fontSize="md" fontWeight="regular">Stories Posted</Text>
                <Text color="black" fontSize="md" fontWeight="medium">0</Text>
            </Flex>
            <Buttons />
        </Stack>
    )
}