import { Trash2, Smartphone, Gift, Check } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: <Trash2 className="w-12 h-12" />,
      emoji: "🗑️",
      title: "Smart Dustbins",
      subtitle: "IoT-Enabled Hardware",
      features: [
        "Magnetic auto-sorting",
        "Real-time fill monitoring",
        "Dual compartments",
        "4 sizes (20L-200L)",
      ],
      color: "primary",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      emoji: "📱",
      title: "Mobile App",
      subtitle: "Digital Marketplace",
      features: [
        "Post scrap in 2 minutes",
        "Real-time price calculator",
        "QR tracking",
        "Instant notifications",
      ],
      color: "accent",
    },
    {
      icon: <Gift className="w-12 h-12" />,
      emoji: "🎁",
      title: "Rewards",
      subtitle: "Dual Incentives",
      features: [
        "Cash payments (₹8-₹450/kg)",
        "10 points per kg",
        "+20% magnetic bonus",
        "Redeemable vouchers",
      ],
      color: "primary",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Solution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Meet <span className="text-gradient-primary">ScrapConnect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Uber for Scrap + Smart Dustbins + Reward Points – The complete ecosystem for modern metal recycling
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl p-8 shadow-card card-hover border border-border overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                solution.color === "accent" 
                  ? "from-accent/10 to-transparent" 
                  : "from-primary/10 to-transparent"
              } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-6">{solution.emoji}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                <p className={`text-sm font-medium mb-6 ${
                  solution.color === "accent" ? "text-accent" : "text-primary"
                }`}>
                  {solution.subtitle}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        solution.color === "accent" 
                          ? "bg-accent/20 text-accent" 
                          : "bg-primary/20 text-primary"
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Element */}
              <div className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full opacity-20 group-hover:opacity-30 transition-opacity ${
                solution.color === "accent" ? "bg-accent" : "bg-primary"
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
