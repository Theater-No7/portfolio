import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import CustomCursor from "@/components/portfolio/custom-cursor"
import AmbientBackground from "@/components/portfolio/ambient-background"
import ScrollBubbles from "@/components/portfolio/scroll-bubbles"
import './globals.css'

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-jp",
  weight: ["400", "500", "700"],
  display: "swap",
});

const TEMP_DOMAIN = "https://theater-no7-portfolio-2026.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(TEMP_DOMAIN),
  title: {
    default: "Leo Sato | UX Planner & Prototyper",
    template: "%s | Leo Sato"
  },
  description: "技術とビジネスの架け橋となるポートフォリオサイト。",
  openGraph: {
    title: "Leo Sato | UX Planner & Prototyper",
    description: "技術とビジネスの架け橋となるポートフォリオサイト。",
    url: TEMP_DOMAIN,
    siteName: "Leo Sato Portfolio",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Leo Sato Portfolio Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leo Sato | UX Planner & Prototyper",
    description: "技術とビジネスの架け橋となるポートフォリオサイト。",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${notoSansJP.variable} font-sans antialiased bg-transparent text-white selection:bg-[#148E96] selection:text-white`}>
        <AmbientBackground />
        <ScrollBubbles />
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}