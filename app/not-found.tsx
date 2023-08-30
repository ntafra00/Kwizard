"use client"

import { Flex, Heading, Text, Stack, Box } from "@chakra-ui/react";
import { COMMON_PAGE_PADDING } from "@/constants";
import Link from "next/link";

export default function NotFound() {
    return (
        <Flex px={COMMON_PAGE_PADDING} py="80px" direction={{ base: "column", lg: "row" }}>
            <Stack gap="95px" w="50%" pt="60px">
                <Text color="smoke" fontSize="md" fontWeight="semibold" textAlign="start">Oh-oh, I guess that 404 wasn't the right path to choose.</Text>
                <Heading color="black" fontSize="xl" fontWeight="semibold" textAlign="start">Unfortunately, no magic spells can help you now, but you could try teleporting to our <Link color="blue" href="/">front page</Link>.</Heading>
            </Stack>
            <Box >
            </Box>
        </Flex >
    )
}