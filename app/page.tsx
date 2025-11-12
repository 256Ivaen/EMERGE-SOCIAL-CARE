import type { Metadata } from 'next'
import Hero from '../components/Home/Hero'
import FAQWithSpiral from '@/components/ui components/FAQs'
import Stats from '@/components/ui components/Stats'
import BlogsPage from '@/components/Home/Blogs'
import WhyWorkWithUs from '@/components/Home/WhyUs'

const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://emergesocialcare.co.uk'
  : process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Emerge Social Care - Ofsted Registration & Compliance Experts',
  description: 'Expert Ofsted registration, compliance support, and advisory services for children homes and supported accommodation providers. Build compliant, quality care services across the UK.',
  keywords: 'Ofsted registration, children homes, supported accommodation, Ofsted compliance, social care consultancy, children services, care home registration, Ofsted advisory, social care training, care home software',
  authors: [{ name: 'Emerge Social Care Advisory & Consulting' }],
  creator: 'Emerge Social Care',
  publisher: 'Emerge Social Care',
  robots: 'index, follow',
  openGraph: {
    title: 'Emerge Social Care - Ofsted Registration & Compliance Experts',
    description: 'End-to-end Ofsted registration and compliance support for children homes and supported accommodation providers across the UK. Building Compliance. Inspiring Quality.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Emerge Social Care',
    url: `${baseUrl}`,
    images: [
      {
        url: `${baseUrl}/hero.jpg`, // Use full absolute path
        width: 1200,
        height: 630,
        alt: 'Emerge Social Care - Building Compliance. Inspiring Quality.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emerge Social Care - Ofsted Registration & Compliance Experts',
    description: 'Expert Ofsted registration and compliance support for children services. Building Compliance. Inspiring Quality.',
    creator: '@emergesocialcare',
    images: [`${baseUrl}/hero.jpg`],
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Stats /> */}
      {/* <WhyWorkWithUs /> */}
      {/* <BlogsPage /> */}
      <FAQWithSpiral />
    </div>
  )
}