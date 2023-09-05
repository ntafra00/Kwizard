import { QuizCategory } from "@/typings";
import { Flex, Text, Center } from "@/components/chakra";
import Image from "next/image";

interface Props {
    category: QuizCategory;
    isSelected: boolean;
    handleChangeSelectedCategory: (category: QuizCategory) => void;
}

export function Category({ category, isSelected, handleChangeSelectedCategory }: Props) {
    return (
        <Flex direction="column" justify="center" align="center">
            <Center borderRadius="full" border="1px solid #2E3182" w="100px" h="100px" _hover={isSelected ? {} : { background: "rgba(239, 157, 89, 0.50)", cursor: "pointer" }} background={isSelected ? "orange" : "transparent"} onClick={() => handleChangeSelectedCategory(category)}>
                <Image src={category.imageUrl} alt={category.name} width={64} height={64} />
            </Center>
            <Text color="black" fontSize="sm" fontWeight="medium" pt="8px" textAlign="center">{category.name}</Text>
        </Flex >
    )
}