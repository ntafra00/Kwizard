import { Center, Heading } from "@/components/chakra"
import { PostCardsGrid, FeaturedPost, SocialMediaSection } from "./components";
import { FEATURED_POST, POSTS } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Qwizard | Stories",
    description: "Find all the quiz related stories on one place",
}

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
            <PostCardsGrid posts={POSTS} isButtonVisible={false} applyPadding />
            <SocialMediaSection />
            <PostCardsGrid posts={POSTS} applyPadding />
        </>
    )
}