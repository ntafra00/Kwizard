import { Flex } from "@chakra-ui/react"
import { PinInput } from "./PinInput"

export function QuizPassword() {
    return (
        <Flex gap="6px">
            <PinInput />
            <PinInput />
            <PinInput />
            <PinInput />
            <PinInput />
        </Flex>
    )
}