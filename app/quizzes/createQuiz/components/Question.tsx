"use client"

import { Box, Flex, Stack, Center } from "@/components/chakra";
import { Input, MultipleChoice, Checkboxes, TrueFalse } from "./";
import { CustomSelect as Select } from "@/components/commons/forms";

import { useState, useRef } from 'react';
import { QuestionType } from "@/enums";
import Image from "next/image";

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
                <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between" pb="45px" gap="28px" alignItems="center">
                    <Center w={{ base: "100%", lg: "60%" }} gap="28px" >
                        <Input placeholder="Question Title" backgroundColor="white" />
                        <Box _hover={{ cursor: "pointer" }}>
                            <Image src={selectedImage ? selectedImage : "/uploadImageGray.png"} alt="Upload image" width={36} height={36} onClick={selectedImage ? handleRemoveUploadedImage : handleUploadImageClick} />
                        </Box>
                    </Center>
                    <Box w={{ base: "100%", lg: "40%" }}>
                        <Select onChangeValue={handleQuestionTypeChange} value={questionType} />
                    </Box>
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