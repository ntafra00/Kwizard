import { FeaturedPostData } from "@/typings"
import { Flex, Center, Text, Heading, Divider, Stack, Image, Spacer, Box } from "@chakra-ui/react"

interface Props {
    featuredPost: FeaturedPostData;
}

export function FeaturedPost({ featuredPost: { author, callToAction, date, description, imageUrl, topic } }: Props) {
    return (
        <Center pt="32px" pb="56px">
            <Flex background="white" w={{ base: "80%", lg: "66%" }} direction={{ base: "column", md: "row" }} px="36px">
                <Flex direction="column" w={{ base: "100%", lg: "40%" }} pt="32px" pb="16px">
                    <Stack gap="8px">
                        <Text color="smoke" fontSize="sm" fontWeight="regular">{topic}</Text>
                        <Heading color="black" fontSize="md" fontWeight="semibold" textAlign="left">{description}</Heading>
                        <Divider color="black" />
                        <Text color="gray" fontSize="sm" fontWeight="regular">{callToAction}</Text>
                    </Stack>
                    <Spacer />
                    <Flex gap="16px">
                        <Text color="smoke" fontSize="xs" fontWeight="medium">{author}</Text>
                        <Text color="smoke" fontSize="xs" fontWeight="medium">{date}</Text>
                    </Flex>
                </Flex>
                <Center py="20px" w={{ base: "100%", lg: "60%" }}>
                    <Image src={imageUrl} alt="Featured post image" />
                </Center>
            </Flex>
        </Center>
    )
}