import { QuizData } from "@/typings"
import { Flex, Text, Heading, Image, HStack, Stack } from "@chakra-ui/react"

interface Props {
    quizData: QuizData
}

export function QuizCard({ quizData: { author, category, imageUrl, subtitle, title, imageDescription = "Quiz card" } }: Props) {
    return (
        <Flex borderRadius="20px" backgroundColor="white" px="24px" py="24px" maxH="300px">
            <Flex direction="column" justify="space-between" w="50%">
                <Stack spacing="16px">
                    <Heading color="black" fontSize={{ base: "l", lg: "xxl" }} fontWeight="bold">{title}</Heading>
                    <Heading color="black" fontSize={{ base: "sm", md: "md" }} fontWeight="medium">{subtitle}</Heading>
                </Stack>
                <HStack spacing="10px">
                    <Text color="black" fontSize={{ base: "xs", lg: "sm" }} fontWeight="medium">{category}</Text>
                    <Text color="black" fontSize={{ base: "xs", lg: "sm" }} fontWeight="medium">{author}</Text>
                </HStack>
            </Flex>
            <Flex w="50%" justify="flex-end">
                <Image src={imageUrl} alt={imageDescription} />
            </Flex>
        </Flex>
    )
}