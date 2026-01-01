import { useState } from "react";
import { Zap, Magnet, QrCode, Lock, AlertTriangle, AlertCircle, Check, Truck } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import despia from "despia-native";

interface Dustbin {
  id: string;
  location: string;
  type: string;
  currentLevel: number;
  maxCapacity: number;
  lastEmptied: string;
  features: string[];
}

const initialDustbins: Dustbin[] = [
  {
    id: "1",
    location: "Main Campus Gate",
    type: "College/Lab Bin",
    currentLevel: 35,
    maxCapacity: 50,
    lastEmptied: "2 days ago",
    features: ["Magnetic", "QR Tracked", "Safety Lock"],
  },
  {
    id: "2",
    location: "Workshop Area",
    type: "Industrial Bin",
    currentLevel: 180,
    maxCapacity: 200,
    lastEmptied: "5 days ago",
    features: ["Magnetic", "QR Tracked", "Safety Lock"],
  },
  {
    id: "3",
    location: "Residential Block A",
    type: "Home Smart Bin",
    currentLevel: 8,
    maxCapacity: 20,
    lastEmptied: "1 day ago",
    features: ["Magnetic", "QR Tracked", "Safety Lock"],
  },
  {
    id: "4",
    location: "Factory Floor B",
    type: "Heavy Duty Bin",
    currentLevel: 120,
    maxCapacity: 300,
    lastEmptied: "3 days ago",
    features: ["Magnetic", "QR Tracked", "Safety Lock"],
  },
];

const SmartDustbinSection = () => {
  const [dustbins, setDustbins] = useState<Dustbin[]>(initialDustbins);

  const getFillPercentage = (current: number, max: number) => {
    return Math.round((current / max) * 100);
  };

  const getStatusColor = (percentage: number) => {
    if (percentage >= 85) return "destructive";
    if (percentage >= 60) return "warning";
    return "success";
  };

  const getStatusText = (percentage: number) => {
    if (percentage >= 85) return "Schedule Urgent Pickup";
    if (percentage >= 60) return "Plan Pickup Soon";
    return "Operating Normally";
  };

  const getStatusIcon = (percentage: number) => {
    if (percentage >= 85) return <Truck className="w-4 h-4" />;
    if (percentage >= 60) return <AlertTriangle className="w-4 h-4" />;
    return <Check className="w-4 h-4" />;
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 85) return "bg-red-500";
    if (percentage >= 60) return "bg-amber-500";
    return "bg-green-500";
  };

  const getButtonStyles = (percentage: number) => {
    if (percentage >= 85) return "bg-red-500 hover:bg-red-600 text-white";
    if (percentage >= 60) return "bg-amber-500 hover:bg-amber-600 text-white";
    return "bg-green-500 hover:bg-green-600 text-white";
  };

  const getIndicatorIcon = (percentage: number) => {
    if (percentage >= 85) return <AlertCircle className="w-5 h-5 text-red-500" />;
    if (percentage >= 60) return <AlertCircle className="w-5 h-5 text-amber-500" />;
    return <Check className="w-5 h-5 text-green-500" />;
  };

  const handleSchedulePickup = (dustbin: Dustbin) => {
    const percentage = getFillPercentage(dustbin.currentLevel, dustbin.maxCapacity);
    const urgency = percentage >= 85 ? "Urgent" : percentage >= 60 ? "Scheduled" : "Routine";
    
    // Send local push notification
    const message = `${urgency} pickup scheduled for ${dustbin.location}`;
    const title = "Pickup Scheduled";
    despia(`sendlocalpushmsg://push.send?s=2=msg!${encodeURIComponent(message)}&!#${encodeURIComponent(title)}&!#`);
    
    toast.success(`Pickup scheduled for ${dustbin.location}`, {
      description: `A ${urgency.toLowerCase()} pickup has been arranged for your ${dustbin.type}.`,
    });

    // Simulate emptying after scheduling
    if (percentage >= 60) {
      setTimeout(() => {
        setDustbins(prev => 
          prev.map(bin => 
            bin.id === dustbin.id 
              ? { ...bin, currentLevel: Math.round(bin.maxCapacity * 0.1), lastEmptied: "Just now" }
              : bin
          )
        );
        toast.info(`${dustbin.location} has been emptied!`);
      }, 3000);
    }
  };

  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case "Magnetic":
        return <Magnet className="w-3 h-3" />;
      case "QR Tracked":
        return <QrCode className="w-3 h-3" />;
      case "Safety Lock":
        return <Lock className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <section id="dustbin-monitor" className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
            <Zap className="w-4 h-4" />
            <span>IoT Enabled</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">⚡</span> Smart Dustbin Network Monitor
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time monitoring of all smart scrap dustbins with magnetic sorting and fill indicators
          </p>
        </div>

        {/* Dustbin Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {dustbins.map((dustbin) => {
            const percentage = getFillPercentage(dustbin.currentLevel, dustbin.maxCapacity);
            
            return (
              <div
                key={dustbin.id}
                className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{dustbin.location}</h3>
                    <p className="text-sm text-muted-foreground">{dustbin.type}</p>
                  </div>
                  {getIndicatorIcon(percentage)}
                </div>

                {/* Fill Level */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Fill Level</span>
                    <span className="text-sm font-semibold text-foreground">{percentage}%</span>
                  </div>
                  <div className="relative h-3 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className={`h-full transition-all duration-500 ${getProgressColor(percentage)}`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {dustbin.currentLevel}L / {dustbin.maxCapacity}L
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {dustbin.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                    >
                      {getFeatureIcon(feature)}
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Last Emptied */}
                <p className="text-xs text-muted-foreground mt-4">
                  Last emptied: {dustbin.lastEmptied}
                </p>

                {/* Action Button */}
                <Button
                  onClick={() => handleSchedulePickup(dustbin)}
                  className={`w-full mt-4 ${getButtonStyles(percentage)}`}
                >
                  {getStatusIcon(percentage)}
                  <span className="ml-2">{getStatusText(percentage)}</span>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Stats Summary */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="text-center p-4 bg-card/50 rounded-xl border border-border">
            <p className="text-2xl font-bold text-primary">{dustbins.length}</p>
            <p className="text-sm text-muted-foreground">Active Bins</p>
          </div>
          <div className="text-center p-4 bg-card/50 rounded-xl border border-border">
            <p className="text-2xl font-bold text-green-500">
              {dustbins.filter(d => getFillPercentage(d.currentLevel, d.maxCapacity) < 60).length}
            </p>
            <p className="text-sm text-muted-foreground">Normal</p>
          </div>
          <div className="text-center p-4 bg-card/50 rounded-xl border border-border">
            <p className="text-2xl font-bold text-amber-500">
              {dustbins.filter(d => {
                const p = getFillPercentage(d.currentLevel, d.maxCapacity);
                return p >= 60 && p < 85;
              }).length}
            </p>
            <p className="text-sm text-muted-foreground">Needs Attention</p>
          </div>
          <div className="text-center p-4 bg-card/50 rounded-xl border border-border">
            <p className="text-2xl font-bold text-red-500">
              {dustbins.filter(d => getFillPercentage(d.currentLevel, d.maxCapacity) >= 85).length}
            </p>
            <p className="text-sm text-muted-foreground">Urgent</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartDustbinSection;
