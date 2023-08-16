import { Box, Image, Flex } from "@chakra-ui/react";
import { Answer, Input } from "./";
import { Select } from "@/components/commons/forms";

export function Question() {
    return (
        <Box w="100%" px="15px" py="30px" background="rgba(46, 49, 130, 0.05)" mb="60px">
            <Flex justifyContent="space-between" pb="45px">
                <Input placeholder="Question Title" backgroundColor="white" />
                <Image src="uploadImageGray.png" alt="Upload image" w="36px" />
                <Select imageUrl="multipleChoice.png" />
            </Flex>
            <Answer isCorrect={true} />
        </Box>
    )
}