"use client"
import { useState, useRef } from "react";
import { Flex, Image, Center } from "@/components/chakra";
import { Input } from "./Input";
import { Answer as IAnswer } from "@/typings";

interface Props {
    answer: IAnswer;
    handleAnswerToggle: (answerId: string) => void;
}

export function Answer({ answer: { id, isCorrect, text }, handleAnswerToggle }: Props) {
    const [selectedImage, setSelectedImage] = useState<string>();
    const answerImageRef = useRef<HTMLInputElement>(null);

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        console.log(files);
        if (files && files.length > 0) {
            console.log(URL.createObjectURL(files[0]));
            setSelectedImage(URL.createObjectURL(files[0]));
        }
    };

    const handleUploadImageClick = () => {
        if (!answerImageRef) {
            return;
        }
        answerImageRef.current?.click();
    }

    const handleRemoveUploadedImage = () => {
        setSelectedImage(undefined);
    }

    console.log(selectedImage);
    return (
        <Flex w="100%" pr="15px" gap="30px" alignItems="center">
            <Flex w="100%">
                <Input placeholder="Answer" backgroundColor="white" />
                <Center borderRadius="0px 6px 6px 0px" border="1px solid #E2E8F0" backgroundColor="#EDF2F7" px="8px" w="48px" h="48px" _hover={{ cursor: "pointer" }} onClick={() => handleAnswerToggle(id)}>
                    <Image src={isCorrect ? "/correctAnswer.png" : "/wrongAnswer.png"} alt="Correct answer" background="transparent" />
                </Center>
            </Flex>
            <Image src={selectedImage ? selectedImage : "/uploadImageGray.png"} alt="Upload image" w="36px" h="36px" onClick={selectedImage ? handleRemoveUploadedImage : handleUploadImageClick} _hover={{ cursor: "pointer" }} />
            <input
                style={{ display: 'none' }}
                ref={answerImageRef}
                type="file"
                onChange={handleFileInputChange}
                accept="image/*"
            />
        </Flex >
    )
}