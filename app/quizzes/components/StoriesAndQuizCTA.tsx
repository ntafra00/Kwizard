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
        router.push("/createQuiz")
    }
    return (
        <Box pt="16px" px={COMMON_PAGE_PADDING} pb="68px">
            <Center pb="56px">
                <Heading color="black" fontSize="l" fontWeight="semibold">Neki tekst</Heading>
            </Center>
            <Flex direction={{ base: "column", lg: "row" }} justifyContent="space-between">
                <QuizInfo buttonText="Check out other quizzes" buttonAction={handleScrollToQuizzes} imageDescription="Spells book" imageUrl="spellsBook.png" />
                <QuizInfo buttonText="Get inspired by our stories" buttonAction={handleRedirectToStories} imageDescription="Broken glasses" imageUrl="brokenGlasses.png" />
                <QuizInfo buttonText="Make your own quiz" buttonAction={handleRedirectToQuizCreation} imageDescription="Potion" imageUrl="potion.png" />
            </Flex>
        </Box>
    )
}