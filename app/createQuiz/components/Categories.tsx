import { Flex } from "@chakra-ui/react";
import { QUIZ_CATEGORIES } from "@/constants";
import { Category } from "./Category";
import { QuizCategory } from "@/typings";

interface Props {
    selectedCategory: QuizCategory | undefined;
    handleChangeSelectedCategory: (category: QuizCategory) => void;
}

export function Categories({ selectedCategory, handleChangeSelectedCategory }: Props) {
    return (
        <Flex gap="64px" justify="center" wrap="wrap">
            {QUIZ_CATEGORIES.map((quizCategory) => {
                return (
                    <Category category={quizCategory} isSelected={selectedCategory?.name === quizCategory.name ? true : false} handleChangeSelectedCategory={handleChangeSelectedCategory} />
                )
            })}
        </Flex>
    )
}