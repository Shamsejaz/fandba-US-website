import { Metadata } from 'next';
import { FileCheck, Clock, Target, Award, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Service Level Agreement (SLA) | FANDBA – Guaranteed Performance',
  description: 'FANDBA\'s comprehensive SLA guarantees include uptime commitments, response times, performance metrics, and service quality standards.',
};

export default function SLA() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-green-600">Service Level Agreement</span> (SLA)
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Clear commitments, measurable performance standards, and guaranteed service 
              levels that ensure your business operations run smoothly.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                View Our SLA Terms
              </Link>
              <Link 
                href="/contact"
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Discuss Custom SLA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SLA Components */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our SLA Commitments</h2>
            <p className="mt-4 text-gray-600">Measurable guarantees for your peace of mind</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Uptime Guarantee</h3>
              </div>
              <p className="text-gray-600 mb-4">
                99.9% uptime guarantee for all managed services with automatic 
                service credits for any downtime exceeding our commitments.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Network infrastructure: 99.9% uptime</li>
                <li>• Cloud services: 99.95% uptime</li>
                <li>• Security monitoring: 99.99% uptime</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Response Times</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Guaranteed response times based on issue severity with escalation 
                procedures for critical incidents.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Critical issues: 15 minutes</li>
                <li>• High priority: 2 hours</li>
                <li>• Medium priority: 4 hours</li>
                <li>• Low priority: 24 hours</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="flex items-center mb-4">
                <FileCheck className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Performance Metrics</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Detailed performance reporting and metrics tracking with monthly 
                SLA compliance reports and trend analysis.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Monthly performance reports</li>
                <li>• Real-time dashboard access</li>
                <li>• Trend analysis and recommendations</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Service Credits</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Automatic service credits when we don't meet our SLA commitments, 
                ensuring accountability and value for your investment.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Automatic credit calculation</li>
                <li>• Transparent reporting</li>
                <li>• No-questions-asked policy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SLA Benefits */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Our SLA Matters</h2>
            <p className="mt-4 text-gray-600">Clear expectations and guaranteed performance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Predictable service levels',
              'Financial accountability',
              'Transparent performance metrics',
              'Continuous improvement focus',
              'Business continuity assurance',
              'Risk mitigation and planning'
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
          <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-lg text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Guaranteed Service?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the confidence that comes with clear SLA commitments and 
              guaranteed performance standards for your IT services.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Review Our SLA Terms
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}