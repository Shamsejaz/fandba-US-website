import { Metadata } from 'next';
import ContactFormClient from '@/components/ContactFormClient';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Contact FANDBA - Get IT Solutions & Cybersecurity Support',
  description: 'Get in touch with FANDBA for enterprise IT solutions, cybersecurity services, and digital transformation support. Reach our experts today.',
  keywords: 'contact FANDBA, IT support, cybersecurity consultation, business solutions contact, digital transformation support',
  openGraph: {
    title: 'Contact FANDBA - Get IT Solutions & Cybersecurity Support',
    description: 'Get in touch with FANDBA for enterprise IT solutions, cybersecurity services, and digital transformation support. Reach our experts today.',
    url: 'https://fandba.us/contact',
    siteName: 'FANDBA',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact FANDBA - IT Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact FANDBA - Get IT Solutions & Cybersecurity Support',
    description: 'Get in touch with FANDBA for enterprise IT solutions, cybersecurity services, and digital transformation support.',
  },
  alternates: {
    canonical: 'https://fandba.us/contact',
  },
};

export default function Contact() {
  // Local Business Structured Data
  const localBusinessSchema = {
    '@type': 'LocalBusiness' as const,
    name: 'FANDBA',
    image: [
      '/logo.png'
    ],
    telephone: '+1-307-533-5472',
    email: 'info@fandba.us',
    address: {
      '@type': 'PostalAddress' as const,
      streetAddress: '30 N Gould ST Suite 32966',
      addressLocality: 'Sheridan',
      addressRegion: 'WY',
      postalCode: '82801',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates' as const,
      latitude: 44.7979,
      longitude: -106.9513
    },
    url: 'https://fandba.us',
    sameAs: [
      'https://www.linkedin.com/company/fandba',
      'https://twitter.com/fandba',
      'https://www.facebook.com/fandba'
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification' as const,
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification' as const,
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59'
      }
    ],
    servesCurrencies: ['USD']
  };

  return (
    <>
      <StructuredData type="LocalBusiness" data={localBusinessSchema} />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                Contact <span className="text-blue-600">FANDBA</span>
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
                Ready to transform your business with our IT solutions? 
                Get in touch with our experts today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <ContactFormClient />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <p className="text-gray-600 mb-8">
                    We're here to help you with all your IT needs. Reach out to us through 
                    any of the following channels, and we'll get back to you promptly.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      US Operations
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-lg mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Phone</h4>
                          <p className="text-gray-600">+1 307-533-5472</p>
                          <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-lg mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">WhatsApp</h4>
                          <p className="text-gray-600">+1 307-533-5472</p>
                          <p className="text-sm text-gray-500">Quick support and consultations</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-red-100 p-2 rounded-lg mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Email</h4>
                          <p className="text-gray-600">info@fandba.us</p>
                          <p className="text-gray-600">sales@fandba.us</p>
                          <p className="text-sm text-gray-500">We'll respond within 4 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-purple-100 p-2 rounded-lg mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243C4.678 15.186 4 13.92 4 12.5V6a1 1 0 011-1h2a1 1 0 011 1v6.5l4 4 4-4V6a1 1 0 011-1h2a1 1 0 011 1v10.5a1.5 1.5 0 01-2.343 1.157z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Office</h4>
                          <p className="text-gray-600">
                            30 N Gould ST Suite 32966<br />
                            Sheridan, WY 82801, USA
                          </p>
                          <p className="text-sm text-gray-500">Visit by appointment</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      UK Operations
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-lg mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Phone</h4>
                          <p className="text-gray-600">+44 7868693235</p>
                          <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-lg mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">WhatsApp</h4>
                          <p className="text-gray-600">+44 7868693235</p>
                          <p className="text-sm text-gray-500">Quick support and consultations</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-red-100 p-2 rounded-lg mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Email</h4>
                          <p className="text-gray-600">info@fandba.co.uk</p>
                          <p className="text-gray-600">sales@fandba.co.uk</p>
                          <p className="text-sm text-gray-500">We'll respond within 4 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-purple-100 p-2 rounded-lg mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243C4.678 15.186 4 13.92 4 12.5V6a1 1 0 011-1h2a1 1 0 011 1v6.5l4 4 4-4V6a1 1 0 011-1h2a1 1 0 011 1v10.5a1.5 1.5 0 01-2.343 1.157z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Office</h4>
                          <p className="text-gray-600">
                            London, United Kingdom
                          </p>
                          <p className="text-sm text-gray-500">Visit by appointment</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Business Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday - Sunday</span>
                      <span className="text-gray-900">Emergency Support Only</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Emergency Support</span>
                      <span className="text-gray-900">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}