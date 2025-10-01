import { Metadata } from 'next';
import { Building2, Users, Award, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About FANDBA - Leading IT Solutions Provider',
  description: 'Learn about FANDBA\'s mission to deliver enterprise-grade IT solutions, cybersecurity services, and AI automation to businesses across the USA and globally.',
};

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              About <span className="text-blue-600">FANDBA</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Empowering businesses through innovative IT solutions, robust cybersecurity, 
              and intelligent automation since our founding.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                FANDBA was founded with a vision to bridge the gap between complex technology 
                and business success. We recognized that organizations needed more than just 
                IT support—they needed a strategic partner who could guide them through 
                digital transformation.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we serve businesses across Globe, providing enterprise-grade 
                solutions that range from traditional managed IT services to cutting-edge 
                AI automation and cybersecurity protection.
              </p>
              <p className="text-gray-600">
                Our team of certified professionals brings decades of combined experience 
                in IT infrastructure, security, and emerging technologies.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="mb-6">
                To empower organizations with reliable, secure, and innovative technology 
                solutions that drive growth, efficiency, and competitive advantage.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p>
                To be the most trusted technology partner in the region, known for 
                excellence, innovation, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600">IT Professionals</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-gray-600">Support Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, delivering solutions that 
                exceed expectations and drive measurable results.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We embrace emerging technologies and innovative approaches to solve 
                complex business challenges effectively.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trust</h3>
              <p className="text-gray-600">
                We build lasting relationships through transparency, reliability, 
                and unwavering commitment to our clients' success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}