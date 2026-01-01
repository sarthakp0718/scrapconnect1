const PricingSection = () => {
  const metals = [
    {
      name: "Iron/Steel",
      emoji: "🔩",
      priceRange: "₹8 - ₹25",
      avgPrice: "₹15/kg",
      category: "ferrous",
      color: "destructive",
    },
    {
      name: "Aluminum",
      emoji: "🥫",
      priceRange: "₹80 - ₹120",
      avgPrice: "₹100/kg",
      category: "non-ferrous",
      color: "primary",
    },
    {
      name: "Copper",
      emoji: "🔌",
      priceRange: "₹350 - ₹450",
      avgPrice: "₹400/kg",
      category: "non-ferrous",
      color: "primary",
    },
    {
      name: "Brass",
      emoji: "🔔",
      priceRange: "₹250 - ₹350",
      avgPrice: "₹300/kg",
      category: "non-ferrous",
      color: "primary",
    },
    {
      name: "Stainless Steel",
      emoji: "🍴",
      priceRange: "₹40 - ₹80",
      avgPrice: "₹60/kg",
      category: "ferrous",
      color: "destructive",
    },
    {
      name: "Lead",
      emoji: "🔋",
      priceRange: "₹80 - ₹120",
      avgPrice: "₹100/kg",
      category: "non-ferrous",
      color: "primary",
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-surface-dark text-surface-dark-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Current <span className="text-gradient-primary">Market Rates</span>
          </h2>
          <p className="text-lg text-surface-dark-foreground/70 max-w-2xl mx-auto">
            Fair, transparent pricing updated in real-time. No haggling, no hidden fees.
          </p>
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <span className="text-sm font-medium">Ferrous Metals</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-sm font-medium">Non-Ferrous Metals</span>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metals.map((metal, index) => (
            <div
              key={index}
              className="group relative bg-surface-dark-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-surface-dark-foreground/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Category Indicator */}
              <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${
                metal.color === "destructive" ? "bg-destructive" : "bg-primary"
              }`} />

              {/* Emoji */}
              <div className="text-4xl mb-4">{metal.emoji}</div>

              {/* Metal Name */}
              <h3 className="text-xl font-bold mb-2">{metal.name}</h3>

              {/* Price Range */}
              <div className="text-2xl font-bold text-primary mb-1">
                {metal.priceRange}
              </div>

              {/* Average Price */}
              <p className="text-sm text-surface-dark-foreground/60">
                Average: {metal.avgPrice}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>

        {/* Bonus Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-accent/20 rounded-2xl px-6 py-4">
            <span className="text-2xl">🎁</span>
            <div className="text-center sm:text-left">
              <div className="font-bold text-accent">+20% Magnetic Sorting Bonus</div>
              <div className="text-sm text-surface-dark-foreground/70">
                Extra rewards when you use our smart dustbins with magnetic sorting!
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-surface-dark-foreground/50 mt-8">
          * Prices are subject to market fluctuations. Updated daily based on commodity rates.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
