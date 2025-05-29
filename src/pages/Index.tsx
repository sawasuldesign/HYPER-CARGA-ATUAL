
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SolutionsSection from "../components/SolutionsSection";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductsSection";
import ServicesSection from "../components/ServicesSection";
import PartnersCarouselSection from "../components/PartnersCarouselSection";
import PartnerSection from "../components/PartnerSection";
import CasesSection from "../components/CasesSection";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { initScrollAnimation } from "../utils/scrollAnimation";

// Componente principal da SPA
const Index: React.FC = () => {
  // Inicializa animações de scroll
  useEffect(() => {
    initScrollAnimation();
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white font-['Inter'] scroll-smooth">
      {/* Navegação fixa no topo */}
      <Navbar />
      {/* Seções da página */}
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="solutions" className="animated-element">
          <SolutionsSection />
        </section>
        <section id="about" className="animated-element">
          <AboutSection />
        </section>
        <section id="products" className="animated-element">
          <ProductsSection />
        </section>
        <section id="services" className="animated-element">
          <ServicesSection />
        </section>
        <section id="partners" className="animated-element">
          <PartnersCarouselSection />
        </section>
        <section id="partner" className="animated-element">
          <PartnerSection />
        </section>
        <section id="cta" className="animated-element">
          <CasesSection />
        </section>
      </main>
      {/* Rodapé */}
      <Footer />
      {/* Botão de voltar ao topo */}
      <ScrollToTop />
    </div>
  );
};

export default Index;
