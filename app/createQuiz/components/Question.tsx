import { Box, Image, Flex, Stack } from "@chakra-ui/react";
import { Input, MultipleChoice, Checkboxes } from "./";
import { CustomSelect as Select } from "@/components/commons/forms";

import { useState } from 'react';
import { QuestionType } from "@/enums";

export function Question() {
    const [questionType, setQuestionType] = useState(QuestionType.MULTIPLE_CHOICE);

    const handleQuestionTypeChange = (newQuestionType: QuestionType) => {
        setQuestionType(newQuestionType);
    }

    return (
        <Box w="100%" px="15px" py="30px" background="rgba(46, 49, 130, 0.05)" mb="60px">
            <Flex justifyContent="space-between" pb="45px" gap="28px" alignItems="center">
                <Input placeholder="Question Title" backgroundColor="white" />
                <Image src="uploadImageGray.png" alt="Upload image" w="36px" h="36px" />
                <Select onChangeValue={handleQuestionTypeChange} value={questionType} />
            </Flex>
            <Stack gap="25px">
                {questionType === QuestionType.MULTIPLE_CHOICE && <MultipleChoice />}
                {questionType === QuestionType.CHECKBOXES && <Checkboxes />}
            </Stack>
        </Box>
    )
}