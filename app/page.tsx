import { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { About } from '@/components/about';
import { Testimonials } from '@/components/testimonials';
import { CTA } from '@/components/cta';

export const metadata: Metadata = {
  title: 'FANDBA - Enterprise IT Solutions & Cybersecurity Services',
  description: 'Leading provider of managed IT services, cybersecurity solutions, AI automation, and cloud services. Trusted by businesses across the globe for digital transformation.',
  keywords: 'IT services, cybersecurity, AI automation, cloud services, managed security, GDPR compliance, ISO 27001, business solutions',
  openGraph: {
    title: 'FANDBA - Enterprise IT Solutions & Cybersecurity Services',
    description: 'Leading provider of managed IT services, cybersecurity solutions, AI automation, and cloud services. Trusted by businesses across the globe for digital transformation.',
    url: 'https://fandba.us',
    siteName: 'FANDBA',
    images: [
      {
        url: 'https://fandba.us/og-image.jpg', // Update with actual image path
        width: 1200,
        height: 630,
        alt: 'FANDBA - IT Solutions & Cybersecurity',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FANDBA - Enterprise IT Solutions & Cybersecurity Services',
    description: 'Leading provider of managed IT services, cybersecurity solutions, AI automation, and cloud services.',
  },
  alternates: {
    canonical: 'https://fandba.us',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CTA />
    </>
  );
}