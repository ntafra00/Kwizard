import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";


interface Props {
    imageUrl: string,
    imageDescription: string,
    text: string,
    heading: string,
    textAlignment: string | object,
    imageAlignment: string | object,
}

export function Section({ imageUrl, imageDescription, heading, text, textAlignment, imageAlignment }: Props) {
    return (
        <Box>
            <Flex justify={imageAlignment}>
                <Image src={imageUrl} alt={imageDescription} />
            </Flex>
            <Heading color="black" fontWeight="semibold" fontSize={{ base: "md", md: "l" }} pt={{ base: "20px", md: "48px" }} textAlign={textAlignment}>{heading}</Heading>
            <Text color="gray" fontWeight="medium" fontSize={{ base: "sm", md: "md" }} textAlign={textAlignment} pt="32px">{text}</Text>
        </Box>
    )
}