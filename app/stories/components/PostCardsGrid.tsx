import { PostData } from "@/typings";
import { SimpleGrid } from "@chakra-ui/react";
import { PostCard } from "./PostCard";
import { COMMON_PAGE_PADDING } from "@/constants";

interface Props {
    posts: PostData[];
}

export function PostCardsGrid({ posts }: Props) {
    return <SimpleGrid px={COMMON_PAGE_PADDING} pt="40px" rowGap={{ base: "5px", md: "48px" }} columnGap={{ base: "none", md: "28px" }} columns={{ base: 1, md: 2, lg: 2, xl: 4 }}>
        {
            posts.map((post) => {
                return (
                    <PostCard post={post} />
                )
            })
        }
    </SimpleGrid >
}