
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Privacy Policy | Golden Hands Decorators Ltd</title>
        <meta name="description" content="Privacy Policy for Golden Hands Decorators Ltd - London's premier painting and decorating service. Learn about how we collect, use, and protect your data." />
      </Helmet>
      
      <Navbar />
      
      <main className="container-custom pt-32 pb-16">
        <h1 className="section-title mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6">Last Updated: April 29, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>Welcome to Golden Hands Decorators Ltd. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. The Data We Collect About You</h2>
          <p>Personal data means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-6 mt-4 mb-4 space-y-2">
            <li>Identity Data includes first name, last name, username or similar identifier.</li>
            <li>Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
            <li>Financial Data includes bank account and payment card details.</li>
            <li>Transaction Data includes details about payments to and from you and other details of products and services you have purchased from us.</li>
            <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version.</li>
            <li>Profile Data includes your username and password, purchases or orders made by you, your preferences, feedback and survey responses.</li>
            <li>Usage Data includes information about how you use our website, products and services.</li>
            <li>Marketing and Communications Data includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Personal Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-6 mt-4 mb-4 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
          <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Legal Rights</h2>
          <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:</p>
          <ul className="list-disc pl-6 mt-4 mb-4 space-y-2">
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
            <li>Request restriction of processing your personal data.</li>
            <li>Request transfer of your personal data.</li>
            <li>Right to withdraw consent.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Details</h2>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact us:</p>
          <p className="mt-4">
            Golden Hands Decorators Ltd<br />
            123 Painter's Street<br />
            London, UK<br />
            Email: privacy@goldenhands.co.uk<br />
            Phone: +44 20 1234 5678
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
