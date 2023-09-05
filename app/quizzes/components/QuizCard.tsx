"use client"

import { QuizData } from "@/typings"
import { Flex, Text, Heading, HStack, Stack, useMediaQuery } from "@/components/chakra"
import Image from "next/image"

interface Props {
    quizData: QuizData
}

export function QuizCard({ quizData: { author, category, imageUrl, subtitle, title, imageDescription = "Quiz card" } }: Props) {
    const [isSmallerThanMediumScreen] = useMediaQuery('(max-width: 768px)');
    return (
        <Flex borderRadius="20px" backgroundColor="white" px="24px" py="24px" maxH="300px" maxW="600px">
            <Flex direction="column" justify="space-between" w="100%">
                <Stack spacing="16px">
                    <Heading color="black" fontSize={{ base: "md", md: "xl", lg: "xl", xl: "xxl" }} fontWeight="bold">{title}</Heading>
                    <Heading color="black" fontSize={{ base: "sm", md: "md" }} fontWeight="medium">{subtitle}</Heading>
                </Stack>
                <HStack spacing="10px">
                    <Text color="black" fontSize={{ base: "xs", lg: "sm" }} fontWeight="medium">{category}</Text>
                    <Text color="black" fontSize={{ base: "xs", lg: "sm" }} fontWeight="medium">{author}</Text>
                </HStack>
            </Flex>
            <Flex justify="flex-end">
                <Image src={imageUrl} alt={imageDescription} width={isSmallerThanMediumScreen ? 300 : 400} height={isSmallerThanMediumScreen ? 300 : 400} />
            </Flex>
        </Flex>
    )
}