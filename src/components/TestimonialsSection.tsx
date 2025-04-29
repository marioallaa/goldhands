
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Kensington",
    testimonial: "Golden Hands transformed my dated living room into a stunning, modern space. Their attention to detail and color recommendations were spot on. The team was professional, tidy, and completed the work on schedule.",
    initials: "SJ",
  },
  {
    name: "Robert Chen",
    location: "Chelsea",
    testimonial: "We've used Golden Hands for several projects in our home over the past five years. Their quality is consistently excellent, and they're always reliable. I wouldn't trust anyone else with my decorating needs.",
    initials: "RC",
  },
  {
    name: "Emma Thompson",
    location: "Camden",
    testimonial: "As a property manager, I need decorators I can rely on. Golden Hands has never let me down. Their team is efficient, their pricing transparent, and the quality of work exceptional. Highly recommended.",
    initials: "ET",
  },
  {
    name: "James Wilson",
    location: "Richmond",
    testimonial: "I was incredibly impressed by the wallpapering job Golden Hands did in my period property. The pattern matching was perfect, and they took great care with the heritage details. A fantastic service.",
    initials: "JW",
  },
  {
    name: "Lisa Ahmed",
    location: "Islington",
    testimonial: "The exterior painting Golden Hands did for our Victorian terrace has transformed the house. They were meticulous in their preparation, and the finish is flawless. Worth every penny!",
    initials: "LA",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:mx-auto">Client Testimonials</h2>
          <p className="text-lg text-beige-700 max-w-2xl mx-auto">
            Don't just take our word for it - here's what our clients have to say about our services
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 px-4">
                <Card className="glass-card h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex-grow">
                      <svg
                        className="h-8 w-8 text-gold-500 mb-4"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="italic text-beige-800 mb-6">{testimonial.testimonial}</p>
                    </div>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 bg-gold-200 text-gold-800">
                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <p className="font-semibold text-beige-900">{testimonial.name}</p>
                        <p className="text-sm text-gold-600">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-2">
            <CarouselPrevious className="relative inset-auto bg-gold-200 hover:bg-gold-300 text-gold-800" />
            <CarouselNext className="relative inset-auto bg-gold-200 hover:bg-gold-300 text-gold-800" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
