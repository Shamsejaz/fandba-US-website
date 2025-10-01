import { Building2, Users, Award, Globe } from 'lucide-react';

export function About() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Why Choose FANDBA?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience serving businesses across the globe, 
              FANDBA has established itself as a trusted partner for digital transformation 
              and IT excellence.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of certified professionals combines deep technical expertise with 
              local market knowledge to deliver solutions that drive real business results. 
              From Fortune 500 companies to growing SMEs, we scale our services to meet 
              your unique needs.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Our Mission</h4>
                <p className="text-sm text-gray-600">
                  To empower organizations with reliable, secure, and innovative 
                  technology solutions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Our Vision</h4>
                <p className="text-sm text-gray-600">
                  To be the most trusted technology partner in the region, 
                  known for excellence and innovation.
                </p>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-gray-600 text-sm">Clients Served</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-gray-600 text-sm">IT Professionals</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
              <div className="text-gray-600 text-sm">Support Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}