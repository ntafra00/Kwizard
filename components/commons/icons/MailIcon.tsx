"use client"

import { FiMail } from "react-icons/fi"
import { Icon } from "@/components/chakra";


export function MailIcon() {
    return (
        <Icon
            as={FiMail}
            boxSize={10}
            color="blue"
            _hover={{ cursor: "pointer" }}
        />
    )
}