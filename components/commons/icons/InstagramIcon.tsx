"use client"

import { BsInstagram } from "react-icons/bs"
import { Icon } from "@/components/chakra";


export function InstagramIcon() {
    return (
        <Icon
            as={BsInstagram}
            boxSize={{ base: "6", md: "8", lg: "10" }}
        />
    )
}