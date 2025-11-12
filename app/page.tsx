import type { Metadata } from 'next'
import Hero from '../components/Home/Hero'
import FAQWithSpiral from '@/components/ui components/FAQs'
import Stats from '@/components/ui components/Stats'
import BlogsPage from '@/components/Home/Blogs'
import WhyWorkWithUs from '@/components/Home/WhyUs'

export const metadata: Metadata = {
  title: 'Emerge Social Care',
  description: 'Recruiting better developers through rigorous vetting and streamlined hiring processes. Find pre-vetted tech talent for your team.',
  openGraph: {
    title: 'Emerge Social Care - Recruiting Better Developers',
    description: 'Recruiting better developers through rigorous vetting and streamlined hiring processes. Find pre-vetted tech talent for your team.',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Emerge Social Care - Recruiting Better Developers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emerge Social Care - Recruiting Better Developers',
    description: 'Recruiting better developers through rigorous vetting',
    images: ['/hero.png'],
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