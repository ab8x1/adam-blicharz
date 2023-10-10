import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import NavigationEvents from '@/components/Navigation-Events'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adam Blicharz | Fullstack JS Dev',
  description: "Hi, I'm Adam - Fullstack JavaScript Web Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationEvents/>
        <Navbar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
