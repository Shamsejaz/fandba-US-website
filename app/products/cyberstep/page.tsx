import { Metadata } from 'next';
import { Route, CheckCircle, Award, Target, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CyberStep - Your Guided Path to Cyber Essentials Certification | FANDBA',
  description: 'CyberStep by FANDBA - Your comprehensive guided platform for achieving Cyber Essentials certification with step-by-step guidance, automated assessments, and expert support.',
};

export default function CyberStep() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-green-600">CyberStep</span>
            </h1>
            <p className="mt-4 text-2xl text-gray-700 font-medium">
              Your Guided Path to Cyber Essentials Certification
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Comprehensive platform that guides your organization through every step 
              of the Cyber Essentials certification process with automated assessments, 
              expert guidance, and implementation support.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Start Your CyberStep Journey
              </Link>
              <Link 
                href="/contact"
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Get Platform Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is CyberStep */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Simplifying Cyber Essentials Certification
              </h2>
              <p className="text-gray-600 mb-6">
                CyberStep is an intelligent platform that transforms the complex Cyber Essentials 
                certification process into a guided, step-by-step journey. Our platform combines 
                automated assessments, expert guidance, and implementation tools to ensure your 
                organization achieves certification efficiently and effectively.
              </p>
              <div className="space-y-4">
                {[
                  'Step-by-step guided certification process',
                  'Automated security assessments',
                  'Real-time compliance tracking',
                  'Expert support and guidance',
                  'Implementation toolkit',
                  'Continuous monitoring and maintenance'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-blue-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose CyberStep?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Route className="h-5 w-5 mr-3" />
                  Guided certification journey
                </li>
                <li className="flex items-center">
                  <Award className="h-5 w-5 mr-3" />
                  Proven success methodology
                </li>
                <li className="flex items-center">
                  <Target className="h-5 w-5 mr-3" />
                  Automated compliance tracking
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-3" />
                  Expert support included
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Platform Features</h2>
            <p className="mt-4 text-gray-600">Everything you need for successful certification</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <Route className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Guided Assessment Journey</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Interactive step-by-step assessment process that guides you through 
                each of the five Cyber Essentials controls with clear instructions.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Interactive questionnaires</li>
                <li>• Progress tracking</li>
                <li>• Clear next steps</li>
                <li>• Evidence collection</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Automated Compliance Checking</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Automated tools that scan your systems and configurations to 
                identify compliance gaps and provide specific remediation guidance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• System scanning</li>
                <li>• Configuration analysis</li>
                <li>• Gap identification</li>
                <li>• Remediation recommendations</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Implementation Toolkit</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive toolkit with templates, policies, and procedures 
                to help you implement the required security controls.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Policy templates</li>
                <li>• Configuration guides</li>
                <li>• Implementation checklists</li>
                <li>• Best practice documentation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Expert Support</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Access to cybersecurity experts who can provide guidance, 
                answer questions, and help resolve complex implementation challenges.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Expert consultations</li>
                <li>• Technical support</li>
                <li>• Implementation guidance</li>
                <li>• Certification preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Journey */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Your Certification Journey</h2>
            <p className="mt-4 text-gray-600">Five simple steps to Cyber Essentials certification</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Initial Assessment</h3>
              <p className="text-sm text-gray-600">Complete guided assessment of current security posture</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Gap Analysis</h3>
              <p className="text-sm text-gray-600">Identify gaps and receive prioritized action plan</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-sm text-gray-600">Implement required controls with guided support</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Validation</h3>
              <p className="text-sm text-gray-600">Validate implementation and prepare for certification</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold">5</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Certification</h3>
              <p className="text-sm text-gray-600">Submit application and achieve certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-gray-600">Everything you need for successful certification</p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-green-600">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">CyberStep Complete</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">£2,999</div>
                <div className="text-gray-600 mb-6">One-time fee for complete certification journey</div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Guided assessment platform</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Automated compliance checking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Implementation toolkit</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Expert support included</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Certification preparation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>12 months platform access</span>
                  </li>
                </ul>
                <Link 
                  href="/contact"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block text-center"
                >
                  Start Your Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-600 to-blue-700 p-8 rounded-lg text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Take the First Step?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations that have successfully achieved Cyber Essentials 
              certification with CyberStep. Start your guided journey today.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Begin Your CyberStep Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}