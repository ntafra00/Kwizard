"use client"
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'


import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Navbar from '@/components/commons/navbar'
import Footer from '@/components/commons/footer'

const theme = extendTheme({
  colors: {
    yellow: "#E5E0AC",
    white: "#EFEFEF",
    blue: "#2E3182",
    gray: "#3F3D3D",
    black: "#000000",
    orange: "#EF9D59",
    smoke: "rgba(63, 61, 61, 0.54)",
    transparent: "transparent"
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
      <body>
        <AuthProvider>
          <ChakraProvider theme={theme}>
            <Navbar />
            {children}
            <Footer />
          </ChakraProvider>
        </AuthProvider>
      </body>
    </html >
  );
}
