import { Center, Flex } from "@chakra-ui/react";

import { Button } from "@/components/commons/buttons";

const CATEGORIES: string[] = [
    "History",
    "Geography",
    "Sport",
    "Film and literature",
    "Biology"
]

interface Props {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

export function CategoryBar({ selectedCategory, setSelectedCategory }: Props) {

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    }

    return (
        <Flex id="quizzes" py="60px" justify="space-around" flexWrap="wrap" rowGap="10px" columnGap="30x" px={{ base: "none", lg: "295px" }}>
            {CATEGORIES.map((category) => {
                return (
                    <Button buttonAction={() => handleCategoryChange(category)} text={category} textColor={selectedCategory === category ? "white" : "black"} backgroundColor={selectedCategory === category ? "blue" : undefined} />
                )
            })}
        </Flex>
    )
}