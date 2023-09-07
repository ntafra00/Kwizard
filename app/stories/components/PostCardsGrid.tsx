"use client"

import { PostData } from "@/typings";
import { SimpleGrid, Center } from "@/components/chakra";
import { Button } from "@/components/commons/buttons";
import { PostCard } from "./PostCard";
import { COMMON_PAGE_PADDING } from "@/constants";
import { useState } from "react";

interface Props {
    posts: PostData[];
    isButtonVisible?: boolean;
    applyPadding?: boolean;
}

export function PostCardsGrid({ posts, isButtonVisible = true, applyPadding = false }: Props) {

    const [allPosts, setAllPosts] = useState(posts);

    const handleLoadMoreClick = () => {
        setAllPosts((prevState) => [...prevState, ...posts]);
    }

    return (
        <>
            <SimpleGrid px={applyPadding ? COMMON_PAGE_PADDING : "0px"} pt="40px" rowGap={{ base: "5px", md: "48px" }} columnGap={{ base: "none", md: "28px" }} columns={{ base: 1, md: 2, lg: 2, xl: 4 }}>
                {
                    allPosts.map((post) => {
                        return (
                            <PostCard post={post} key={`${post.id + Date.UTC}`} />
                        )
                    })
                }
            </SimpleGrid >

            {isButtonVisible &&
                <Center pb="64px" pt="32px">
                    <Button textColor="blue" text="Load more posts" buttonAction={handleLoadMoreClick} backgroundColor="transparent" backgroundColorOnClick="transparentOnClick" />
                </Center>
            }
        </>
    )
}