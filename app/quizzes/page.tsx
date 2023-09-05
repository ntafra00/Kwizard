import WhiteLayout from "@/layouts/WhiteLayout";
import { Box, Flex, Center, Heading, Text } from "@/components/chakra";
import { CategoryBar, QuizzesGrid, Pagination, QuizzesHeading } from "./components";
import { COMMON_PAGE_PADDING } from "@/constants";
import { QuizzesProvider } from "@/contexts";
import { StoriesAndQuizCTA } from "./components";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Qwizard | Quizzes",
    description: "Safe place for all the quizzes"
}

export default function Quizzes() {
    return (
        <QuizzesProvider>
            <QuizzesHeading />
            <WhiteLayout>
                <StoriesAndQuizCTA />
            </WhiteLayout>
            <Box pt="56px">
                <Center>
                    <Heading color="black" fontSize={{ base: "md", lg: "l" }} fontWeight="semibold" textAlign="center">Looking for something in particular? </Heading>
                </Center>
                <Center>
                    <Heading color="black" fontSize={{ base: "md", lg: "l" }} fontWeight="semibold" textAlign="center">Choose one of the categories listed below!</Heading>
                </Center>
                <CategoryBar />
                <QuizzesGrid />
                <Pagination numberOfPages={5} />
            </Box>
        </QuizzesProvider>
    )
}