import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - FANDBA',
  description: 'Terms of service for FANDBA services and website usage',
};

export default function TermsOfService() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Terms of <span className="text-blue-600">Service</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Please read these terms carefully before using our services and website.
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              <strong>Last Updated:</strong> September 30, 2025
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600">
              These Terms of Service ("Terms") govern your access to and use of the FANDBA website and services (the "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you disagree with any part of these Terms, you may not access our Services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use License</h2>
            <p className="text-gray-600">
              Unless otherwise stated, FANDBA and its licensors own the intellectual property rights for all material on FANDBA. All intellectual property rights are reserved. You may access this material for your personal use subjected to restrictions set in these Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">User Responsibilities</h2>
            <p className="text-gray-600">
              You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Prohibited Activities</h2>
            <p className="text-gray-600">
              You may not:
            </p>
            <ul className="text-gray-600 list-disc pl-8">
              <li>Republish material from FANDBA</li>
              <li>Sell, rent, or sub-license material from FANDBA</li>
              <li>Reproduce, duplicate or copy material from FANDBA</li>
              <li>Redistribute content from FANDBA</li>
              <li>Engage in any data mining or similar extraction activities</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600">
              FANDBA shall not be liable for any consequential, incidental, indirect, or special damages, including but not limited to loss of data or profits, arising out of your use of our Services, even if FANDBA has been advised of the possibility of such damages.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Services Provided</h2>
            <p className="text-gray-600">
              FANDBA provides IT solutions, cybersecurity services, and AI automation. Our services are provided "as is" without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security and Protection</h2>
            <p className="text-gray-600">
              We implement industry-standard security measures to protect your data. However, you acknowledge that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Indemnification</h2>
            <p className="text-gray-600">
              You agree to indemnify and hold harmless FANDBA and its affiliates, officers, agents, employees, and partners from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of the Services, your violation of these Terms, or your violation of applicable laws or regulations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Governing Law</h2>
            <p className="text-gray-600">
              These Terms shall be governed and construed in accordance with the laws of the United States and the State of Wyoming, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. You are advised to review these Terms periodically for any changes. Changes to these Terms are effective when they are posted on this page.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about these Terms of Service, please contact us at:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>US Operations</strong><br />
                  30 N Gould ST Suite 32966<br />
                  Sheridan, WY 82801, USA<br /><br />
                  Phone: +1 307-533-5472<br />
                  Email: info@fandba.us
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>UK Operations</strong><br />
                  London, United Kingdom<br /><br />
                  Phone: +44 7868693235<br />
                  Email: info@fandba.co.uk
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}