import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Truck, CheckCircle } from "lucide-react";
import { useState } from "react";

const DeliveryZones = () => {
  const [pincode, setPincode] = useState("");
  const [checkResult, setCheckResult] = useState<'available' | 'unavailable' | null>(null);

  const deliveryAreas = [
    { name: "Koramangala", time: "7-9 AM", available: true },
    { name: "Indiranagar", time: "7-9 AM", available: true },
    { name: "HSR Layout", time: "8-10 AM", available: true },
    { name: "BTM Layout", time: "8-10 AM", available: true },
    { name: "Jayanagar", time: "9-11 AM", available: true },
    { name: "JP Nagar", time: "9-11 AM", available: true },
    { name: "Marathahalli", time: "Coming Soon", available: false },
    { name: "Whitefield", time: "Coming Soon", available: false }
  ];

  const handlePincodeCheck = () => {
    // Simulate pincode checking logic
    const availablePincodes = ['560034', '560038', '560102', '560068', '560041', '560078'];
    const isAvailable = availablePincodes.includes(pincode);
    setCheckResult(isAvailable ? 'available' : 'unavailable');
  };

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Delivery Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fresh eggs delivered to your doorstep. Check if we deliver to your area.
          </p>
        </div>

        {/* Pincode Checker */}
        <Card className="max-w-md mx-auto mb-16 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Check Delivery Availability
            </CardTitle>
            <CardDescription>
              Enter your pincode to see if we deliver to your area
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                placeholder="Enter pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                maxLength={6}
              />
              <Button onClick={handlePincodeCheck} variant="farm">
                Check
              </Button>
            </div>
            
            {checkResult && (
              <div className={`mt-4 p-3 rounded-lg flex items-center gap-2 ${
                checkResult === 'available' 
                  ? 'bg-primary/10 text-primary' 
                  : 'bg-destructive/10 text-destructive'
              }`}>
                {checkResult === 'available' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Great! We deliver to your area.</span>
                  </>
                ) : (
                  <>
                    <MapPin className="w-5 h-5" />
                    <span>We're expanding! Check back soon.</span>
                  </>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Delivery Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {deliveryAreas.map((area, index) => (
            <Card 
              key={index} 
              className={`transition-all duration-300 hover:shadow-soft ${
                area.available ? 'hover:scale-105' : 'opacity-75'
              }`}
            >
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <MapPin className={`w-6 h-6 ${area.available ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{area.name}</h3>
                <div className="flex items-center justify-center gap-1 mb-3">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{area.time}</span>
                </div>
                <Badge 
                  variant={area.available ? "default" : "secondary"}
                  className={area.available ? "bg-primary text-primary-foreground" : ""}
                >
                  {area.available ? "Available" : "Coming Soon"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Delivery Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <Truck className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Free Delivery</h3>
              <p className="text-sm text-muted-foreground">
                No delivery charges for all subscription orders within our service area
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Morning Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Fresh eggs delivered every morning between 7 AM to 11 AM
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Contact-free</h3>
              <p className="text-sm text-muted-foreground">
                Safe, hygienic delivery with SMS notifications and photo confirmations
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeliveryZones;