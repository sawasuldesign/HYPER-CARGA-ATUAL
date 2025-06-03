
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { initScrollAnimation } from "@/utils/scrollAnimation";

const AluguelCarregadores = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    initScrollAnimation();

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);

    document.title = "Aluguel de Carregadores - Hyper Carga";
    
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Aluguel de carregadores para veículos elétricos com a Hyper Carga. Ganhos desde o primeiro mês!";
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
                Aluguel de Carregadores
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

        {/* Aluguel Section */}
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
                    Aluguel de Carregadores Hyper Carga
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
                      A solução ideal para quem quer oferecer recarga veicular sem investir na compra de equipamentos.
                    </h3>
                    
                    <p className="text-white/70">
                      Na Hyper Carga, oferecemos o serviço de <strong>locação de carregadores elétricos</strong> para empresas, estacionamentos, shoppings, hotéis, condomínios e negócios de todos os portes. Nossa proposta é simples: você disponibiliza o serviço de recarga, gera receita e fideliza seu público — sem precisar investir pesado na compra dos equipamentos.
                    </p>

                    <h4 className="text-base font-bold text-hyper-green my-4">
                      Vantagens do nosso serviço de aluguel:
                    </h4>

                    <div className="space-y-3">
                      <p className="text-white/70">
                        ✅ <strong>Ganhos desde o primeiro mês:</strong> Com a locação, sua estação já sai monetizando! Você define o preço do kWh cobrado e começa a recuperar o valor da locação e instalação desde o início.
                      </p>
                      <p className="text-white/70">
                        ✅ <strong>Gestão completa e gratuita:</strong> Nosso software de cobrança e gestão de recarga está incluso na locação. Com ele, você acompanha: Quantidade de energia carregada por sessão, Horários de pico, Relatórios PDF completos por período, Curva ABC diária, semanal e mensal.
                      </p>
                      <p className="text-white/70">
                        ✅ <strong>Instalação técnica sob medida:</strong> Antes de qualquer instalação, realizamos um estudo técnico para garantir a viabilidade elétrica do local e, se necessário, cuidamos de todo o processo junto à concessionária de energia.
                      </p>
                      <p className="text-white/70">
                        ✅ <strong>Manutenção periódica inclusa:</strong> Cuidamos da manutenção preventiva dos equipamentos sem custo adicional durante todo o contrato, garantindo a segurança e o bom funcionamento da sua estação.
                      </p>
                      <p className="text-white/70">
                        ✅ <strong>Personalização com a sua marca:</strong> Deseja ter um carregador com a identidade da sua empresa? Oferecemos a possibilidade de personalização, inclusive em modelos DC com telas 4K, onde você também pode comercializar espaços publicitários.
                      </p>
                      <p className="text-white/70">
                        ✅ <strong>Soluções para negócios e frotas:</strong> Possui uma frota eletrificada ou quer compartilhar estações? Criamos condições especiais de locação e parceria para empresas e operadores logísticos.
                      </p>
                    </div>

                    <h4 className="text-base font-bold text-hyper-green my-4">
                      Tipos de carregadores disponíveis para locação:
                    </h4>

                    <ul className="list-disc pl-6 space-y-1 text-white/70">
                      <li>Linha DC: 40kWh, 80kWh, 120kWh, 160kWh e 320kWh</li>
                      <li>Linha AC: Modelos customizados conforme a estrutura do seu espaço</li>
                    </ul>

                    <h4 className="text-base font-bold text-hyper-green my-4">
                      Contrato flexível e seguro
                    </h4>

                    <p className="text-white/70">
                      Prazo mínimo de 12 meses, com renovação automática, e possibilidade de expansão ou personalização de contrato para atender a demandas específicas.
                    </p>

                    <p className="text-white/70 mt-6">
                      ➡️ Entre em contato com nossa equipe técnica agora mesmo e solicite a viabilidade de instalação no seu endereço. Transforme seu espaço em ponto de recarga inteligente e comece a lucrar com a mobilidade elétrica.
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

export default AluguelCarregadores;
