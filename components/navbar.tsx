'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Shield, Phone } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'Managed Security Services', href: '/services/managed-security' },
    { name: 'Service Level Agreement', href: '/services/sla' },
    { name: 'Backup & Disaster Recovery', href: '/services/backup-disaster-recovery' },
    { name: 'Managed IT Services', href: '/services/managed-it' },
    { name: 'Managed Cloud Services', href: '/services/managed-cloud' },
    { name: 'Managed Networking', href: '/services/managed-networking' },
    { name: 'IT Support & Consulting', href: '/services/it-support-consulting' },
    { name: 'AI & Automation Services', href: '/services/ai-automation' },
    { name: 'Cybersecurity Services', href: '/services/cybersecurity' },
    { name: 'HIPAA Compliance', href: '/services/hipaa-compliance' },
    { name: 'VAPT Services', href: '/services/vapt' },
    { name: 'Cyber Essentials Plus Certification', href: '/services/cyber-essentials-plus' },
    { name: 'ISO 27001 Consultancy', href: '/services/iso-27001-consultancy' },
  ];

  const products = [
    { name: 'PrivacyComply.ai', href: '/products/privacycomply-ai' },
    { name: 'GDPR Compliance', href: '/products/gdpr-compliance' },
    { name: 'Virtual CISO AI Powered', href: '/products/virtual-ciso-ai' },
    { name: 'CyberStep - Cyber Essentials Certification', href: '/products/cyberstep' },
  ];
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="FANDBA Logo" 
                width={150} 
                height={40}
                className="h-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                //onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-2 max-h-96 overflow-y-auto"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link 
                    href="/services"
                    className="block px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
                  >
                    All Services
                  </Link>
                  <div className="border-t border-gray-100 my-2"></div>
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 my-2"></div>
                  <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Advisory & Consultancy
                  </div>
                  <Link
                    href="/services/cyber-essentials-plus"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  >
                    Cyber Essentials Plus Certification
                  </Link>
                  <Link
                    href="/services/iso-27001-consultancy"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  >
                    ISO 27001 Consultancy
                  </Link>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                Products & Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {products.map((product, index) => (
                  <Link
                    key={index}
                    href={product.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-blue-600 transition-colors">
              Shop
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact Us
            </Link>
            
            {/* CTA Button */}
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <Phone className="mr-2 h-4 w-4" />
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/blog" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/shop" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link 
              href="/contact"
              className="block mx-3 mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}