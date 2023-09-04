"use client"

import { Flex } from "@/components/chakra";
import { QUIZ_CATEGORIES } from "@/constants";
import { useQuizzes } from "@/contexts";
import { Category } from "./Category";

export function CategoryBar() {
    const { selectedCategory, handleChangeSelectedCategory } = useQuizzes();

    return (
        <Flex id="quizzes" py="60px" rowGap="30px" columnGap="30px" px={{ base: "none", lg: "295px" }} justify="center" flexWrap="wrap">
            {QUIZ_CATEGORIES.map((category) => {
                return (
                    <Category isSelected={category === selectedCategory} handleChangeSelectedCategory={handleChangeSelectedCategory} category={category} key={category.id} />
                )
            })}
        </Flex>
    )
}