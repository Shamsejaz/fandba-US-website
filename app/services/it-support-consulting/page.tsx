import { Metadata } from 'next';
import { HeadphonesIcon, Users, Lightbulb, Target, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IT Support & Consulting | FANDBA – Expert Technical Support & Strategy',
  description: 'FANDBA\'s IT Support & Consulting services provide 24/7 technical support, strategic IT planning, technology consulting, and expert guidance.',
};

export default function ITSupportConsulting() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-orange-600">IT Support & Consulting</span> Services
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Expert technical support and strategic IT consulting to help your business 
              leverage technology effectively and achieve your goals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Get Support Now
              </Link>
              <Link 
                href="/contact"
                className="border border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our IT Support & Consulting Services</h2>
            <p className="mt-4 text-gray-600">Comprehensive support and strategic guidance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600">
              <div className="flex items-center mb-4">
                <HeadphonesIcon className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">24/7 Technical Support</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Round-the-clock technical support for all your IT needs with 
                multiple contact methods and guaranteed response times.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Phone, email, and chat support</li>
                <li>• Remote desktop assistance</li>
                <li>• On-site support when needed</li>
                <li>• Ticket tracking and escalation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Strategic IT Planning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive IT strategy development aligned with your business 
                objectives and growth plans.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• IT roadmap development</li>
                <li>• Technology assessment</li>
                <li>• Budget planning and forecasting</li>
                <li>• Digital transformation strategy</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Technology Consulting</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Expert guidance on technology selection, implementation, and 
                optimization to maximize your IT investments.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Technology evaluation</li>
                <li>• Vendor selection assistance</li>
                <li>• Implementation planning</li>
                <li>• Best practices guidance</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">IT Training & Education</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive training programs to help your team effectively 
                use technology and improve productivity.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• User training programs</li>
                <li>• Security awareness training</li>
                <li>• Custom training materials</li>
                <li>• Ongoing education support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Support Tiers</h2>
            <p className="mt-4 text-gray-600">Choose the level of support that fits your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Basic Support</h3>
              <p className="text-gray-600 mb-4">Essential support for small businesses</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Business hours support</li>
                <li>• Email and phone support</li>
                <li>• Basic troubleshooting</li>
                <li>• Knowledge base access</li>
              </ul>
              <div className="text-2xl font-bold text-gray-900 mb-2">$99/month</div>
              <div className="text-sm text-gray-600">Per user</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-orange-600">
              <div className="bg-orange-600 text-white text-xs font-medium px-2 py-1 rounded mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Support</h3>
              <p className="text-gray-600 mb-4">Comprehensive support for growing businesses</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• 24/7 support availability</li>
                <li>• Priority response times</li>
                <li>• Remote assistance</li>
                <li>• Monthly health checks</li>
              </ul>
              <div className="text-2xl font-bold text-gray-900 mb-2">$199/month</div>
              <div className="text-sm text-gray-600">Per user</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Support</h3>
              <p className="text-gray-600 mb-4">Premium support for large organizations</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Dedicated account manager</li>
                <li>• Custom SLA terms</li>
                <li>• On-site support included</li>
                <li>• Strategic consulting</li>
              </ul>
              <div className="text-2xl font-bold text-gray-900 mb-2">Custom</div>
              <div className="text-sm text-gray-600">Contact for pricing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Consulting Expertise</h2>
            <p className="mt-4 text-gray-600">Specialized knowledge across key technology areas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Digital Transformation',
              'Cloud Strategy & Migration',
              'Cybersecurity Planning',
              'IT Infrastructure Design',
              'Business Process Optimization',
              'Technology Vendor Selection'
            ].map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-8 rounded-lg text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Expert IT Support?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you need immediate technical support or strategic IT guidance, 
              our experts are here to help your business succeed with technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Get Support Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}