import { PinInput, PinInputField, HStack } from "@chakra-ui/react"

export function QuizPassword() {
    return (
        <HStack>
            <PinInput size='lg'>
                <PinInputField borderRadius="6px" border="1px solid #E2E8F0" background="transparent" fontSize="md" color="#A0AEC0" />
                <PinInputField borderRadius="6px" border="1px solid #E2E8F0" background="transparent" fontSize="md" color="#A0AEC0" />
                <PinInputField borderRadius="6px" border="1px solid #E2E8F0" background="transparent" fontSize="md" color="#A0AEC0" />
                <PinInputField borderRadius="6px" border="1px solid #E2E8F0" background="transparent" fontSize="md" color="#A0AEC0" />
                <PinInputField borderRadius="6px" border="1px solid #E2E8F0" background="transparent" fontSize="md" color="#A0AEC0" />
            </PinInput>
        </HStack>
    )
}