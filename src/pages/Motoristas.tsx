
import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { initScrollAnimation } from "@/utils/scrollAnimation";

const Motoristas = () => {
  useEffect(() => {
    initScrollAnimation();

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);

    document.title = "Soluções para Motoristas - Hyper Carga";
    
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Soluções de carregamento para motoristas de veículos elétricos com a Hyper Carga.";
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-dark text-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(to right bottom, rgba(14, 17, 22, 0.8), rgba(7, 8, 10, 0.95)), url('https://i.imgur.com/glydj6W.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 container-custom text-left">
            <div className="max-w-2xl">
              <p className="text-hyper-green text-lg mb-2 animated-element">
                Potência para a Mobilidade Elétrica
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animated-element">
                Soluções para Motoristas
              </h1>
              <a
                href="#about"
                className="inline-flex items-center bg-hyper-blue text-white px-6 py-3 rounded-lg hover:bg-hyper-blue/90 transition-colors animated-element"
              >
                Saiba Mais
              </a>
            </div>
          </div>
          
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/555436983939"
            className="fixed bottom-6 right-6 z-50 bg-hyper-green p-3 rounded-xl shadow-lg hover:bg-hyper-green/90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contatar via WhatsApp"
          >
            <MessageCircle className="h-8 w-8 text-white" />
          </a>
        </section>

        {/* Motoristas Section */}
        <section id="about" className="section bg-dark p-6 md:p-12">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4 animated-element">
                Soluções para Motoristas
              </h2>
              <p className="text-base text-white/70 mb-6 animated-element">
                Carregue seu veículo com segurança, rapidez e gestão inteligente.
              </p>
              <p className="text-lg text-white/70 mb-4 animated-element">
                A Hyper Carga entende as necessidades de quem vive a mobilidade elétrica no dia a dia. Por isso, oferecemos soluções práticas e eficientes para motoristas particulares, condutores de aplicativos e profissionais que precisam manter seu veículo carregado com comodidade e economia.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <p className="text-white text-base mb-2 animated-element">
                    ✔️ Rede de estações em pontos estratégicos
                  </p>
                  <p className="text-white text-base mb-2 animated-element">
                    ✔️ Tecnologia compatível com todos os modelos
                  </p>
                  <p className="text-white text-base mb-2 animated-element">
                    ✔️ Monitoramento em tempo real e cobrança simplificada
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-white text-base mb-2 animated-element">
                    ✔️ Recargas ultrarrápidas para quem tem pressa
                  </p>
                  <p className="text-white text-base mb-2 animated-element">
                    ✔️ Planos personalizados para motoristas de aplicativo e profissionais
                  </p>
                  <p className="text-white text-base mb-2 animated-element">
                    ✔️ Opções de carregadores para sua casa ou condomínio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <PartnerSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Motoristas;
