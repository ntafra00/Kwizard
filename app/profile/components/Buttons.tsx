"use client"

import { Center } from "@/components/chakra";
import { Button } from "@/components/commons/buttons";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Buttons() {

    const router = useRouter();

    const handleRedirectToQuizzes = () => {
        router.push("/quizzes");
    }

    const handleRedirectToStories = () => {
        router.push("/stories");
    }

    return (
        <>
            <Center pt="50px">
                <Button backgroundColorOnClick="whiteOnClick" backgroundColor="white" text="View Stories" textColor="blue" borderColor="#2E3182" key="View Stories button" buttonAction={handleRedirectToStories} leftIcon={<Image src="/postWriting.png" alt="Post writing" width={16} height={16} />} />
            </Center>
            <Center pt="16px">
                <Button backgroundColorOnClick="whiteOnClick" backgroundColor="white" text="View Quizzes" textColor="orange" borderColor="#EF9D59" key="View Quizzes" buttonAction={handleRedirectToQuizzes} leftIcon={<Image src="/lightBulb.png" alt="Light bulb" width={16} height={16} />} />
            </Center>
        </>
    )
}