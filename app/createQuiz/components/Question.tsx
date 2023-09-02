"use client"

import { Box, Image, Flex, Stack } from "@/components/chakra";
import { Input, MultipleChoice, Checkboxes, TrueFalse } from "./";
import { CustomSelect as Select } from "@/components/commons/forms";

import { useState, useRef } from 'react';
import { QuestionType } from "@/enums";

export function Question() {
    const [questionType, setQuestionType] = useState(QuestionType.MULTIPLE_CHOICE);
    const [selectedImage, setSelectedImage] = useState<string>();
    const questionImageRef = useRef<HTMLInputElement>(null);

    const handleQuestionTypeChange = (newQuestionType: QuestionType) => {
        setQuestionType(newQuestionType);
    }

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files && files.length > 0) {
            setSelectedImage(URL.createObjectURL(files[0]));
        }
    };

    const handleUploadImageClick = () => {
        if (!questionImageRef) {
            return;
        }
        questionImageRef.current?.click();
    }

    const handleRemoveUploadedImage = () => {
        setSelectedImage(undefined);
    }

    return (
        <>
            <Box w="100%" px="15px" py="30px" background="rgba(46, 49, 130, 0.05)" mb="60px">
                <Flex justifyContent="space-between" pb="45px" gap="28px" alignItems="center">
                    <Input placeholder="Question Title" backgroundColor="white" />
                    <Image src={selectedImage ? selectedImage : "uploadImageGray.png"} alt="Upload image" w="36px" h="36px" onClick={selectedImage ? handleRemoveUploadedImage : handleUploadImageClick} _hover={{ cursor: "pointer" }} />
                    <Select onChangeValue={handleQuestionTypeChange} value={questionType} />
                    <input
                        style={{ display: 'none' }}
                        ref={questionImageRef}
                        type="file"
                        onChange={handleFileInputChange}
                        accept="image/*"
                    />
                </Flex>
                <Stack gap="25px">
                    {questionType === QuestionType.MULTIPLE_CHOICE && <MultipleChoice />}
                    {questionType === QuestionType.CHECKBOXES && <Checkboxes />}
                    {questionType === QuestionType.TRUE_FALSE && <TrueFalse />}
                </Stack>
            </Box>
        </>
    )
}