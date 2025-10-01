import { Metadata } from 'next';
import { Bot, Brain, Cog, Workflow, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI & Automation Services | FANDBA – Intelligent Business Transformation',
  description: 'Discover FANDBA\'s AI & Automation Services – AI consulting, RPA, custom machine learning, and workflow automation to streamline operations and drive innovation.',
};

export default function AIAutomation() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Empower Your Business with <span className="text-violet-600">AI & Intelligent Automation</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Transform operations, reduce costs, and unlock new opportunities through AI, 
              machine learning, and robotic process automation (RPA).
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors"
              >
                Schedule a Free Consultation
              </Link>
              <Link 
                href="/contact"
                className="border border-violet-600 text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-violet-50 transition-colors"
              >
                Get a Custom AI Strategy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
            <p className="mt-4 text-gray-600">Comprehensive AI and automation solutions tailored to your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-600">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-violet-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">AI Strategy & Consulting</h3>
              </div>
              <p className="text-gray-600">
                We help you identify high-impact use cases and create a tailored AI roadmap 
                aligned with your business goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <Cog className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Intelligent Process Automation</h3>
              </div>
              <p className="text-gray-600">
                Automate repetitive tasks with Robotic Process Automation (RPA), 
                integrated with your business systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-600">
              <div className="flex items-center mb-4">
                <Bot className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Custom Machine Learning Models</h3>
              </div>
              <p className="text-gray-600">
                From predictive analytics to anomaly detection, our AI engineers build 
                models that solve real business challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-600">
              <div className="flex items-center mb-4">
                <Workflow className="h-8 w-8 text-cyan-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Workflow & Business Automation</h3>
              </div>
              <p className="text-gray-600">
                Streamline approvals, reporting, ticketing, and more using AI-driven 
                workflow automation platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Industries We Serve</h2>
            <p className="mt-4 text-gray-600">AI solutions tailored for diverse sectors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Finance & Banking',
              'Retail & eCommerce',
              'Healthcare',
              'Government & Public Sector',
              'Manufacturing',
              'Energy & Utilities'
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose FANDBA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose FANDBA for AI?
              </h2>
              <div className="space-y-4">
                {[
                  'Certified AI professionals',
                  'Industry-specific expertise',
                  'Enterprise-grade architecture',
                  'On-premise, cloud, or hybrid deployments',
                  'Full integration with your existing IT systems'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-violet-600 to-blue-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">
                Transform your business with intelligent automation and AI-driven insights. 
                Our experts are ready to help you identify the best opportunities for your organization.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center bg-white text-violet-600 px-6 py-3 rounded-lg font-semibold hover:bg-violet-50 transition-colors"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}