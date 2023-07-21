"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    yellow: "#E5E0AC",
    white: "#EFEFEF",
    blue: "#2E3182",
    gray: "#3F3D3D",
    transparent: "transparent"
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif"
  },
  styles: {
    global: {
      body: {
        bg: "#E5E0AC",
      },
    },
  },
  fontWeights: {
    regular: 500,
    semibold: 600,
    bold: 700,
  },
  fontSizes: {
    sm: "1rem",
    m: "1.5rem",
    l: "2rem",
    xl: "3.5rem",
  }
});

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width" />
        <title>Qwizard</title>
        <link rel="icon" href=
          "browserIcon.png"
          type="image/png"></link>
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ChakraProvider theme={theme}>
            {children}
          </ChakraProvider>
        </AuthProvider>
      </body>
    </html >
  );
}
