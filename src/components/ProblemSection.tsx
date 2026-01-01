import { AlertTriangle, Trash, DollarSign, MapPin } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      emoji: "🚨",
      stat: "60%",
      title: "Metal waste goes to landfills",
      description: "Valuable metal resources are being wasted every day",
    },
    {
      icon: <Trash className="w-8 h-8" />,
      emoji: "🤕",
      stat: "15,000+",
      title: "Injuries from manual sorting",
      description: "Workers face dangerous conditions handling scrap",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      emoji: "💰",
      stat: "0%",
      title: "No transparent pricing",
      description: "Sellers are exploited with unfair scrap valuations",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      emoji: "📍",
      stat: "40%",
      title: "Inefficient collection",
      description: "Scattered scrap leads to missed opportunities",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-surface-dark text-surface-dark-foreground relative overflow-hidden">
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
          <span className="inline-block px-4 py-2 rounded-full bg-destructive/20 text-destructive text-sm font-medium mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The Metal Waste Crisis
          </h2>
          <p className="text-lg text-surface-dark-foreground/70 max-w-2xl mx-auto">
            India's metal recycling industry faces critical challenges that harm our environment, economy, and workers.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-surface-dark-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-surface-dark-foreground/10 hover:border-destructive/50 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Emoji */}
              <div className="text-4xl mb-4">{problem.emoji}</div>

              {/* Stat */}
              <div className="text-3xl font-bold text-destructive mb-2">
                {problem.stat}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>

              {/* Description */}
              <p className="text-sm text-surface-dark-foreground/60">
                {problem.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-destructive/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-surface-dark-foreground/80">
            It's time for a <span className="text-primary font-semibold">smarter solution</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
