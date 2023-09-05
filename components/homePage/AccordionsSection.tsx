"use client"

import WhiteLayout from "@/layouts/WhiteLayout"
import { Box, Heading, Flex, Accordion, AccordionButton, AccordionItem, AccordionPanel, AccordionIcon } from "@/components/chakra";
import { COMMON_PAGE_PADDING, HOME_PAGE_TOPICS } from "@/constants";
import Image from "next/image";

export function AccordionsSection() {
    return (
        <WhiteLayout>
            <Box pt='60px' px={COMMON_PAGE_PADDING}>
                <Box pb={{ base: "30px", md: "70px", lg: "140px" }}>
                    <Heading color='black' fontSize={{ base: "md", md: "xl", lg: "xxl" }} textAlign="center">Wait, I thought real wizards didn't exist?</Heading>
                    <Heading color='black' fontSize={{ base: "md", md: "xl", lg: "xxl" }} textAlign="center">What do you guys do?</Heading>
                </Box>
                <Flex direction={{ base: 'column', md: 'row' }} pb='60px'>
                    <Flex w={{ base: '100%', md: '50%' }} pb={{ base: "40px", md: "none" }}>
                        <Image src='/videoWizardEditor.png' alt="Video editor with text about wizards" width={600} height={445} />
                    </Flex>
                    <Flex w={{ base: '100%', md: '50%' }} justifyContent="flex-end" alignItems="center">
                        <Accordion allowToggle w={{ base: "100%", md: "80%" }}>
                            {HOME_PAGE_TOPICS.map((topic) => {
                                return (
                                    <AccordionItem key={topic.id} border="none" my="8px">
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left' color="black" fontWeight="semibold" fontSize={{ base: "md", md: "l" }}>
                                                    {topic.name}
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4} color="black" fontWeight="regular" fontSize="sm">
                                            {topic.text}
                                        </AccordionPanel>
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    </Flex>
                </Flex >
            </Box>
        </WhiteLayout >
    )
}