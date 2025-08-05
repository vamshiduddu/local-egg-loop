import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Egg, User, ShoppingCart } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Subscriptions", href: "#subscriptions" },
    { name: "Our Story", href: "#story" },
    { name: "Delivery", href: "#delivery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-full">
              <Egg className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">FarmFresh</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Account
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Cart
            </Button>
            <Button variant="farm" size="sm">
              Subscribe Now
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-primary rounded-full">
                      <Egg className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-lg font-bold">FarmFresh</span>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-foreground hover:text-primary transition-colors duration-200 text-lg font-medium"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 pt-6 border-t">
                    <Button variant="outline" className="w-full flex items-center gap-2">
                      <User className="w-4 h-4" />
                      My Account
                    </Button>
                    <Button variant="outline" className="w-full flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Cart
                    </Button>
                    <Button variant="farm" className="w-full">
                      Subscribe Now
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;