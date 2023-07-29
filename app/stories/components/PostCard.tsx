import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { PostData } from "@/typings"

interface Props {
    post: PostData
}

export function PostCard({ post: { description, imageUrl, topic } }: Props) {
    return (
        <Flex borderRadius="3px" pb="32px" direction="column">
            <Image src={imageUrl} alt="Post card image" />
            <Box py="8px" >
                <Text color="smoke" fontWeight="medium" fontSize="xs">{topic}</Text>
            </Box >
            <Box>
                <Text color="black" fontWeight="medium" fontSize="sm">{description}</Text>
            </Box>
        </Flex >
    )
}