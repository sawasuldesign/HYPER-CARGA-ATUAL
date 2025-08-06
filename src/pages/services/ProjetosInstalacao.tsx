
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
            href="https://wa.me/555436983939"
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
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4 animated-element">
                Projetos e Instalação de Carregadores
              </h2>
              <p className="text-base text-white/70 mb-6 animated-element">
                Seu carregador, do jeito certo, no lugar certo. A Hyper Carga cuida de tudo para você.
              </p>
              <p className="text-lg text-white/70 mb-4 animated-element">
                Cada espaço, cada negócio e cada operação tem suas particularidades — e a Hyper Carga entende isso como ninguém. 
                Por isso, desenvolvemos projetos completos de infraestrutura elétrica e instalação de carregadores para empresas, condomínios, frotas, estacionamentos e residências.
              </p>
              <p className="text-base font-bold text-white mb-4 animated-element">
                Aqui, o projeto é seu. A expertise é nossa.
              </p>
              
              <h4 className="text-base font-bold text-white text-left my-4 animated-element">
                📊 Por que investir em um projeto personalizado?
              </h4>
              
              <div className="text-left space-y-2 mb-8">
                <p className="text-white text-base mb-2 animated-element">
                  ✅ Garante a compatibilidade elétrica do seu espaço
                </p>
                <p className="text-white text-base mb-2 animated-element">
                  ✅ Aproveita a capacidade máxima da sua rede sem sobrecarregá-la
                </p>
                <p className="text-white text-base mb-2 animated-element">
                  ✅ Evita custos desnecessários e retrabalho
                </p>
                <p className="text-white text-base mb-2 animated-element">
                  ✅ Valoriza seu imóvel ou negócio com infraestrutura moderna e eficiente
                </p>
                <p className="text-white text-base mb-2 animated-element">
                  ✅ Permite personalizar layout, cobrança e até a marca da estação
                </p>
              </div>

              {/* Process Steps */}
              <div className="space-y-4 mt-8">
                {/* Step 1 */}
                <div className="bg-dark rounded-lg p-4 mb-4 animated-element">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <img
                      src="https://imgur.com/dyrJHXP.jpg"
                      alt="Estudo de viabilidade"
                      className="w-48 h-48 object-cover rounded-lg md:float-left mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">🔍 1. Estudo de viabilidade</h3>
                      <p className="text-base text-white/70">
                        Nossa equipe técnica realiza visita ao local para avaliar a capacidade elétrica e, se necessário, 
                        providencia junto à concessionária de energia o aumento de carga ou contratação de poste.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-dark rounded-lg p-4 mb-4 animated-element">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <img
                      src="https://imgur.com/hFsoRLH.jpg"
                      alt="Projeto elétrico sob medida"
                      className="w-48 h-48 object-cover rounded-lg md:float-left mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">📝 2. Projeto elétrico sob medida</h3>
                      <p className="text-base text-white/70">
                        Desenvolvemos o projeto técnico de acordo com a estrutura do ambiente e o volume de demanda previsto — 
                        seja para um carregador em casa ou 20 em um estacionamento corporativo.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-dark rounded-lg p-4 mb-4 animated-element">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <img
                      src="https://imgur.com/MHicqvA.jpg"
                      alt="Instalação profissional"
                      className="w-48 h-48 object-cover rounded-lg md:float-left mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">🛠️ 3. Instalação profissional</h3>
                      <p className="text-base text-white/70">
                        A instalação é executada pela nossa parceira especializada em instalações elétricas e solares (MGA Instalações), 
                        garantindo segurança, qualidade e agilidade.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-dark rounded-lg p-4 mb-4 animated-element">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <img
                      src="https://i.imgur.com/ywl1xih.jpeg"
                      alt="Ativação e treinamento"
                      className="w-48 h-48 object-cover rounded-lg md:float-left mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">🖥️ 4. Ativação e treinamento</h3>
                      <p className="text-base text-white/70">
                        Entregamos o sistema pronto para uso, configurado e, se necessário, 
                        treinamos a sua equipe para operação e gestão das recargas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              <h4 className="text-base font-bold text-white text-left my-4 animated-element">
                ⭐ Seu carregador, com a sua marca
              </h4>
              
              <p className="text-lg text-white/70 mb-4 animated-element">
                Quer uma estação exclusiva? Personalizamos o carregador com a identidade visual da sua empresa — 
                desde o equipamento até as telas digitais de 50″ dos modelos DC, onde você pode explorar publicidade paga ou campanhas institucionais.
              </p>

              <p className="text-lg text-white/70 text-center mt-4 animated-element">
                👉 Fale com nossos especialistas e peça seu projeto agora. Com a Hyper Carga, você transforma sua operação, 
                valoriza seu espaço e conecta sua marca ao futuro da mobilidade elétrica.
              </p>
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
