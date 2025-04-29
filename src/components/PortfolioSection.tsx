
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const portfolioItems = [
  {
    title: "Modern Living Room Transformation",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
    description: "Complete renovation including wall painting, ceiling work, and decorative molding installation."
  },
  {
    title: "Boutique Hotel Lobby",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    description: "Full redecoration with custom color scheme and special textured finishes."
  },
  {
    title: "Victorian Terrace Exterior",
    category: "Exterior",
    imageUrl: "https://images.unsplash.com/photo-1600047509807-f8e8e4477b8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    description: "Restoration and painting of this period property with heritage colors."
  },
  {
    title: "Contemporary Office Space",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Complete office redecoration with modern, brand-aligned color scheme."
  },
  {
    title: "Heritage Property Restoration",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Careful restoration and painting of period features and walls."
  },
  {
    title: "Kitchen Feature Wall",
    category: "Specialty",
    imageUrl: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    description: "Specialty finish with custom pattern work for a stunning focal point."
  }
];

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", ...new Set(portfolioItems.map(item => item.category))];
  
  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="section-padding bg-beige-50/70">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:mx-auto">Our Portfolio</h2>
          <p className="text-lg text-beige-700 max-w-2xl mx-auto">
            Browse through our recent projects and see the quality of our work firsthand
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category 
                ? "bg-gold-500 hover:bg-gold-600 text-white" 
                : "hover:border-gold-500 hover:text-gold-600"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer relative overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gold-900/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                    <p className="text-gold-100">{item.category}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="glass-card sm:max-w-[550px] p-0 overflow-hidden text-beige-900">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gold-600 mb-4">{item.category}</p>
                  <p className="text-beige-800">{item.description}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
