import { Metadata } from 'next';
import { Shield, FileCheck, Users, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GDPR Compliance Solutions | FANDBA – European Data Protection Compliance',
  description: 'Comprehensive GDPR compliance solutions from FANDBA. Ensure full compliance with European data protection regulations through expert guidance and technology.',
};

export default function GDPRCompliance() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-blue-600">GDPR Compliance</span> Solutions
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Comprehensive GDPR compliance solutions to protect your business from 
              regulatory penalties and ensure full compliance with European data protection laws.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get GDPR Assessment
              </Link>
              <Link 
                href="/contact"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Compliance Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GDPR Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Understanding GDPR Requirements
              </h2>
              <p className="text-gray-600 mb-6">
                The General Data Protection Regulation (GDPR) is the EU's comprehensive 
                data protection law that affects any organization processing personal 
                data of EU residents, regardless of where the organization is located.
              </p>
              <div className="space-y-4">
                {[
                  'Applies to all EU personal data processing',
                  'Fines up to €20M or 4% of annual turnover',
                  'Strict consent and transparency requirements',
                  'Data subject rights enforcement',
                  'Mandatory breach notifications',
                  'Privacy by design principles'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">GDPR Key Principles</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Shield className="h-5 w-5 mr-3" />
                  Lawfulness, fairness, transparency
                </li>
                <li className="flex items-center">
                  <FileCheck className="h-5 w-5 mr-3" />
                  Purpose limitation
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-3" />
                  Data minimization
                </li>
                <li className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-3" />
                  Accuracy and accountability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our GDPR Services */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our GDPR Compliance Services</h2>
            <p className="mt-4 text-gray-600">Comprehensive solutions for GDPR compliance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <FileCheck className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">GDPR Gap Assessment</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive evaluation of your current data protection practices 
                against GDPR requirements with detailed remediation plan.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Current state analysis</li>
                <li>• Gap identification</li>
                <li>• Risk assessment</li>
                <li>• Implementation roadmap</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Data Protection Program</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Complete data protection program implementation including 
                policies, procedures, and technical controls.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Privacy policies development</li>
                <li>• Data processing procedures</li>
                <li>• Technical safeguards</li>
                <li>• Staff training programs</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Data Subject Rights Management</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Implementation of systems and processes to handle data subject 
                requests efficiently and within GDPR timelines.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Request handling procedures</li>
                <li>• Automated response systems</li>
                <li>• Identity verification</li>
                <li>• Response tracking</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Breach Response & Notification</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive breach response procedures and automated 
                notification systems to meet GDPR requirements.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Incident response plan</li>
                <li>• 72-hour notification process</li>
                <li>• Data subject notification</li>
                <li>• Regulatory reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Subject Rights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Data Subject Rights Under GDPR</h2>
            <p className="mt-4 text-gray-600">Eight fundamental rights that must be supported</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Right to Information</h3>
              <p className="text-sm text-gray-600">Transparent information about data processing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Right of Access</h3>
              <p className="text-sm text-gray-600">Access to personal data and processing information</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Right to Rectification</h3>
              <p className="text-sm text-gray-600">Correction of inaccurate personal data</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Right to Erasure</h3>
              <p className="text-sm text-gray-600">Deletion of personal data (right to be forgotten)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Right to Restrict Processing</h3>
              <p className="text-sm text-gray-600">Limitation of data processing activities</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Right to Data Portability</h3>
              <p className="text-sm text-gray-600">Transfer of data in machine-readable format</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Right to Object</h3>
              <p className="text-sm text-gray-600">Objection to certain types of processing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Automated Decision-Making</h3>
              <p className="text-sm text-gray-600">Rights regarding automated profiling</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-lg text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ensure GDPR Compliance Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't risk hefty fines and reputational damage. Our GDPR experts will help 
              you achieve and maintain full compliance with European data protection laws.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start GDPR Compliance Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}