import { useEffect, useState } from "react";
import { MessageCircle, Car, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { initScrollAnimation } from "@/utils/scrollAnimation";

const AluguelContent = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (item: string) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  const accordionItems = [
    {
      id: "ganhos",
      title: "Ganhos desde o primeiro mês:",
      content: "Com a locação, sua estação já sai monetizando! Você define o preço do kWh cobrado e começa a recuperar o valor da locação e instalação desde o início."
    },
    {
      id: "gestao",
      title: "Gestão completa e gratuita:",
      content: "Nosso software de cobrança e gestão de recarga está incluso na locação. Com ele, você acompanha: Quantidade de energia carregada por sessão, Horários de pico, Relatórios PDF completos por período, Curva ABC diária, semanal e mensal."
    },
    {
      id: "instalacao",
      title: "Instalação técnica sob medida:",
      content: "Antes de qualquer instalação, realizamos um estudo técnico para garantir a viabilidade elétrica do local e, se necessário, cuidamos de todo o processo junto à concessionária de energia."
    },
    {
      id: "manutencao",
      title: "Manutenção periódica inclusa:",
      content: "Cuidamos da manutenção preventiva dos equipamentos sem custo adicional durante todo o contrato, garantindo a segurança e o bom funcionamento da sua estação."
    },
    {
      id: "personalizacao",
      title: "Personalização com a sua marca:",
      content: "Deseja ter um carregador com a identidade da sua empresa? Oferecemos a possibilidade de personalização, inclusive em modelos DC com telas 4K, onde você também pode comercializar espaços publicitários."
    },
    {
      id: "solucoes",
      title: "Soluções para negócios e frotas:",
      content: "Possui uma frota eletrificada ou quer compartilhar estações? Criamos condições especiais de locação e parceria para empresas e operadores logísticos."
    }
  ];

  return (
    <div className="space-y-8 animated-element">
      <p className="text-lg text-white/80">
        Na Hyper Carga, oferecemos o serviço de locação de carregadores elétricos para empresas, estacionamentos, shoppings, hotéis, condomínios e negócios de todos os portes.
      </p>
      
      <p className="text-lg text-white/80 italic">
        Nossa proposta é simples: você disponibiliza o serviço de recarga, gera receita e fideliza seu público — sem precisar investir pesado na compra dos equipamentos.
      </p>

      <div className="space-y-4">
        {accordionItems.map((item) => (
          <div key={item.id} className="border border-border/40 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-darker/50 transition-colors"
            >
              <span className="font-semibold text-white">{item.title}</span>
              {expandedItem === item.id ? (
                <ChevronUp className="h-5 w-5 text-hyper-green" />
              ) : (
                <ChevronDown className="h-5 w-5 text-hyper-green" />
              )}
            </button>
            {expandedItem === item.id && (
              <div className="p-4 pt-0">
                <p className="text-white/80">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const AluguelCarregadores = () => {
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
        <section id="about" className="section bg-dark">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16 animated-element">
              <h2 className="section-title">Aluguel de Carregadores</h2>
              <p className="section-subtitle">A solução ideal para quem quer oferecer recarga veicular sem investir na compra de equipamentos.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <AluguelContent />
              
              <div className="relative animated-element">
                <img
                  src="https://res.cloudinary.com/dt2qlgxcl/image/upload/v1754483892/site_foto_cilz6e.png"
                  alt="Aluguel de Carregadores Hyper Carga"
                  className="w-full rounded-lg object-cover"
                />
                
                {/* Decorative pattern */}
                <div 
                  className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg" 
                  style={{ 
                    backgroundImage: "radial-gradient(rgba(46, 183, 14, 0.2) 2px, transparent 2px)", 
                    backgroundSize: "15px 15px" 
                  }}
                ></div>
              </div>
            </div>

            {/* Cards Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8 animated-element">
                Tipos de carregadores disponíveis para locação:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-darker p-6 rounded-lg border border-border/40 hover:border-hyper-blue/30 transition-all animated-element">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-hyper-blue/10 text-hyper-blue mb-4">
                    <Car className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Linha DC</h3>
                  <p className="text-white/70">40kWh, 80kWh, 120kWh, 160kWh e 320kWh</p>
                </div>

                <div className="bg-darker p-6 rounded-lg border border-border/40 hover:border-hyper-blue/30 transition-all animated-element">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-hyper-blue/10 text-hyper-blue mb-4">
                    <Car className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Linha AC</h3>
                  <p className="text-white/70">Modelos customizados conforme a estrutura do seu espaço</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center animated-element">
              <p className="text-lg text-white/70 mb-6">
                Contrato flexível e seguro. Prazo mínimo de 12 meses, com renovação automática, e possibilidade de expansão ou personalização de contrato para atender a demandas específicas.
              </p>
              
              <a href="#contact" className="inline-flex items-center bg-hyper-green text-white px-6 py-3 rounded-lg hover:bg-hyper-green/90 transition-colors">
                Solicitar instalação
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AluguelCarregadores;