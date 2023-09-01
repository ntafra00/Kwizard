import { Center, HStack, Heading, Stack, Text } from "@/components/chakra"
import { Button } from "@/components/commons/buttons";
import WhiteLayout from "@/layouts/WhiteLayout";
import { FacebookIcon, TwitterIcon, MailIcon } from "@/components/commons/icons";
import { PostCardsGrid, FeaturedPost } from "./components";
import { FEATURED_POST, POSTS } from "@/constants";

export default function Stories() {
    return (
        <>
            <Center>
                <Heading fontWeight="semibold" color="black" fontSize={{ base: "l", md: "xl" }}>Featured post</Heading>
            </Center>
            <FeaturedPost featuredPost={FEATURED_POST} />
            <Center>
                <Heading fontWeight="semibold" color="black" fontSize={{ base: "l", md: "xl" }}>Top Recent Stories</Heading>
            </Center>
            <PostCardsGrid posts={POSTS} />
            <WhiteLayout>
                <Stack pt="40px">
                    <Center>
                        <Text color="blue" fontSize="sm" fontWeight="medium">Think your story should be here?</Text>
                    </Center>
                    <Center pb="50px">
                        <Heading color="orange" fontSize={{ base: "xl", md: "xxl" }} fontWeight="semibold">Send us an owl!</Heading>
                    </Center>
                    <Center>
                        <HStack spacing="80px">
                            <FacebookIcon type="letter" color="blue" />
                            <MailIcon />
                            <TwitterIcon />
                        </HStack>
                    </Center>
                    <Center pt="50px" pb="32px">
                        <Text color="blue" fontSize="sm" fontWeight="medium">We promise we'll take good care of her!</Text>
                    </Center>
                </Stack>
            </WhiteLayout>
            <PostCardsGrid posts={POSTS} />
            <Center pb="64px" pt="32px">
                <Button textColor="blue" text="Load more posts" buttonAction={() => { }} />
            </Center>
        </>
    )
}