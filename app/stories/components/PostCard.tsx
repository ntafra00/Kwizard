import { Box, Flex, Image, Text } from "@/components/chakra"
import { PostData } from "@/typings"
import { useRouter } from "next/navigation";

interface Props {
    post: PostData
}

export function PostCard({ post: { description, imageUrl, topic, id } }: Props) {

    const router = useRouter();

    const handleRedirect = () => {
        router.push(`/stories/${id}`)
    }

    return (
        <Flex borderRadius="3px" pb="32px" direction="column" key={id} onClick={handleRedirect} _hover={{ cursor: "pointer" }}>
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