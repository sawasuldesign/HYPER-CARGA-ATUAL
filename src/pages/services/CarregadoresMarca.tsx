
import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { initScrollAnimation } from "@/utils/scrollAnimation";

const CarregadoresMarca = () => {
  useEffect(() => {
    initScrollAnimation();

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);

    document.title = "Carregadores com a Sua Marca - Hyper Carga";
    
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Personalize carregadores com sua marca e transforme em pontos de contato.";
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
                Carregadores com a Sua Marca
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
                Carregadores com a Sua Marca
              </h2>
              <p className="text-base text-white/70 mb-6 animated-element">
                Sua marca no centro da mobilidade elétrica. Valorize seu espaço, fidelize clientes e monetize com carregadores personalizados.
              </p>
              <p className="text-lg text-white/70 mb-4 animated-element">
                Que tal ter estações de recarga com a cara da sua empresa? Com a Hyper Carga, você transforma carregadores comuns em verdadeiros pontos de contato com sua marca e novas oportunidades de negócio.
              </p>
              <p className="text-lg text-white/70 mb-4 animated-element">
                Seja para um shopping, condomínio, hotel, estacionamento ou empresa de frota, nós personalizamos os equipamentos para que quem recarrega, lembre de você.
              </p>
              
              {/* Process Steps */}
              <div className="space-y-4 mt-8">
                {/* Step 1 */}
                <div className="bg-dark rounded-lg p-4 mb-4 animated-element">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <img
                      src="https://imgur.com/kV1h4tU.jpg"
                      alt="Personalização visual"
                      className="w-48 h-48 object-cover rounded-lg md:float-left mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">🎨 Como funciona?</h3>
                      <p className="text-base text-white/70">
                        ✅ Personalização visual do equipamento Deixe os carregadores com a identidade visual do seu negócio — adesivação, pintura ou até customização de totem. 
                        ✅ Exibição de publicidade e campanhas em telas digitais Nos modelos DC com display 50″ 4K, você pode exibir mensagens institucionais, anúncios de parceiros ou campanhas promocionais diretamente na tela da estação de recarga. 
                        ✅ Relatórios de uso e impacto Acompanhe em tempo real o volume de recargas e a audiência do seu display para mensurar resultados e criar ações exclusivas para esse público.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-dark rounded-lg p-4 mb-4 animated-element">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <img
                      src="https://imgur.com/FwMHNpv.jpg"
                      alt="Para quem isso faz sentido"
                      className="w-48 h-48 object-cover rounded-lg md:float-left mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">⚡ Para quem isso faz sentido?</h3>
                      <p className="text-base text-white/70">
                        🏨 Hotéis e resorts — Posicione sua marca como referência em sustentabilidade e conforto, oferecendo recarga gratuita ou paga com sua identidade. 
                        🛒 Shoppings e centros comerciais — Exiba promoções e marcas parceiras na tela do carregador enquanto os clientes recarregam. 
                        🏢 Empresas e coworkings — Valorize seu ambiente corporativo e ofereça recarga exclusiva para colaboradores e clientes. 
                        🏬 Supermercados e estacionamentos pagos — Use o espaço para publicidade de parceiros e gere receita adicional. 
                        🚛 Operadoras de frota — Mantenha suas estações padronizadas e reforçando a imagem da sua empresa em cada carregamento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="text-base font-bold text-white text-left my-4 animated-element">
                💡 Destaques do serviço:
              </h4>
              
              <div className="text-left space-y-2 mb-8">
                <p className="text-white text-base mb-2 animated-element">
                  ✅ Personalização nas linhas AC e DC
                </p>
                <p className="text-white text-base mb-2 animated-element">
                  ✅ Exibição de conteúdo publicitário em tela 4K nos carregadores DC
                </p>
                <p className="text-white text-base mb-2 animated-element">
                  ✅ Gestão remota dos anúncios e da recarga
                </p>
                <p className="text-white text-base mb-2 animated-element">
                  ✅ Cobrança e controle customizáveis
                </p>
                <p className="text-white text-base mb-2 animated-element">
                  ✅ Possibilidade de venda de espaço publicitário no carregador
                </p>
              </div>

              <p className="text-lg text-white/70 text-center mt-4 animated-element">
                👉 Quer ver sua marca no próximo ponto de recarga da cidade? Fale agora com a Hyper Carga e personalize sua estação. 
                Mobilidade elétrica com a sua identidade.
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

export default CarregadoresMarca;
