"use client"

import { Flex, Box, Center } from "@chakra-ui/react";

interface Props {
    currentStep: number
}

const STEPS: string[] = [
    "General Info",
    "Quiz Questions",
    "Settings"
]

export function ProgressBar({ currentStep }: Props) {
    return (
        <Flex align="center" pb="78px" direction={{ base: "column", lg: "row" }} id="progressBar">
            {STEPS.map((step, index) => {
                if (index !== 2) {
                    return (
                        <>
                            <Box w={{ base: "80%", lg: "25%" }} background={currentStep === index ? "blue" : "white"} borderRadius="50px" border="1px solid #2E3182" py="13px" px="50px">
                                <Center fontSize="sm" fontWeight="medium" color={currentStep === index ? "white" : "black"}>{`${index + 1}. ${step}`}</Center>
                            </Box>
                            <Box h="1px" background="blue" w="12%" />
                        </>
                    )
                }
                return (
                    <Box w={{ base: "80%", lg: "25%" }} background={currentStep === index ? "blue" : "white"} borderRadius="50px" border="1px solid #2E3182" py="13px" px="50px">
                        <Center fontSize="sm" fontWeight="medium" color={currentStep === index ? "white" : "black"}>{`${index + 1}. ${step}`}</Center>
                    </Box>
                )
            })}
        </Flex>
    )
}