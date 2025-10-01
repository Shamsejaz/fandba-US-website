import { Metadata } from 'next';
import { Network, Wifi, Router, Activity, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Managed Networking Services | FANDBA – Network Design & Management',
  description: 'FANDBA\'s Managed Networking Services include network design, implementation, monitoring, optimization, and 24/7 support for reliable connectivity.',
};

export default function ManagedNetworking() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-indigo-600">Managed Networking</span> Solutions
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Design, implement, and manage robust network infrastructure that delivers 
              reliable connectivity, optimal performance, and seamless scalability.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Network Assessment
              </Link>
              <Link 
                href="/contact"
                className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Design Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Networking Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Managed Networking Services</h2>
            <p className="mt-4 text-gray-600">Comprehensive network solutions for modern business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-600">
              <div className="flex items-center mb-4">
                <Network className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Network Design & Implementation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Custom network architecture design and implementation tailored 
                to your business requirements and growth plans.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Network topology design</li>
                <li>• Hardware selection and procurement</li>
                <li>• Implementation and configuration</li>
                <li>• Testing and validation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <Activity className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Network Monitoring & Management</h3>
              </div>
              <p className="text-gray-600 mb-4">
                24/7 network monitoring with proactive management to ensure 
                optimal performance and minimal downtime.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Real-time monitoring</li>
                <li>• Performance optimization</li>
                <li>• Proactive maintenance</li>
                <li>• Automated alerting</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <Wifi className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Wireless Solutions</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Enterprise-grade wireless network design and management for 
                secure, high-performance connectivity throughout your facility.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• WiFi 6/6E implementation</li>
                <li>• Coverage optimization</li>
                <li>• Guest network setup</li>
                <li>• Wireless security</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="flex items-center mb-4">
                <Router className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Network Security</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive network security implementation including firewalls, 
                VPNs, and intrusion detection systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Firewall configuration</li>
                <li>• VPN setup and management</li>
                <li>• Network segmentation</li>
                <li>• Intrusion detection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Network Technologies */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Network Technologies We Support</h2>
            <p className="mt-4 text-gray-600">Expertise across all major networking platforms</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Cisco Networking Equipment',
              'Juniper Networks',
              'Aruba Wireless Solutions',
              'Fortinet Security Appliances',
              'VMware NSX',
              'SD-WAN Solutions'
            ].map((technology, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-semibold text-gray-900">{technology}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Network Performance</h2>
            <p className="mt-4 text-gray-600">Delivering reliable, high-performance connectivity</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">99.9%</div>
              <div className="text-gray-600">Network Uptime</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">&lt; 5ms</div>
              <div className="text-gray-600">Average Latency</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">10Gbps+</div>
              <div className="text-gray-600">Maximum Throughput</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Monitoring Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose FANDBA for Networking?
              </h2>
              <div className="space-y-4">
                {[
                  'Certified network engineers',
                  'Vendor-neutral expertise',
                  'Scalable network designs',
                  'Proactive monitoring and management',
                  'Security-first approach',
                  'Future-ready infrastructure'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Optimize Your Network Today</h3>
              <p className="mb-6">
                Transform your network infrastructure with our expert design, 
                implementation, and management services. Get reliable, secure, 
                and high-performance connectivity that grows with your business.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Start Network Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}