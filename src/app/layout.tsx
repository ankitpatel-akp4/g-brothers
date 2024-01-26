import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/commons/navbar'
import Footer from '@/components/commons/footer'
import NextAuthProvider from '@/context/nextAuthProvider'
import { ThemeProvider } from '@/components/theme/themeProvider'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { ToastWrapper } from '@/components/commons/toastWrapper'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'G brothers',
  description: 'Home page',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/img/favicon.sbg',
        href: '/img/favicon.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/img/favicon.svg',
        href: '/img/favicon.svg',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={inter.className+'bg-background text-foreground'} suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextAuthProvider >
            <Navbar />
            {children}
            <Footer />
            <ToastWrapper/>
          </NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
