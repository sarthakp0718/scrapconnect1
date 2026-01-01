import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Smartphone, Trash2 } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { value: "10,000+", label: "kg recycled monthly", icon: "♻️" },
    { value: "₹8-₹450", label: "per kg", icon: "💰" },
    { value: "500+", label: "active users", icon: "👥" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-slide-up">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                India's First Smart Scrap Solution
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-slide-up animation-delay-100">
                Revolutionizing{" "}
                <span className="text-gradient-primary">Metal Recycling</span>{" "}
                with Smart Technology
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl animate-slide-up animation-delay-200">
                Turn your scrap into cash with India's first magnetic auto-sorting
                dustbin + app marketplace. Safe, transparent, and rewarding.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-300">
              <Button variant="hero" size="xl" className="group">
                <Download className="w-5 h-5" />
                Download App
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 animate-slide-up animation-delay-400">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-card shadow-card"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Illustration */}
          <div className="relative flex justify-center items-center animate-slide-up animation-delay-500">
            {/* Main Dustbin */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl scale-110" />
              
              {/* Smart Dustbin Card */}
              <div className="relative bg-card rounded-3xl p-8 shadow-card-hover border border-border animate-float">
                <div className="w-48 h-64 sm:w-64 sm:h-80 bg-gradient-to-b from-primary/20 to-primary/5 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Dustbin Icon */}
                  <Trash2 className="w-20 h-20 sm:w-28 sm:h-28 text-primary mb-4" />
                  
                  {/* Compartments */}
                  <div className="flex gap-2 mb-4">
                    <div className="w-8 h-12 sm:w-12 sm:h-16 rounded bg-destructive/30 flex items-center justify-center text-xs font-medium">Fe</div>
                    <div className="w-8 h-12 sm:w-12 sm:h-16 rounded bg-primary/30 flex items-center justify-center text-xs font-medium">Non-Fe</div>
                  </div>
                  
                  {/* Status Bar */}
                  <div className="w-full px-4">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-primary rounded-full" />
                    </div>
                    <div className="text-xs text-center text-muted-foreground mt-1">75% Full</div>
                  </div>
                </div>
                
                {/* IoT Badge */}
                <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  IoT Enabled
                </div>
              </div>

              {/* Floating Phone */}
              <div className="absolute -right-8 sm:-right-16 top-1/2 -translate-y-1/2 animate-float-delayed">
                <div className="bg-card rounded-2xl p-3 shadow-card-hover border border-border">
                  <div className="w-24 sm:w-32 h-48 sm:h-56 bg-surface-dark rounded-xl flex flex-col items-center justify-center gap-3 p-3">
                    <Smartphone className="w-8 h-8 text-primary" />
                    <div className="w-full space-y-2">
                      <div className="h-2 bg-primary/30 rounded" />
                      <div className="h-2 bg-primary/20 rounded w-3/4" />
                      <div className="h-2 bg-primary/10 rounded w-1/2" />
                    </div>
                    <div className="w-full bg-primary/20 rounded-lg p-2 text-center">
                      <div className="text-[10px] text-primary-foreground/80">Earn</div>
                      <div className="text-sm font-bold text-primary">₹450/kg</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -left-4 sm:-left-12 top-8 animate-float">
                <div className="bg-card rounded-xl p-3 shadow-card border border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      🧲
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Auto-Sort</div>
                      <div className="text-sm font-bold">Active</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 sm:-left-8 bottom-12 animate-float-delayed">
                <div className="bg-accent text-accent-foreground rounded-xl px-4 py-2 shadow-lg">
                  <div className="text-xs">+20 Points</div>
                  <div className="text-sm font-bold">Bonus!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
