import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" })

export const metadata: Metadata = {
  title: "Boundary Lodge",
  description: "Experience modern luxury in the heart of Harare at Boundary Lodge",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
