import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import './globals.css'
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from '@/components/commons/navbar'
import Footer from '@/components/commons/footer'
import { ThemeProvider } from '@/components/theme/themeProvider'

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  return (
    <html lang="en">
        <body className={inter.className}>
        <SessionProvider session={session}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Navbar />
              <Toaster />
              {children}
              <Footer />
          </ThemeProvider>
        </SessionProvider>
        </body>
      </html>
  )
}
