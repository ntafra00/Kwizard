"use client"

import { SimpleGrid, Center } from "@/components/chakra";
import { QuizCard } from "./QuizCard";
import { COMMON_PAGE_PADDING, ITEMS_PER_PAGE } from "@/constants";
import { useQuizzes } from "@/contexts";

export function QuizzesGrid() {
    const { filteredQuizzes, currentPage } = useQuizzes();
    console.log(filteredQuizzes);
    const lastIndex = currentPage * ITEMS_PER_PAGE;
    const firstIndex = lastIndex - ITEMS_PER_PAGE;
    return (
        <Center>
            <SimpleGrid columns={{ base: 1, lg: 2 }} rowGap="56px" columnGap="26px" pb={{ base: "40px", lg: "76px" }} px={COMMON_PAGE_PADDING}>
                {filteredQuizzes.slice(firstIndex, lastIndex).map((quiz) => {
                    return (
                        <QuizCard quizData={quiz} key={quiz.id} />
                    )
                })}
            </SimpleGrid >
        </Center >
    )
}