import { Magnet, Palette, QrCode, BarChart3, Shield, IndianRupee } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Magnet className="w-8 h-8" />,
      emoji: "🧲",
      title: "Magnetic Sorting",
      description: "Industry-first magnetic auto-sorting separates ferrous metals automatically",
      stat: "95% injury reduction",
      color: "primary",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      emoji: "🎨",
      title: "Color-Coded System",
      description: "Three-zone classification: Ferrous (Red), Non-Ferrous (Green), General (Yellow)",
      stat: "Zero confusion, perfect sorting",
      color: "accent",
    },
    {
      icon: <QrCode className="w-8 h-8" />,
      emoji: "📱",
      title: "QR Tracking",
      description: "Every transaction gets unique tracking ID for 100% transparency",
      stat: "Complete audit trail",
      color: "primary",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      emoji: "📊",
      title: "IoT Monitoring",
      description: "Real-time fill level monitoring with smart alerts (Green/Yellow/Red)",
      stat: "40% efficiency increase",
      color: "accent",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      emoji: "🔒",
      title: "Safety First",
      description: "Auto safety locks for sharp items, no manual metal handling required",
      stat: "Worker safety guaranteed",
      color: "primary",
    },
    {
      icon: <IndianRupee className="w-8 h-8" />,
      emoji: "💰",
      title: "Fair Pricing",
      description: "Transparent market rates: ₹8-₹450/kg with instant calculation",
      stat: "No bargaining, no exploitation",
      color: "accent",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Key Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Powered by <span className="text-gradient-primary">Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technology meets practical design for the ultimate scrap management experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 lg:p-8 shadow-card card-hover border border-border overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                feature.color === "accent" 
                  ? "bg-gradient-to-br from-accent/10 to-transparent" 
                  : "bg-gradient-to-br from-primary/10 to-transparent"
              }`} />

              <div className="relative z-10">
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  feature.color === "accent" 
                    ? "bg-accent/10 text-accent" 
                    : "bg-primary/10 text-primary"
                }`}>
                  <span className="text-3xl">{feature.emoji}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stat Badge */}
                <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${
                  feature.color === "accent"
                    ? "bg-accent/10 text-accent"
                    : "bg-primary/10 text-primary"
                }`}>
                  {feature.stat}
                </div>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity ${
                feature.color === "accent" ? "bg-accent" : "bg-primary"
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
