import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'FANDBA - Enterprise IT Solutions & Cybersecurity Services',
    template: '%s | FANDBA',
  },
  description: 'Leading provider of managed IT services, cybersecurity solutions, AI automation, and cloud services. Trusted by businesses across the globe for digital transformation.',
  keywords: 'IT services, cybersecurity, AI automation, cloud services, managed security, GDPR compliance, ISO 27001, business solutions, digital transformation',
  authors: [{ name: 'FANDBA', url: 'https://fandba.us' }],
  creator: 'FANDBA',
  publisher: 'FANDBA',
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL('https://fandba.us'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fandba.us',
    title: 'FANDBA - Enterprise IT Solutions & Cybersecurity Services',
    description: 'Leading provider of managed IT services, cybersecurity solutions, AI automation, and cloud services.',
    siteName: 'FANDBA',
    images: [
      {
        url: 'https://fandba.us/og-default.jpg', // Update with actual image path
        width: 1200,
        height: 630,
        alt: 'FANDBA - IT Solutions & Cybersecurity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FANDBA - Enterprise IT Solutions & Cybersecurity Services',
    description: 'Leading provider of managed IT services, cybersecurity solutions, AI automation, and cloud services.',
    creator: '@fandba',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'NBHOZt9F-_aZiJYKjOks5otI7C7GghJpBQ25hRs54hA', // Keep existing verification
  },
  alternates: {
    canonical: 'https://fandba.us',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FANDBA',
    alternateName: 'FANDBA Enterprise IT Solutions',
    url: 'https://fandba.us',
    logo: 'https://fandba.us/logo.png', // Update with actual logo path
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-307-533-5472',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'en',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+1-307-533-5472',
        contactType: 'technical support',
        areaServed: 'US',
        availableLanguage: 'en',
      }
    ],
    sameAs: [
      'https://www.linkedin.com/company/fandba',
      'https://twitter.com/fandba',
      'https://www.facebook.com/fandba'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '30 N Gould ST Suite 32966',
      addressLocality: 'Sheridan',
      addressRegion: 'WY',
      postalCode: '82801',
      addressCountry: 'US'
    },
    foundingDate: '2020',
    identifier: 'FANDBA',
    email: 'info@fandba.us',
    vatID: 'TBD', // Add actual VAT ID if applicable
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}