"use client"

import { Center, useMediaQuery } from "@/components/chakra";
import Image from "next/image";

interface Props {
    imageUrl: string;
    imageDescription: string;
}

export function QuizImage({ imageUrl, imageDescription }: Props) {

    const [isSmallerThanLargeScreen] = useMediaQuery('(max-width: 992px)');

    return (
        <Center mt={{ base: "20px", lg: "0px" }}>
            <Image src={imageUrl} alt={imageDescription} height={isSmallerThanLargeScreen ? 150 : 300} width={isSmallerThanLargeScreen ? 300 : 500} priority />
        </Center>
    )
}