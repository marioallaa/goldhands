
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container-custom text-beige-900">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gold-600">Golden Hands</span> Decorators Ltd
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            London's premier painting and decorating service, transforming spaces with precision and care
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white">
              <a href="#contact">Get A Free Quote</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-gold-400 text-gold-600 hover:bg-gold-50">
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <a href="#services" className="animate-bounce">
          <svg 
            className="w-8 h-8 text-gold-600"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
