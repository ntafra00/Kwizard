import { Box, Text, Flex, Spacer } from "@chakra-ui/react"

import { FacebookIcon, GithubIcon, InstagramIcon } from "../icons"
import WhiteLayout from "@/layouts/WhiteLayout"

export default function Footer() {
    return (
        <WhiteLayout>
            <Box pt={{ base: "20px", md: "48px" }}>
                <Flex direction={"column"} justifyContent={"space-between"} gap={5}>
                    <Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>
                        <Text color="blue" fontSize={{ base: "sm", md: "md" }} fontWeight="medium">Made with magic, Next.js and</Text>
                        <Text color="blue" fontSize={{ base: "sm", md: "md" }} fontWeight="medium">a drop of love for knowledge</Text>
                    </Flex>
                    <Flex px={{ base: "20px", md: "60px", lg: "110px" }} pb={{ base: "10px" }}>
                        <Flex justifyContent={"flex-start"} alignItems={"center"}>
                            <Box pr={{ base: "8px", md: "16px" }} borderRight={"1px solid"} borderColor={"black"}>
                                <Text color="black" fontSize="sm" fontWeight="medium">Privacy Policy</Text>
                            </Box>
                            <Box pl={{ base: "8px", md: "16px" }}>
                                <Text color="black" fontSize="sm" fontWeight="medium">Terms of Use</Text>
                            </Box>
                        </Flex>
                        <Spacer />
                        <Flex justifyContent="flex-end" alignItems="center">
                            <Box pr={4}>
                                <InstagramIcon />
                            </Box>
                            <Box pr={4}>
                                <FacebookIcon color="black" type="outline" />
                            </Box>
                            <Box>
                                <GithubIcon />
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </WhiteLayout >
    )
}