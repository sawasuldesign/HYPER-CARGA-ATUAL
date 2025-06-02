
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { initScrollAnimation } from "@/utils/scrollAnimation";

const Motoristas = () => {
  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    initScrollAnimation();

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);

    document.title = "Motoristas - Hyper Carga";
    
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Descubra os carregadores Hyper Carga ideais para motoristas de veículos elétricos.";
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(metaDescription);
    };
  }, []);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const chargers = [
    {
      id: 1,
      name: "Carregador DC ZID160-2CCS2 (160 kW)",
      description: "O ZID160-2CCS2 é um carregador de alta potência para recarga rápida de veículos elétricos. Capaz de fornecer 160 kW por meio de um único conector CCS2 ou dividir 80 kW entre dois conectores CCS2, este modelo é ideal para quem busca velocidade e versatilidade. Seu display de 50 polegadas oferece uma interface intuitiva, e o baixo consumo em standby garante eficiência energética.",
      efficiency: "Potência de Saída: 160 kW (um conector) ou 80 kW por conector para recarga simultânea. Consumo em Standby: Menos de 50 W, reduzindo o desperdício de energia. Tensão de Entrada: Trifásico + neutro + PE, 380 V ± 10%, 60 Hz. Corrente de Entrada: 250 A. Protocolo de Comunicação: OCPP 1.6 JSON para integração com redes de recarga. Conectividade: Ethernet. O ZID160-2CCS2 aloca a potência de forma dinâmica, garantindo desempenho otimizado para um ou dois veículos. Seu baixo consumo em standby o torna uma opção ecológica para locais de alta demanda.",
      bestLocations: "Estações de Recarga Comerciais: Ideal para postos de gasolina, áreas de descanso ou shoppings com alta demanda por recarga rápida. Depósitos de Frotas: Perfeito para empresas que gerenciam frotas de VEs, como serviços de entrega ou táxis. Centros Urbanos: Indicado para áreas urbanas com grande circulação de VEs, proporcionando recarga rápida.",
      installation: "Instalação: Requer uma fonte de energia trifásica de 380 V e uma base de concreto para montagem. Recomenda-se instalação profissional para conformidade com normas elétricas. O cabo de 5 metros permite flexibilidade na posicionamento. Manutenção: Limpeza regular dos conectores e do display é recomendada. Verifique a conexão Ethernet periodicamente para garantir a comunicação com o backend. O design robusto minimiza a necessidade de manutenção, e o suporte nacional está disponível para assistência.",
      curiosities: "Pode carregar dois VEs simultaneamente a 80 kW cada, economizando tempo em locais movimentados. O display de 50 polegadas pode ser usado para exibir anúncios, gerando oportunidades de receita para empresas. O protocolo OCPP 1.6 JSON garante compatibilidade com a maioria dos aplicativos de recarga, aumentando a conveniência."
    },
    {
      id: 2,
      name: "Carregador DC ZID60-2CCS2-TV (80 kW)",
      description: "O ZID60-2CCS2-TV é um carregador DC versátil que entrega 80 kW por um conector CCS2 ou 40 kW por dois conectores. Seu display de 50 polegadas permite controle local ou remoto do conteúdo exibido, combinando funcionalidade com interação do usuário. O baixo consumo em standby garante eficiência energética.",
      efficiency: "Potência de Saída: 80 kW (um conector) ou 40 kW por conector para recarga simultânea. Consumo em Standby: Menos de 50 W. Tensão de Entrada: Trifásico + neutro + PE, 380 V ± 10%, 60 Hz. Corrente de Entrada: 122 A. Protocolo de Comunicação: OCPP 1.6 JSON. Conectividade: Ethernet. A capacidade de divisão de potência garante eficiência energética, e o baixo consumo em standby reduz custos operacionais.",
      bestLocations: "Centros Comerciais: O grande display é ideal para locais onde anúncios ou instruções podem melhorar a experiência do usuário. Estacionamentos: Indicado para escritórios ou estacionamentos públicos com tráfego moderado de VEs. Áreas de Descanso em Rodovias: Perfeito para viajantes que precisam de paradas rápidas para recarga.",
      installation: "Instalação: Requer uma fonte trifásica de 380 V e uma superfície de montagem segura. Os cabos de 5 metros oferecem alcance suficiente para posicionamento. Garanta ventilação adequada ao redor da unidade. Manutenção: Limpe o display e os conectores regularmente para evitar acúmulo de poeira. Verifique a conexão Ethernet para desempenho consistente. O suporte nacional da Hyper Carga está disponível para suporte.",
      curiosities: "O display de 50 polegadas permite personalizar conteúdos, como promoções ou instruções de recarga, melhorando a interação. Este carregador pode recarregar a maioria dos VEs em menos de uma hora com a saída total de 80 kW. Seu baixo consumo em standby o torna um dos carregadores DC mais eficientes da categoria."
    },
    {
      id: 3,
      name: "Carregador DC ZID80 (80 kW)",
      description: "O ZID80 oferece recarga robusta de 80 kW por um conector CCS2 ou 40 kW por dois conectores. Seu display compacto de 150 mm x 50 mm exibe informações claras sobre o status de recarga, ideal para quem valoriza simplicidade e velocidade.",
      efficiency: "Potência de Saída: 80 kW (um conector) ou 40 kW por conector para recarga simultânea. Consumo em Standby: Menos de 50 W. Tensão de Entrada: Trifásico + neutro + PE, 380 V ± 10%, 60 Hz. Corrente de Entrada: 125 A. Protocolo de Comunicação: OCPP 1.6 JSON. Conectividade: Ethernet. O ZID80 equilibra velocidade de recarga e eficiência energética, ideal para locais com tráfego moderado.",
      bestLocations: "Pequenos Negócios: Ótimo para cafés, academias ou lojas com clientes que usam VEs. Condomínios Residenciais: Indicado para prédios de alto padrão com estações de recarga compartilhadas. Estacionamentos Municipais: Ideal para áreas de estacionamento públicas com uso moderado de VEs.",
      installation: "Instalação: Requer uma conexão trifásica de 380 V e uma base de montagem estável. O display compacto permite instalação em espaços menores. Manutenção: Pouca manutenção é necessária — limpe os conectores e verifique a conexão Ethernet periodicamente. O suporte nacional garante assistência rápida.",
      curiosities: "O display compacto é projetado para fácil leitura, mesmo sob luz solar intensa. A função de divisão de potência o torna versátil para locais com demandas variadas. Seu baixo consumo em standby está alinhado com metas de sustentabilidade, reduzindo custos energéticos."
    },
    {
      id: 4,
      name: "Carregador DC ZID40-CCS2 (40 kW)",
      description: "O ZID40-CCS2 é um carregador DC compacto e eficiente, fornecendo 40 kW por um conector CCS2. Seu display de 50 polegadas oferece feedback claro ao usuário, e o baixo consumo em standby garante eficiência. Ideal para locais que precisam de recarga confiável para um veículo.",
      efficiency: "Potência de Saída: 40 kW (um conector). Consumo em Standby: Menos de 50 W. Tensão de Entrada: Trifásico + neutro + PE, 380 V ± 10%, 60 Hz. Corrente de Entrada: 122 A. Protocolo de Comunicação: OCPP 1.6 JSON. Conectividade: Ethernet. O ZID40-CCS2 é otimizado para recarga de um veículo, oferecendo equilíbrio entre velocidade e eficiência energética.",
      bestLocations: "Pequeno Varejo: Perfeito para boutiques ou restaurantes com espaços de estacionamento limitados. Edifícios de Escritórios: Ideal para locais de trabalho que oferecem recarga para funcionários ou visitantes. Centros Comunitários: Indicado para locais com necessidades ocasionais de recarga.",
      installation: "Instalação: Requer uma fonte trifásica de 380 V e uma área de montagem segura. O cabo de 5 metros permite posicionamento flexível. Manutenção: Limpe o conector e o display regularmente. Verifique a conexão Ethernet para manter a comunicação com o backend. O suporte nacional está disponível.",
      curiosities: "É um dos carregadores DC mais compactos da nossa linha, ideal para espaços menores. Sua saída de 40 kW pode carregar a maioria dos VEs até 80% em menos de 90 minutos. O grande display melhora a experiência do usuário com informações claras."
    },
    {
      id: 5,
      name: "Wallbox AC 7,04 kW / 22 kW",
      description: "Os carregadores Wallbox AC são projetados para conveniência, oferecendo 7,04 kW ou 22 kW por meio de um conector Tipo 2. Com OCPP 1.6 e conectividade WiFi opcionais (para o modelo de 7,04 kW), são perfeitos para ambientes residenciais e hoteleiros.",
      efficiency: "Potência de Saída: 7,04 kW ou 22 kW. Tensão de Entrada: 220 V (fase-neutro ou fase-fase) ou trifásico 380 V ± 10%, 60 Hz. Corrente de Entrada: 32 A. Protocolo de Comunicação: OCPP 1.6 JSON (opcional para 7,04 kW). Conectividade: WiFi (opcional para 7,04 kW). São altamente eficientes para recargas longas, como durante a noite, com consumo mínimo em standby.",
      bestLocations: "Residências: Ideal para proprietários de VEs que desejam recarga noturna. Hotéis e Resorts: Perfeito para estacionamentos de hóspedes, valorizando a oferta de serviços. Condomínios: Indicado para garagens compartilhadas com múltiplos usuários de VEs.",
      installation: "Instalação: Requer uma fonte de 220 V ou 380 V, dependendo do modelo. A instalação de parede é simples, com mínimas alterações na infraestrutura. O cabo de 5 metros facilita o acesso aos veículos. Manutenção: Limpe o conector Tipo 2 regularmente. Para modelos com WiFi, garanta uma conexão de rede estável. O suporte nacional está disponível para assistência.",
      curiosities: "O modelo de 22 kW pode carregar até três vezes mais rápido que o de 7,04 kW, ideal para locais movimentados. A conectividade WiFi opcional permite integração com aplicativos, oferecendo monitoramento remoto. O design elegante do Wallbox se integra perfeitamente à estética de residências ou hotéis."
    },
    {
      id: 6,
      name: "Wallbox AC 7,2 kWh Z1 W07 / Z1 W07W (WiFi)",
      description: "Os carregadores Wallbox AC Z1 W07 e Z1 W07W entregam 7,04 kW por um conector Tipo 2, com o Z1 W07W oferecendo WiFi e OCPP 1.6 opcionais para maior conectividade. Compactos e fáceis de usar, são ideais para uso residencial e comercial, com baixo consumo em standby.",
      efficiency: "Potência de Saída: 7,04 kW. Tensão de Entrada: 220 V (fase-neutro ou fase-fase) + PE. Corrente de Entrada: 32 A. Protocolo de Comunicação: OCPP 1.6 JSON (opcional). Conectividade: WiFi (opcional para Z1 W07W). Temperatura de Operação: -35°C a 50°C. Temperatura de Armazenamento: -35°C a 70°C. Otimizados para recargas lentas e eficientes, perfeitos para uso noturno.",
      bestLocations: "Garagens Residenciais: Ideal para recarga diária em casa. Pequenos Negócios: Ótimo para cafés ou escritórios com estacionamento para funcionários ou clientes. Condomínios: Indicado para estações de recarga compartilhadas.",
      installation: "Instalação: Requer uma fonte de 220 V e instalação na parede. Um totem opcional (5001.001) está disponível para montagem independente. Garanta aterramento adequado para segurança. Manutenção: Limpe o conector regularmente e verifique a conectividade WiFi (se aplicável). O design robusto exige manutenção mínima, com suporte nacional disponível.",
      curiosities: "O Z1 W07W com WiFi permite monitoramento via aplicativos de smartphone, adicionando praticidade. Funciona em temperaturas extremas, de -35°C a 50°C, garantindo confiabilidade em diversos climas. O totem opcional oferece flexibilidade para diferentes cenários de instalação."
    },
    {
      id: 7,
      name: "Carregador Portátil Multicabos AC (7,04 kW)",
      description: "O carregador Portátil Multicabos AC é a solução ideal para quem busca flexibilidade. Com saída de 7,04 kW por um conector Tipo 2 e plugues intercambiáveis de 10A, 20A e 32A, inclui um plugue de 32A e uma bolsa de transporte para fácil mobilidade.",
      efficiency: "Potência de Saída: 7,04 kW. Tensão de Entrada: 220 V (fase-neutro ou fase-fase) ± 10%, 60 Hz. Corrente de Entrada: Até 32 A. Comprimento do Cabo: 5 metros. Projetado para uso plug-and-play, sem necessidade de infraestrutura complexa.",
      bestLocations: "Recarga em Movimento: Perfeito para proprietários de VEs que viajam frequentemente ou não têm infraestrutura fixa. Casas de Férias: Ideal para residências secundárias sem carregadores permanentes. Uso de Emergência: Ótimo para assistência na estrada ou necessidades temporárias de recarga.",
      installation: "Instalação: Não requer instalação fixa — basta conectar a uma tomada de 220 V compatível (10A, 20A ou 32A). Garanta que a tomada esteja devidamente aterrada. Manutenção: Armazene na bolsa de transporte para proteger contra poeira e danos. Limpe o conector e os plugues regularmente. A manutenção é mínima, com suporte nacional disponível.",
      curiosities: "Os plugues intercambiáveis tornam este carregador compatível com uma ampla gama de tomadas, de residenciais a industriais. Sua portabilidade o torna favorito entre proprietários de VEs que valorizam liberdade e flexibilidade. A bolsa de transporte incluída facilita armazenamento e transporte, ideal para viagens."
    }
  ];

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
                Carregadores Hyper Carga
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

        {/* Welcome Section */}
        <section id="about" className="section bg-dark p-6 md:p-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* First Column */}
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-hyper-green mb-4 animated-element">
                  Bem-vindo ao universo Hyper Carga!
                </h2>
                <p className="text-lg lg:text-xl text-white/70 mb-6 animated-element delay-200">
                  Onde a tecnologia de ponta se une à crescente demanda por soluções de recarga para veículos elétricos (VEs). Nossa linha de carregadores foi projetada para oferecer flexibilidade, eficiência e confiabilidade em qualquer cenário — seja em casa, em hotéis ou em estações públicas de alta demanda.
                </p>
                <p className="text-lg lg:text-xl text-white/70 animated-element delay-400">
                  Com suporte nacional e recursos inovadores, os carregadores Hyper Carga tornam a recarga de VEs prática e sustentável. Conheça abaixo cada modelo, suas especificações, dicas de instalação, manutenção e curiosidades que fazem da Hyper Carga a escolha ideal.
                </p>
              </div>

              {/* Second Column */}
              <div className="flex justify-center">
                <img
                  src="/public/images/hero-bg.jpg"
                  alt="Carregador Hyper Carga em ação"
                  className="w-full md:w-auto max-h-64 md:max-h-96 object-cover rounded-lg animate-float mb-6 md:mb-0"
                />
              </div>

              {/* Third Column */}
              <div className="space-y-4">
                <p className="text-lg lg:text-xl text-white/70 mb-4 animated-element delay-600 text-center lg:text-right">
                  Você é proprietário de um carro elétrico ou está inserido no ramo da eletromobilidade? Então está no lugar certo!
                </p>
                <img
                  src="/public/images/charging-station.png"
                  alt="Estação de carregamento Hyper Carga"
                  className="w-full md:w-auto max-h-48 md:max-h-64 object-cover rounded-lg mt-4 animate-float"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Chargers Section */}
        <section className="section bg-dark p-6 md:p-12">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 animated-element">
              Nossos Carregadores
            </h2>
            
            <div className="space-y-4">
              {chargers.map((charger, index) => (
                <div
                  key={charger.id}
                  className="border border-border/40 rounded-lg overflow-hidden animated-element"
                >
                  {/* Header */}
                  <div
                    className="flex items-center p-4 bg-darker hover:bg-darker/80 transition-colors cursor-pointer"
                    onClick={() => toggleExpanded(index)}
                  >
                    <img
                      src="/public/images/charging-station.png"
                      alt={`Carregador ${charger.name}`}
                      className="w-24 h-24 object-cover mr-4"
                    />
                    <h3 className="text-xl font-bold text-hyper-green flex-1">
                      {charger.name}
                    </h3>
                    {expandedItems[index] ? (
                      <ChevronUp className="h-6 w-6 text-white/50" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-white/50" />
                    )}
                  </div>

                  {/* Content */}
                  {expandedItems[index] && (
                    <div className="p-4 bg-darker/50 text-white/70 space-y-2">
                      <p>
                        <strong>Descrição:</strong><br />
                        {charger.description}
                      </p>
                      <p>
                        <strong>Eficiência:</strong><br />
                        {charger.efficiency}
                      </p>
                      <p>
                        <strong>Melhores Locais para Instalação:</strong><br />
                        {charger.bestLocations}
                      </p>
                      <p>
                        <strong>Instalação e Manutenção:</strong><br />
                        {charger.installation}
                      </p>
                      <p>
                        <strong>Curiosidades:</strong><br />
                        {charger.curiosities}
                      </p>
                    </div>
                  )}
                </div>
              ))}
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
