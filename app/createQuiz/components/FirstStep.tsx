"use client"

import { Center, Heading, Textarea, Text, Image, Box } from "@/components/chakra";
import { QuizSection, Categories, Subcategories, Input } from "./index";
import { Button } from "@/components/commons/buttons";
import { useQuizCreation } from "@/contexts";
import { useRef } from "react";

export function FirstStep() {
    const { selectedCategory, handleChangeSelectedCategory, selectedQuizType, selectedSubcategory, handleChangeSelectedSubcategory, selectedImage, handleRemoveUploadedImage, handleSetUploadedImage, handleSelectedQuizTypeChange } = useQuizCreation();
    const imageRef = useRef<HTMLInputElement>(null);

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files && files.length > 0) {
            handleSetUploadedImage(URL.createObjectURL(files[0]));
        }
    };

    const handleUploadFileClick = () => {
        if (!imageRef) {
            return;
        }
        imageRef.current?.click();
    }

    return (
        <>
            <QuizSection imageDescription="Number one" imageUrl="numberOne.png" title="What's your Quiz's topic?">
                <Categories selectedCategory={selectedCategory} handleChangeSelectedCategory={handleChangeSelectedCategory} />
                {selectedCategory && selectedCategory.subcategories.length > 0 &&
                    <>
                        <Center pt="32px" pb="32px">
                            <Heading textAlign="center" color="black" fontSize="md" fontWeight="medium">Select your subcategory</Heading>
                        </Center>
                        <Subcategories subcategories={selectedCategory.subcategories} selectedSubcategory={selectedSubcategory} handleChangeSelectedSubcategory={handleChangeSelectedSubcategory} />
                    </>
                }
            </QuizSection>
            <QuizSection imageDescription="Number two" imageUrl="numberTwo.png" title="Is this a Private or Public Quiz?">
                <Center>
                    <Center borderRadius="50px 0px 0px 50px" w="145px" h="37px" background={selectedQuizType === "private" ? "orange" : "rgba(239, 157, 89, 0.50)"} _hover={selectedQuizType === "private" ? {} : { background: "rgba(239, 157, 89, 0.50)", cursor: "pointer" }} onClick={selectedQuizType === "private" ? undefined : () => handleSelectedQuizTypeChange("private")}>
                        <Text textAlign="center" color={selectedQuizType === "private" ? "white" : "black"} fontSize="sm" fontWeight="medium">Private</Text>
                    </Center>
                    <Center borderRadius="0px 50px 50px 0px" w="145px" h="37px" background={selectedQuizType === "public" ? "orange" : "rgba(239, 157, 89, 0.50)"} _hover={selectedQuizType === "public" ? {} : { background: "rgba(239, 157, 89, 0.50)", cursor: "pointer" }} onClick={selectedQuizType === "public" ? undefined : () => handleSelectedQuizTypeChange("public")}>
                        <Text textAlign="center" color={selectedQuizType === "public" ? "white" : "black"} fontSize="sm" fontWeight="medium">Public</Text>
                    </Center>
                </Center>
            </QuizSection>
            <QuizSection imageDescription="Number three" imageUrl="numberThree.png" title="Quiz Title">
                <Center>
                    <Box w={{ base: "90%", lg: "80%" }}>
                        <Input />
                    </Box>
                </Center>
            </QuizSection>
            <QuizSection imageDescription="Number four" imageUrl="numberFour.png" title="Quiz Description">
                <Center>
                    <Textarea w={{ base: "90%", lg: "80%" }} borderRadius="6px" border="1px solid #E2E8F0" placeholder="Placeholder" fontSize="18px" fontWeight="normal" color="#A0AEC0" />
                </Center>
            </QuizSection>
            <QuizSection isLast={true} imageDescription="Number five" imageUrl="numberFive.png" title="Quiz Main Image">
                <Center>
                    <Image src={selectedImage ?? "uploadImage.png"} w="150px" h="150px" />
                </Center>
                <Center pt="40px" gap="10px">
                    {!selectedImage && <Button buttonAction={handleUploadFileClick} text="Select Image to Upload" textColor="white" backgroundColor="blue" backgroundColorOnClick="blueOnClick" />}
                    {selectedImage && <Button buttonAction={handleRemoveUploadedImage} text="Remove uploaded image" textColor="white" backgroundColor="orange" backgroundColorOnClick="orangeOnClick" />}
                </Center>
                <input
                    style={{ display: 'none' }}
                    ref={imageRef}
                    type="file"
                    onChange={handleFileInputChange}
                    accept="image/*"
                />
            </QuizSection>
        </>
    )
}