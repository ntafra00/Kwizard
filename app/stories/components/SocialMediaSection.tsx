import { Spacer, Flex, Stack, Center, Text, Heading, HStack, Box } from "@/components/chakra";
import { FacebookIcon, TwitterIcon, MailIcon } from "@/components/commons/icons";
import WhiteLayout from "@/layouts/WhiteLayout";
import Image from "next/image";

export function SocialMediaSection() {
    return (
        <WhiteLayout>
            <Flex>
                <Spacer w="33.33%" display={{ base: "none", lg: "block" }} />
                <Stack pt="40px" w={{ base: "100%", lg: "33.33%" }}>
                    <Center>
                        <Text color="blue" fontSize="sm" fontWeight="medium">Think your story should be here?</Text>
                    </Center>
                    <Center pb="50px">
                        <Heading color="orange" fontSize={{ base: "xl", md: "xxl" }} fontWeight="semibold" textAlign="center">Send us an owl!</Heading>
                    </Center>
                    <Center>
                        <HStack spacing="80px">
                            <FacebookIcon type="letter" color="blue" />
                            <MailIcon />
                            <TwitterIcon />
                        </HStack>
                    </Center>
                    <Center pt="50px" pb="32px">
                        <Text color="blue" fontSize="sm" fontWeight="medium" textAlign="center">We promise we'll take good care of her!</Text>
                    </Center>
                </Stack>
                <Box w="33.3%" display={{ base: "none", lg: "block" }} position="relative">
                    <Image src="/harryPotter.png" alt="Harry Potter" fill />
                </Box>
            </Flex>
        </WhiteLayout>
    )
}