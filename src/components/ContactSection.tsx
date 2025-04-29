
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // In a real application, you would send this data to your backend
    toast({
      title: "Enquiry Received",
      description: "Thank you for your message. We'll be in touch shortly!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:mx-auto">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your space? Get in touch for a free, no-obligation quote
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-playfair text-2xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gold-100 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-600">+44 (020) 7123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gold-100 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">info@goldenhandsdecorators.co.uk</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gold-100 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-600">
                      123 Painter's Lane<br />
                      London, SW1 2AB<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-playfair text-2xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-playfair text-2xl font-semibold mb-6">Request A Quote</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 7123 456789"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block mb-2 text-sm font-medium">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="" disabled>Select service</option>
                    <option value="Interior Painting">Interior Painting</option>
                    <option value="Exterior Painting">Exterior Painting</option>
                    <option value="Wallpapering">Wallpapering</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Specialist Finishes">Specialist Finishes</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please tell us more about your project, including size, timeframe, and any specific requirements."
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-gold-500 hover:bg-gold-600">
                Request A Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
