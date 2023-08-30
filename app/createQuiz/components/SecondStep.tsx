import { QuizSection, Question } from "./index"

export function SecondStep() {
    return (
        <>
            <QuizSection imageDescription="Number six" imageUrl="numberSix.png" title="Do Your Magic!" isLast={true}>
                <Question />
            </QuizSection>
        </>
    )
}