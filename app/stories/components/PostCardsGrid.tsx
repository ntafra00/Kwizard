"use client"

import { PostData } from "@/typings";
import { SimpleGrid, Center } from "@/components/chakra";
import { Button } from "@/components/commons/buttons";
import { PostCard } from "./PostCard";
import { COMMON_PAGE_PADDING } from "@/constants";

interface Props {
    posts: PostData[];
    isButtonVisible?: boolean;
}

export function PostCardsGrid({ posts, isButtonVisible = true }: Props) {
    return (
        <>
            <SimpleGrid px={COMMON_PAGE_PADDING} pt="40px" rowGap={{ base: "5px", md: "48px" }} columnGap={{ base: "none", md: "28px" }} columns={{ base: 1, md: 2, lg: 2, xl: 4 }}>
                {
                    posts.map((post) => {
                        return (
                            <PostCard post={post} key={post.id} />
                        )
                    })
                }
            </SimpleGrid >

            {isButtonVisible &&
                <Center pb="64px" pt="32px">
                    <Button textColor="blue" text="Load more posts" buttonAction={() => { }} backgroundColor="transparent" backgroundColorOnClick="transparentOnClick" />
                </Center>
            }
        </>
    )
}