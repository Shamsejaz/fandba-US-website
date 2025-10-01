import { Metadata } from 'next';
import { Award, Shield, CheckCircle, FileCheck, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cyber Essentials Plus Certification | FANDBA – Advanced Cyber Security Certification',
  description: 'Achieve Cyber Essentials Plus certification with FANDBA\'s expert guidance. Comprehensive assessment, implementation, and certification support for enhanced cybersecurity.',
};

export default function CyberEssentialsPlus() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-blue-600">Cyber Essentials Plus</span> Certification
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Achieve the highest level of Cyber Essentials certification with our expert 
              guidance and comprehensive implementation support.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Certification Process
              </Link>
              <Link 
                href="/contact"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Assessment Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Cyber Essentials Plus */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Cyber Essentials Plus?
              </h2>
              <p className="text-gray-600 mb-6">
                Cyber Essentials Plus is the advanced tier of the UK government-backed 
                cybersecurity certification scheme. It provides hands-on verification 
                of your organization's cybersecurity controls through technical testing.
              </p>
              <div className="space-y-4">
                {[
                  'Technical vulnerability assessment',
                  'Hands-on security testing',
                  'Enhanced credibility and trust',
                  'Government contract eligibility',
                  'Insurance premium reductions',
                  'Competitive advantage'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Certification Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Award className="h-5 w-5 mr-3" />
                  Government recognition
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 mr-3" />
                  Enhanced security posture
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-3" />
                  Customer confidence
                </li>
                <li className="flex items-center">
                  <FileCheck className="h-5 w-5 mr-3" />
                  Compliance demonstration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Certification Process */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Certification Process</h2>
            <p className="mt-4 text-gray-600">Structured approach to achieve certification</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Initial Assessment</h3>
              <p className="text-sm text-gray-600">Evaluate current security posture and identify gaps</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-sm text-gray-600">Deploy required security controls and measures</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Technical Testing</h3>
              <p className="text-sm text-gray-600">Conduct vulnerability assessment and penetration testing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Certification</h3>
              <p className="text-sm text-gray-600">Submit application and receive certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* Five Key Controls */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Five Key Security Controls</h2>
            <p className="mt-4 text-gray-600">Essential controls assessed for certification</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Boundary Firewalls</h3>
              <p className="text-gray-600">Secure network perimeter with properly configured firewalls</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Secure Configuration</h3>
              <p className="text-gray-600">Hardened system configurations following security best practices</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Access Control</h3>
              <p className="text-gray-600">Controlled user access with appropriate privileges</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Malware Protection</h3>
              <p className="text-gray-600">Comprehensive anti-malware solutions across all systems</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Patch Management</h3>
              <p className="text-gray-600">Regular security updates and vulnerability patching</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-lg text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Cyber Essentials Plus?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take your cybersecurity to the next level with Cyber Essentials Plus certification. 
              Our experts will guide you through every step of the process.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Your Certification Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}