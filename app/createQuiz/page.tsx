import { Box } from "@/components/chakra";
import { ProgressBar, Steps, Buttons } from "./components";
import { QuizCreationProvider } from "@/contexts";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Qwizard | Create quiz",
    description: "Suit quizzes to match your needs",
}

export default function CreateQuiz() {
    return (
        <Box px={{ base: "32px", md: "258px" }} pt="40px">
            <QuizCreationProvider>
                <ProgressBar />
                <Steps />
                <Buttons />
            </QuizCreationProvider>
        </Box>
    )
}