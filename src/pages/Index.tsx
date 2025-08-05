import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import FarmStory from "@/components/FarmStory";
import Testimonials from "@/components/Testimonials";
import DeliveryZones from "@/components/DeliveryZones";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="subscriptions">
          <SubscriptionPlans />
        </section>
        <section id="story">
          <FarmStory />
        </section>
        <Testimonials />
        <section id="delivery">
          <DeliveryZones />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
