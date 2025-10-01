import { Metadata } from 'next';
import { Settings, Monitor, Wrench, HeadphonesIcon, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Managed IT Services | FANDBA – Complete IT Infrastructure Management',
  description: 'FANDBA\'s Managed IT Services provide comprehensive IT infrastructure management, proactive monitoring, maintenance, and 24/7 support for your business.',
};

export default function ManagedIT() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-blue-600">Managed IT Services</span> for Modern Business
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Complete IT infrastructure management, proactive monitoring, and expert support 
              to keep your business running smoothly and efficiently.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get IT Assessment
              </Link>
              <Link 
                href="/contact"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Discuss Your Needs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Managed IT Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Managed IT Services</h2>
            <p className="mt-4 text-gray-600">Comprehensive IT management for your peace of mind</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <Monitor className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Proactive Monitoring</h3>
              </div>
              <p className="text-gray-600 mb-4">
                24/7 monitoring of your IT infrastructure with proactive issue detection 
                and resolution before problems impact your business.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Server and network monitoring</li>
                <li>• Performance optimization</li>
                <li>• Automated alerting</li>
                <li>• Predictive maintenance</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <Wrench className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Infrastructure Management</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Complete management of your IT infrastructure including servers, 
                networks, storage, and virtualization platforms.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Server administration</li>
                <li>• Network configuration</li>
                <li>• Storage management</li>
                <li>• Virtualization support</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="flex items-center mb-4">
                <Settings className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">System Maintenance</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Regular maintenance, updates, and optimization to ensure your 
                systems run at peak performance and security.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Patch management</li>
                <li>• Software updates</li>
                <li>• Performance tuning</li>
                <li>• Security hardening</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600">
              <div className="flex items-center mb-4">
                <HeadphonesIcon className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">24/7 Help Desk Support</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Round-the-clock technical support for your users with multiple 
                contact methods and guaranteed response times.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-channel support</li>
                <li>• Tiered support structure</li>
                <li>• Remote assistance</li>
                <li>• Ticket management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Service Tiers</h2>
            <p className="mt-4 text-gray-600">Choose the level of support that fits your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Essential</h3>
              <p className="text-gray-600 mb-4">Basic monitoring and support for small businesses</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Business hours support</li>
                <li>• Basic monitoring</li>
                <li>• Patch management</li>
                <li>• Remote support</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-600">
              <div className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional</h3>
              <p className="text-gray-600 mb-4">Comprehensive IT management for growing businesses</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 24/7 monitoring and support</li>
                <li>• Proactive maintenance</li>
                <li>• Security management</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <p className="text-gray-600 mb-4">Full-service IT management for large organizations</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Dedicated account manager</li>
                <li>• Custom SLA terms</li>
                <li>• Strategic IT planning</li>
                <li>• Priority support</li>
              </ul>
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
                Why Choose FANDBA Managed IT?
              </h2>
              <div className="space-y-4">
                {[
                  'Certified IT professionals',
                  'Proactive approach to IT management',
                  'Scalable solutions for any business size',
                  'Cost-effective alternative to in-house IT',
                  'Latest tools and technologies',
                  'Proven track record of success'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your IT?</h3>
              <p className="mb-6">
                Let our managed IT experts take care of your technology infrastructure 
                so you can focus on growing your business. Get started with a 
                comprehensive IT assessment today.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Schedule IT Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}