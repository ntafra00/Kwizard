"use client"

import Navbar from "@/components/commons/navbar";
import Footer from "@/components/commons/footer";
import GradientLayout from "@/layouts/GradientLayout";

import { Flex, Heading, Text, Image, Button, useDisclosure, IconButton, Box } from "@chakra-ui/react";

import { RightArrow, DownArrow } from "@/components/commons/icons";


export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Navbar />
      <GradientLayout>
        <Flex direction={{ base: 'column', md: 'row' }} p={20}>
          <Flex direction='column' gap={4} w={{ base: '100%', md: '50%' }} justifyContent={{ base: 'end', md: 'center' }}>
            <Heading color='white'>Enjoy and learn at the same time, what kind of a spell is that?</Heading>
            <Text color='white'>Create a quiz without a wand or saying the magic words</Text>
            <Button colorScheme='purple' rounded='full' color='white' width='sm'>Join the Quizzers now!</Button>
          </Flex>
          <Flex w={{ base: '100%', md: '50%' }} justifyContent='center' alignItems='center' pt={{ base: 20, md: 0 }}>
            <Image src='mainSection-1.png' alt="Hero image one" />
          </Flex>
        </Flex >
        <Flex direction={{ base: 'column', md: 'row' }} pt={0}>
          <Flex w={{ base: '100%', md: '50%' }} h='80%' justifyContent='center' alignItems='center' pt={{ base: 20, md: 0 }}>
            <Image src='mainSection-2.png' alt="Hero image one" />
          </Flex>
          <Flex direction='column' gap={4} w={{ base: '100%', md: '50%' }} justifyContent={{ base: 'end', md: 'center' }}>
            <Flex>
              <IconButton
                size={'lg'}
                icon={isOpen ? <RightArrow /> : <DownArrow />}
                aria-label={'Open Menu'}
                onClick={isOpen ? onClose : onOpen}
                bgColor='transparent'
                color='white'
                _hover={{}}
              />
              <Heading color='white'>Create</Heading>
            </Flex>
            <Flex width='50%' visibility={isOpen ? 'visible' : 'hidden'} direction='column' gap={2}>
              <Flex width='50%' direction='column' gap={2}>
                <Text color='white'>Choose the quiz type and get started immediately</Text>
                <Button bg={'white'} rounded='full' color='purple' w='75%'>Learn more</Button>
              </Flex>
              <Box borderTop={'1px solid white'}><Heading color='white'>Play</Heading></Box>
              <Box borderTop={'1px solid white'}><Heading color='white'>Compete</Heading></Box>
            </Flex>
          </Flex >
        </Flex >
      </GradientLayout>
      <Footer />
    </>
  )
}