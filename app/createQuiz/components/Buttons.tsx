"use client"

import { Center } from "@/components/chakra";
import { Button } from "@/components/commons/buttons";
import { useQuizCreation } from "@/contexts";

export function Buttons() {

    const { currentStep, handleIncreaseCurrentStep } = useQuizCreation()

    return (
        <Center pt="40px" pb="64px">
            {currentStep !== 2 &&
                <Button buttonAction={handleIncreaseCurrentStep} text="Next Page" textColor="white" backgroundColor="orange" fontSize="md" />
            }
        </Center>
    )
} 