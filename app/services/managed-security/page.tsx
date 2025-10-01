import { Metadata } from 'next';
import { Shield, Eye, AlertTriangle, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Managed Security Services | FANDBA – 24/7 Threat Protection',
  description: 'FANDBA\'s Managed Security Services provide 24/7 monitoring, threat detection, incident response, and security operations center (SOC) management.',
};

export default function ManagedSecurity() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-red-600">24/7 Managed Security</span> Services
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Protect your business around the clock with our comprehensive managed security 
              services, including SOC operations, threat monitoring, and incident response.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Get Security Assessment
              </Link>
              <Link 
                href="/contact"
                className="border border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Managed Security Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Managed Security Services</h2>
            <p className="mt-4 text-gray-600">Comprehensive security operations tailored to your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">24/7 Security Monitoring</h3>
              </div>
              <p className="text-gray-600">
                Continuous monitoring of your IT infrastructure, networks, and endpoints 
                with real-time threat detection and alerting.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Incident Response</h3>
              </div>
              <p className="text-gray-600">
                Rapid response to security incidents with expert analysis, containment, 
                and remediation to minimize business impact.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">SOC as a Service</h3>
              </div>
              <p className="text-gray-600">
                Complete Security Operations Center capabilities without the overhead 
                of building and maintaining your own SOC infrastructure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Threat Intelligence</h3>
              </div>
              <p className="text-gray-600">
                Proactive threat intelligence feeds and analysis to stay ahead of 
                emerging threats and attack vectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Managed Security?</h2>
            <p className="mt-4 text-gray-600">Enterprise-grade security without enterprise costs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Certified security professionals',
              'Advanced SIEM and SOAR platforms',
              'Compliance reporting and documentation',
              'Scalable security operations',
              'Cost-effective alternative to in-house SOC',
              'Integration with existing security tools'
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-lg text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Secure Your Business Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't wait for a security incident. Our managed security services provide 
              the protection and peace of mind your business needs.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Start Your Security Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}