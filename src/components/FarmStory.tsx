import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Sun, Users, Award } from "lucide-react";

const FarmStory = () => {
  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Sustainable Farming",
      description: "Our hens roam freely on organic pastures, eating natural feed without hormones or antibiotics."
    },
    {
      icon: <Sun className="w-8 h-8 text-primary" />,
      title: "Daily Fresh Collection",
      description: "Eggs are collected every morning and delivered within 24 hours for maximum freshness."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Family Operated",
      description: "Three generations of farming experience with a commitment to quality and community."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Premium Quality",
      description: "Rich, golden yolks and firm whites from hens fed the finest natural grain mix."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Farm Story
              </h2>
              <p className="text-xl text-muted-foreground">
                From our family farm to your table
              </p>
            </div>

            <div className="prose prose-lg text-muted-foreground">
              <p>
                Started in 1987 by the Sharma family, Green Valley Poultry Farm has been providing 
                fresh, healthy eggs to our local community for over three decades. What began as a 
                small family operation with just 50 hens has grown into a sustainable farm housing 
                over 2,000 happy, free-range chickens.
              </p>
              <p>
                Our mission is simple: provide the freshest, most nutritious eggs while maintaining 
                the highest standards of animal welfare and environmental responsibility. Every egg 
                tells the story of our commitment to quality and our love for sustainable farming.
              </p>
            </div>

            <div className="bg-accent/50 rounded-lg p-6 border-l-4 border-primary">
              <h3 className="font-semibold text-lg mb-2">Farm Fresh Promise</h3>
              <p className="text-muted-foreground">
                We guarantee that every egg is collected within 24 hours of laying and reaches 
                your doorstep fresh, clean, and full of natural goodness.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmStory;