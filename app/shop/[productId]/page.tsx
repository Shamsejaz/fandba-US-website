import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Star, Check, Shield, Truck, RefreshCw } from 'lucide-react';
import { notFound } from 'next/navigation';

// Sample product data - in a real app, this would come from a database
const products = [
  {
    id: '1',
    name: 'Microsoft 365 Business Premium',
    category: 'Software Licenses',
    price: '22.00',
    originalPrice: '25.00',
    currency: 'USD/month',
    rating: 4.8,
    reviews: 150,
    features: ['Email & Calendar', 'Office Apps', 'Teams', '1TB Storage', 'Advanced Security'],
    badge: 'Popular',
    description: 'Microsoft 365 Business Premium provides your business with advanced productivity, collaboration, and security tools. Get the latest versions of Office apps, plus business-class email, file storage and sharing, and device management.',
    detailedFeatures: [
      'Desktop versions of Office apps (Word, Excel, PowerPoint, Outlook)',
      'Web and mobile versions of Office apps',
      'Microsoft Teams for collaboration',
      '1 TB of OneDrive cloud storage per user',
      'Business-class email with 50 GB mailbox',
      'Advanced threat protection',
      'Device and app management',
      '24/7 phone and web support'
    ],
    specifications: {
      'Users': 'Up to 300 users',
      'Storage': '1 TB per user',
      'Email': '50 GB mailbox',
      'Support': '24/7 phone and web',
      'Deployment': 'Cloud-based',
      'Compatibility': 'Windows, Mac, iOS, Android'
    }
  },
  {
    id: '2',
    name: 'Firewall Security Appliance',
    category: 'Hardware',
    price: '2,499.00',
    originalPrice: null,
    currency: 'USD',
    rating: 4.9,
    reviews: 87,
    features: ['Next-Gen Firewall', 'Intrusion Prevention', 'VPN Support', '24/7 Support'],
    badge: 'Enterprise',
    description: 'Enterprise-grade firewall security appliance designed to protect your network infrastructure from advanced threats. Features next-generation firewall capabilities, intrusion prevention, and comprehensive VPN support.',
    detailedFeatures: [
      'Next-Generation Firewall (NGFW) capabilities',
      'Intrusion Prevention System (IPS)',
      'SSL/IPSec VPN support',
      'Application control and visibility',
      'Advanced threat protection',
      'High-availability clustering',
      'Centralized management console',
      'Real-time monitoring and reporting'
    ],
    specifications: {
      'Throughput': 'Up to 10 Gbps',
      'Concurrent Sessions': '2 million',
      'VPN Tunnels': '1000 IPSec, 500 SSL',
      'Interfaces': '8x GbE, 2x 10GbE SFP+',
      'Form Factor': '1U Rackmount',
      'Power': 'Dual redundant PSU'
    }
  },
  {
    id: '3',
    name: 'Cloud Backup Service',
    category: 'Services',
    price: '15.00',
    originalPrice: null,
    currency: 'USD/month',
    rating: 4.7,
    reviews: 203,
    features: ['Unlimited Storage', 'Automated Backups', 'Point-in-time Recovery', 'AES Encryption'],
    badge: 'Recommended',
    description: 'Comprehensive cloud backup service that automatically protects your critical business data with unlimited storage, point-in-time recovery, and military-grade encryption.',
    detailedFeatures: [
      'Unlimited cloud storage',
      'Automated daily backups',
      'Point-in-time recovery options',
      'AES-256 encryption in transit and at rest',
      'Cross-platform support',
      'Incremental backup technology',
      'Centralized backup management',
      'Compliance reporting and auditing'
    ],
    specifications: {
      'Storage': 'Unlimited',
      'Backup Frequency': 'Continuous/Scheduled',
      'Retention': 'Customizable (30 days to forever)',
      'Encryption': 'AES-256',
      'Recovery Time': 'Minutes to hours',
      'Supported Platforms': 'Windows, Mac, Linux, Mobile'
    }
  },
  {
    id: '4',
    name: 'Endpoint Detection & Response',
    category: 'Security Software',
    price: '8.50',
    originalPrice: '12.00',
    currency: 'USD/endpoint/month',
    rating: 4.8,
    reviews: 95,
    features: ['Real-time Monitoring', 'Threat Hunting', 'Incident Response', 'Behavioral Analysis'],
    badge: 'Sale',
    description: 'Advanced endpoint detection and response solution that provides real-time monitoring, threat hunting, and automated incident response to protect your endpoints from sophisticated attacks.',
    detailedFeatures: [
      'Real-time endpoint monitoring',
      'Advanced threat hunting capabilities',
      'Automated incident response',
      'Behavioral analysis and machine learning',
      'Forensic investigation tools',
      'Integration with SIEM platforms',
      'Compliance reporting',
      'Cloud-based management console'
    ],
    specifications: {
      'Deployment': 'Cloud-based agent',
      'OS Support': 'Windows, Mac, Linux',
      'Response Time': 'Real-time alerts',
      'Data Retention': '90 days standard',
      'API Integration': 'REST API available',
      'Compliance': 'SOC 2, ISO 27001'
    }
  },
  {
    id: '5',
    name: 'Network Monitoring Suite',
    category: 'Software',
    price: '299.00',
    originalPrice: null,
    currency: 'USD/month',
    rating: 4.6,
    reviews: 67,
    features: ['Real-time Analytics', 'Custom Dashboards', 'Alert Management', 'API Integration'],
    badge: null,
    description: 'Comprehensive network monitoring suite that provides real-time visibility into your network infrastructure with custom dashboards, intelligent alerting, and powerful analytics.',
    detailedFeatures: [
      'Real-time network analytics',
      'Customizable dashboards',
      'Intelligent alert management',
      'Network topology mapping',
      'Performance trending and reporting',
      'API integration capabilities',
      'Multi-vendor device support',
      'Mobile monitoring app'
    ],
    specifications: {
      'Monitoring Points': 'Unlimited',
      'Data Retention': '2 years',
      'Alert Methods': 'Email, SMS, Webhook',
      'Protocols': 'SNMP, WMI, SSH, Telnet',
      'Deployment': 'On-premise or cloud',
      'API': 'RESTful API'
    }
  },
  {
    id: '6',
    name: 'IT Support Package - Business',
    category: 'Services',
    price: '199.00',
    originalPrice: '249.00',
    currency: 'USD/month',
    rating: 4.9,
    reviews: 312,
    features: ['24/7 Help Desk', 'Remote Support', 'On-site Visits', 'System Monitoring'],
    badge: 'Best Value',
    description: 'Comprehensive IT support package designed for businesses that need reliable, professional IT support. Includes 24/7 help desk, remote support, on-site visits, and proactive system monitoring.',
    detailedFeatures: [
      '24/7 help desk support',
      'Remote desktop support',
      'Monthly on-site visits',
      'Proactive system monitoring',
      'Software installation and updates',
      'Hardware troubleshooting',
      'Network maintenance',
      'Security patch management'
    ],
    specifications: {
      'Response Time': '< 4 hours',
      'Coverage': '24/7/365',
      'On-site Visits': '2 per month included',
      'Remote Support': 'Unlimited',
      'Monitoring': 'Real-time alerts',
      'Technicians': 'Certified professionals'
    }
  }
];

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products.find(p => p.id === params.productId);
  
  if (!product) {
    return {
      title: 'Product Not Found - FANDBA Shop',
      description: 'The requested product could not be found.'
    };
  }

  return {
    title: `${product.name} - FANDBA Shop | ${product.category}`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === params.productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/shop" className="text-gray-500 hover:text-blue-600">Shop</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image/Visual */}
            <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">
                    {product.category === 'Hardware' ? '🔧' : 
                     product.category === 'Software' || product.category === 'Software Licenses' ? '💻' : 
                     product.category === 'Security Software' ? '🛡️' : '⚙️'}
                  </span>
                </div>
                <p className="text-gray-600">{product.category}</p>
              </div>
            </div>

            {/* Product Info */}
            <div>
              {/* Badge */}
              {product.badge && (
                <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-4 ${
                  product.badge === 'Popular' ? 'bg-blue-100 text-blue-600' :
                  product.badge === 'Sale' ? 'bg-red-100 text-red-600' :
                  product.badge === 'Recommended' ? 'bg-green-100 text-green-600' :
                  product.badge === 'Best Value' ? 'bg-purple-100 text-purple-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {product.badge}
                </span>
              )}

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                  <span className="text-gray-600">
                    {product.currency}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mb-8">
                <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
                <Link 
                  href="/contact"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Get Quote
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1 text-green-500" />
                  Secure Payment
                </div>
                <div className="flex items-center">
                  <Truck className="h-4 w-4 mr-1 text-blue-500" />
                  Fast Delivery
                </div>
                <div className="flex items-center">
                  <RefreshCw className="h-4 w-4 mr-1 text-purple-500" />
                  30-Day Return
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Detailed Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Features</h2>
              <ul className="space-y-3">
                {product.detailedFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <dl className="space-y-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <dt className="font-medium text-gray-900">{key}:</dt>
                      <dd className="text-gray-700">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Shop */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/shop"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Link>
        </div>
      </section>
    </div>
  );
}