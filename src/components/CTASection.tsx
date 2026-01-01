import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Apple, Play } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Join the Revolution
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Ready to Turn Your{" "}
            <span className="text-gradient-primary">Scrap into Cash?</span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Download the ScrapConnect app today and start earning from your metal waste. 
            It's free, it's simple, and it's rewarding.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" className="w-full sm:w-auto group">
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="text-base font-bold">App Store</div>
              </div>
            </Button>
            <Button variant="hero" size="xl" className="w-full sm:w-auto group">
              <Play className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-80">Get it on</div>
                <div className="text-base font-bold">Google Play</div>
              </div>
            </Button>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-foreground">10K+</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-foreground">4.8★</div>
              <div className="text-sm text-muted-foreground">App Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-foreground">₹10L+</div>
              <div className="text-sm text-muted-foreground">Paid to Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Cities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
