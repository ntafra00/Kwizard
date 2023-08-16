"use client"

import { Box, Center } from "@chakra-ui/react";

import { ProgressBar, SecondStep } from "./components";
import { Button } from "@/components/commons/buttons";
import { useState, useRef } from "react";
import { QuizCategory } from "@/typings";
import { FirstStep } from "./components/FirstStep";
import { ThirdStep } from "./components/ThirdStep";

export type QuizType = "private" | "public";

export default function CreateQuiz() {
    const [currentStep, setCurrentStep] = useState(2);
    const [selectedCategory, setSelectedCategory] = useState<QuizCategory>();
    const [selectedSubcategory, setSelectedSubcategory] = useState<string>();
    const [selectedQuizType, setSelectedQuizType] = useState<QuizType>("public");
    const [selectedImage, setSelectedImage] = useState<string>();
    const imageRef = useRef<HTMLInputElement>(null);

    const handleChangeSelectedCategory = (category: QuizCategory) => {
        setSelectedCategory(category);
        setSelectedSubcategory(undefined);
    }

    const handleChangeSelectedSubcategory = (subcategory: string) => {
        setSelectedSubcategory(subcategory);
    }

    const handleUploadFileClick = () => {
        if (!imageRef) {
            return;
        }
        imageRef.current?.click();
    }

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files && files.length > 0) {
            setSelectedImage(URL.createObjectURL(files[0]));
        }
    };

    const removeUploadedImage = () => {
        setSelectedImage(undefined);
    }

    const increaseCurrentStep = () => {
        setCurrentStep((prevState) => prevState + 1);
        scrollToProgressBar();
    }

    const handleStepClick = (step: number) => {
        setCurrentStep(step);
    } 

    const scrollToProgressBar = () => {
        document.getElementById("progressBar")?.scrollIntoView();
    }

    return (
        <Box px={{ base: "32px", md: "258px" }} pt="40px">
            <ProgressBar currentStep={currentStep} handleStepClick={handleStepClick}/>
            {currentStep === 0 &&
                <FirstStep
                    handleChangeSelectedCategory={handleChangeSelectedCategory}
                    handleChangeSelectedSubcategory={handleChangeSelectedSubcategory}
                    imageRef={imageRef}
                    removeUploadedImage={removeUploadedImage}
                    selectedCategory={selectedCategory}
                    selectedImage={selectedImage}
                    selectedQuizType={selectedQuizType}
                    selectedSubcategory={selectedSubcategory}
                    handleUploadFileClick={handleUploadFileClick}
                    handleFileInputChange={handleFileInputChange}
                />}
            {currentStep === 1 &&
                <SecondStep />
            }
            {currentStep === 2 &&
                <ThirdStep />
            }
            <Center pt="40px" pb="64px">
                {currentStep !== 2 &&
                    <Button buttonAction={increaseCurrentStep} text="Next Page" textColor="white" backgroundColor="orange" fontSize="md" />
                }
            </Center>
        </Box>
    )
}