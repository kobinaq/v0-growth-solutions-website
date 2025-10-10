import type React from "react"
import type { Metadata } from "next/metadata"
import { Space_Grotesk, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import siteData from "@/content/site.json"
import { Suspense } from "react"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: siteData.siteTitle,
  description: siteData.metaDescription,
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <Suspense>
          <Navigation />
          {children}
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
