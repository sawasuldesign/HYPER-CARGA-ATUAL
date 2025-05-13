
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SolutionsSection from "@/components/SolutionsSection";
import PartnersSection from "@/components/PartnersSection";
import HyperCargaSolutionsSection from "@/components/HyperCargaSolutionsSection";
import CasesSection from "@/components/CasesSection";
import MediaSection from "@/components/MediaSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { initScrollAnimation } from "@/utils/scrollAnimation";

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimation();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-dark text-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <SolutionsSection />
        <PartnersSection />
        <HyperCargaSolutionsSection />
        <CasesSection />
        <MediaSection />
        <AboutSection />
        <ProductsSection />
        <BlogSection />
        <ContactSection />
        <PartnerSection />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
