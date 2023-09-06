"use client"

import { QuizData } from "@/typings"
import { Flex, Text, Heading, HStack, Stack, useMediaQuery } from "@/components/chakra"
import Image from "next/image"
import { useRouter } from "next/navigation";

interface Props {
    quizData: QuizData
}

export function QuizCard({ quizData: { id, author, category, imageUrl, subtitle, title, imageDescription = "Quiz card" } }: Props) {
    const [isSmallerThanMediumScreen] = useMediaQuery('(max-width: 768px)');
    const quizAuthor = `${author.split(" ")[0][0]}. ${author.split(" ")[1]}`

    const router = useRouter();

    const handleRedirectToQuiz = () => {
        router.push(`/quizzes/${id}`)
    }

    return (
        <Flex borderRadius="20px" backgroundColor="white" px="24px" py="24px" maxH="300px" maxW="600px">
            <Flex direction="column" justify="space-between" w="100%">
                <Stack spacing="16px">
                    <Heading color="black" fontSize={{ base: "md", md: "l", lg: "l", xl: "xl" }} fontWeight="bold">{title}</Heading>
                </Stack>
                <HStack spacing="25px" w="100%">
                    <Text color="black" fontSize="sm" fontWeight="medium">{category}</Text>
                    <Text color="black" fontSize="sm" fontWeight="medium">{quizAuthor}</Text>
                </HStack>
            </Flex>
            <Flex justify="flex-end">
                <Image src={imageUrl} alt={imageDescription} width={isSmallerThanMediumScreen ? 300 : 400} height={isSmallerThanMediumScreen ? 300 : 400} />
            </Flex>
        </Flex>
    )
}