import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'InstaEdu - Safe Social Learning for Kids 6-12',
  description: 'An Instagram-style social learning platform for children, offering a safe and engaging space for educational content discovery and interaction through short videos, images, and moderated comments.',
  keywords: ['education', 'children', 'learning', 'social media', 'safe', 'kids', 'parental controls'],
  authors: [{ name: 'InstaEdu Team' }],
  openGraph: {
    title: 'InstaEdu - Safe Social Learning for Kids 6-12',
    description: 'An Instagram-style social learning platform for children, offering a safe and engaging space for educational content discovery and interaction through short videos, images, and moderated comments.',
    url: 'https://utopia-ai-prod-1.web.app/projects/wdGXSFyiZMQ4rGJGUejm',
    siteName: 'InstaEdu',
    images: [
      {
        url: '/placeholder.svg?height=630&width=1200',
        width: 1200,
        height: 630,
        alt: 'InstaEdu - Safe Social Learning Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InstaEdu - Safe Social Learning for Kids 6-12',
    description: 'An Instagram-style social learning platform for children with safe, curated educational content.',
    images: ['/placeholder.svg?height=630&width=1200'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
