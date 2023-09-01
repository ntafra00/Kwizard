"use client"

import { FiTwitter } from "react-icons/fi"
import { Icon } from "@/components/chakra";


export function TwitterIcon() {
    return (
        <Icon
            as={FiTwitter}
            boxSize={10}
            color='blue'
        />
    )
}