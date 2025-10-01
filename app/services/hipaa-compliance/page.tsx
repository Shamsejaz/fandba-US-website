import { Metadata } from 'next';
import { Shield, Search, FileCheck, UserCheck, Lock, CheckCircle, ArrowRight, HeartPulse } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HIPAA Compliance Services | FANDBA – Healthcare Data Protection',
  description: 'FANDBA offers expert HIPAA compliance services including risk assessment, breach prevention, and ongoing compliance management for healthcare organizations.',
};

export default function HipaaCompliance() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HeartPulse className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Secure Your <span className="text-blue-600">Patient Data</span> with HIPAA Compliance
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Protect sensitive patient information and meet federal compliance requirements 
              with our comprehensive HIPAA compliance solutions designed specifically for healthcare organizations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Schedule HIPAA Assessment
              </Link>
              <Link 
                href="/contact"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Talk to a Compliance Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our HIPAA Compliance Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our HIPAA Compliance Services</h2>
            <p className="mt-4 text-gray-600">Comprehensive protection for sensitive healthcare data</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <Search className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">HIPAA Risk Assessments</h3>
              </div>
              <p className="text-gray-600">
                Comprehensive evaluation of your organization's compliance posture, identifying vulnerabilities 
                and risks to electronic Protected Health Information (ePHI) following HHS guidelines.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
              <div className="flex items-center mb-4">
                <FileCheck className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Administrative Safeguards</h3>
              </div>
              <p className="text-gray-600">
                Development of policies and procedures, workforce training, breach notification protocols, 
                and comprehensive compliance management programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <Lock className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Technical Safeguards</h3>
              </div>
              <p className="text-gray-600">
                Implementation of access controls, audit systems, data encryption, and transmission security 
                to protect electronic health information.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="flex items-center mb-4">
                <UserCheck className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Business Associate Management</h3>
              </div>
              <p className="text-gray-600">
                BAA template development, vendor risk assessment, and ongoing monitoring of third-party 
                compliance with HIPAA requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">HIPAA Compliance Components</h2>
            <p className="mt-4 text-gray-600">All aspects of HIPAA requirements covered</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Privacy Rule</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use and disclosure of PHI</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Patient rights and access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Minimum necessary standard</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Notice of Privacy Practices</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Security Rule</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Administrative safeguards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Physical safeguards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Technical safeguards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Organizational requirements</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Breach Notification</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Breach detection and assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Timely notification procedures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Documentation and reporting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Regulatory compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Healthcare Industries We Serve</h2>
            <p className="mt-4 text-gray-600">Specialized compliance solutions for healthcare sectors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Hospitals & Healthcare Systems',
              'Medical Practices & Clinics',
              'Health Insurance Companies',
              'Healthcare Technology Vendors',
              'Medical Billing Companies',
              'Pharmacy Chains',
              'Telemedicine Providers',
              'Healthcare Clearinghouses'
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <HeartPulse className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FANDBA for HIPAA Compliance */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why FANDBA for HIPAA Compliance?
              </h2>
              <div className="space-y-4">
                {[
                  'Certified healthcare compliance professionals',
                  'Comprehensive risk assessment and management',
                  'Ongoing monitoring and compliance support',
                  'Customized solutions for your organization type',
                  'Proactive breach prevention and response',
                  'Regular training and awareness programs'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Protect Patient Data Today</h3>
              <p className="mb-6">
                Don't wait for a compliance incident to act. Our HIPAA compliance experts 
                are ready to assess your current posture and implement robust protections 
                tailored to your healthcare organization's needs.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get HIPAA Compliance Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our HIPAA Compliance Approach</h2>
            <p className="mt-4 text-gray-600">A systematic method to ensure full compliance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { number: 1, title: 'Assessment', desc: 'Evaluate current compliance posture' },
              { number: 2, title: 'Planning', desc: 'Develop tailored compliance roadmap' },
              { number: 3, title: 'Implementation', desc: 'Deploy necessary controls' },
              { number: 4, title: 'Monitoring', desc: 'Ongoing oversight and adjustment' },
              { number: 5, title: 'Maintenance', desc: 'Regular updates to address changes' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.number}
                </div>
                <h3 className="font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}