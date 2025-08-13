import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedBikes from "@/components/FeaturedBikes";
import SellYourBike from "@/components/SellYourBike";
import HowItWorks from "@/components/HowItWorks";
import CustomerStories from "@/components/CustomerStories";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import ThankYouModal from "@/components/ThankYouModal";

export default function Index() {
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

  const handleFormSubmit = () => {
    // This would be called when any lead capture form is submitted
    setIsThankYouModalOpen(true);
  };

  const handleExplore = () => {
    // Close modal and redirect to explore bikes or main catalog
    setIsThankYouModalOpen(false);
    // You could add navigation here to a bikes catalog page
  };

  const handleCloseModal = () => {
    setIsThankYouModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturedBikes />
        <SellYourBike onFormSubmit={handleFormSubmit} />
        <HowItWorks />
        <CustomerStories />
        <FAQs />
      </main>
      <Footer />

      <ThankYouModal
        isOpen={isThankYouModalOpen}
        onClose={handleCloseModal}
        onExplore={handleExplore}
      />
    </div>
  );
}
