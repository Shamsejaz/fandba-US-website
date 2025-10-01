import { Metadata } from 'next';
import { Shield, Search, FileCheck, UserCheck, Lock, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cybersecurity Services | FANDBA – Protecting Digital Business',
  description: 'FANDBA offers expert cybersecurity services including threat detection, vulnerability assessment, GDPR & PDPL & ISO compliance, and managed security operations.',
};

export default function Cybersecurity() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Secure Your <span className="text-red-600">Digital Future</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Protect your infrastructure, data, and users with our end-to-end cybersecurity 
              solutions designed for modern threats and compliance needs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Book a Security Assessment
              </Link>
              <Link 
                href="/contact"
                className="border border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                Talk to a Cyber Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Cybersecurity Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Cybersecurity Services</h2>
            <p className="mt-4 text-gray-600">Comprehensive protection for the digital age</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
              <div className="flex items-center mb-4">
                <Search className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Cyber Risk Assessments</h3>
              </div>
              <p className="text-gray-600">
                Evaluate risks across endpoints, networks, cloud, and apps. Receive detailed 
                gap analysis and risk mitigation plans.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Managed Security Services</h3>
              </div>
              <p className="text-gray-600">
                24/7 monitoring, incident response, and threat intelligence tailored 
                to your environment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <FileCheck className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Compliance & Governance</h3>
              </div>
              <p className="text-gray-600">
                We help you meet and maintain compliance with ISO 27001, NIST CSF, 
                GDPR & PDPL, and other global standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="flex items-center mb-4">
                <UserCheck className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Identity & Access Management (IAM)</h3>
              </div>
              <p className="text-gray-600">
                Ensure secure access controls, SSO, MFA, and role-based permissions 
                across all digital touchpoints.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-600 md:col-span-2">
              <div className="flex items-center mb-4">
                <Lock className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Network, Endpoint & Cloud Security</h3>
              </div>
              <p className="text-gray-600">
                From firewalls to EDR/XDR and cloud security posture management (CSPM), 
                we secure every layer of your infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Secure */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Industries We Secure</h2>
            <p className="mt-4 text-gray-600">Specialized security solutions for critical sectors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Financial Institutions',
              'Oil & Gas / Critical Infrastructure',
              'SMEs & Startups',
              'Education & Healthcare',
              'Government & Public Entities',
              'Retail & E-commerce'
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FANDBA for Cybersecurity */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why FANDBA for Cybersecurity?
              </h2>
              <div className="space-y-4">
                {[
                  'Certified CISSP, CEH, and CCISO experts',
                  'KSA PDPL & NCA compliance experience',
                  'Local support with global standards',
                  'AI-enhanced threat detection',
                  'Scalable solutions for SMEs to enterprise'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Secure Your Business Today</h3>
              <p className="mb-6">
                Don't wait for a security incident to act. Our cybersecurity experts 
                are ready to assess your current posture and implement robust protections 
                tailored to your business needs.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                Get Security Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}