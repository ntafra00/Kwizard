"use client"

import { Flex, Heading, Text, Image } from "@/components/chakra";
import { Button } from "../commons/buttons";
import { COMMON_PAGE_PADDING } from "@/constants";
import { useRouter } from "next/navigation";

export function MainHeading() {

    const router = useRouter();

    const handleRedirectToQuizzes = () => {
        router.push("/quizzes");
    }

    return (
        <Flex direction={{ base: 'column', md: 'row' }} px={COMMON_PAGE_PADDING} pt={{ base: "20px" }} gap="20px">
            <Flex direction='column' gap={4} w={{ base: '100%', md: '50%' }} justifyContent={{ base: 'end', md: 'center' }} alignItems={'flex-start'}>
                <Heading color='black' fontSize={{ base: "md", md: "lg", lg: 'xl' }}>Enjoy and learn at the same time, what kind of a spell is that?</Heading>
                <Text color='gray' fontSize={{ base: "sm", lg: "md" }} fontWeight='medium'>Create a magical quiz with (or without!) a wand or saying the magic words.</Text>
                <Button text="Join the Qwizards now!" buttonAction={handleRedirectToQuizzes} textColor="white" backgroundColor="blue" backgroundColorOnClick="blueOnClick" />
            </Flex>
            <Flex justifyContent={{ base: "center", md: "flex-end" }} w={{ base: "100%", md: "50%" }}>
                <Image src='wizard.png' alt="Wizard with fire" w={{ base: "50%", md: "75%", lg: "100%" }} />
            </Flex>
        </Flex >
    )
}