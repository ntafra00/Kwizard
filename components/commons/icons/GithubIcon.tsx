"use client"

import { FaGithub } from "react-icons/fa"
import { Icon } from "@chakra-ui/react";


export function GithubIcon() {
    return (
        <Icon
            as={FaGithub}
            boxSize={{ base: "6", md: "8", lg: "10" }}
        />
    )
}