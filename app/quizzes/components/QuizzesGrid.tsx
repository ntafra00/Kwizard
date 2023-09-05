import { SimpleGrid, Center } from "@/components/chakra";
import { QuizCard } from "./QuizCard";
import { COMMON_PAGE_PADDING, QUIZZES } from "@/constants";

export function QuizzesGrid() {
    return (
        <Center>
            <SimpleGrid columns={{ base: 1, lg: 2 }} rowGap="56px" columnGap="26px" pb={{ base: "40px", lg: "76px" }} px={COMMON_PAGE_PADDING}>
                {QUIZZES.map((quiz) => {
                    return (
                        <QuizCard quizData={quiz} key={quiz.id} />
                    )
                })}
            </SimpleGrid>
        </Center>
    )
}