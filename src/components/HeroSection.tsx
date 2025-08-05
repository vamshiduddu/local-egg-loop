import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Heart } from "lucide-react";
import heroEggs from "@/assets/hero-eggs.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroEggs} 
          alt="Fresh farm eggs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Farm Fresh Eggs
            <span className="block text-primary-glow">Delivered Daily</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Subscribe to premium brown eggs from our local farm. Healthy, ethical, and delivered fresh to your doorstep within 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="farm" size="lg" className="text-lg px-8 py-3">
              Start Your Subscription
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/15 backdrop-blur-sm border-white/20 p-6 text-white hover:bg-white/20 transition-all duration-300">
              <MapPin className="w-8 h-8 text-primary-glow mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Local Delivery</h3>
              <p className="text-white/80">Fresh eggs delivered within 5-10km radius</p>
            </Card>
            
            <Card className="bg-white/15 backdrop-blur-sm border-white/20 p-6 text-white hover:bg-white/20 transition-all duration-300">
              <Clock className="w-8 h-8 text-primary-glow mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Flexible Plans</h3>
              <p className="text-white/80">Weekly, bi-weekly, or monthly subscriptions</p>
            </Card>
            
            <Card className="bg-white/15 backdrop-blur-sm border-white/20 p-6 text-white hover:bg-white/20 transition-all duration-300">
              <Heart className="w-8 h-8 text-primary-glow mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Farm Fresh</h3>
              <p className="text-white/80">From happy hens to your table in 24 hours</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;