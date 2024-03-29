import { Box } from "@/components/chakra"

interface Props {
    children: React.ReactNode;
}

export default function WhiteLayout({ children }: Props) {
    return (
        <Box w='100%' h='fit-content' background="white" overflow="hidden">
            {children}
        </Box>
    )
}