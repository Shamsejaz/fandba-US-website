import { Metadata } from 'next';
import Link from 'next/link';
import { ShoppingCart, Star, Filter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IT Solutions Shop - FANDBA | Hardware, Software & Services',
  description: 'Browse our comprehensive catalog of IT hardware, software licenses, security solutions, and professional services packages.',
  openGraph: {
    title: 'IT Solutions Shop - FANDBA | Hardware, Software & Services',
    description: 'Browse our comprehensive catalog of IT hardware, software licenses, security solutions, and professional services packages.',
    url: 'https://fandba.us/shop',
    type: 'website',
    images: [
      {
        url: '/og-shop.jpg',
        width: 1200,
        height: 630,
        alt: 'FANDBA IT Solutions Shop - Hardware, Software & Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Solutions Shop - FANDBA | Hardware, Software & Services',
    description: 'Browse our comprehensive catalog of IT hardware, software licenses, security solutions, and professional services packages.',
  },
  alternates: {
    canonical: 'https://fandba.us/shop',
  },
};

const products = [
  {
    name: 'Microsoft 365 Business Premium',
    category: 'Software Licenses',
    price: '22.00',
    originalPrice: '25.00',
    currency: 'USD/month',
    rating: 4.8,
    reviews: 150,
    features: ['Email & Calendar', 'Office Apps', 'Teams', '1TB Storage', 'Advanced Security'],
    badge: 'Popular'
  },
  {
    name: 'Firewall Security Appliance',
    category: 'Hardware',
    price: '2,499.00',
    originalPrice: null,
    currency: 'USD',
    rating: 4.9,
    reviews: 87,
    features: ['Next-Gen Firewall', 'Intrusion Prevention', 'VPN Support', '24/7 Support'],
    badge: 'Enterprise'
  },
  {
    name: 'Cloud Backup Service',
    category: 'Services',
    price: '15.00',
    originalPrice: null,
    currency: 'USD/month',
    rating: 4.7,
    reviews: 203,
    features: ['Unlimited Storage', 'Automated Backups', 'Point-in-time Recovery', 'AES Encryption'],
    badge: 'Recommended'
  },
  {
    name: 'Endpoint Detection & Response',
    category: 'Security Software',
    price: '8.50',
    originalPrice: '12.00',
    currency: 'USD/endpoint/month',
    rating: 4.8,
    reviews: 95,
    features: ['Real-time Monitoring', 'Threat Hunting', 'Incident Response', 'Behavioral Analysis'],
    badge: 'Sale'
  },
  {
    name: 'Network Monitoring Suite',
    category: 'Software',
    price: '299.00',
    originalPrice: null,
    currency: 'USD/month',
    rating: 4.6,
    reviews: 67,
    features: ['Real-time Analytics', 'Custom Dashboards', 'Alert Management', 'API Integration'],
    badge: null
  },
  {
    name: 'IT Support Package - Business',
    category: 'Services',
    price: '199.00',
    originalPrice: '249.00',
    currency: 'USD/month',
    rating: 4.9,
    reviews: 312,
    features: ['24/7 Help Desk', 'Remote Support', 'On-site Visits', 'System Monitoring'],
    badge: 'Best Value'
  }
];

const categories = ['All Products', 'Software Licenses', 'Hardware', 'Security Software', 'Services'];

export default function Shop() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              IT Solutions <span className="text-blue-600">Shop</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Discover our comprehensive catalog of enterprise IT solutions, from software 
              licenses to hardware and professional services.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  {/* Badge */}
                  {product.badge && (
                    <div className="flex justify-between items-start mb-4">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        product.badge === 'Popular' ? 'bg-blue-100 text-blue-600' :
                        product.badge === 'Sale' ? 'bg-red-100 text-red-600' :
                        product.badge === 'Recommended' ? 'bg-green-100 text-green-600' :
                        product.badge === 'Best Value' ? 'bg-purple-100 text-purple-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {product.badge}
                      </span>
                    </div>
                  )}
                  
                  {/* Product Info */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <ul className="space-y-1">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                      <span className="text-sm text-gray-600">
                        {product.currency}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </button>
                    <Link 
                      href={`/shop/${index + 1}`}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our experts can help you find the perfect IT solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Custom Quote
              </Link>
              <Link 
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Speak with Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}