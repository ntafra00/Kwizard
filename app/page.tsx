"use client"

import Navbar from "@/components/commons/navbar";
import Footer from "@/components/commons/footer";

import { Flex, Heading, Text, Image, Button, Box } from "@chakra-ui/react";

import { DownArrow } from "@/components/commons/icons";
import WhiteLayout from "@/layouts/WhiteLayout";

const topics = [
  "Create",
  "Play",
  "Collaborate",
  "Compete",
  "Learn"
]

export default function Home() {

  return (
    <>
      <Navbar />
      <Flex direction={{ base: 'column', md: 'row' }} pl={100}>
        <Flex direction='column' gap={4} w={{ base: '100%', md: '50%' }} justifyContent={{ base: 'end', md: 'center' }} alignItems={'flex-start'}>
          <Heading color='black' as='h1' size='3xl'>Enjoy and learn at the same time, what kind of a spell is that?</Heading>
          <Text color='black' as='h4' size='1xl' textAlign={'left'}>Create a magical quiz without a wand or saying the magic words.</Text>
          <Button backgroundColor={'transparent'} rounded='full' color='black' variant='outline' colorScheme="blackAlpha">Join the Qwizards now!</Button>
        </Flex>
        <Flex w={{ base: '100%', md: '50%' }} justifyContent='center' alignItems='center' pt={{ base: 20, md: 0 }}>
          <Image src='wizard.png' alt="Hero image one" />
        </Flex>
      </Flex >
      <WhiteLayout>
        <Box pt={'60px'}>
          <Heading color='black' size='2xl' textAlign={"center"}>Wait, I thought real wizards didn't exist?</Heading>
          <Heading color='black' size='2xl' textAlign={"center"}>What do you guys do?</Heading>
          <Flex direction={{ base: 'column', md: 'row' }} px={'100px'}>
            <Image src='videoWizardEditor.png' alt="Hero image one" />
            <Flex direction='column' gap={4} w={{ base: '100%', md: '60%' }} justifyContent={'center'} alignItems={'flex-end'}>
              {topics.map((topic) => {
                return (
                  <Flex borderBottom={'1px solid black'} w={'60%'} justifyContent={'space-between'}>
                    <Heading>{topic}</Heading>
                    <DownArrow />
                  </Flex>
                )
              })}
            </Flex >
          </Flex >
        </Box>
      </WhiteLayout >
      <Flex h={'fit-content'}>
        <Image src='wandHandLeft.png' alt="Hero image one" w={'40%'} />
        <Flex w={'20%'} justifyContent={"center"} alignItems={"center"}>
          <Flex direction={"column"} justifyContent={"space-evenly"} alignItems={"center"} h={'80%'}>
            <Box>
              <Heading color={"black"} size={"2xl"}>Are you ready?</Heading>
              <Heading color={"black"} size={"2xl"} textAlign={"center"}>We are!</Heading>
            </Box>
            <Button rounded='full' variant={'outline'} borderColor={'black'} color={'#2E3182'} _hover={{ backgroundColor: "none" }}>Get started now!</Button>
          </Flex>
        </Flex>
        <Image src='wandHandRight.png' alt="Hero image one" w={'40%'} />
      </Flex>
      <Footer />
    </>
  )
}