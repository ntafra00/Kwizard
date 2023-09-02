import { Flex, Heading, Text, Stack, Link, Image } from "@/components/chakra";
import { COMMON_PAGE_PADDING } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Qwizard | Not Found",
}

export default function NotFound() {
    return (
        <Flex px={COMMON_PAGE_PADDING} py={{ base: "40px", lg: "80px" }} direction={{ base: "column", lg: "row" }} gap={{ base: "20px", lg: "none" }}>
            <Stack gap={{ base: "50px", lg: "95px" }} w={{ base: "100", lg: "50%" }} pt={{ base: "none", lg: "60px" }}>
                <Text color="smoke" fontSize={{ base: "sm", md: "md" }} fontWeight="semibold" textAlign={{ base: "center", lg: "start" }}>Oh-oh, I guess that 404 wasn't the right path to choose.</Text>
                <Heading color="black" fontSize={{ base: "md", md: "xl" }} fontWeight="semibold" textAlign={{ base: "center", lg: "start" }}>Unfortunately, no magic spells can help you now, but you could try teleporting to our <Link color="blue" href="/">front page</Link>.</Heading>
            </Stack>
            <Flex alignItems="center" justifyContent={{ base: "center", lg: "flex-end" }} w={{ base: "100", lg: "50%" }}>
                <Image src="notFound.png" alt="Wizard in the woods" />
            </Flex>
        </Flex >
    )
}