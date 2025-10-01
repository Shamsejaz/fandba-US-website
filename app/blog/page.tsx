import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tech Blog - FANDBA | IT Insights, Cybersecurity & AI Trends',
  description: 'Stay updated with the latest IT trends, cybersecurity insights, AI developments, and technology best practices from FANDBA experts.',
};

const blogPosts = [
  {
    title: 'The Future of AI in Business: Trends to Watch in 2025',
    excerpt: 'Explore the emerging AI trends that will reshape business operations and drive competitive advantage in the coming year.',
    date: '2024-12-15',
    author: 'Ahmed Al-Rashid',
    category: 'AI & Automation',
    readTime: '5 min read',
    slug: 'future-ai-business-2025'
  },
  {
    title: 'PDPL Compliance: A Complete Guide for Saudi Businesses',
    excerpt: 'Everything you need to know about Personal Data Protection Law compliance and how to protect your business.',
    date: '2024-12-10',
    author: 'Sarah Abdullah',
    category: 'Cybersecurity',
    readTime: '8 min read',
    slug: 'pdpl-compliance-guide'
  },
  {
    title: 'Cloud Migration Best Practices: Lessons from 100+ Projects',
    excerpt: 'Learn from our experience migrating enterprises to the cloud and avoid common pitfalls.',
    date: '2024-12-05',
    author: 'Mohammed Hassan',
    category: 'Cloud Services',
    readTime: '6 min read',
    slug: 'cloud-migration-best-practices'
  },
  {
    title: 'Zero Trust Security: Implementation Guide for SMEs',
    excerpt: 'How small and medium enterprises can implement Zero Trust security architecture on a budget.',
    date: '2024-11-28',
    author: 'Fatima Al-Zahra',
    category: 'Cybersecurity',
    readTime: '7 min read',
    slug: 'zero-trust-security-smes'
  },
  {
    title: 'RPA Success Stories: How Automation Transformed Our Clients',
    excerpt: 'Real-world examples of how Robotic Process Automation delivered measurable ROI for businesses.',
    date: '2024-11-20',
    author: 'Omar Khalil',
    category: 'AI & Automation',
    readTime: '4 min read',
    slug: 'rpa-success-stories'
  },
  {
    title: 'Managed IT Services: When to Outsource vs. In-House',
    excerpt: 'A comprehensive analysis to help you decide between managed IT services and building an internal team.',
    date: '2024-11-15',
    author: 'Noor Al-Saudi',
    category: 'Managed IT',
    readTime: '6 min read',
    slug: 'managed-it-vs-inhouse'
  }
];

const categories = ['All', 'AI & Automation', 'Cybersecurity', 'Cloud Services', 'Managed IT'];

export default function Blog() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Tech <span className="text-blue-600">Insights</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
              Stay ahead with expert insights on IT trends, cybersecurity, AI developments, 
              and technology best practices from our team.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Tech Insights
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest IT trends and expert insights.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-blue-500 focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}