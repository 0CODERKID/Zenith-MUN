import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ZENITH MUN - Free Online Model United Nations Conference",
  description:
    "ZENITH Model United Nations is a free online conference created by teenagers for teenagers, bringing together students from around the world to debate global challenges.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover",
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ZENITH MUN",
  },
  formatDetection: {
    telephone: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-black text-white antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'