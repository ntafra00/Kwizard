import { SimpleGrid } from "@chakra-ui/react";
import { QuizCard } from "./QuizCard";
import { COMMON_PAGE_PADDING, QUIZZES } from "@/constants";

export function QuizzesGrid() {
    return (
        <SimpleGrid columns={{ base: 1, lg: 2 }} rowGap="56px" columnGap="26px" pb="76px" px={COMMON_PAGE_PADDING}>
            {QUIZZES.map((quiz) => {
                return (
                    <QuizCard quizData={quiz} key={quiz.id} />
                )
            })}
        </SimpleGrid>
    )
}