
import { PaintBucket } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-beige-100 text-beige-900 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PaintBucket className="h-8 w-8 text-gold-500" />
              <span className="font-playfair font-bold text-xl">Golden Hands</span>
            </div>
            <p className="text-beige-700 mb-4">
              London's premier painting and decorating service, transforming spaces with precision and care since 2008.
            </p>
            <p className="text-sm text-beige-600">
              Registered in England & Wales: 12345678
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-beige-700 hover:text-gold-600 transition-colors">Home</a></li>
              <li><a href="#services" className="text-beige-700 hover:text-gold-600 transition-colors">Services</a></li>
              <li><a href="#about" className="text-beige-700 hover:text-gold-600 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-beige-700 hover:text-gold-600 transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="text-beige-700 hover:text-gold-600 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-beige-700 hover:text-gold-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-beige-700 hover:text-gold-600 transition-colors">Interior Painting</a></li>
              <li><a href="#services" className="text-beige-700 hover:text-gold-600 transition-colors">Exterior Painting</a></li>
              <li><a href="#services" className="text-beige-700 hover:text-gold-600 transition-colors">Wallpapering</a></li>
              <li><a href="#services" className="text-beige-700 hover:text-gold-600 transition-colors">Residential Services</a></li>
              <li><a href="#services" className="text-beige-700 hover:text-gold-600 transition-colors">Commercial Services</a></li>
              <li><a href="#services" className="text-beige-700 hover:text-gold-600 transition-colors">Specialist Finishes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">Areas We Cover</h3>
            <p className="text-beige-700 mb-2">
              We provide our services across Greater London, including:
            </p>
            <div className="grid grid-cols-2 gap-1">
              <span className="text-beige-600">Kensington</span>
              <span className="text-beige-600">Chelsea</span>
              <span className="text-beige-600">Fulham</span>
              <span className="text-beige-600">Westminster</span>
              <span className="text-beige-600">Richmond</span>
              <span className="text-beige-600">Islington</span>
              <span className="text-beige-600">Camden</span>
              <span className="text-beige-600">Hackney</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-beige-200 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-beige-600 mb-4 md:mb-0">
              © {currentYear} Golden Hands Decorators Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/privacy-policy" className="text-beige-600 hover:text-gold-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-beige-600 hover:text-gold-600 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
