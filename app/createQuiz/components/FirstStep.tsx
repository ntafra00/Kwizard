import { Center, Heading, Textarea, Text, Image } from "@chakra-ui/react";
import { QuizSection, Categories, Subcategories, Input } from "./index";
import { Button } from "@/components/commons/buttons";
import { QuizCategory } from "@/typings";
import { QuizType } from "../page";
import { RefObject } from "react";

interface Props {
    selectedCategory: QuizCategory | undefined;
    selectedSubcategory: string | undefined;
    selectedImage: string | undefined;
    selectedQuizType: QuizType;
    imageRef: RefObject<HTMLInputElement>
    handleChangeSelectedCategory: (category: QuizCategory) => void;
    handleChangeSelectedSubcategory: (subcategory: string) => void;
    removeUploadedImage: () => void;
    handleUploadFileClick: () => void;
    handleFileInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void

}

export function FirstStep({ selectedCategory, selectedImage, selectedSubcategory, selectedQuizType, handleChangeSelectedCategory, removeUploadedImage, handleChangeSelectedSubcategory, handleFileInputChange, handleUploadFileClick, imageRef }: Props) {
    return (
        <>
            <QuizSection imageDescription="Number one" imageUrl="numberOne.png" title="What's your Quiz's topic?">
                <Categories selectedCategory={selectedCategory} handleChangeSelectedCategory={handleChangeSelectedCategory} />
                {selectedCategory &&
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
                    <Center borderRadius="50px 0px 0px 50px" w="145px" h="37px" background="rgba(239, 157, 89, 0.50)" _hover={selectedQuizType === "private" ? {} : { background: "rgba(239, 157, 89, 0.50)", cursor: "pointer" }}>
                        <Text textAlign="center" color="black" fontSize="sm" fontWeight="medium">Private</Text>
                    </Center>
                    <Center borderRadius="0px 50px 50px 0px" w="145px" h="37px" background="orange" _hover={selectedQuizType === "public" ? {} : { background: "rgba(239, 157, 89, 0.50)", cursor: "pointer" }}>
                        <Text textAlign="center" color="white" fontSize="sm" fontWeight="medium">Public</Text>
                    </Center>
                </Center>
            </QuizSection>
            <QuizSection imageDescription="Number three" imageUrl="numberThree.png" title="Quiz Title">
                <Center>
                    <Input />
                </Center>
            </QuizSection>
            <QuizSection imageDescription="Number four" imageUrl="numberFour.png" title="Quiz Description">
                <Center>
                    <Textarea w={{ base: "90%", lg: "65%" }} borderRadius="6px" border="1px solid #E2E8F0" placeholder="Placeholder" fontSize="18px" fontWeight="normal" color="#A0AEC0" />
                </Center>
            </QuizSection>
            <QuizSection isLast={true} imageDescription="Number five" imageUrl="numberFive.png" title="Quiz Main Image">
                <Center>
                    <Image src={selectedImage ?? "uploadImage.png"} w="150px" h="150px" />
                </Center>
                <Center pt="40px" gap="10px">
                    {!selectedImage && <Button buttonAction={handleUploadFileClick} text="Select Image to Upload" textColor="white" backgroundColor="blue" borderRadius="10px" />}
                    {selectedImage && <Button buttonAction={removeUploadedImage} text="Remove uploaded image" textColor="white" backgroundColor="orange" borderRadius="10px" />}
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