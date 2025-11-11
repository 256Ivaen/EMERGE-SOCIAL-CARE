import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Dev by Dev - Recruiting Better Developers',
    template: '%s | Dev by Dev'
  },
  description: 'Dev by Dev connects companies with pre-vetted, skilled developers through our rigorous recruitment process. Find your perfect tech talent faster.',
  keywords: 'developer recruitment, tech hiring, software engineers, pre-vetted developers, talent acquisition, tech recruitment',
  authors: [{ name: 'Dev by Dev' }],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Dev by Dev - Recruiting Better Developers',
    description: 'Connect with pre-vetted developers and build your dream team faster with our streamlined recruitment process.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Dev by Dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dev by Dev - Recruiting Better Developers',
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