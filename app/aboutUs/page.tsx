import WhiteLayout from "@/layouts/WhiteLayout"

import { Box, Flex, Heading, Center, Stack } from "@/components/chakra";
import { Section, PaperFree } from "./components";
import { COMMON_PAGE_PADDING } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Qwizard | About us",
    description: "Learn more about those that are responsible for Qwizard",
}

export default function AboutUs() {
    return (
        <>
            <WhiteLayout>
                <Flex px={COMMON_PAGE_PADDING} direction={{ base: "column", md: "row" }} pt={{ base: "20px", lg: "none" }}>
                    <Center width={{ base: "100%", md: "50%" }}>
                        <Stack>
                            <Heading color="black" fontWeight="semibold" fontSize={{ base: "l", md: "xxl", lg: "xxxl" }} textAlign={{ base: "center", lg: "left" }}>Better learning</Heading>
                            <Heading color="black" fontWeight="semibold" fontSize={{ base: "l", md: "xxl", lg: "xxxl" }}>Less stress</Heading>
                            <Heading color="orange" fontWeight="semibold" fontSize={{ base: "l", md: "xxl", lg: "xxxl" }}>More joy</Heading>
                        </Stack>
                    </Center>
                    <Flex width={{ base: "100%", md: "50%" }} justify={{ base: "center", md: "flex-end" }}>
                        <Image src="/student.png" alt="Student image" width={450} height={550} />
                    </Flex>
                </Flex>
            </WhiteLayout>
            <Box pt={{ base: "40px", lg: "120px" }} pb="60px" px={COMMON_PAGE_PADDING}>
                <Center>
                    <Heading color="black" fontWeight="semibold" fontSize={{ base: "md", md: "l" }} textAlign="center" pb={{ base: "40px", md: "none" }}>What is Qwizard all about?</Heading>
                </Center>
                <Flex pt={{ sm: "50px", md: "130px" }} direction={{ base: "column", lg: "row" }}>
                    <Flex w={{ base: "100%", lg: "33%" }} align={{ lg: "flex-end" }} pb={{ base: "40px", md: "0px" }}>
                        <Section
                            heading="Endless potential" imageDescription="Wizard hat with light bulb" imageUrl="/wizardHat.png" text="Choose your potion - plenty of ways to challenge yourself (and others!). Don't be afraid to surprise everyone when you pull a rabbit out of the hat!" textAlignment="left" imageAlignment={{ base: "center", lg: "flex-start" }} imageDimensions={{ width: 240, height: 430 }}
                        />
                    </Flex>
                    <Flex w={{ base: "100%", lg: "33%" }} pb={{ base: "40px", md: "none" }}>
                        <Section heading="Air Magic" imageDescription="Online learning" imageUrl="/onlineLearning.png" text="What's that? It's actually called WiFi?
                                Well, it works just the same! Improve your knowledge anywhere, anytime!" textAlignment="center" imageAlignment="center" imageDimensions={{ width: 290, height: 290 }}
                        />
                    </Flex>
                    <Flex w={{ base: "100%", lg: "33%" }}>
                        <Section heading="Great adaptability" imageDescription="Tablet with magic ball" imageUrl="/tablet.png" text="Ever heard of incompatibility? Yeah, me neither - wizards support your phone, PC and tablets. Coming soon to your wands!" textAlignment="right" imageAlignment={{ base: "center", lg: "flex-end" }} imageDimensions={{ width: 200, height: 475 }}
                        />
                    </Flex>
                </Flex>
                <PaperFree />
            </Box >
        </>
    )
}