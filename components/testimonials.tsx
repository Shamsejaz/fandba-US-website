import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Al-Rashid',
    position: 'CTO, TechCorp Solutions',
    content: 'FANDBA transformed our IT infrastructure completely. Their managed services have improved our uptime to 99.9% and their cybersecurity solutions give us peace of mind.',
    rating: 5,
    company: 'TechCorp Solutions'
  },
  {
    name: 'Sarah Abdullah',
    position: 'IT Director, Financial Services Co.',
    content: 'The AI automation solutions from FANDBA have revolutionized our business processes. We\'ve seen a 40% increase in efficiency and significant cost savings.',
    rating: 5,
    company: 'Financial Services Co.'
  },
  {
    name: 'Mohammed Hassan',
    position: 'CEO, Manufacturing Enterprise',
    content: 'Outstanding support and expertise. FANDBA\'s team is always available when we need them, and their proactive approach has prevented numerous potential issues.',
    rating: 5,
    company: 'Manufacturing Enterprise'
  }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by leading businesses across the globe
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-6 relative">
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.position}</div>
                <div className="text-sm text-blue-600">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Join hundreds of satisfied clients</p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-700 font-medium">4.9/5 Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}