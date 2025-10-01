import Link from 'next/link';
import { ArrowRight, Shield, Zap, Award } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50 pt-20 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="mr-2 h-4 w-4" />
              Trusted by 500+ businesses across the globe
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your Business with 
              <span className="text-blue-600"> Enterprise IT Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From managed IT services and cybersecurity to AI automation and cloud solutions, 
              FANDBA delivers comprehensive technology solutions that drive growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/services"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Explore Services
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-1 text-blue-600" />
                24/7 Support
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-1 text-blue-600" />
                ISO Certified
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1 text-blue-600" />
                GDPR & PDPL Compliant
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-2">99.9%</div>
                  <div className="text-blue-100 text-sm">Uptime SLA</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-2">500+</div>
                  <div className="text-blue-100 text-sm">Happy Clients</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-2">15+</div>
                  <div className="text-blue-100 text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-2">24/7</div>
                  <div className="text-blue-100 text-sm">Support</div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-800 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}