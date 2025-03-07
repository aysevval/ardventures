import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/context/AuthContext"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ArdVenture KFS - Kitle Fonlama Sistemi",
  description: "Girişimciler ve yatırımcılar arasında güvenli, hızlı ve modern bir köprü",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

