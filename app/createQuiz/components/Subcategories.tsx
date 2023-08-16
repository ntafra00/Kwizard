import { Flex, Center } from "@chakra-ui/react";
import { Subcategory } from "./Subcategory";

interface Props {
    subcategories: string[],
    selectedSubcategory: string | undefined;
    handleChangeSelectedSubcategory: (subcategory: string) => void;
}

export function Subcategories({ subcategories, selectedSubcategory, handleChangeSelectedSubcategory }: Props) {
    return (
        <Center>
            <Flex wrap="wrap" gap="17px" w="60%" justify="center">
                {subcategories.map((subcategory) => {
                    return (<Subcategory name={subcategory} handleChangeSelectedSubcategory={handleChangeSelectedSubcategory} isSelected={selectedSubcategory === subcategory} />)
                })}
            </Flex>
        </Center>
    )
}