import { Metadata } from 'next';
import { Search, Shield, FileCheck, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'VAPT Services | FANDBA – Vulnerability Assessment & Penetration Testing',
  description: 'FANDBA\'s VAPT services provide comprehensive vulnerability assessment and penetration testing to identify security weaknesses and strengthen your cyber defenses.',
};

export default function VAPT() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-red-600">VAPT Services</span> - Vulnerability Assessment & Penetration Testing
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Identify and address security vulnerabilities before attackers do with our comprehensive 
              vulnerability assessment and penetration testing services.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Schedule VAPT Assessment
              </Link>
              <Link 
                href="/contact"
                className="border border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                Get Security Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our VAPT Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our VAPT Services</h2>
            <p className="mt-4 text-gray-600">Comprehensive security testing and assessment</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
              <div className="flex items-center mb-4">
                <Search className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Vulnerability Assessment</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Systematic identification and evaluation of security vulnerabilities 
                across your IT infrastructure, applications, and networks.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Network vulnerability scanning</li>
                <li>• Web application assessment</li>
                <li>• Database security evaluation</li>
                <li>• Configuration review</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Penetration Testing</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Ethical hacking and simulated attacks to test your defenses 
                and validate the exploitability of identified vulnerabilities.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• External penetration testing</li>
                <li>• Internal network testing</li>
                <li>• Web application pen testing</li>
                <li>• Social engineering assessment</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <FileCheck className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Compliance Testing</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Security assessments aligned with regulatory requirements 
                and industry standards for compliance validation.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• PCI DSS compliance testing</li>
                <li>• ISO 27001 security assessment</li>
                <li>• GDPR & PDPL compliance validation</li>
                <li>• Industry-specific standards</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Risk Assessment & Reporting</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Detailed risk analysis and comprehensive reporting with 
                actionable recommendations for remediation.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Executive summary reports</li>
                <li>• Technical vulnerability details</li>
                <li>• Risk prioritization matrix</li>
                <li>• Remediation roadmap</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VAPT Methodology */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our VAPT Methodology</h2>
            <p className="mt-4 text-gray-600">Structured approach following industry best practices</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Planning & Scoping</h3>
              <p className="text-sm text-gray-600">Define objectives, scope, and testing parameters</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Discovery & Enumeration</h3>
              <p className="text-sm text-gray-600">Identify assets, services, and potential attack vectors</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Vulnerability Analysis</h3>
              <p className="text-sm text-gray-600">Assess and validate identified vulnerabilities</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Reporting & Remediation</h3>
              <p className="text-sm text-gray-600">Deliver findings with actionable recommendations</p>
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
                Why Choose FANDBA for VAPT?
              </h2>
              <div className="space-y-4">
                {[
                  'Certified ethical hackers and security professionals',
                  'Comprehensive testing methodology',
                  'Industry-standard tools and techniques',
                  'Detailed reporting with remediation guidance',
                  'Compliance-focused assessments',
                  'Minimal business disruption'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Secure Your Infrastructure</h3>
              <p className="mb-6">
                Don't wait for a security breach. Our VAPT services help you identify 
                and address vulnerabilities before they can be exploited by attackers.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                Schedule VAPT Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}