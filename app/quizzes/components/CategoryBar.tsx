import { Flex } from "@chakra-ui/react";
import { Button } from "@/components/commons/buttons";
import { QuizCategory } from "@/typings";
import { QUIZ_CATEGORIES } from "@/constants";


interface Props {
    selectedCategory: QuizCategory;
    setSelectedCategory: (selectedCategory: QuizCategory) => void;
}

export function CategoryBar({ selectedCategory, setSelectedCategory }: Props) {

    const handleCategoryChange = (newCategory: QuizCategory) => {
        setSelectedCategory(newCategory);
    }

    return (
        <Flex id="quizzes" py="60px" rowGap="30px" columnGap="30px" px={{ base: "none", lg: "295px" }} justify="center" flexWrap="wrap">
            {QUIZ_CATEGORIES.map((category) => {
                return (
                    <Button buttonAction={() => handleCategoryChange(category)} text={category.name} textColor={selectedCategory === category ? "white" : "black"} backgroundColor={selectedCategory.id === category.id ? "blue" : undefined} key={category.id} />
                )
            })}
        </Flex>
    )
}