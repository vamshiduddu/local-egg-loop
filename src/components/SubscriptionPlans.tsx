import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Weekly Fresh",
      description: "Perfect for small families",
      price: "₹120",
      period: "week",
      eggs: "12 eggs",
      popular: false,
      features: [
        "12 premium brown eggs",
        "Weekly delivery",
        "Free delivery",
        "Skip anytime",
        "Fresh guarantee"
      ],
      savings: null
    },
    {
      name: "Bi-Weekly Value",
      description: "Great for regular households",
      price: "₹220",
      period: "2 weeks",
      eggs: "24 eggs",
      popular: true,
      features: [
        "24 premium brown eggs",
        "Bi-weekly delivery",
        "Free delivery",
        "Skip anytime",
        "Fresh guarantee",
        "10% savings vs weekly"
      ],
      savings: "Save ₹20"
    },
    {
      name: "Monthly Premium",
      description: "Best value for large families",
      price: "₹400",
      period: "month",
      eggs: "48 eggs",
      popular: false,
      features: [
        "48 premium brown eggs",
        "Monthly delivery",
        "Free delivery",
        "Skip anytime",
        "Fresh guarantee",
        "20% savings vs weekly"
      ],
      savings: "Save ₹80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Egg Subscription
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible plans designed for every household. All eggs are collected fresh daily from our free-range hens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-warm ${
                plan.popular ? 'ring-2 ring-primary shadow-soft scale-105' : 'hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              {plan.savings && (
                <div className="absolute -top-2 -right-2">
                  <Badge variant="secondary" className="bg-earth text-earth-foreground">
                    {plan.savings}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <div className="text-lg font-semibold text-earth">{plan.eggs}</div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.popular ? "farm" : "default"} 
                  className="w-full mt-6"
                  size="lg"
                >
                  Choose This Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include free delivery within our service area. Cancel or modify anytime.
          </p>
          <Button variant="outline">
            Check Delivery Availability
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;