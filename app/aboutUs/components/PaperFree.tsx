"use client"

import { Flex, Center, Heading, Text, useMediaQuery } from "@/components/chakra";
import Image from "next/image";

export function PaperFree() {
    const largeHeight = 400;
    const largeWidth = 610;
    const [isSmallerThanMediumScreen] = useMediaQuery('(max-width: 768px)');
    const [isSmallerThanLargeScreen] = useMediaQuery('(max-width: 1280px)');


    const calculateImageDimensions = (value: number) => {
        if (isSmallerThanMediumScreen) {
            return 0.25 * value;
        }
        if (isSmallerThanLargeScreen) {
            return 0.5 * value;
        }
        return value;
    }

    return (
        <>
            <Center pb="16px" pt="64px">
                <Heading color="black" fontWeight="semibold" fontSize={{ base: "md", md: "l" }} textAlign="center">Qwizard encourages modern, paper-free ways of approaching education</Heading>
            </Center>
            <Center pb={{ base: "30px", md: "64px" }}>
                <Text color="gray" fontWeight="medium" fontSize={{ base: "sm", md: "md" }} textAlign="center">We're collaborating with schools and universities across Europe to provide new and improved ways for teachers to reach their students minds. We're also helping save the environment, too!</Text>
            </Center>
            <Center w="100%">
                <Image src="/woods.png" alt="Woods" width={calculateImageDimensions(largeWidth)} height={calculateImageDimensions(largeHeight)} />
                <Image src="/computer.png" alt="Computer" width={calculateImageDimensions(largeWidth)} height={calculateImageDimensions(largeHeight)} />
            </Center>
        </>
    )
}