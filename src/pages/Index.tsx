
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import PartnersCarouselSection from "@/components/PartnersCarouselSection";
import CasesSection from "@/components/CasesSection";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { initScrollAnimation } from "@/utils/scrollAnimation";

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimation();

    // Add Google font
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);

    // Update document title and meta
    document.title = "Hyper Carga - Energia brasileira, inovação sustentável";
    
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Soluções de carregamento para veículos elétricos com tecnologia 100% brasileira.";
    document.head.appendChild(metaDescription);

    return () => {
      // Clean up
      document.head.removeChild(link);
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-dark text-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <SolutionsSection />
        <AboutSection />
        <ProductsSection />
        <ServicesSection />
        <PartnersCarouselSection />
        <CasesSection />
        <PartnerSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
