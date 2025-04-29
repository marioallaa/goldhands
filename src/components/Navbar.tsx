
import { useState, useEffect } from "react";
import { PaintBucket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled && !isMobileMenuOpen
          ? "glass-nav py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex items-center justify-between relative z-[60]">
        <Link to="/" className="flex items-center gap-2">
          <PaintBucket className="h-8 w-8 text-gold-500" />
          <span className="font-playfair font-bold text-xl md:text-2xl text-beige-900">
            Golden Hands
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#home" className="text-sm font-medium text-beige-800 hover:text-gold-600 transition-colors">
            Home
          </a>
          <a href="/#services" className="text-sm font-medium text-beige-800 hover:text-gold-600 transition-colors">
            Services
          </a>
          <a href="/#about" className="text-sm font-medium text-beige-800 hover:text-gold-600 transition-colors">
            About
          </a>
          <a href="/#portfolio" className="text-sm font-medium text-beige-800 hover:text-gold-600 transition-colors">
            Portfolio
          </a>
          <a href="/#testimonials" className="text-sm font-medium text-beige-800 hover:text-gold-600 transition-colors">
            Testimonials
          </a>
          <Button asChild className="bg-gold-500 hover:bg-gold-600 text-white">
            <a href="/#contact">Contact Us</a>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle - increased z-index to ensure it stays above overlay */}
        <button 
          className="md:hidden flex flex-col gap-1.5 relative z-[60]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={cn(
            "block h-0.5 w-6 bg-beige-800 transition-all duration-300",
            isMobileMenuOpen && "rotate-45 translate-y-2"
          )} />
          <span className={cn(
            "block h-0.5 w-6 bg-beige-800 transition-all duration-300",
            isMobileMenuOpen && "opacity-0"
          )} />
          <span className={cn(
            "block h-0.5 w-6 bg-beige-800 transition-all duration-300",
            isMobileMenuOpen && "-rotate-45 -translate-y-2"
          )} />
        </button>
      </div>

      {/* Mobile Navigation Menu - reduced z-index to be below the button */}
      <div className={cn(
        "fixed inset-0 glass-nav z-[55] transition-all duration-300 pt-20",
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <nav className="flex flex-col items-center gap-6 pt-6">
          <a 
            href="/#home" 
            className="text-lg font-medium text-beige-900" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="/#services" 
            className="text-lg font-medium text-beige-900" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="/#about" 
            className="text-lg font-medium text-beige-900" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="/#portfolio" 
            className="text-lg font-medium text-beige-900" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfolio
          </a>
          <a 
            href="/#testimonials" 
            className="text-lg font-medium text-beige-900" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <Button 
            className="bg-gold-500 hover:bg-gold-600 text-white w-32"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <a href="/#contact">Contact Us</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
