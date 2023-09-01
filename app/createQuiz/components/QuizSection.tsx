import { Box, Center, Image, Heading } from "@/components/chakra";

interface Props {
    children: React.ReactNode;
    imageUrl: string;
    imageDescription: string;
    title: string;
    isLast?: boolean;
}

export function QuizSection({ children, imageUrl, imageDescription, title, isLast = false }: Props) {
    return (
        <>
            <Box borderRadius="50px" border="1px solid #2E3182" background="white" pt="38px" pb="65px" px={{ base: "10px", lg: "94px" }}>
                <Center pb="40px" gap="5px">
                    <Image src={imageUrl} alt={imageDescription} />
                    <Heading color="blue" fontSize={{ base: "sm", lg: "md" }} fontWeight="medium" textAlign="center">{title}</Heading>
                </Center>
                {children}
            </Box>
            {!isLast && <Center>
                <Box w="1px" height="40px" background="blue" />
            </Center>
            }
        </>
    )
}