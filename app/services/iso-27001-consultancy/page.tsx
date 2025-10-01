import { Metadata } from 'next';
import { FileCheck, Shield, Users, Target, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ISO 27001 Consultancy | FANDBA – Information Security Management System',
  description: 'Expert ISO 27001 consultancy services from FANDBA. Achieve ISO 27001 certification with our comprehensive ISMS implementation and audit support.',
};

export default function ISO27001Consultancy() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-green-600">ISO 27001</span> Consultancy Services
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Achieve ISO 27001 certification with our expert consultancy services. 
              Implement a robust Information Security Management System (ISMS) that protects your organization.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Start ISO 27001 Journey
              </Link>
              <Link 
                href="/contact"
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is ISO 27001 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is ISO 27001?
              </h2>
              <p className="text-gray-600 mb-6">
                ISO 27001 is the international standard for Information Security Management Systems (ISMS). 
                It provides a systematic approach to managing sensitive company information and ensuring 
                its confidentiality, integrity, and availability.
              </p>
              <div className="space-y-4">
                {[
                  'Internationally recognized standard',
                  'Risk-based approach to security',
                  'Continuous improvement framework',
                  'Enhanced customer confidence',
                  'Competitive advantage',
                  'Regulatory compliance support'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Benefits of ISO 27001</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Shield className="h-5 w-5 mr-3" />
                  Enhanced security posture
                </li>
                <li className="flex items-center">
                  <FileCheck className="h-5 w-5 mr-3" />
                  Regulatory compliance
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-3" />
                  Stakeholder confidence
                </li>
                <li className="flex items-center">
                  <Target className="h-5 w-5 mr-3" />
                  Business continuity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Consultancy Services */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our ISO 27001 Services</h2>
            <p className="mt-4 text-gray-600">Comprehensive support for your certification journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Gap Analysis & Planning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive assessment of your current security posture against 
                ISO 27001 requirements with detailed implementation roadmap.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Current state assessment</li>
                <li>• Gap identification</li>
                <li>• Implementation timeline</li>
                <li>• Resource planning</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <FileCheck className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">ISMS Implementation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Complete Information Security Management System implementation 
                including policies, procedures, and controls.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Policy development</li>
                <li>• Risk assessment methodology</li>
                <li>• Control implementation</li>
                <li>• Documentation creation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Training & Awareness</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive training programs for your team to ensure 
                effective ISMS operation and maintenance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Management training</li>
                <li>• Staff awareness programs</li>
                <li>• Internal auditor training</li>
                <li>• Ongoing education</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Audit Support</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Complete support through internal audits and external 
                certification audits to ensure successful certification.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Internal audit program</li>
                <li>• Pre-certification assessment</li>
                <li>• Certification audit support</li>
                <li>• Continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Implementation Process</h2>
            <p className="mt-4 text-gray-600">Structured approach to ISO 27001 certification</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Initial Assessment</h3>
              <p className="text-sm text-gray-600">Evaluate current security posture</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Risk Assessment</h3>
              <p className="text-sm text-gray-600">Identify and assess information security risks</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ISMS Design</h3>
              <p className="text-sm text-gray-600">Design and implement ISMS framework</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-sm text-gray-600">Deploy controls and procedures</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold">5</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Certification</h3>
              <p className="text-sm text-gray-600">Support through certification audit</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-lg text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for ISO 27001 Certification?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Transform your information security management with ISO 27001. 
              Our expert consultants will guide you through every step of the certification process.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Start Your ISO 27001 Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}