import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Cloud, Settings, HeadphonesIcon, Database, Network, Bot, Lock, HeartPulse } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IT Services - FANDBA | Managed IT, Cloud, Security & AI Solutions',
  description: 'Comprehensive IT services including managed security, cloud services, AI automation, cybersecurity, and 24/7 IT support. Enterprise solutions for modern businesses.',
};

const services = [
  {
    title: 'Managed Security Services',
    description: '24/7 security monitoring, threat detection, and incident response to protect your digital assets.',
    icon: Shield,
    href: '/services/managed-security',
    color: 'from-red-500 to-red-600'
  },
  {
    title: 'Service Level Agreement (SLA)',
    description: 'Guaranteed service levels with clear metrics, response times, and performance standards.',
    icon: Settings,
    href: '/services/sla',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Backup & Disaster Recovery',
    description: 'Comprehensive data protection and business continuity planning for peace of mind.',
    icon: Database,
    href: '/services/backup-disaster-recovery',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Managed IT Services',
    description: 'Complete IT infrastructure management, maintenance, and optimization services.',
    icon: Settings,
    href: '/services/managed-it',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Managed Cloud Services',
    description: 'Cloud migration, management, and optimization for AWS, Azure, and Google Cloud.',
    icon: Cloud,
    href: '/services/managed-cloud',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    title: 'Managed Networking',
    description: 'Network design, implementation, monitoring, and optimization for peak performance.',
    icon: Network,
    href: '/services/managed-networking',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    title: 'IT Support & Consulting',
    description: 'Expert technical support and strategic IT consulting to drive your business forward.',
    icon: HeadphonesIcon,
    href: '/services/it-support-consulting',
    color: 'from-orange-500 to-orange-600'
  },
  {
    title: 'AI & Automation Services',
    description: 'AI consulting, RPA, machine learning models, and intelligent process automation.',
    icon: Bot,
    href: '/services/ai-automation',
    color: 'from-violet-500 to-violet-600'
  },
  {
    title: 'Cybersecurity Services',
    description: 'Advanced cybersecurity solutions, risk assessments, and compliance management.',
    icon: Lock,
    href: '/services/cybersecurity',
    color: 'from-slate-500 to-slate-600'
  },
  {
    title: 'HIPAA Compliance',
    description: 'Comprehensive HIPAA compliance solutions for healthcare organizations and business associates.',
    icon: HeartPulse,
    href: '/services/hipaa-compliance',
    color: 'from-blue-400 to-blue-500'
  }
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Comprehensive IT solutions designed to accelerate your business growth, 
              enhance security, and drive digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link 
                  key={index} 
                  href={service.href}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center">
                      Learn More →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link 
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}