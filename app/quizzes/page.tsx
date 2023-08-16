"use client"
import WhiteLayout from "@/layouts/WhiteLayout";
import { Box, Flex, Center, Image, Heading, Text } from "@chakra-ui/react";
import { QuizInfo, CategoryBar, QuizzesGrid, Pagination } from "./components";
import { useRouter } from "next/navigation";
import { COMMON_PAGE_PADDING } from "@/constants";
import { useState } from "react";

export default function Quizzes() {

    const [selectedCategory, setSelectedCategory] = useState("Sport");

    const router = useRouter()

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
        <>
            <Flex pb={{ base: "20px", lg: "72px" }} px={COMMON_PAGE_PADDING} pt={{ base: "30px", lg: "64px" }} direction={{ base: "column", lg: "row" }}>
                <Flex w={{ base: "100%", lg: "50%" }} justify={{ base: "center", lg: "flex-start" }}>
                    <Image src="owl.png" alt="Owl" />
                </Flex>
                <Flex direction="column" w={{ base: "100%", lg: "50%" }} justify="center" alignItems={{ base: "none", lg: "flex-start" }} pt={{ base: "20px", lg: "none" }}>
                    <Box>
                        <Heading color="black" fontSize={{ base: "l", lg: "xxxl" }} fontWeight="bold" textAlign={{ base: "center", lg: "left" }}>Embark on a magical journey!</Heading>
                        <Text color="gray" fontSize={{ base: "md", lg: "l" }} fontWeight="regular" textAlign={{ base: "center", lg: "left" }}>Sharpen your quills and let the quest for knowledge begin!</Text>
                    </Box>
                </Flex>
            </Flex>
            <WhiteLayout>
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
            </WhiteLayout>
            <Box pt="56px">
                <Center>
                    <Heading color="black" fontSize="l" fontWeight="semibold">Neki tekst</Heading>
                </Center>
                <Center>
                    <Heading color="black" fontSize="l" fontWeight="semibold">u dva reda</Heading>
                </Center>
                <CategoryBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <QuizzesGrid />
                <Pagination numberOfPages={5} />
            </Box>
        </>
    )
}