import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FANDBA - Enterprise IT Solutions & Cybersecurity Services',
  description: 'Leading provider of managed IT services, cybersecurity solutions, AI automation, and cloud services. Trusted by businesses across the globe for digital transformation.',
  keywords: 'IT services, cybersecurity, AI automation, cloud services, managed security, GDPR & PDPL compliance, ISO 27001',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}