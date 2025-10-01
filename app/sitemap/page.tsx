import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap - FANDBA',
  description: 'Sitemap for FANDBA website and services',
};

export default function Sitemap() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Site <span className="text-blue-600">Map</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Navigate through all pages of our website
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Company</h2>
              <ul className="space-y-2">
                <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
                <li><Link href="/about" className="text-blue-600 hover:underline">About Us</Link></li>
                <li><Link href="/contact" className="text-blue-600 hover:underline">Contact</Link></li>
                <li><Link href="/blog" className="text-blue-600 hover:underline">Blog</Link></li>
                <li><Link href="/shop" className="text-blue-600 hover:underline">Shop</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Services</h2>
              <ul className="space-y-2">
                <li><Link href="/services/managed-it" className="text-blue-600 hover:underline">Managed IT Services</Link></li>
                <li><Link href="/services/cybersecurity" className="text-blue-600 hover:underline">Cybersecurity</Link></li>
                <li><Link href="/services/ai-automation" className="text-blue-600 hover:underline">AI & Automation</Link></li>
                <li><Link href="/services/managed-cloud" className="text-blue-600 hover:underline">Cloud Services</Link></li>
                <li><Link href="/services/managed-security" className="text-blue-600 hover:underline">Managed Security</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Products</h2>
              <ul className="space-y-2">
                <li><Link href="/products/privacycomply-ai" className="text-blue-600 hover:underline">PrivacyComply.ai</Link></li>
                <li><Link href="/products/gdpr-compliance" className="text-blue-600 hover:underline">GDPR Compliance</Link></li>
                <li><Link href="/products/virtual-ciso-ai" className="text-blue-600 hover:underline">Virtual CISO AI Powered</Link></li>
                <li><Link href="/products/cyberstep" className="text-blue-600 hover:underline">CyberStep</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Legal</h2>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Support</h2>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-blue-600 hover:underline">Contact Support</Link></li>
                <li><Link href="/services/sla" className="text-blue-600 hover:underline">Service Level Agreement</Link></li>
                <li><Link href="/services/it-support-consulting" className="text-blue-600 hover:underline">IT Consulting</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Industries</h2>
              <ul className="space-y-2">
                <li><Link href="/services/managed-it" className="text-blue-600 hover:underline">Healthcare IT</Link></li>
                <li><Link href="/services/cybersecurity" className="text-blue-600 hover:underline">Financial Services</Link></li>
                <li><Link href="/services/managed-cloud" className="text-blue-600 hover:underline">Education</Link></li>
                <li><Link href="/services/managed-security" className="text-blue-600 hover:underline">Government</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}