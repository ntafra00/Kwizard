"use client"

import { QuizCreationStep } from "@/typings";
import { Flex, Box, Center } from "@chakra-ui/react";
import { QUIZ_CREATION_STEPS } from "@/constants";

interface Props {
    currentStep: number;
    handleStepClick: (step: number) => void;
}

export function ProgressBar({ currentStep, handleStepClick }: Props) {
    return (
        <Flex align="center" pb="78px" direction={{ base: "column", lg: "row" }} id="progressBar">
            {QUIZ_CREATION_STEPS.map((step, index) => {
                if (index !== 2) {
                    return (
                        <>
                            <Box w={{ base: "80%", lg: "25%" }} background={currentStep === index ? "blue" : "white"} borderRadius="50px" border="1px solid #2E3182" py="13px" px="50px" _hover={{ cursor: "pointer " }} onClick={() => handleStepClick(index)} key={step.id}>
                                <Center fontSize="sm" fontWeight="medium" color={currentStep === index ? "white" : "black"}>{`${index + 1}. ${step.name}`}</Center>
                            </Box>
                            <Box h={{ base: "20px", lg: "1px" }} background="blue" w={{ base: "1px", lg: "12%" }} />
                        </>
                    )
                }
                return (
                    <Box w={{ base: "80%", lg: "25%" }} background={currentStep === index ? "blue" : "white"} borderRadius="50px" border="1px solid #2E3182" py="13px" px="50px" _hover={{ cursor: "pointer " }} onClick={() => handleStepClick(index)} key={step.id}>
                        <Center fontSize="sm" fontWeight="medium" color={currentStep === index ? "white" : "black"}>{`${index + 1}. ${step.name}`}</Center>
                    </Box>
                )
            })}
        </Flex>
    )
}