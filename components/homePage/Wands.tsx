"use client"

import { Flex, Image, Heading, Box } from "@/components/chakra";
import { Button } from "../commons/buttons";
import { useRouter } from "next/navigation";

export function Wands() {

    const router = useRouter();

    const handleRedirectToQuizzes = () => {
        router.push("/quizzes");
    }

    return (
        <Flex>
            <Image src='wandHandLeft.png' alt="Left hand with wand" w={'33.3%'} />
            <Flex w={'33.3%'} justifyContent={"center"} alignItems={"center"}>
                <Flex direction={"column"} justifyContent={"space-evenly"} alignItems={"center"} h={'80%'}>
                    <Box>
                        <Heading color="black" size={{ s: "md", md: "xl", l: "xxl" }} textAlign="center">Are you ready?</Heading>
                        <Heading color="black" size={{ s: "md", md: "xl", l: "xxl" }} textAlign="center">We are!</Heading>
                    </Box>
                    <Button buttonAction={handleRedirectToQuizzes} text="Get started now!" textColor="blue" fontSize={{ base: "sm", md: "md" }} key="getStartedNowButton" />
                </Flex>
            </Flex>
            <Image src='wandHandRight.png' alt="Right hand with wand" w={'33.3%'} />
        </Flex>
    )
}