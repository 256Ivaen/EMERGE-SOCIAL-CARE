import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Emerge Social Care - Recruiting Better Developers',
    template: '%s | Emerge Social Care'
  },
  description: 'Emerge Social Care connects companies with pre-vetted, skilled developers through our rigorous recruitment process. Find your perfect tech talent faster.',
  keywords: 'developer recruitment, tech hiring, software engineers, pre-vetted developers, talent acquisition, tech recruitment',
  authors: [{ name: 'Emerge Social Care' }],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Emerge Social Care - Recruiting Better Developers',
    description: 'Connect with pre-vetted developers and build your dream team faster with our streamlined recruitment process.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Emerge Social Care',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emerge Social Care - Recruiting Better Developers',
    description: 'Connect with pre-vetted developers and build your dream team faster',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen relative">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          
          <main className="relative z-10 min-h-screen">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  )
}