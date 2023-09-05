import { Flex, Heading, Link, Text, Center, Box } from "@/components/chakra";
import { ChevronLeftIcon } from "@/components/chakra-icons";
import { COMMON_PAGE_PADDING } from "@/constants";
import WhiteLayout from "@/layouts/WhiteLayout";
import { Metadata } from "next";
import { POSTS } from "@/constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PostCardsGrid, SocialMediaSection } from "../components";

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
        <>
            <Flex px={COMMON_PAGE_PADDING} pt="36px" direction="column">
                <Flex>
                    <Link textColor="black" fontWeight="medium" fontSize="20px" href="/stories"><ChevronLeftIcon /> Back to all stories</Link>
                </Flex>
                <Flex gap="40px" pt="36px" pb="80px" direction={{ base: "column", lg: "row" }}>
                    <Flex direction="column" w={{ base: "100%", lg: "50%" }} gap="10px" justifyContent="center">
                        <Text color="blue" fontSize="sm" fontWeight="bold" textAlign="left">{foundPost.topic}</Text>
                        <Heading color="black" fontSize={{ base: "l", md: "xl", lg: "xxl" }} fontWeight="semibold" textAlign="left">{foundPost.description}</Heading>
                        <Flex>
                            <Text color="gray" fontSize="sm" fontWeight="medium" textAlign="left">by <Text color="blue" fontWeight="bold" display="inline">{foundPost.author.name}</Text></Text>
                        </Flex>
                        <Text color="smoke" fontSize="sm" fontWeight="medium">{foundPost.date}</Text>
                    </Flex>
                    <Flex w={{ base: "100%", lg: "50%" }} justifyContent={{ base: "center", lg: "flex-end" }} alignItems="center">
                        <Image src={foundPost.imageUrl} alt={foundPost.description} width={590} height={370} priority />
                    </Flex>
                </Flex>
                <WhiteLayout>
                    <Center px={COMMON_PAGE_PADDING} pt={{ base: "30px", lg: "50px" }} pb={{ base: "20px", lg: "30px" }}>
                        <Flex w="70%" direction="column">
                            {foundPost.content?.headings.map((heading, index) => (
                                <Flex direction="column">
                                    <Heading color="black" fontWeight="semibold" fontSize={{ base: "md", lg: "l" }}>{heading}</Heading>
                                    <br></br>
                                    <Text color="black" fontWeight="regular" fontSize="sm">{foundPost.content?.texts[index]}</Text>
                                    <br></br>
                                </Flex>
                            ))}
                            <Box px="24px" pt="24px" pb="50px" borderRadius="8px" backgroundColor="blue" mt="24px" w="100%">
                                <Text color="orange" fontSize="20px" fontWeight="bold" pb="16px">{foundPost.author.name}</Text>
                                <Text color="white" fontSize="20px" fontWeight="regular">{foundPost.author.about}</Text>
                            </Box>
                        </Flex>
                    </Center>
                </WhiteLayout>
                <Flex direction="column" pt="30px" w="100%">
                    <Text color="black" fontSize="l" fontWeight="regular" pb={{ base: "40px", lg: "80px" }}>Read More</Text>
                    <PostCardsGrid posts={POSTS} isButtonVisible={false} />
                </Flex>
            </Flex >
            <SocialMediaSection />
        </>
    )
}