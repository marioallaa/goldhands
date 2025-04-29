
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Professional painter at work"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          <div>
            <h2 className="section-title">About Golden Hands Decorators Ltd</h2>
            <p className="text-beige-800 mb-6">
              Founded in London with a passion for transforming spaces, Golden Hands Decorators has built a reputation for excellence over 15 years in the painting and decorating industry.
            </p>
            
            <p className="text-beige-800 mb-6">
              We take pride in our craftsmanship, attention to detail, and commitment to using premium products that ensure long-lasting, beautiful results for both residential and commercial properties across London.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-beige-800">Fully insured and qualified decorators</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-beige-800">Premium quality materials and finishes</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-beige-800">Free, no-obligation quotations</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-beige-800">Transparent pricing with no hidden costs</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-beige-800">Timely completion of all projects</p>
              </div>
            </div>
            
            <Button asChild className="bg-gold-500 hover:bg-gold-600 text-white">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
