import { Metadata } from 'next';
import { Cloud, Zap, Shield, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Managed Cloud Services | FANDBA – Cloud Migration & Management',
  description: 'FANDBA\'s Managed Cloud Services include cloud migration, optimization, security, and ongoing management for AWS, Azure, and Google Cloud platforms.',
};

export default function ManagedCloud() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-cyan-600">Managed Cloud Services</span> for Digital Transformation
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Accelerate your digital transformation with expert cloud migration, management, 
              and optimization services for AWS, Azure, and Google Cloud.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
              >
                Start Cloud Migration
              </Link>
              <Link 
                href="/contact"
                className="border border-cyan-600 text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
              >
                Cloud Strategy Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Cloud Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Managed Cloud Services</h2>
            <p className="mt-4 text-gray-600">End-to-end cloud solutions for your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-600">
              <div className="flex items-center mb-4">
                <Cloud className="h-8 w-8 text-cyan-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Cloud Migration</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Seamless migration of your applications, data, and infrastructure 
                to the cloud with minimal downtime and maximum efficiency.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Assessment and planning</li>
                <li>• Application modernization</li>
                <li>• Data migration</li>
                <li>• Testing and validation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Cloud Optimization</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Continuous optimization of your cloud resources for performance, 
                cost-efficiency, and scalability.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cost optimization</li>
                <li>• Performance tuning</li>
                <li>• Resource right-sizing</li>
                <li>• Auto-scaling configuration</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Cloud Security</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive cloud security management including identity management, 
                data protection, and compliance monitoring.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Identity and access management</li>
                <li>• Data encryption</li>
                <li>• Security monitoring</li>
                <li>• Compliance management</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Cloud Management</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Ongoing management and monitoring of your cloud infrastructure 
                with 24/7 support and proactive maintenance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 24/7 monitoring</li>
                <li>• Automated backups</li>
                <li>• Patch management</li>
                <li>• Performance reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Cloud Platforms We Support</h2>
            <p className="mt-4 text-gray-600">Expert services across all major cloud providers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amazon Web Services</h3>
              <p className="text-gray-600">Complete AWS management including EC2, S3, RDS, and more</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Microsoft Azure</h3>
              <p className="text-gray-600">Azure cloud services including virtual machines, storage, and databases</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Google Cloud Platform</h3>
              <p className="text-gray-600">GCP services including Compute Engine, Cloud Storage, and BigQuery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose FANDBA for Cloud Services?
              </h2>
              <div className="space-y-4">
                {[
                  'Certified cloud architects and engineers',
                  'Multi-cloud expertise and vendor neutrality',
                  'Proven migration methodology',
                  'Cost optimization focus',
                  '24/7 cloud monitoring and support',
                  'Security and compliance expertise'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Ready for the Cloud?</h3>
              <p className="mb-6">
                Transform your business with cloud technology. Our cloud experts 
                will help you develop a comprehensive cloud strategy and execute 
                a successful migration that drives business value.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
              >
                Start Your Cloud Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}