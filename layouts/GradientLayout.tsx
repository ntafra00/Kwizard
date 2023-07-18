"use client"

import { Box } from "@chakra-ui/react"

interface Props {
    children: React.ReactNode;
}

export default function GradientLayout({ children }: Props) {
    return (
        <Box w='100%' h='fit-content' background='linear-gradient(180deg, #F0F 0%, #0FF 100%)' overflow="hidden">
            {children}
        </Box>
    )
}