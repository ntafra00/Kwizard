import { Box, Flex, Image, Heading, Text } from "@/components/chakra";


interface Props {
    imageUrl: string,
    imageDescription: string,
    text: string,
    heading: string,
    textAlignment: "center" | "left" | "right",
    imageAlignment: string | object,
}

export function Section({ imageUrl, imageDescription, heading, text, textAlignment, imageAlignment }: Props) {
    return (
        <Box>
            <Flex justify={imageAlignment}>
                <Image src={imageUrl} alt={imageDescription} />
            </Flex>
            <Heading color="black" fontWeight="semibold" fontSize={{ base: "md", md: "l" }} pt={{ base: "20px", md: "48px" }} textAlign={{ base: "center", lg: textAlignment }}>{heading}</Heading>
            <Text color="gray" fontWeight="medium" fontSize={{ base: "sm", md: "md" }} textAlign={{ base: "center", lg: textAlignment }} pt="32px">{text}</Text>
        </Box>
    )
}