import { Box, Text, Flex } from "@chakra-ui/react"

import { FacebookIcon, GithubIcon, InstagramIcon } from "../icons"
import WhiteLayout from "@/layouts/WhiteLayout"

export default function Footer() {
    return (
        <WhiteLayout>
            <Box pt={"48px"} pb={"16px"}>
                <Flex direction={"column"} justifyContent={"space-between"} gap={5}>
                    <Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>
                        <Text color={"#2E3182"}>Made with magic, Next.js and</Text>
                        <Text color={"#2E3182"}>a drop of love for knowledge</Text>
                    </Flex>
                    <Flex px={"100px"} justifyContent={"space-between"}>
                        <Flex justifyContent={"flex-start"} alignItems={"center"}>
                            <Box pr={4} borderRight={"1px solid"} borderColor={"black"}>
                                <Text color={"black"}>Privacy Policy</Text>
                            </Box>
                            <Box pl={4}>
                                <Text color={"black"}>Terms of Use</Text>
                            </Box>
                        </Flex>
                        <Flex justifyContent={"flex-end"} >
                            <Box pr={4}>
                                <InstagramIcon />
                            </Box>
                            <Box pr={4}>
                                <FacebookIcon />
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