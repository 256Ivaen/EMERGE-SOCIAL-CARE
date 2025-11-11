import type { Metadata } from 'next'
import Hero from '../components/Home/Hero'
import FAQWithSpiral from '@/components/ui components/FAQs'
import Stats from '@/components/ui components/Stats'
import BlogsPage from '@/components/Home/Blogs'
import WhyWorkWithUs from '@/components/Home/WhyUs'

export const metadata: Metadata = {
  title: 'Home - Dev by Dev',
  description: 'Recruiting better developers through rigorous vetting and streamlined hiring processes. Find pre-vetted tech talent for your team.',
  openGraph: {
    title: 'Dev by Dev - Recruiting Better Developers',
    description: 'Recruiting better developers through rigorous vetting and streamlined hiring processes. Find pre-vetted tech talent for your team.',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Dev by Dev - Recruiting Better Developers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dev by Dev - Recruiting Better Developers',
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
      {/* <FAQWithSpiral /> */}
    </div>
  )
}