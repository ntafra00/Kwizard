import { QuizCategory } from "@/typings";
import { Flex, Image, Text, Center } from "@chakra-ui/react";

interface Props {
    category: QuizCategory;
    isSelected: boolean;
    handleChangeSelectedCategory: (category: QuizCategory) => void;
}

export function Category({ category, isSelected, handleChangeSelectedCategory }: Props) {
    return (
        <Flex direction="column" justify="center" align="center">
            <Center borderRadius="full" border="1px solid #2E3182" w="100px" h="100px" _hover={isSelected ? {} : { background: "rgba(239, 157, 89, 0.50)", cursor: "pointer" }} background={isSelected ? "orange" : "transparent"} onClick={() => handleChangeSelectedCategory(category)}>
                <Image src={category.imageUrl} alt={category.name} />
            </Center>
            <Text color="black" fontSize="sm" fontWeight="medium" pt="8px" textAlign="center">{category.name}</Text>
        </Flex >
    )
}