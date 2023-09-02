"use client"

import { Flex } from "@/components/chakra";
import { Button } from "@/components/commons/buttons";
import { QUIZ_CATEGORIES } from "@/constants";
import { useQuizzes } from "@/contexts";

export function CategoryBar() {
    const { selectedCategory, handleChangeSelectedCategory } = useQuizzes();

    return (
        <Flex id="quizzes" py="60px" rowGap="30px" columnGap="30px" px={{ base: "none", lg: "295px" }} justify="center" flexWrap="wrap">
            {QUIZ_CATEGORIES.map((category) => {
                return (
                    <Button buttonAction={() => handleChangeSelectedCategory(category)} text={category.name} textColor={selectedCategory === category ? "white" : "black"} backgroundColor={selectedCategory?.id === category.id ? "blue" : undefined} key={category.id} />
                )
            })}
        </Flex>
    )
}