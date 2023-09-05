"use client"

import { Flex, Box, Heading, Text, useMediaQuery } from "@/components/chakra";
import { COMMON_PAGE_PADDING } from "@/constants";
import Image from "next/image";

export function QuizzesHeading() {
    const [isSmallerThanMediumScreen] = useMediaQuery('(max-width: 768px)');
    const [isSmallerThanLargeScreen] = useMediaQuery('(max-width: 1280px)');

    const getImageSizeProperty = () => {
        if (isSmallerThanMediumScreen) {
            return 300;
        }
        if (isSmallerThanLargeScreen) {
            return 400;
        }
        return 500;
    }

    return (
        <Flex pb={{ base: "20px", lg: "72px" }} px={COMMON_PAGE_PADDING} pt={{ base: "30px", lg: "64px" }} direction={{ base: "column", lg: "row" }}>
            <Flex w={{ base: "100%", lg: "50%" }} justify={{ base: "center", lg: "flex-start" }}>
                <Image src="/owl.png" alt="Owl" width={getImageSizeProperty()} height={getImageSizeProperty()} />
            </Flex>
            <Flex direction="column" w={{ base: "100%", lg: "50%" }} justify="center" alignItems={{ base: "none", lg: "flex-start" }} pt={{ base: "20px", lg: "none" }}>
                <Box>
                    <Heading color="black" fontSize={{ base: "l", lg: "xxxl" }} fontWeight="bold" textAlign={{ base: "center", lg: "left" }}>Embark on a magical journey!</Heading>
                    <Text color="gray" fontSize={{ base: "md", lg: "l" }} fontWeight="regular" textAlign={{ base: "center", lg: "left" }}>Sharpen your quills and let the quest for knowledge begin!</Text>
                </Box>
            </Flex>
        </Flex>
    )
}