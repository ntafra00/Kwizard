"use client"

import { useState, useMemo, ChangeEvent, useEffect } from "react";
import { Text, Flex, Center, Input } from "@/components/chakra";
import { COMMON_PAGE_PADDING, ITEMS_PER_PAGE } from "@/constants";
import { Button } from "@/components/commons/buttons";
import { useQuizzes } from "@/contexts";

const DEFAULT_INPUT_VALUE = "1";

export function Pagination() {

    const { filteredQuizzes, currentPage, handlePageIncrease, handlePageDecrease, handleOnBlurChange } = useQuizzes();
    const [inputValue, setInputValue] = useState(currentPage.toString());

    const numberOfPages = useMemo(() => Math.ceil(filteredQuizzes.length / ITEMS_PER_PAGE), [filteredQuizzes]);

    const onPageIncrease = () => {
        handlePageIncrease();
    }

    const onPageDecrease = () => {
        handlePageDecrease();
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
            handleOnBlurChange(+DEFAULT_INPUT_VALUE);
            return;
        }
        handleOnBlurChange(+inputValue);
    }

    useEffect(() => {
        setInputValue(currentPage.toString());
    }, [currentPage])

    if (numberOfPages > 1) {
        return (
            <Flex px={COMMON_PAGE_PADDING} justify="space-between" pb="76px" direction={{ base: "column", md: "row" }} w="100%">
                <Flex justifyContent={{ base: "center", md: "flex-end" }} alignItems="center" w={{ base: "100%", md: "50%" }} pr={{ base: "0px", md: "15px" }} pb={{ base: "15px", md: "0px" }}>
                    <Button visibility={currentPage > 1 ? "visible" : "hidden"} text="Previous Page" buttonAction={onPageDecrease} key="Left pagination button" backgroundColor="blue" backgroundColorOnClick="blueOnClick" textColor="white" />
                </Flex>
                <Flex justifyContent="space-between" alignItems="center" w={{ base: "100%", md: "50%" }} pl={{ base: "0px", md: "15px" }} direction={{ base: "column", md: "row" }} gap={{ base: "15px", md: "0px" }}>
                    <Button visibility={currentPage < numberOfPages ? "visible" : "hidden"} text="Next Page" buttonAction={onPageIncrease} key="Right pagination button" backgroundColor="blue" backgroundColorOnClick="blueOnClick" textColor="white" />
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
                                fontSize="sm"
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

    return null;
}