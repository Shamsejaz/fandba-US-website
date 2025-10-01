import { Metadata } from 'next';
import { Database, RefreshCw, Shield, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Backup & Disaster Recovery | FANDBA – Business Continuity Solutions',
  description: 'FANDBA\'s comprehensive backup and disaster recovery services ensure business continuity with automated backups, rapid recovery, and tested disaster recovery plans.',
};

export default function BackupDisasterRecovery() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-purple-600">Backup & Disaster Recovery</span> Solutions
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Protect your business with comprehensive backup solutions and disaster recovery 
              plans that ensure rapid recovery and minimal downtime.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Assess Your Backup Needs
              </Link>
              <Link 
                href="/contact"
                className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Test Your Recovery Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Backup & Recovery Services</h2>
            <p className="mt-4 text-gray-600">Comprehensive data protection and business continuity</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Automated Backup Solutions</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Automated, scheduled backups of your critical data with multiple 
                retention policies and storage locations for maximum protection.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Continuous data protection</li>
                <li>• Multiple backup schedules</li>
                <li>• Cloud and on-premise options</li>
                <li>• Encrypted backup storage</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <RefreshCw className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Disaster Recovery Planning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive disaster recovery plans with documented procedures, 
                regular testing, and rapid recovery capabilities.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Business impact analysis</li>
                <li>• Recovery time objectives (RTO)</li>
                <li>• Recovery point objectives (RPO)</li>
                <li>• Regular DR testing</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Business Continuity</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Complete business continuity planning to ensure operations continue 
                during and after disasters or system failures.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Continuity planning</li>
                <li>• Alternative work arrangements</li>
                <li>• Communication protocols</li>
                <li>• Vendor management</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Rapid Recovery Services</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Fast recovery services with minimal downtime using advanced 
                technologies and proven recovery procedures.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Point-in-time recovery</li>
                <li>• Bare metal recovery</li>
                <li>• Virtual machine recovery</li>
                <li>• Database recovery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Metrics */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Recovery Performance</h2>
            <p className="mt-4 text-gray-600">Proven results when you need them most</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{'< 4 hrs'}</div>
              <div className="text-gray-600">Average Recovery Time</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Backup Success Rate</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{'< 15 min'}</div>
              <div className="text-gray-600">Recovery Point Objective</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Recovery Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose FANDBA for Backup & Recovery?
              </h2>
              <div className="space-y-4">
                {[
                  'Proven disaster recovery expertise',
                  'Regular testing and validation',
                  'Multiple recovery options',
                  'Compliance with industry standards',
                  '24/7 recovery support',
                  'Scalable solutions for any business size'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Protect Your Business Today</h3>
              <p className="mb-6">
                Don't wait for disaster to strike. Our backup and disaster recovery 
                experts are ready to assess your current protection and implement 
                comprehensive solutions tailored to your business needs.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Start Your Protection Plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}