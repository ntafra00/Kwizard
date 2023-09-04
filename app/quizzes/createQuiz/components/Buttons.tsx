"use client"

import { Center } from "@/components/chakra";
import { Button } from "@/components/commons/buttons";
import { useQuizCreation } from "@/contexts";

export function Buttons() {

    const { currentStep, handleIncreaseCurrentStep, handleDecreaseCurrentStep } = useQuizCreation()

    return (
        <Center pt="40px" pb="64px" gap="48px">
            {currentStep === 0 &&
                <>
                    <Button buttonAction={handleIncreaseCurrentStep} text="Next Page" textColor="white" backgroundColor="orange" backgroundColorOnClick="orangeOnClick" />
                </>}
            {currentStep === 1 &&
                <>
                    <Button buttonAction={handleDecreaseCurrentStep} text="Previous Page" textColor="orange" backgroundColor="white" backgroundColorOnClick="whiteOnClick" />
                    <Button buttonAction={handleIncreaseCurrentStep} text="Next Page" textColor="white" backgroundColor="orange" backgroundColorOnClick="orangeOnClick" />
                </>
            }
            {currentStep === 2 &&
                <>
                    <Button buttonAction={handleDecreaseCurrentStep} text="Previous Page" textColor="orange" backgroundColor="white" backgroundColorOnClick="whiteOnClick" />
                </>
            }
        </Center>
    )
} 