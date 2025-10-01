import { Metadata } from 'next';
import { Brain, Shield, FileCheck, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PrivacyComply.ai | FANDBA – AI-Powered Privacy Compliance Platform',
  description: 'PrivacyComply.ai by FANDBA - Intelligent privacy compliance automation platform that simplifies GDPR, PDPL, and global privacy regulation compliance.',
};

export default function PrivacyComplyAI() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-purple-600">PrivacyComply.ai</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              AI-powered privacy compliance platform that automates GDPR, PDPL, and global 
              privacy regulation compliance with intelligent monitoring and reporting.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Request Demo
              </Link>
              <Link 
                href="/contact"
                className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Get Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Intelligent Privacy Compliance</h2>
            <p className="mt-4 text-gray-600">AI-driven features that simplify complex privacy regulations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">AI-Powered Data Discovery</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Automatically discover and classify personal data across your entire 
                IT infrastructure using advanced machine learning algorithms.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Automated data mapping</li>
                <li>• PII classification</li>
                <li>• Data flow visualization</li>
                <li>• Risk assessment</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Compliance Monitoring</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Continuous monitoring of privacy compliance status with real-time 
                alerts and automated remediation recommendations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Real-time compliance dashboard</li>
                <li>• Automated alerts</li>
                <li>• Violation detection</li>
                <li>• Remediation guidance</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <FileCheck className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Automated Reporting</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Generate comprehensive compliance reports automatically for 
                regulators, auditors, and internal stakeholders.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Regulatory reports</li>
                <li>• Audit documentation</li>
                <li>• Executive dashboards</li>
                <li>• Custom reporting</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Intelligent Automation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Automate privacy workflows including data subject requests, 
                consent management, and breach notifications.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• DSR automation</li>
                <li>• Consent management</li>
                <li>• Breach response</li>
                <li>• Workflow orchestration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Regulations */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Global Privacy Regulations</h2>
            <p className="mt-4 text-gray-600">Comprehensive coverage of major privacy laws</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-gray-900 mb-2">GDPR</h3>
              <p className="text-sm text-gray-600">European Union General Data Protection Regulation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-gray-900 mb-2">PDPL</h3>
              <p className="text-sm text-gray-600">Saudi Arabia Personal Data Protection Law</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-gray-900 mb-2">CCPA</h3>
              <p className="text-sm text-gray-600">California Consumer Privacy Act</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-gray-900 mb-2">PIPEDA</h3>
              <p className="text-sm text-gray-600">Personal Information Protection and Electronic Documents Act</p>
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
                Why Choose PrivacyComply.ai?
              </h2>
              <div className="space-y-4">
                {[
                  'Reduce compliance costs by up to 70%',
                  'Automate 90% of privacy workflows',
                  'Real-time compliance monitoring',
                  'AI-powered risk assessment',
                  'Seamless integration with existing systems',
                  'Expert support and guidance'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-blue-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Simplify Compliance?</h3>
              <p className="mb-6">
                Transform your privacy compliance program with AI-powered automation. 
                See how PrivacyComply.ai can reduce your compliance burden while 
                enhancing data protection.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Schedule Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}