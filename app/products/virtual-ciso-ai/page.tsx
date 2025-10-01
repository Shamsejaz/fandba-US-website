import { Metadata } from 'next';
import { Brain, Shield, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Virtual CISO AI Powered | FANDBA – AI-Driven Security Leadership',
  description: 'Virtual CISO AI Powered by FANDBA - AI-driven cybersecurity leadership platform providing strategic security guidance, risk management, and compliance oversight.',
};

export default function VirtualCISOAI() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-indigo-600">Virtual CISO</span> AI Powered
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              AI-driven cybersecurity leadership platform that provides strategic security 
              guidance, risk management, and compliance oversight without the cost of a full-time CISO.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Get Virtual CISO Demo
              </Link>
              <Link 
                href="/contact"
                className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Discuss Your Needs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Virtual CISO AI */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                AI-Powered Security Leadership
              </h2>
              <p className="text-gray-600 mb-6">
                Virtual CISO AI combines artificial intelligence with cybersecurity expertise 
                to provide strategic security leadership, risk management, and compliance 
                oversight tailored to your organization's needs.
              </p>
              <div className="space-y-4">
                {[
                  'AI-driven risk assessment and prioritization',
                  'Automated compliance monitoring',
                  'Strategic security roadmap development',
                  'Real-time threat intelligence',
                  'Cost-effective alternative to full-time CISO',
                  '24/7 security posture monitoring'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Brain className="h-5 w-5 mr-3" />
                  AI-powered insights
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 mr-3" />
                  Strategic security guidance
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-3" />
                  Continuous improvement
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-3" />
                  Expert human oversight
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Core Features</h2>
            <p className="mt-4 text-gray-600">Comprehensive AI-driven security leadership capabilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-600">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">AI Risk Intelligence</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced AI algorithms analyze your security posture, identify risks, 
                and provide prioritized recommendations for improvement.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Automated risk assessment</li>
                <li>• Threat landscape analysis</li>
                <li>• Vulnerability prioritization</li>
                <li>• Predictive risk modeling</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Strategic Security Planning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                AI-assisted development of comprehensive security strategies 
                aligned with business objectives and industry best practices.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Security roadmap development</li>
                <li>• Budget optimization</li>
                <li>• Technology selection guidance</li>
                <li>• Implementation planning</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Compliance Automation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Automated compliance monitoring and reporting for multiple 
                frameworks with intelligent gap analysis and remediation guidance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-framework compliance</li>
                <li>• Automated assessments</li>
                <li>• Gap analysis</li>
                <li>• Remediation tracking</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Executive Reporting</h3>
              </div>
              <p className="text-gray-600 mb-4">
                AI-generated executive dashboards and reports that translate 
                technical security metrics into business-relevant insights.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Executive dashboards</li>
                <li>• Board-ready reports</li>
                <li>• Risk quantification</li>
                <li>• ROI analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Service Tiers</h2>
            <p className="mt-4 text-gray-600">Choose the level of AI-powered security leadership you need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Essential</h3>
              <p className="text-gray-600 mb-4">AI-powered security insights and basic guidance</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Monthly risk assessments</li>
                <li>• Automated compliance monitoring</li>
                <li>• Basic security recommendations</li>
                <li>• Quarterly strategy reviews</li>
              </ul>
              <div className="text-2xl font-bold text-gray-900 mb-2">$2,999/month</div>
              <div className="text-sm text-gray-600">For small to medium businesses</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-indigo-600">
              <div className="bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional</h3>
              <p className="text-gray-600 mb-4">Comprehensive AI-driven security leadership</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Weekly risk intelligence</li>
                <li>• Advanced threat analysis</li>
                <li>• Strategic planning support</li>
                <li>• Monthly executive reports</li>
              </ul>
              <div className="text-2xl font-bold text-gray-900 mb-2">$5,999/month</div>
              <div className="text-sm text-gray-600">For growing enterprises</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <p className="text-gray-600 mb-4">Full-service virtual CISO with dedicated support</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Real-time monitoring</li>
                <li>• Dedicated security advisor</li>
                <li>• Custom AI models</li>
                <li>• Board presentation support</li>
              </ul>
              <div className="text-2xl font-bold text-gray-900 mb-2">Custom</div>
              <div className="text-sm text-gray-600">Contact for enterprise pricing</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 rounded-lg text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Transform Your Security Leadership</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get the strategic security leadership your organization needs with AI-powered 
              insights and expert guidance at a fraction of the cost of a full-time CISO.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Start Your Virtual CISO Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}