import { useState } from "react";
import { MapPin, Phone, Star, Truck, Clock, CheckCircle, Package, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import despia from "despia-native";

const LiveDemoSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [weight, setWeight] = useState<number>(5);
  const [showDealer, setShowDealer] = useState(false);
  const [dealerAccepted, setDealerAccepted] = useState(false);
  const [step, setStep] = useState(1);
  const [categoryPage, setCategoryPage] = useState(0);

  const categories = [
    { id: "iron", name: "Iron/Steel", emoji: "🔩", pricePerKg: 15, color: "destructive" },
    { id: "aluminum", name: "Aluminum", emoji: "🥫", pricePerKg: 100, color: "primary" },
    { id: "copper", name: "Copper", emoji: "🔌", pricePerKg: 400, color: "accent" },
    { id: "brass", name: "Brass", emoji: "🔔", pricePerKg: 300, color: "primary" },
    { id: "steel", name: "Stainless Steel", emoji: "🍴", pricePerKg: 60, color: "destructive" },
    { id: "lead", name: "Lead/Battery", emoji: "🔋", pricePerKg: 100, color: "primary" },
    { id: "zinc", name: "Zinc", emoji: "⚙️", pricePerKg: 180, color: "primary" },
    { id: "nickel", name: "Nickel", emoji: "🪙", pricePerKg: 350, color: "accent" },
    { id: "tin", name: "Tin", emoji: "🥄", pricePerKg: 200, color: "primary" },
    { id: "bronze", name: "Bronze", emoji: "🏆", pricePerKg: 280, color: "accent" },
    { id: "cast-iron", name: "Cast Iron", emoji: "🍳", pricePerKg: 20, color: "destructive" },
    { id: "ms-scrap", name: "MS Scrap", emoji: "🔧", pricePerKg: 25, color: "destructive" },
    { id: "wire", name: "Copper Wire", emoji: "🧵", pricePerKg: 380, color: "accent" },
    { id: "radiator", name: "Radiator", emoji: "🌡️", pricePerKg: 150, color: "primary" },
    { id: "motor", name: "Electric Motor", emoji: "⚡", pricePerKg: 45, color: "destructive" },
    { id: "transformer", name: "Transformer", emoji: "🔌", pricePerKg: 120, color: "primary" },
    { id: "cable", name: "Cable Scrap", emoji: "📡", pricePerKg: 250, color: "accent" },
    { id: "aluminum-sheet", name: "Aluminum Sheet", emoji: "📄", pricePerKg: 110, color: "primary" },
  ];

  const itemsPerPage = 9;
  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const currentCategories = categories.slice(
    categoryPage * itemsPerPage,
    (categoryPage + 1) * itemsPerPage
  );

  const dealers = [
    { name: "Rajesh Kumar", rating: 4.8, distance: "1.2 km", phone: "+91 98765 43210", avatar: "RK", completedJobs: 234 },
    { name: "Amit Singh", rating: 4.9, distance: "2.5 km", phone: "+91 87654 32109", avatar: "AS", completedJobs: 189 },
    { name: "Priya Sharma", rating: 4.7, distance: "3.1 km", phone: "+91 76543 21098", avatar: "PS", completedJobs: 156 },
  ];

  const selectedCategoryData = categories.find(c => c.id === selectedCategory);
  const estimatedPrice = selectedCategoryData ? selectedCategoryData.pricePerKg * weight : 0;
  const bonusPoints = weight * 10;
  const magneticBonus = selectedCategoryData?.color === "destructive" ? Math.round(estimatedPrice * 0.2) : 0;

  const handlePostScrap = () => {
    if (!selectedCategory) return;
    setStep(2);
    setShowDealer(true);
    
    // Send local push notification using Despia
    const message = "Your scrap order has been received! A dealer will be assigned shortly.";
    const title = "Order Received";
    const url = "";
    despia(`sendlocalpushmsg://push.send?s=0=msg!${encodeURIComponent(message)}&!#${encodeURIComponent(title)}&!#${encodeURIComponent(url)}`);
    
    setTimeout(() => {
      setDealerAccepted(true);
      setStep(3);
    }, 2500);
  };

  const resetDemo = () => {
    setSelectedCategory(null);
    setWeight(5);
    setShowDealer(false);
    setDealerAccepted(false);
    setStep(1);
    setCategoryPage(0);
  };

  return (
    <section className="py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Interactive Demo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            See It <span className="text-gradient-primary">In Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience how easy it is to sell your scrap. Select a category, set the weight, and watch the magic happen!
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            {[
              { num: 1, label: "Select Scrap" },
              { num: 2, label: "Find Dealer" },
              { num: 3, label: "Get Paid" },
            ].map((s, index) => (
              <div key={s.num} className="flex items-center">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  step >= s.num 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                    step > s.num ? "bg-primary-foreground text-primary" : ""
                  }`}>
                    {step > s.num ? <CheckCircle className="w-4 h-4" /> : s.num}
                  </div>
                  <span className="hidden sm:inline text-sm font-medium">{s.label}</span>
                </div>
                {index < 2 && (
                  <div className={`w-8 sm:w-16 h-0.5 mx-2 transition-colors duration-300 ${
                    step > s.num ? "bg-primary" : "bg-border"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Panel - Category Selection & Price */}
          <div className="space-y-6">
            {/* Category Grid */}
            <div className="bg-background rounded-2xl p-6 shadow-card border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Select Scrap Category
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {categoryPage + 1}/{totalPages}
                  </span>
                  <button
                    onClick={() => setCategoryPage(Math.max(0, categoryPage - 1))}
                    disabled={categoryPage === 0 || step > 1}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCategoryPage(Math.min(totalPages - 1, categoryPage + 1))}
                    disabled={categoryPage === totalPages - 1 || step > 1}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {currentCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    disabled={step > 1}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left group ${
                      selectedCategory === category.id
                        ? "border-primary bg-primary/10 shadow-lg scale-105"
                        : "border-border hover:border-primary/50 hover:bg-muted/50"
                    } ${step > 1 ? "opacity-60 cursor-not-allowed" : ""}`}
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{category.emoji}</div>
                    <div className="font-medium text-sm truncate">{category.name}</div>
                    <div className={`text-xs font-semibold ${
                      category.color === "accent" ? "text-accent" : 
                      category.color === "destructive" ? "text-destructive" : "text-primary"
                    }`}>
                      ₹{category.pricePerKg}/kg
                    </div>
                  </button>
                ))}
              </div>

              {/* Category Stats */}
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{categories.length} categories available</span>
                <div className="flex gap-3">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-destructive"></span>
                    Ferrous
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Non-Ferrous
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    Premium
                  </span>
                </div>
              </div>
            </div>

            {/* Weight Slider */}
            <div className="bg-background rounded-2xl p-6 shadow-card border border-border">
              <h3 className="text-lg font-semibold mb-4">Estimated Weight</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">{weight} kg</span>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setWeight(Math.max(1, weight - 5))}
                      disabled={step > 1}
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-bold hover:bg-muted/80 disabled:opacity-50"
                    >
                      -5
                    </button>
                    <button 
                      onClick={() => setWeight(Math.max(1, weight - 1))}
                      disabled={step > 1}
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg font-bold hover:bg-muted/80 disabled:opacity-50"
                    >
                      -
                    </button>
                    <button 
                      onClick={() => setWeight(Math.min(100, weight + 1))}
                      disabled={step > 1}
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg font-bold hover:bg-muted/80 disabled:opacity-50"
                    >
                      +
                    </button>
                    <button 
                      onClick={() => setWeight(Math.min(100, weight + 5))}
                      disabled={step > 1}
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-bold hover:bg-muted/80 disabled:opacity-50"
                    >
                      +5
                    </button>
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  disabled={step > 1}
                  className="w-full h-3 bg-muted rounded-full appearance-none cursor-pointer accent-primary disabled:opacity-50"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 kg</span>
                  <span>25 kg</span>
                  <span>50 kg</span>
                  <span>75 kg</span>
                  <span>100 kg</span>
                </div>
              </div>
            </div>

            {/* Price Calculation */}
            {selectedCategory && (
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20 animate-fade-in">
                <h3 className="text-lg font-semibold mb-4">💰 Estimated Earnings</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Base Price ({selectedCategoryData?.name})</span>
                    <span className="font-semibold">₹{estimatedPrice}</span>
                  </div>
                  {magneticBonus > 0 && (
                    <div className="flex justify-between items-center text-accent">
                      <span>🧲 Magnetic Sorting Bonus (+20%)</span>
                      <span className="font-semibold">+₹{magneticBonus}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-primary">
                    <span>🎁 Reward Points</span>
                    <span className="font-semibold">+{bonusPoints} pts</span>
                  </div>
                  <div className="border-t border-border pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">Total Earnings</span>
                      <span className="text-2xl font-bold text-primary">₹{estimatedPrice + magneticBonus}</span>
                    </div>
                  </div>
                </div>

                {step === 1 && (
                  <Button 
                    onClick={handlePostScrap}
                    className="w-full mt-6"
                    variant="hero"
                    size="lg"
                  >
                    Post Scrap Now
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Right Panel - Map & Dealer */}
          <div className="space-y-6">
            {/* Map View */}
            <div className="bg-surface-dark rounded-2xl overflow-hidden shadow-card-hover relative h-[300px] lg:h-[350px]">
              {/* Simulated Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-surface-dark to-primary/20">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }} />
                
                {/* Roads */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted-foreground/20" />
                  <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-muted-foreground/20" />
                  <div className="absolute top-0 bottom-0 right-1/4 w-1 bg-muted-foreground/20" />
                  <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-muted-foreground/10" />
                  <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-muted-foreground/10" />
                </div>
              </div>

              {/* User Location Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary/30 animate-ping absolute inset-0" />
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center relative">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background px-2 py-1 rounded text-xs font-medium shadow">
                    Your Location
                  </div>
                </div>
              </div>

              {/* Dealer Markers */}
              {showDealer && (
                <>
                  {/* Dealer 1 - Closest */}
                  <div className={`absolute top-1/4 right-1/4 transition-all duration-500 ${dealerAccepted ? "scale-125" : ""}`}>
                    <div className="relative">
                      {dealerAccepted && (
                        <div className="w-12 h-12 rounded-full bg-accent/30 animate-ping absolute inset-0" />
                      )}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                        dealerAccepted ? "bg-accent" : "bg-muted"
                      }`}>
                        <Truck className={`w-6 h-6 ${dealerAccepted ? "text-accent-foreground" : "text-muted-foreground"}`} />
                      </div>
                      {dealerAccepted && (
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-bold shadow">
                          On the way!
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Dealer 2 */}
                  <div className="absolute bottom-1/4 left-1/4 animate-fade-in animation-delay-200">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shadow-lg">
                      <Truck className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Dealer 3 */}
                  <div className="absolute top-1/3 left-1/5 animate-fade-in animation-delay-400">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shadow-lg">
                      <Truck className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Route Line */}
                  {dealerAccepted && (
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <path
                        d="M 75% 25% Q 60% 35%, 50% 50%"
                        stroke="hsl(var(--accent))"
                        strokeWidth="3"
                        strokeDasharray="8 4"
                        fill="none"
                        className="animate-pulse"
                      />
                    </svg>
                  )}
                </>
              )}

              {/* Map Label */}
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-medium shadow">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Live Map View
                </span>
              </div>

              {/* Dealers Count */}
              {showDealer && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-sm font-medium shadow animate-fade-in">
                  3 dealers nearby
                </div>
              )}
            </div>

            {/* Dealer Card */}
            {showDealer && (
              <div className={`bg-background rounded-2xl p-6 shadow-card border-2 transition-all duration-500 animate-slide-up ${
                dealerAccepted ? "border-accent" : "border-border"
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    {dealerAccepted ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-accent" />
                        Dealer Accepted!
                      </>
                    ) : (
                      <>
                        <Clock className="w-5 h-5 text-primary animate-spin" />
                        Finding Nearest Dealer...
                      </>
                    )}
                  </h3>
                </div>

                {/* Dealer Info */}
                <div className={`space-y-4 transition-opacity duration-300 ${dealerAccepted ? "opacity-100" : "opacity-50"}`}>
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                      {dealers[0].avatar}
                    </div>
                    
                    {/* Details */}
                    <div className="flex-1">
                      <div className="font-bold text-lg">{dealers[0].name}</div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-accent fill-accent" />
                          {dealers[0].rating}
                        </span>
                        <span>•</span>
                        <span>{dealers[0].distance} away</span>
                        <span>•</span>
                        <span>{dealers[0].completedJobs} jobs</span>
                      </div>
                    </div>
                  </div>

                  {dealerAccepted && (
                    <>
                      {/* ETA */}
                      <div className="flex items-center justify-between bg-accent/10 rounded-xl p-4">
                        <div className="flex items-center gap-3">
                          <Truck className="w-6 h-6 text-accent" />
                          <div>
                            <div className="text-sm text-muted-foreground">Estimated Arrival</div>
                            <div className="font-bold text-lg">12-15 minutes</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">You'll earn</div>
                          <div className="font-bold text-lg text-primary">₹{estimatedPrice + magneticBonus}</div>
                        </div>
                      </div>

                      {/* Contact */}
                      <div className="flex gap-3">
                        <Button variant="outline" className="flex-1" size="lg">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Dealer
                        </Button>
                        <Button variant="hero" className="flex-1" size="lg">
                          Track Live
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Reset Button */}
            {step > 1 && (
              <Button 
                onClick={resetDemo} 
                variant="ghost" 
                className="w-full"
              >
                ↻ Try Demo Again
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoSection;
