import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - FANDBA',
  description: 'Privacy policy for FANDBA services and website usage',
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Privacy <span className="text-blue-600">Policy</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              <strong>Last Updated:</strong> October 22, 2025
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-600">
              We collect information you provide directly to us, such as when you contact us, register for services, or communicate with us. This may include your name, email address, phone number, company information, and any other information you choose to provide.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600">
              We use the information we collect to provide, maintain, and improve our services, communicate with you, send you technical notices, respond to your inquiries, and for other customer service purposes. We may also use your information to send you marketing communications, with your consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Protection and Security</h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security practices comply with applicable federal and state regulations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sharing Your Information</h2>
            <p className="text-gray-600">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, conducting business, or serving our users, provided they agree to maintain the confidentiality of your information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights Under GDPR</h2>
            <p className="text-gray-600">
              If you are located in the European Economic Area (EEA), you have specific rights under the General Data Protection Regulation (GDPR). These include:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>The right to be informed about how your personal data is being processed</li>
              <li>The right of access to your personal data held by us</li>
              <li>The right to rectification of inaccurate personal data</li>
              <li>The right to erasure (right to be forgotten)</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal data</li>
              <li>Rights related to automated decision making and profiling</li>
            </ul>
            <p className="text-gray-600 mt-2">
              To exercise any of these rights, please contact us using the information provided below.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Legal Basis for Processing</h2>
            <p className="text-gray-600">
              We process your personal data based on one or more of the following legal grounds according to the GDPR:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>Consent: You have given clear consent for us to process your personal data for a specific purpose</li>
              <li>Contract: Processing is necessary for the performance of a contract with you</li>
              <li>Legal obligation: Processing is necessary for compliance with a legal obligation</li>
              <li>Legitimate interests: Processing is necessary for our legitimate interests, provided these are not overridden by your interests or fundamental rights</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Retention</h2>
            <p className="text-gray-600">
              We will retain your personal information only for as long as necessary for the purposes set out in this Privacy Policy, to comply with legal obligations, resolve disputes, and enforce our agreements. The criteria we use to determine the retention period include:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>The purpose for which the personal information was collected and processed</li>
              <li>Whether we have a legal or contractual obligation to retain the personal information</li>
              <li>The legitimate business purposes for which we maintain the information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-600">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. When you visit our website, we may use essential cookies to enable basic functions and non-essential cookies for analytics and marketing purposes. These cookies will only be stored on your device after you have given consent. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
            <p className="text-gray-600">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">International Data Transfers</h2>
            <p className="text-gray-600">
              If you are located outside the United States, please be aware that your information may be transferred to and processed in the United States. By using our services, you consent to such transfers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Protection Officer</h2>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy or wish to exercise your rights under the GDPR, you may contact our Data Protection Officer:
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Data Protection Officer</strong><br />
              Email: dpo@fandba.us<br />
              Phone: +1 307-533-5472
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Exercise Your Rights</h2>
            <p className="text-gray-600">
              To exercise any of your rights under GDPR, please contact us using one of the methods below. Please note that we may ask you to verify your identity before responding to your request.
            </p>
            <p className="text-gray-600 mt-2">
              In your request, please specify which right you wish to exercise and the information to which your request relates. We will respond to your request in accordance with applicable law, typically within one month of receiving your request. This period may be extended by two months where necessary, considering the complexity and number of requests.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">International Data Transfers</h2>
            <p className="text-gray-600">
              Your information, including personal data, may be transferred to computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ. If you are located outside the United States and choose to provide information to us, please note that we transfer the data, including personal data, to the United States and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">California Consumer Privacy Act (CCPA) Disclosure</h2>
            <p className="text-gray-600">
              For California residents, we collect the following categories of personal information: identifiers, commercial information, internet or other network activity information, and inferences drawn from other information. We collect this information for business and commercial purposes as described in this privacy policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Compliance and Enforcement</h2>
            <p className="text-gray-600">
              We are committed to resolving any complaints about our collection, use, and retention of your personal information. If you have questions or concerns about this Privacy Policy or believe that we have not collected, used, or retained your personal information in accordance with this Privacy Policy, please contact us immediately. If you are a resident of the EU and have concerns about our processing of your personal data, you have the right to lodge a complaint with a data protection authority where you live, work, or where you believe a violation may have occurred.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-600">
              We may update this privacy policy from time to time. When we do, we will revise the "Last Updated" date at the top of this page. Your continued use of our services after any changes constitutes acceptance of those changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about this privacy policy, please contact us at:
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