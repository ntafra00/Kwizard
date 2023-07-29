"use client"

import WhiteLayout from "@/layouts/WhiteLayout"

import { Box, Flex, Heading, Center, Image, Stack, Text } from "@chakra-ui/react";
import { Section } from "./components";
import { COMMON_PAGE_PADDING } from "@/constants";

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
                        <Image src="student.png" alt="Student image" w={{ base: "80%", lg: "100%" }} />
                    </Flex>
                </Flex>
            </WhiteLayout>
            <Box pt={{ base: "40px", lg: "120px" }} pb="60px" px={COMMON_PAGE_PADDING}>
                <Center>
                    <Heading color="black" fontWeight="semibold" fontSize={{ base: "md", md: "l" }} textAlign="center" pb={{ base: "40px", md: "none" }}>What is Qwizard all about?</Heading>
                </Center>
                <Flex pt={{ sm: "50px", md: "130px" }} direction={{ base: "column", lg: "row" }}>
                    <Flex w={{ base: "100%", lg: "33%" }} align={{ lg: "flex-end" }} pb={{ base: "40px", md: "none" }}>
                        <Section heading="Endless potential" imageDescription="Wizard hat with light bulb" imageUrl="wizardHat.png" text="Choose your potion - plenty of ways to challenge yourself (and others!). Don't be afraid to surprise everyone when you pull a rabbit out of the hat!" textAlignment={{ base: "center", lg: "left" }} imageAlignment={{ base: "center", lg: "flex-start" }}
                        />
                    </Flex>
                    <Flex w={{ base: "100%", lg: "33%" }} pb={{ base: "40px", md: "none" }}>
                        <Section heading="Air Magic" imageDescription="Online learning" imageUrl="onlineLearning.png" text="What's that? It's actually called WiFi?
                                Well, it works just the same! Improve your knowledge anywhere, anytime!" textAlignment="center" imageAlignment="center"
                        />
                    </Flex>
                    <Flex w={{ base: "100%", lg: "33%" }}>
                        <Section heading="Great adaptability" imageDescription="Tablet with magic ball" imageUrl="tablet.png" text="Ever heard of incompatibility? Yeah, me neither - wizards support your phone, PC and tablets. Coming soon to your wands!" textAlignment={{ base: "center", lg: "right" }} imageAlignment={{ base: "center", lg: "flex-end" }}
                        />
                    </Flex>
                </Flex>
                <Center pb="16px" pt="64px">
                    <Heading color="black" fontWeight="semibold" fontSize={{ base: "md", md: "l" }} textAlign="center">Qwizard encourages modern, paper-free ways of approaching education</Heading>
                </Center>
                <Center pb={{ base: "30px", md: "64px" }}>
                    <Text color="gray" fontWeight="medium" fontSize={{ base: "sm", md: "md" }} textAlign="center">We're collaborating with schools and universities across Europe to provide new and improved ways for teachers to reach their students minds. We're also helping save the environment, too!</Text>
                </Center>
                <Flex>
                    <Image src="woods.png" alt="Woods" w="50%" />
                    <Image src="computer.png" alt="Computer" w="50%" />
                </Flex>
            </Box >
        </>
    )
}