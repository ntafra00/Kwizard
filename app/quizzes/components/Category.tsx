import { Box, Center } from "@/components/chakra";
import { QuizCategory } from "@/typings";

interface Props {
    category: QuizCategory;
    isSelected: boolean;
    handleChangeSelectedCategory: (category: QuizCategory) => void;
}

export function Category({ category, isSelected, handleChangeSelectedCategory }: Props) {
    return (
        <Box fontSize={{ base: "sm", lg: "md" }} fontWeight="regular" borderRadius="50px" border="1px solid #000" py="8px" px="16px" _hover={isSelected ? { cursor: "pointer" } : { background: "#42458E", cursor: "pointer" }} background={isSelected ? "#2E3182" : "transparent"} onClick={() => handleChangeSelectedCategory(category)} textColor={isSelected ? "white" : "black"}>
            <Center color="">{category.name}</Center>
        </Box>
    )
}