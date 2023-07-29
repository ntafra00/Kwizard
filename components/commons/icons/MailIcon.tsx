"use client"

import { FiMail } from "react-icons/fi"
import { Icon } from "@chakra-ui/react";


export function MailIcon() {
    return (
        <Icon
            as={FiMail}
            boxSize={10}
            color="blue"
        />
    )
}