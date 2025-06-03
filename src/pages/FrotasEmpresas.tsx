
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { initScrollAnimation } from "@/utils/scrollAnimation";

const FrotasEmpresas = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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

        {/* Frotas e Empresas Section */}
        <section id="about" className="section bg-dark p-6 md:p-12">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="border border-border/40 rounded-lg overflow-hidden animated-element">
                {/* Header */}
                <div
                  className="flex items-center p-4 bg-darker hover:bg-darker/80 transition-colors cursor-pointer"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <h2 className="text-2xl font-bold text-hyper-green flex-1">
                    Soluções para Frotas e Empresas
                  </h2>
                  {isExpanded ? (
                    <ChevronUp className="h-6 w-6 text-white/50" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-white/50" />
                  )}
                </div>

                {/* Content */}
                {isExpanded && (
                  <div className="p-4 bg-darker/50 text-white/70 space-y-2">
                    <h3 className="text-lg text-white/70 mb-4">
                      Infraestrutura de recarga sob medida para o crescimento da sua operação elétrica.
                    </h3>
                    
                    <p className="text-white/70">
                      Se a sua empresa ou frota já opera ou planeja operar veículos elétricos, a Hyper Carga é o parceiro ideal para estruturar toda a rede de recarga com segurança, eficiência e retorno financeiro.
                    </p>

                    <h4 className="text-base font-bold text-hyper-green my-4">
                      Por que escolher a Hyper Carga?
                    </h4>

                    <div className="space-y-3">
                      <p className="text-white/70">
                        ✅ <strong>Projetos personalizados para o seu negócio:</strong> Nossa equipe de engenharia elétrica desenvolve projetos exclusivos para atender à demanda da sua frota ou operação corporativa. Cada solução é dimensionada conforme a estrutura elétrica e o perfil de consumo do seu ambiente.
                      </p>
                      <p className="text-white/70">
                        ✅ <strong>Locação de estações de recarga com condições diferenciadas:</strong> Oferecemos planos de locação sob medida para empresas e operadores de frota, com benefícios exclusivos para quem precisa de alta disponibilidade e gestão centralizada de pontos de recarga.
                      </p>
                      <p className="text-white/70">
                        ✅ <strong>Ganhos desde a ativação das estações:</strong> As estações de recarga podem começar a gerar receita desde o primeiro mês de operação. Você define o valor do kWh, otimiza seus custos de abastecimento e ainda pode monetizar o serviço junto a terceiros.
                      </p>
                      <p className="text-white/70">
                        ✅ <strong>Gestão inteligente e relatórios completos:</strong> Incluímos em todas as locações nosso software de gestão de recarga, que permite acompanhar: Consumo de cada veículo ou unidade, Horários de maior demanda, Relatórios mensais em PDF para gestão de frota, Controle total dos carregamentos realizados, horários e valores cobrados.
                      </p>
                      <p className="text-white/70">
                        ✅ <strong>Manutenção preventiva garantida:</strong> Toda a manutenção preventiva é realizada pela nossa equipe, sem custo adicional para o cliente. Assim, sua operação segue segura e sem imprevistos.
                      </p>
                      <p className="text-white/70">
                        ✅ <strong>Tecnologia de ponta para veículos leves e pesados:</strong> Trabalhamos com estações de recarga DC ultrarrápidas de até 320kW e modelos AC de 7,2kW a 22kW, ideais para atender desde carros elétricos leves até veículos de carga pesada e utilitários.
                      </p>
                      <p className="text-white/70">
                        ✅ <strong>Infraestrutura para operações internas e pontos públicos:</strong> Seja para abastecer sua frota no pátio da empresa ou disponibilizar estações para seus clientes e colaboradores, temos soluções completas e personalizáveis — inclusive com possibilidade de personalizar as estações com a sua marca.
                      </p>
                    </div>

                    <p className="text-white/70 mt-6">
                      👉 Fale com nosso time comercial e solicite um projeto de viabilidade para sua empresa. Descubra como a Hyper Carga pode otimizar seus custos operacionais e acelerar sua transição para a mobilidade elétrica.
                    </p>
                  </div>
                )}
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
