import { PinInput, PinInputField, HStack } from "@/components/chakra"

export function QuizPassword() {
    return (
        <HStack>
            <PinInput size='lg'>
                <PinInputField borderRadius="6px" border="1px solid #E2E8F0" background="transparent" fontSize="md" color="black" />
                <PinInputField borderRadius="6px" border="1px solid #E2E8F0" background="transparent" fontSize="md" color="black" />
                <PinInputField borderRadius="6px" border="1px solid #E2E8F0" background="transparent" fontSize="md" color="black" />
                <PinInputField borderRadius="6px" border="1px solid #E2E8F0" background="transparent" fontSize="md" color="black" />
                <PinInputField borderRadius="6px" border="1px solid #E2E8F0" background="transparent" fontSize="md" color="black" />
            </PinInput>
        </HStack>
    )
}