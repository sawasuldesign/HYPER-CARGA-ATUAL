
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
    metaDescription.content = "Carregadores elétricos personalizados com a sua marca - Hyper Carga.";
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
            backgroundImage: "linear-gradient(to right bottom, rgba(14, 17, 22, 0.8), rgba(7, 8, 10, 0.95)), url('https://imgur.com/kV1h4tU.jpg')"
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
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 animated-element">
                  Carregadores com a Sua Marca
                </h2>
                <p className="text-base text-white/70 mb-8 animated-element">
                  Sua marca no centro da mobilidade elétrica. Valorize seu espaço, fidelize clientes e monetize com carregadores.
                </p>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
                  <div className="animated-element">
                    <p className="text-lg text-white/70">
                      Que tal ter estações de recarga com a cara da sua empresa? Com a Hyper Carga, você transforma carregadores comuns em verdadeiros pontos de contato com sua marca e novas oportunidades de negócio.
                    </p>
                  </div>
                  <div className="animated-element">
                    <p className="text-lg text-white/70">
                      Seja para um shopping, condomínio, hotel, estacionamento ou empresa de frota, nós personalizamos os equipamentos para que quem recarrega, lembre de você.
                    </p>
                  </div>
                </div>
              </div>

              {/* Como Funciona Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white text-center mb-8 animated-element uppercase">
                  Como Funciona?
                </h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="animated-element">
                    <img
                      src="https://res.cloudinary.com/dt2qlgxcl/image/upload/v1754513239/Anuncie_udwr5q.png"
                      alt="Carregador personalizado"
                      className="w-full max-w-[800px] h-[800px] object-cover rounded-lg mx-auto"
                    />
                  </div>
                  <div className="animated-element">
                    <p className="text-lg text-white/70 leading-relaxed">
                      Personalização visual do equipamento: Deixe os carregadores com a identidade visual do seu negócio — adesivação, pintura ou até customização de totem. 
                      <br /><br />
                      Exibição de publicidade e campanhas em telas digitais: Nos modelos DC com display 50″ 4K, você pode exibir mensagens institucionais, anúncios de parceiros ou campanhas promocionais diretamente na tela da estação de recarga. 
                      <br /><br />
                      Relatórios de uso e impacto: Acompanhe em tempo real o volume de recargas e a audiência do seu display para mensurar resultados e criar ações exclusivas para esse público.
                    </p>
                  </div>
                </div>
              </div>

              {/* Para Quem e Destaques - Two Columns */}
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                {/* Left Column - Para Quem */}
                <div className="animated-element">
                  <h3 className="text-xl font-bold text-white mb-6">Para Quem Isso Faz Sentido?</h3>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Hotéis e resorts — Posicione sua marca como referência em sustentabilidade e conforto, oferecendo recarga gratuita ou paga com sua identidade. 
                    <br /><br />
                    Shoppings e centros comerciais — Exiba promoções e marcas parceiras na tela do carregador enquanto os clientes recarregam. 
                    <br /><br />
                    Empresas e coworkings — Valorize seu ambiente corporativo e ofereça recarga exclusiva para colaboradores e clientes. 
                    <br /><br />
                    Supermercados e estacionamentos pagos — Use o espaço para publicidade de parceiros e gere receita adicional. 
                    <br /><br />
                    Operadoras de frota — Mantenha suas estações padronizadas e reforçando a imagem da sua empresa em cada carregamento.
                  </p>
                </div>

                {/* Right Column - Destaques */}
                <div className="animated-element">
                  <h3 className="text-xl font-bold text-white mb-6">Destaques do serviço:</h3>
                  <div className="space-y-3">
                    <p className="text-lg text-white/70">Personalização nas linhas AC e DC</p>
                    <p className="text-lg text-white/70">Exibição de conteúdo publicitário em tela 4K nos carregadores DC</p>
                    <p className="text-lg text-white/70">Gestão remota dos anúncios e da recarga</p>
                    <p className="text-lg text-white/70">Cobrança e controle customizáveis</p>
                    <p className="text-lg text-white/70">Possibilidade de venda de espaço publicitário no carregador</p>
                  </div>
                </div>
              </div>

              {/* Final Message */}
              <div className="text-center">
                <p className="text-lg text-white/70 italic animated-element">
                  Quer ver sua marca no próximo ponto de recarga da cidade? Fale agora com a Hyper Carga e personalize sua estação. Mobilidade elétrica com a sua identidade.
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

export default CarregadoresMarca;
