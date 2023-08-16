import { Box, Center } from "@chakra-ui/react";

interface Props {
    name: string;
    isSelected: boolean;
    handleChangeSelectedSubcategory: (subcategory: string) => void
}

export function Subcategory({ name, isSelected, handleChangeSelectedSubcategory }: Props) {
    return (
        <Box borderRadius="50px" border="1px solid #000" py="8px" px="16px" _hover={isSelected ? {} : { background: "rgba(239, 157, 89, 0.50)", cursor: "pointer" }} background={isSelected ? "orange" : "transparent"} onClick={() => handleChangeSelectedSubcategory(name)}>
            <Center color="">{name}</Center>
        </Box>
    )
}