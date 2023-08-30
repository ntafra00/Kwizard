"use client"

import { Flex, Heading, Text, Image, Box } from "@chakra-ui/react";
import { DownArrow } from "@/components/commons/icons";
import WhiteLayout from "@/layouts/WhiteLayout";
import { Button } from "@/components/commons/buttons";
import { useRouter } from "next/navigation";
import Head from "next/head";

import { COMMON_PAGE_PADDING, HOME_PAGE_TOPICS } from "@/constants";

export default function Home() {
  const router = useRouter();

  const handleRedirectToQuizzes = () => {
    router.push("/quizzes");
  }

  return (
    <>
      <Head>
        <title>Qwizard | Home</title>
      </Head>
      <Flex direction={{ base: 'column', md: 'row' }} px={COMMON_PAGE_PADDING} pt={{ base: "20px" }}>
        <Flex direction='column' gap={4} w={{ base: '100%', md: '50%' }} justifyContent={{ base: 'end', md: 'center' }} alignItems={'flex-start'}>
          <Heading color='black' fontSize={{ base: "md", md: "lg", lg: 'xl' }}>Enjoy and learn at the same time, what kind of a spell is that?</Heading>
          <Text color='gray' fontSize={{ base: "sm", lg: "md" }} fontWeight='medium'>Create a magical quiz without a wand or saying the magic words.</Text>
          <Button text="Join the Qwizards now" buttonAction={handleRedirectToQuizzes} textColor="blue" />
        </Flex>
        <Flex justifyContent={{ base: "center", md: "flex-end" }} w={{ base: "100%", md: "50%" }}>
          <Image src='wizard.png' alt="Hero image one" w={{ base: "50%", ld: "100%" }} />
        </Flex>
      </Flex >
      <WhiteLayout>
        <Box pt='60px' px={COMMON_PAGE_PADDING}>
          <Box pb={{ base: "30px", md: "70px", lg: "140px" }}>
            <Heading color='black' fontSize={{ base: "md", md: "xl", lg: "xxl" }} textAlign="center">Wait, I thought real wizards didn't exist?</Heading>
            <Heading color='black' fontSize={{ base: "md", md: "xl", lg: "xxl" }} textAlign="center">What do you guys do?</Heading>
          </Box>
          <Flex direction={{ base: 'column', md: 'row' }} pb='60px'>
            <Flex w={{ base: '100%', md: '50%' }} pb={{ base: "40px", md: "none" }}>
              <Image src='videoWizardEditor.png' alt="Hero image one" w='100%' />
            </Flex>
            <Flex direction='column' gap={4} w={{ base: '100%', md: '50%' }} justifyContent={'center'} alignItems={'flex-end'}>
              {HOME_PAGE_TOPICS.map((topic) => {
                return (
                  <Flex borderBottom={'1px solid black'} w={{ base: "100%", md: "80%" }} justifyContent={'space-between'} key={topic.id}>
                    <Heading color="black" fontSize="l" fontWeight="semibold">{topic.name}</Heading>
                    <DownArrow />
                  </Flex>
                )
              })}
            </Flex >
          </Flex >
        </Box>
      </WhiteLayout >
      <Flex>
        <Image src='wandHandLeft.png' alt="Hero image one" w={'33.3%'} />
        <Flex w={'33.3%'} justifyContent={"center"} alignItems={"center"}>
          <Flex direction={"column"} justifyContent={"space-evenly"} alignItems={"center"} h={'80%'}>
            <Box>
              <Heading color="black" size={{ s: "l", md: "xl", l: "xxl" }} textAlign="center">Are you ready?</Heading>
              <Heading color="black" size={{ s: "l", md: "xl", l: "xxl" }} textAlign="center">We are!</Heading>
            </Box>
            <Button buttonAction={handleRedirectToQuizzes} text="Get started now!" textColor="blue" fontSize={{ base: "sm", md: "md" }} key="getStartedNowButton" />
          </Flex>
        </Flex>
        <Image src='wandHandRight.png' alt="Hero image one" w={'33.3%'} />
      </Flex>
    </>
  )
}