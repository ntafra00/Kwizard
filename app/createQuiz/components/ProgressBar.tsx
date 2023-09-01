"use client"

import { Flex, Box, Center } from "@/components/chakra";
import { QUIZ_CREATION_STEPS } from "@/constants";
import { useQuizCreation } from "@/contexts";

export function ProgressBar() {
    const { currentStep, handleStepClick } = useQuizCreation()
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