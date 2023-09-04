import { Flex, Heading, Image, Link, Text, Center } from "@/components/chakra";
import { ChevronLeftIcon } from "@/components/chakra-icons";
import { COMMON_PAGE_PADDING } from "@/constants";
import WhiteLayout from "@/layouts/WhiteLayout";
import { Metadata } from "next";
import { POSTS } from "@/constants";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: "Qwizard | Selected Story",
    description: "All the additional info about story you selected",
}

export default function SelectedStory({
    params,
}: {
    params: { id: string }
}) {
    const { id } = params;
    const foundPost = POSTS.find((post) => post.id === id);
    if (!foundPost) {
        return notFound();
    }
    return (
        <Flex px={COMMON_PAGE_PADDING} pt="36px" direction="column">
            <Flex>
                <Link textColor="black" fontWeight="medium" fontSize="20px" href="/stories"><ChevronLeftIcon /> Back to all stories</Link>
            </Flex>
            <Flex gap="40px" pt="36px" pb="80px">
                <Flex direction="column" w="50%" gap="10px">
                    <Text color="blue" fontSize="sm" fontWeight="bold" textAlign="left">{foundPost.topic}</Text>
                    <Heading color="black" fontSize="xxl" fontWeight="semibold" textAlign="left">{foundPost.description}</Heading>
                    <Flex>
                        <Text color="gray" fontSize="sm" fontWeight="medium" textAlign="left">by <Text color="blue" fontWeight="bold" display="inline">NIKOLA TAFRA</Text></Text>
                    </Flex>
                    <Text color="smoke" fontSize="sm" fontWeight="medium">19/07/2023</Text>
                </Flex>
                <Flex w="50%" justifyContent="flex-end" alignItems="center">
                    <Image src="../featuredPost.png" />
                </Flex>
            </Flex>
            <WhiteLayout>
                <Center px={COMMON_PAGE_PADDING} pt="50px" pb="30px">
                    <Flex w="70%">
                        {foundPost.content?.headings.map((heading, index) => (
                            <Flex direction="column">
                                <Heading>{heading}</Heading>
                                <br></br>
                                <Text>{foundPost.content?.texts[index]}</Text>
                            </Flex>
                        ))}
                    </Flex>
                </Center>
            </WhiteLayout>
        </Flex >
    )
}