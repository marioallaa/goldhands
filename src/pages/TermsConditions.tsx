
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { Helmet } from "react-helmet";

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Terms & Conditions | Golden Hands Decorators Ltd</title>
        <meta name="description" content="Terms and Conditions for Golden Hands Decorators Ltd - London's premier painting and decorating service. Read our terms of service before engaging our services." />
      </Helmet>
      
      <Navbar />
      
      <main className="container-custom pt-32 pb-16">
        <h1 className="section-title mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6">Last Updated: April 29, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>These terms and conditions outline the rules and regulations for the use of Golden Hands Decorators Ltd's website and services.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Acceptance of Terms</h2>
          <p>By accessing this website and/or using our services, we assume you accept these terms and conditions in full. Do not continue to use Golden Hands Decorators Ltd's website or services if you do not accept all of the terms and conditions stated on this page.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Services</h2>
          <p>Golden Hands Decorators Ltd provides painting and decorating services for residential and commercial properties. All services provided are subject to these terms and conditions.</p>
          <p className="mt-4">Our services include but are not limited to:</p>
          <ul className="list-disc pl-6 mt-4 mb-4 space-y-2">
            <li>Interior painting</li>
            <li>Exterior painting</li>
            <li>Wallpapering</li>
            <li>Residential decorating</li>
            <li>Commercial decorating</li>
            <li>Specialist finishes</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Quotes and Pricing</h2>
          <p>All quotes provided are valid for 30 days from the date issued. Quotes are based on the information provided by the client and may be subject to change upon site inspection or if the scope of work changes.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Payment Terms</h2>
          <p>For projects under £1,000, full payment is required upon completion. For projects over £1,000, a 25% deposit is required before commencement, with the balance due upon completion. For large projects, staged payments may be agreed upon in advance.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cancellation Policy</h2>
          <p>If you wish to cancel a confirmed booking, please notify us as soon as possible. Cancellations made within 48 hours of the scheduled start date may incur a cancellation fee of 10% of the quoted price to cover administrative costs and lost scheduling opportunities.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Warranty</h2>
          <p>We provide a 2-year workmanship warranty on all our services. This warranty does not cover:</p>
          <ul className="list-disc pl-6 mt-4 mb-4 space-y-2">
            <li>Damage caused by the client or third parties after completion</li>
            <li>Natural wear and tear</li>
            <li>Issues arising from structural defects in the property</li>
            <li>Damage caused by extreme weather conditions (for exterior work)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and images, is the property of Golden Hands Decorators Ltd and is protected by copyright laws.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Limitation of Liability</h2>
          <p>Golden Hands Decorators Ltd shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use or inability to use our services.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
          <p>If you have any questions about these Terms and Conditions, please contact us:</p>
          <p className="mt-4">
            Golden Hands Decorators Ltd<br />
            123 Painter's Street<br />
            London, UK<br />
            Email: info@goldenhands.co.uk<br />
            Phone: +44 20 1234 5678
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsConditions;
