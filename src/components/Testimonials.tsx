import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Mehta",
      location: "Koramangala, Bangalore",
      rating: 5,
      text: "The quality is outstanding! The eggs have bright orange yolks and taste so much better than store-bought ones. My kids love them and I feel good knowing where they come from.",
      plan: "Weekly Fresh subscriber"
    },
    {
      name: "Rajesh Kumar",
      location: "Indiranagar, Bangalore",
      rating: 5,
      text: "Never going back to regular eggs. The delivery is always on time, and the freshness is unmatched. Perfect for my family's breakfast routine.",
      plan: "Bi-Weekly Value subscriber"
    },
    {
      name: "Anita Sharma",
      location: "HSR Layout, Bangalore",
      rating: 5,
      text: "As someone who bakes frequently, I can really tell the difference these farm-fresh eggs make. My cakes turn out fluffier and the flavor is incredible.",
      plan: "Monthly Premium subscriber"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied families who trust us for their daily egg needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-warm transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-primary/30" />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-xs text-primary font-medium mt-1">{testimonial.plan}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-primary text-primary" />
              <span className="font-semibold">4.9/5</span>
              <span>Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">500+</span>
              <span>Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">98%</span>
              <span>Retention Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;