
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Golden Hands Decorators Ltd | London Painting & Decorating Services</title>
        <meta name="description" content="London's premier painting and decorating service. Transform your space with our professional residential and commercial decorating solutions." />
        <meta name="keywords" content="painting, decorating, London decorators, interior painting, exterior painting, wallpapering" />
      </Helmet>
      
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
