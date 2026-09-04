
import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { initScrollAnimation } from "@/utils/scrollAnimation";

const ProjetosInstalacao = () => {
  useEffect(() => {
    initScrollAnimation();

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);

    document.title = "Projetos e Instalação de Carregadores - Hyper Carga";
    
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Projetos completos e instalação profissional de carregadores elétricos.";
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
            backgroundImage: "linear-gradient(to right bottom, rgba(14, 17, 22, 0.8), rgba(7, 8, 10, 0.95)), url('/media/home/solucao-motoristas.png')"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 container-custom text-left">
            <div className="max-w-2xl">
              <p className="text-hyper-green text-lg mb-2 animated-element">
                Potência para a Mobilidade Elétrica
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animated-element">
                Projetos e Instalação de Carregadores
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
            href="https://wa.me/5554999893465"
            className="fixed bottom-6 right-6 z-50 bg-hyper-green p-3 rounded-xl shadow-lg hover:bg-hyper-green/90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contatar via WhatsApp"
          >
            <MessageCircle className="h-8 w-8 text-white" />
          </a>
        </section>

        {/* Main Content Section */}
        <section id="about" className="section bg-dark p-6 md:p-12">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 animated-element">
                  Projetos e Instalação de Carregadores
                </h2>
                <p className="text-base text-white/70 mb-6 animated-element">
                  Seu carregador, do jeito certo, no lugar certo. A Hyper Carga cuida de tudo para você.
                </p>
              </div>

              {/* Two Column Layout */}
              <div className="grid md:grid-cols-2 gap-8 mb-12 animated-element">
                {/* Left Column - Checklist */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Por que investir em um projeto personalizado?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-hyper-green text-xl">✓</span>
                      <span className="text-white">Garante a compatibilidade elétrica do seu espaço</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-hyper-green text-xl">✓</span>
                      <span className="text-white">Aproveita a capacidade máxima da sua rede sem sobrecarregá-la</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-hyper-green text-xl">✓</span>
                      <span className="text-white">Evita custos desnecessários e retrabalho</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-hyper-green text-xl">✓</span>
                      <span className="text-white">Valoriza seu imóvel ou negócio com infraestrutura moderna e eficiente</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-hyper-green text-xl">✓</span>
                      <span className="text-white">Permite personalizar layout, cobrança e até a marca da estação</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Text */}
                <div>
                  <p className="text-lg text-white/70 italic leading-relaxed">
                    Cada espaço, cada negócio e cada operação tem suas particularidades — e a Hyper Carga entende isso como ninguém. 
                    Por isso, desenvolvemos projetos completos de infraestrutura elétrica e instalação de carregadores para empresas, condomínios, frotas, estacionamentos e residências.
                    <br /><br />
                    <strong>Aqui, o projeto é seu. A expertise é nossa.</strong>
                  </p>
                </div>
              </div>

              {/* Step by Step Process */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white text-center mb-8 animated-element">Como Funciona</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Step 1 */}
                  <div className="bg-dark-secondary rounded-lg p-6 text-center animated-element border border-white/10">
                    <div className="w-16 h-16 bg-hyper-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-dark font-bold text-xl">01</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">Estudo de viabilidade</h4>
                    <p className="text-white/70 text-sm">
                      Nossa equipe técnica realiza visita ao local para avaliar a capacidade elétrica e, se necessário, 
                      providencia junto à concessionária de energia o aumento de carga ou contratação de poste.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-dark-secondary rounded-lg p-6 text-center animated-element border border-white/10">
                    <div className="w-16 h-16 bg-hyper-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">02</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">Projeto Elétrico</h4>
                    <p className="text-white/70 text-sm">
                      Desenvolvemos o projeto técnico de acordo com a estrutura do ambiente e o volume de demanda previsto — 
                      seja para um carregador em casa ou 20 em um estacionamento corporativo.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-dark-secondary rounded-lg p-6 text-center animated-element border border-white/10">
                    <div className="w-16 h-16 bg-hyper-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-dark font-bold text-xl">03</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">Instalação Profissional</h4>
                    <p className="text-white/70 text-sm">
                      A instalação é executada pela nossa parceira especializada em instalações elétricas e solares (MGA Instalações), 
                      garantindo segurança, qualidade e agilidade.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-dark-secondary rounded-lg p-6 text-center animated-element border border-white/10">
                    <div className="w-16 h-16 bg-hyper-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">04</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">Ativação e Treinamento</h4>
                    <p className="text-white/70 text-sm">
                      Entregamos o sistema pronto para uso, configurado e, se necessário, 
                      treinamos a sua equipe para operação e gestão das recargas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Brand Customization */}
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-4 animated-element">
                  ⭐ Seu carregador, com a sua marca
                </h4>
                
                <p className="text-lg text-white/70 mb-6 animated-element max-w-4xl mx-auto">
                  Quer uma estação exclusiva? Personalizamos o carregador com a identidade visual da sua empresa — 
                  desde o equipamento até as telas digitais de 50″ dos modelos DC, onde você pode explorar publicidade paga ou campanhas institucionais.
                </p>

                <p className="text-lg text-white/70 animated-element">
                  👉 Fale com nossos especialistas e peça seu projeto agora. Com a Hyper Carga, você transforma sua operação, 
                  valoriza seu espaço e conecta sua marca ao futuro da mobilidade elétrica.
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

export default ProjetosInstalacao;
