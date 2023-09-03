"use client"

import { useState, ChangeEvent } from "react";
import { Text, Flex, Center, Input } from "@/components/chakra";
import { PaginationButton } from "@/components/commons/buttons";
import { LeftArrow, RightArrow } from "@/components/commons/icons";
import { COMMON_PAGE_PADDING } from "@/constants";

interface Props {
    numberOfPages: number
}

const DEFAULT_INPUT_VALUE = "1";

export function Pagination({ numberOfPages }: Props) {

    const [inputValue, setInputValue] = useState(DEFAULT_INPUT_VALUE);
    const [currentPage, setCurrentPage] = useState(+DEFAULT_INPUT_VALUE);

    const handlePageIncrease = () => {
        setCurrentPage((prevState) => prevState + 1);
        setInputValue((prevState) => `${+prevState + 1}`);
    }

    const handlePageDecrease = () => {
        setCurrentPage((prevState) => prevState - 1);
        setInputValue((prevState) => `${+prevState - 1}`);
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (newValue.length > 1) {
            setInputValue(newValue[0]);
            return;
        }
        setInputValue(newValue);
    }

    const handleInputBlur = () => {
        const toNumber = +inputValue;
        if (toNumber < 1 || toNumber > numberOfPages) {
            setInputValue(DEFAULT_INPUT_VALUE);
            setCurrentPage(+DEFAULT_INPUT_VALUE);
            return;
        }
        setCurrentPage(+inputValue);
    }

    return (
        <Flex px={COMMON_PAGE_PADDING} justify="space-between" pb="76px" direction={{ base: "column", md: "row" }} w="100%">
            <Flex justifyContent={{ base: "center", md: "flex-end" }} alignItems="center" w={{ base: "100%", md: "50%" }} pr={{ base: "0px", md: "15px" }} pb={{ base: "15px", md: "0px" }}>
                <PaginationButton isButtonVisible={currentPage > 1} icon={<LeftArrow />} iconPosition="left" text="Previous Page" buttonAction={handlePageDecrease} key="Left pagination button" />
            </Flex>
            <Flex justifyContent="space-between" alignItems="center" w={{ base: "100%", md: "50%" }} pl={{ base: "0px", md: "15px" }} direction={{ base: "column", md: "row" }} gap={{ base: "15px", md: "0px" }}>
                <PaginationButton isButtonVisible={currentPage < numberOfPages} icon={<RightArrow />} iconPosition="right" text="Next Page" buttonAction={handlePageIncrease} key="Right pagination button" />
                <Center gap="5px">
                    <Center w="45px" h="35px" borderRadius="2px" border="1px solid #E2E8F0" backgroundColor="white">
                        <Input
                            flex="1"
                            type="number"
                            value={inputValue}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            border="none"
                            borderRadius="none"
                            fontSize="12px"
                            fontWeight="regular"
                            _focus={{ outline: "none" }}
                        />
                    </Center>
                    <Text color="black" fontSize="md" fontWeight="medium">of {numberOfPages}</Text>
                </Center>
            </Flex >
        </Flex >
    )
}