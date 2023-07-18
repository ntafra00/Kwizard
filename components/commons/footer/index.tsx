import { Box, Heading, Button, Container, Flex } from "@chakra-ui/react"

export default function Footer() {
    return (
        <Box>
            <Flex alignItems='center' justifyContent='center' direction='column' gap={4}>
                <Container>
                    <Heading w='md' color='white'>Join more than ten thousand people who use Qwizard</Heading>
                </Container>
                <Button colorScheme='purple' rounded='full' color='white' size={'md'}>Get started now!</Button>
                <Box>hello</Box>
            </Flex>
        </Box >
    )
}