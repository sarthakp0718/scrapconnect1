import { FileText, Bell, Wallet, MapPin, QrCode } from "lucide-react";

const HowItWorksSection = () => {
  const userSteps = [
    {
      step: 1,
      icon: <FileText className="w-6 h-6" />,
      emoji: "📝",
      title: "Post Your Scrap",
      description: "Select metal type, enter weight, add your location",
    },
    {
      step: 2,
      icon: <Bell className="w-6 h-6" />,
      emoji: "🔔",
      title: "Get Notified",
      description: "Collectors receive alert and accept the job",
    },
    {
      step: 3,
      icon: <Wallet className="w-6 h-6" />,
      emoji: "💰",
      title: "Get Paid",
      description: "Collector picks up, you earn cash + points",
    },
  ];

  const collectorSteps = [
    {
      step: 1,
      icon: <Bell className="w-6 h-6" />,
      emoji: "🔔",
      title: "Receive Alerts",
      description: "Get notified of nearby scrap posts",
    },
    {
      step: 2,
      icon: <MapPin className="w-6 h-6" />,
      emoji: "📍",
      title: "Accept & Navigate",
      description: "Choose jobs, get optimal routes",
    },
    {
      step: 3,
      icon: <QrCode className="w-6 h-6" />,
      emoji: "💵",
      title: "Collect & Earn",
      description: "Verify with QR, complete collection, get paid",
    },
  ];

  const StepCard = ({ step, emoji, title, description, isLast }: {
    step: number;
    emoji: string;
    title: string;
    description: string;
    isLast?: boolean;
  }) => (
    <div className="relative flex flex-col items-center text-center">
      {/* Connector Line */}
      {!isLast && (
        <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-primary/20" />
      )}
      
      {/* Step Circle */}
      <div className="relative z-10 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <span className="text-3xl">{emoji}</span>
        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
          {step}
        </div>
      </div>

      {/* Content */}
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground max-w-xs">{description}</p>
    </div>
  );

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simple <span className="text-gradient-primary">3-Step</span> Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're selling scrap or collecting it, our process is designed to be quick, transparent, and rewarding.
          </p>
        </div>

        {/* For Users */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px flex-1 max-w-24 bg-border" />
            <h3 className="text-xl font-bold px-4 py-2 rounded-full bg-secondary text-secondary-foreground">
              For Users (Posters)
            </h3>
            <div className="h-px flex-1 max-w-24 bg-border" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
            {userSteps.map((step, index) => (
              <StepCard
                key={index}
                step={step.step}
                emoji={step.emoji}
                title={step.title}
                description={step.description}
                isLast={index === userSteps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* For Collectors */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px flex-1 max-w-24 bg-border" />
            <h3 className="text-xl font-bold px-4 py-2 rounded-full bg-accent/20 text-accent-foreground">
              For Collectors
            </h3>
            <div className="h-px flex-1 max-w-24 bg-border" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
            {collectorSteps.map((step, index) => (
              <StepCard
                key={index}
                step={step.step}
                emoji={step.emoji}
                title={step.title}
                description={step.description}
                isLast={index === collectorSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
