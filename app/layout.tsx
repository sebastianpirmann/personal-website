import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "./components/Navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dr. Sebastian Pirmann",
  description: "Personal website of Dr. Sebastian Pirmann, Bioinformatics Data Scientist",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
        suppressHydrationWarning
      >
        <Navigation />
        {children}
      </body>
    </html>
  )
}
