import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ScrapConnect - Smart Industrial Scrap Management System | Turn Scrap into Cash</title>
        <meta
          name="description"
          content="India's first smart scrap management system. IoT-enabled magnetic auto-sorting dustbins + mobile marketplace app. Get ₹8-₹450/kg for your metal scrap with transparent pricing."
        />
        <meta
          name="keywords"
          content="scrap collection, metal recycling, smart dustbin, IoT recycling, scrap marketplace, metal scrap prices, recycling app, waste management India"
        />
        <meta property="og:title" content="ScrapConnect - Smart Industrial Scrap Management" />
        <meta
          property="og:description"
          content="Turn your scrap into cash with India's first magnetic auto-sorting dustbin + app marketplace."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ScrapConnect - Smart Scrap Management" />
        <meta
          name="twitter:description"
          content="India's first smart scrap management system with IoT dustbins and mobile marketplace."
        />
        <link rel="canonical" href="https://scrapconnect.in" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <FeaturesSection />
        <PricingSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
