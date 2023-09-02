import WhiteLayout from "@/layouts/WhiteLayout";
import { Box, Flex, Center, Image, Heading, Text } from "@/components/chakra";
import { CategoryBar, QuizzesGrid, Pagination } from "./components";
import { COMMON_PAGE_PADDING } from "@/constants";
import { QuizzesProvider } from "@/contexts";
import { StoriesAndQuizCTA } from "./components";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Qwizard | Quizzes",
}

export default function Quizzes() {
    return (
        <QuizzesProvider>
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
                <StoriesAndQuizCTA />
            </WhiteLayout>
            <Box pt="56px">
                <Center>
                    <Heading color="black" fontSize="l" fontWeight="semibold">Neki tekst</Heading>
                </Center>
                <Center>
                    <Heading color="black" fontSize="l" fontWeight="semibold">u dva reda</Heading>
                </Center>
                <CategoryBar />
                <QuizzesGrid />
                <Pagination numberOfPages={5} />
            </Box>
        </QuizzesProvider>
    )
}