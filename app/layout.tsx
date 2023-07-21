"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: ""
      },
    })
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
