import './globals.css'

import Navbar from '@/components/commons/navbar'
import Footer from '@/components/commons/footer'

import Providers from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/browserIcon.png" type="image/png"></link>
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html >
  );
}
