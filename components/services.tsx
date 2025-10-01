import Link from 'next/link';
import { Shield, Cloud, Settings, Bot, Lock, Network, Database, HeadphonesIcon, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Managed IT Services',
    description: 'Complete IT infrastructure management and support',
    icon: Settings,
    href: '/services/managed-it',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Cybersecurity Services',
    description: 'Advanced threat protection and compliance',
    icon: Lock,
    href: '/services/cybersecurity',
    color: 'from-red-500 to-red-600'
  },
  {
    title: 'AI & Automation',
    description: 'Intelligent process automation and AI solutions',
    icon: Bot,
    href: '/services/ai-automation',
    color: 'from-violet-500 to-violet-600'
  },
  {
    title: 'Cloud Services',
    description: 'Cloud migration, management, and optimization',
    icon: Cloud,
    href: '/services/managed-cloud',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    title: 'Managed Security',
    description: '24/7 security monitoring and threat response',
    icon: Shield,
    href: '/services/managed-security',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Network Management',
    description: 'Network design, monitoring, and optimization',
    icon: Network,
    href: '/services/managed-networking',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    title: 'Backup & Recovery',
    description: 'Data protection and disaster recovery solutions',
    icon: Database,
    href: '/services/backup-disaster-recovery',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'IT Support & Consulting',
    description: 'Expert support and strategic IT consulting',
    icon: HeadphonesIcon,
    href: '/services/it-support-consulting',
    color: 'from-orange-500 to-orange-600'
  }
];

export function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Comprehensive IT Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From infrastructure management to advanced cybersecurity and AI automation, 
            we provide end-to-end technology solutions for your business success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link 
                key={index} 
                href={service.href}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center">
                  Learn More →
                </div>
              </Link>
            );
          })}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            href="/services"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}