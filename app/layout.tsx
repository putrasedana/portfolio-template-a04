import type { Metadata } from 'next'
import { Space_Grotesk, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

// <CHANGE> Using Space Grotesk for futuristic aesthetic
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans'
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
})

// <CHANGE> Enhanced SEO metadata for portfolio
export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.example.com'),
  title: {
    default: 'Alex Rivera - Frontend Developer',
    template: '%s | Alex Rivera'
  },
  description: 'Portfolio of Alex Rivera, a frontend developer specializing in Next.js, React, and modern web technologies. View projects and get in touch.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'Tailwind CSS', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Alex Rivera' }],
  creator: 'Alex Rivera',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Alex Rivera - Frontend Developer',
    description: 'Crafting exceptional web experiences with cutting-edge technologies',
    siteName: 'Alex Rivera Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Rivera - Frontend Developer',
    description: 'Crafting exceptional web experiences with cutting-edge technologies',
  },
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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased`}>
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
