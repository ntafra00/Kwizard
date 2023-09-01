import { Stack, Image, Center } from "@/components/chakra";

import { Button } from "@/components/commons/buttons";

interface Props {
    imageUrl: string;
    imageDescription: string;
    buttonText: string;
    buttonAction: () => void;
}

export function QuizInfo({ imageUrl, buttonText, imageDescription, buttonAction }: Props) {
    return (
        <Stack spacing="56px">
            <Center>
                <Image src={imageUrl} alt={imageDescription} />
            </Center>
            <Button buttonAction={buttonAction} text={buttonText} textColor="black" key={buttonText} fontSize="md" />
        </Stack>
    )
}