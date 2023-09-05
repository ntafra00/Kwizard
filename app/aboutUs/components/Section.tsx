"use client"

import { Box, Flex, Heading, Text, useMediaQuery } from "@/components/chakra";
import Image from "next/image";

interface Props {
    imageUrl: string,
    imageDescription: string,
    text: string,
    heading: string,
    textAlignment: "center" | "left" | "right",
    imageAlignment: string | object,
    imageDimensions: {
        width: number;
        height: number;
    }
}

export function Section({ imageUrl, imageDescription, heading, text, textAlignment, imageAlignment, imageDimensions }: Props) {
    const [isSmallerThanMediumScreen] = useMediaQuery('(max-width: 768px)');

    const getImageDimension = (value: number) => {
        if (isSmallerThanMediumScreen) {
            return 0.7 * value;
        }
        return value;
    }

    return (
        <Box>
            <Flex justify={imageAlignment}>
                <Image src={imageUrl} alt={imageDescription} width={getImageDimension(imageDimensions.width)} height={getImageDimension(imageDimensions.height)} />
            </Flex>
            <Heading color="black" fontWeight="semibold" fontSize={{ base: "md", md: "l" }} pt={{ base: "20px", md: "48px" }} textAlign={{ base: "center", lg: textAlignment }}>{heading}</Heading>
            <Text color="gray" fontWeight="medium" fontSize={{ base: "sm", md: "md" }} textAlign={{ base: "center", lg: textAlignment }} pt="32px">{text}</Text>
        </Box>
    )
}