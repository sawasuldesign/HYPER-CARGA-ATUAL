
import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { initScrollAnimation } from "@/utils/scrollAnimation";

const FrotasEmpresas = () => {
  useEffect(() => {
    initScrollAnimation();

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);

    document.title = "Soluções para Frotas e Empresas - Hyper Carga";
    
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Soluções de carregamento para frotas e empresas com infraestrutura sob medida.";
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
            backgroundImage: "linear-gradient(to right bottom, rgba(14, 17, 22, 0.8), rgba(7, 8, 10, 0.95)), url('https://imgur.com/IQWDgYh.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 container-custom text-left">
            <div className="max-w-2xl">
              <p className="text-hyper-green text-lg mb-2 animated-element">
                Potência para a Mobilidade Elétrica
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animated-element">
                Soluções para Frotas e Empresas
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

        {/* Soluções para Frotas e Empresas Section */}
        <section id="about" className="section bg-dark p-6 md:p-12">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4 animated-element">
                Soluções para Frotas e Empresas
              </h2>
              <p className="text-base text-white/70 mb-6 animated-element">
                Infraestrutura de recarga sob medida para o crescimento da sua operação elétrica.
              </p>
              <p className="text-lg text-white/70 mb-4 animated-element">
                Se a sua empresa ou frota já opera ou planeja operar veículos elétricos, a Hyper Carga é o parceiro ideal para estruturar toda a rede de recarga com segurança, eficiência e retorno financeiro.
              </p>
              
              <div className="text-left space-y-2 mb-8">
                <p className="text-white text-base mb-2 animated-element">
                  ✔️ Tecnologia nacional de ponta
                </p>
                <p className="text-white text-base mb-2 animated-element">
                  ✔️ Projetos personalizados para o seu negócio
                </p>
                <p className="text-white text-base mb-2 animated-element">
                  ✔️ Locação de estações de recarga com condições diferenciadas
                </p>
                <p className="text-white text-base mb-2 animated-element">
                  ✔️ Ganhos desde a ativação das estações
                </p>
                <p className="text-white text-base mb-2 animated-element">
                  ✔️ Gestão inteligente e relatórios completos
                </p>
                <p className="text-white text-base mb-2 animated-element">
                  ✔️ Manutenção preventiva garantida
                </p>
                <p className="text-white text-base mb-2 animated-element">
                  ✔️ Tecnologia de ponta para veículos leves e pesados
                </p>
                <p className="text-white text-base mb-2 animated-element">
                  ✔️ Infraestrutura para operações internas e pontos públicos
                </p>
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

export default FrotasEmpresas;
