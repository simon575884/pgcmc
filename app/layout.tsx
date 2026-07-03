import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const anton = Anton({
  variable: '--font-anton',
  weight: '400',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'PGC | Pakistan Gamers Community — Minecraft Tournaments & LifeSteal SMP',
  description:
    "Pakistan's largest gaming community. Join our exclusive Minecraft LifeSteal SMP, esports tournaments, events, and connect with thousands of competitive gamers.",
  generator: 'v0.app',
  keywords: 'Minecraft, Pakistan, gaming, SMP, LifeSteal, tournament, PGC, gamers',
  authors: [{ name: 'PGC Team' }],
  creator: 'Pakistan Gamers Community',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://pgcmc.fun',
    title: 'PGC | Pakistan Gamers Community',
    description: 'Join Pakistan\'s largest gaming community. Minecraft tournaments, LifeSteal SMP, and exclusive events.',
    images: [
      {
        url: '/images/pgc-logo.png',
        width: 512,
        height: 512,
        alt: 'PGC Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PGC | Pakistan Gamers Community',
    description: 'Pakistan\'s home for Minecraft tournaments and LifeSteal SMP',
    images: ['/images/pgc-logo.png'],
  },
  icons: {
    icon: '/favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b140f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
