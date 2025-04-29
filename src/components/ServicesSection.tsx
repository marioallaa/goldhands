
import { Brush, PaintBucket, Palette, Home, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <Brush className="h-10 w-10 text-gold-500" />,
    title: "Interior Painting",
    description: "Transform your interiors with our premium painting services, using only the highest quality materials for a flawless finish."
  },
  {
    icon: <PaintBucket className="h-10 w-10 text-gold-500" />,
    title: "Exterior Painting",
    description: "Enhance your property's curb appeal with our durable, weather-resistant exterior painting services."
  },
  {
    icon: <Palette className="h-10 w-10 text-gold-500" />,
    title: "Wallpapering",
    description: "Add character and style to your space with our professional wallpaper installation services."
  },
  {
    icon: <Home className="h-10 w-10 text-gold-500" />,
    title: "Residential Services",
    description: "From single rooms to entire homes, we provide comprehensive decorating services for all residential properties."
  },
  {
    icon: <Building className="h-10 w-10 text-gold-500" />,
    title: "Commercial Services",
    description: "Minimal disruption, maximum impact. Our commercial services ensure your business looks professional and inviting."
  },
  {
    icon: <Brush className="h-10 w-10 text-gold-500" />,
    title: "Specialist Finishes",
    description: "From venetian plaster to textured effects, our team can create stunning specialty finishes to make your space unique."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-beige-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:mx-auto">Our Services</h2>
          <p className="text-lg text-beige-800 max-w-2xl mx-auto">
            We deliver exceptional quality and craftsmanship across a comprehensive range of painting and decorating services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-card hover:shadow-gold-200/50 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="p-3 bg-gold-50 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-beige-900">{service.title}</h3>
                <p className="text-beige-700">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
