"use client"

import { AuthProvider } from '@/contexts/AuthContext'
import { ChakraProvider, extendTheme } from "@/components/chakra"
import { CacheProvider } from '@chakra-ui/next-js'

const theme = extendTheme({
    colors: {
        yellow: "#E5E0AC",
        white: "#EFEFEF",
        whiteOnClick: "#E4E4E4",
        blue: "#2E3182",
        blueOnClick: "#454782",
        gray: "#3F3D3D",
        black: "#000000",
        orange: "#EF9D59",
        smoke: "rgba(63, 61, 61, 0.54)",
        transparent: "transparent",
        transparentOnClick: "#ebe7bb",
    },
    fonts: {
        body: "Poppins, sans-serif",
        heading: "Poppins, sans-serif",
        mono: "Poppins, sans-serif",
    },
    styles: {
        global: {
            body: {
                bg: "#E5E0AC",
            },
        },
    },
    fontWeights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },
    fontSizes: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        l: "2rem",
        xl: "2.5rem",
        xxl: "3.5rem",
        xxxl: "4rem",
    }
});

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </ChakraProvider>
        </CacheProvider>
    )
}
