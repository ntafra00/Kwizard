"use client"

import { Box, Center, Heading, Flex } from "@/components/chakra";
import { QuizInfo } from "./QuizInfo";
import { COMMON_PAGE_PADDING } from "@/constants";
import { useRouter } from "next/navigation";

export function StoriesAndQuizCTA() {

    const router = useRouter();

    const handleRedirectToStories = () => {
        router.push("/stories");
    }

    const handleScrollToQuizzes = () => {
        document.getElementById("quizzes")?.scrollIntoView();
    }

    const handleRedirectToQuizCreation = () => {
        router.push("/quizzes/createQuiz")
    }
    return (
        <Box pt="16px" px={COMMON_PAGE_PADDING} pb="68px">
            <Center pb="56px">
                <Heading color="black" fontSize={{ base: "md", lg: "l" }} fontWeight="semibold" textAlign="center">Choose visely - each path offers something important of value!</Heading>
            </Center>
            <Flex direction={{ base: "column", lg: "row" }} justifyContent="space-between">
                <QuizInfo text="Check out other quizzes" handleOnClick={handleScrollToQuizzes} imageDescription="Spells book" imageUrl="/spellsBook.png" />
                <QuizInfo text="Get inspired by our stories" handleOnClick={handleRedirectToStories} imageDescription="Broken glasses" imageUrl="/brokenGlasses.png" />
                <QuizInfo text="Make your own quiz" handleOnClick={handleRedirectToQuizCreation} imageDescription="Potion" imageUrl="/potion.png" />
            </Flex>
        </Box>
    )
}