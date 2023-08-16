import { useState } from "react";

import { Text, Flex, HStack, NumberInput, NumberInputField, Center, Box } from "@chakra-ui/react";

import { PaginationButton } from "@/components/commons/buttons";
import { LeftArrow, RightArrow } from "@/components/commons/icons";
import { COMMON_PAGE_PADDING } from "@/constants";

interface Props {
    numberOfPages: number
}

export function Pagination({ numberOfPages }: Props) {

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageIncrease = () => {
        setCurrentPage((prevState) => prevState + 1);
    }

    const handlePageDecrease = () => {
        setCurrentPage((prevState) => prevState - 1);
    }

    const handleInputChange = (newPage: string) => {
        if (!newPage) {
            return;
        }
        if (+newPage < 0 || +newPage > numberOfPages) {
            return;
        }
        setCurrentPage(+newPage);
    }

    return (
        <Flex px={COMMON_PAGE_PADDING} justify="flex-end" pb="76px">
            <HStack pr="200px" spacing="30px">
                <PaginationButton isButtonVisible={currentPage > 1} icon={<LeftArrow />} iconPosition="left" text="Previous Page" buttonAction={handlePageDecrease} key="Left pagination button" />
                <PaginationButton isButtonVisible={currentPage < +numberOfPages} icon={<RightArrow />} iconPosition="right" text="Next Page" buttonAction={handlePageIncrease} key="Right pagination button" />
            </HStack>
            <HStack>
                {/* <NumberInput step={1} defaultValue={1} min={1} max={numberOfPages} onChange={(step) => handleInputChange(step)} backgroundColor="white" borderColor="transparent" w="45px" h="35px">
                    <Center>
                        <NumberInputField fontSize="xs" />
                    </Center>
                </NumberInput> */}
                <Center background="white" borderColor="transparent" contentEditable={true} w="45px" h="35px" fontSize="xs" _selected={{ borderColor: "transparent" }}>{currentPage}</Center>
                <Text>of {numberOfPages}</Text>
            </HStack>
        </Flex >
    )
}