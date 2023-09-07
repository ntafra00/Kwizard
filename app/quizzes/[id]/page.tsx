import { Flex, Heading, Link, Text, Center, Stack, Box } from "@/components/chakra";
import { ChevronLeftIcon } from "@/components/chakra-icons";
import { COMMON_PAGE_PADDING, QUIZZES } from "@/constants";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { QuizSubtitle, QuizImage } from "./components";

export const metadata: Metadata = {
    title: "Qwizard | Selected Quiz",
    description: "All the additional info about quiz you selected",
}

export default function SelectedQuiz({
    params,
}: {
    params: { id: string }
}) {
    const { id } = params;
    const foundQuiz = QUIZZES.find((post) => post.id === id);


    const getPlayerCount = () => {
        return Math.round((Math.random() * (50 - 10) + 10))
    }

    const getAverageScore = () => {
        return `${Math.round((Math.random() * (90 - 50) + 50))}%`
    }

    const getPerfectScores = () => {
        return Math.round((Math.random() * (8 - 2) + 2));
    }

    if (!foundQuiz) {
        return notFound();
    }
    return (
        <>
            <Flex px={COMMON_PAGE_PADDING} pt="36px" direction="column">
                <Flex>
                    <Link textColor="black" fontWeight="medium" fontSize="20px" href="/quizzes"><ChevronLeftIcon /> Back to all Quizzes</Link>
                </Flex>
                <Flex backgroundColor="white" mt="24px" py="10px" px="20px" w="100%" borderRadius="8px" border="1px solid rgba(63, 61, 61, 0.25)" direction={{ base: "column", lg: "row" }}>
                    <Flex alignItems="center" justifyContent="flex-start" textAlign="left" w={{ base: "100%", lg: "70%" }}>
                        <Stack gap="12px">
                            <Text textTransform="uppercase" color="blue" fontSize="sm" fontWeight="bold">{foundQuiz.category}</Text>
                            <Heading color="black" fontSize={{ base: "l", md: "xl", lg: "xxl" }} fontWeight="bold">{foundQuiz.title}</Heading>
                            <Flex>
                                <Text color="gray" fontSize="sm" fontWeight="medium" textAlign="left">by <Text color="blue" fontWeight="bold" display="inline">{foundQuiz.author}</Text></Text>
                            </Flex>
                            <Text color="smoke" fontSize="sm" fontWeight="medium">{foundQuiz.date}</Text>
                        </Stack>
                    </Flex>
                    <QuizImage imageDescription={foundQuiz.imageDescription ?? "Quiz image"} imageUrl={foundQuiz.imageUrl} />
                </Flex>
                <Flex pt="24px" gap="24px" pb="80px" direction={{ base: "column", lg: "row" }}>
                    <Flex backgroundColor="white" borderRadius="8px" border="1px solid rgba(63, 61, 61, 0.25)" direction="column" w={{ base: "100%", lg: "30%" }}>
                        <Flex alignItems="center" justifyContent="space-between" borderBottom="1px solid rgba(63, 61, 61, 0.25)" p="28px 36px 36px 26px">
                            <Text color="gray" fontSize="20px" fontWeight="regular">Players</Text>
                            <Text color="black" fontSize="md" fontWeight="medium">{getPlayerCount()}</Text>
                        </Flex>
                        <Flex alignItems="center" justifyContent="space-between" borderBottom="1px solid rgba(63, 61, 61, 0.25)" p="28px 36px 36px 26px">
                            <Text color="gray" fontSize="20px" fontWeight="regular">Average Score</Text>
                            <Text color="black" fontSize="md" fontWeight="medium">{getAverageScore()}</Text>
                        </Flex>
                        <Flex alignItems="center" justifyContent="space-between" p="28px 36px 36px 26px">
                            <Text color="gray" fontSize="20px" fontWeight="regular">Perfect Scores</Text>
                            <Text color="black" fontSize="md" fontWeight="medium">{getPerfectScores()}</Text>
                        </Flex>
                    </Flex>
                    <QuizSubtitle subtitle={foundQuiz.subtitle} />
                </Flex>
            </Flex>
        </>
    )
}