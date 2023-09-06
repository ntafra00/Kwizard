"use client"

import { Flex, Text, Center } from "@/components/chakra";
import { Button } from "@/components/commons/buttons";

interface Props {
    subtitle: string,
}

export function QuizSubtitle({ subtitle }: Props) {
    return (
        <Flex backgroundColor="white" borderRadius="8px" border="1px solid rgba(63, 61, 61, 0.25)" p="32px" direction="column" alignItems="center" justifyContent="space-between" gap={{base: "20px", lg: "0px"}} w = {{ base: "100%", lg: "70%" }
}>
            <Text color="smoke" fontSize={{ base: "md", lg: "l" }} fontWeight="medium" textAlign="center">{subtitle}</Text>
            <Center>
                <Button backgroundColorOnClick="blueOnClick" buttonAction={() => { }} text="Play Now!" textColor="white" backgroundColor="blue" key="Play quiz button" />
            </Center>
        </Flex >
    )
}