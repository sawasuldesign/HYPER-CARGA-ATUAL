
import { useEffect, useState } from "react";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { initScrollAnimation } from "@/utils/scrollAnimation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Carregadores = () => {
  const [selectedCharger, setSelectedCharger] = useState<string | null>(null);

  useEffect(() => {
    initScrollAnimation();

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);

    document.title = "Tudo sobre Carregadores - Hyper Carga";
    
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Descubra tudo sobre carregadores elétricos com a Hyper Carga.";
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(metaDescription);
    };
  }, []);

  const scrollToCharger = (chargerId: string) => {
    setSelectedCharger(chargerId);
    const element = document.getElementById(`details-${chargerId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const carregadores = [
    {
      id: "dc-160kw",
      name: "Carregador DC 160 kW",
      image: "https://i.imgur.com/oC4s8bY.png",
      shortName: "DC 160 kW",
      description: "A estação de recarga Hyper Carga DC 160 kW é a solução perfeita para quem busca flexibilidade e agilidade na recarga de veículos elétricos. Projetada para alta performance, ela permite o carregamento simultâneo em dois plugues a 80 kW cada ou um único a 160 kW, garantindo eficiência máxima em estações públicas ou empresariais. Com consumo ínfimo em standby, suporte técnico nacional 24/7 e conectores 2x CCS2, é ideal para frotas ou pontos de recarga rápida. Dicas de instalação: Posicione em áreas de alto tráfego com acesso à rede elétrica trifásica; manutenção envolve verificações mensais de cabos e atualizações de software via app Hyper Carga. Curiosidade: Essa unidade pode recarregar um VE padrão em menos de 30 minutos, impulsionando a mobilidade sustentável no Brasil.",
      specs: {
        "Conectores DC": "CCS2 + CCS2",
        "Tamanho do Cabo": "5 m",
        "Tamanho do Display": "50\"",
        "Potência de saída": "160 kW (80 kW + 80 kW)",
        "Consumo em Standby": "> 50 W",
        "Tensão de entrada": "3F + N + PE 380V ± 10%, 60 Hz",
        "Corrente de entrada": "250A",
        "Divisão de energia": "Para cargas simultâneas em dois conectores, é destinado 80kW para cada. Se apenas um conector estiver carregando, 160kW são destinados ao conector.",
        "Protocolo de Comunicação Backend": "OCPP 1.6 JSON",
        "Conectividade": "Ethernet",
        "Interface de comissionamento": "Local via IHM"
      }
    },
    {
      id: "dc-80kw",
      name: "Carregador DC 80 kW",
      image: "https://i.imgur.com/oC4s8bY.png",
      shortName: "DC 80 kW",
      description: "A estação de recarga Hyper Carga DC 80 kW combina potência e inovação com um display de 50\" integrado, permitindo controle local ou remoto do conteúdo exibido – perfeito para exibir promoções ou informações em tempo real. Ela suporta carregamento em um plugue a 80 kW ou dois a 40 kW cada, com baixo consumo em standby e conectores 2x CCS2. Com suporte nacional, é ótima para shoppings, estacionamentos ou empresas. Dicas de instalação: Integre com sistemas de gerenciamento de energia para otimização; manutenção inclui limpeza do display e calibração anual. Curiosidade: O display pode ser usado para campanhas educativas sobre EVs, alinhando com a visão Hyper Carga de um Brasil elétrico.",
      specs: {
        "Conectores DC": "CCS2 + CCS2",
        "Tamanho do Cabo": "5 m",
        "Tamanho do Display": "50\"",
        "Potência de saída": "80 kW (40 kW + 40 kW)",
        "Consumo em Standby": "> 50 W",
        "Tensão de entrada": "3F + N + PE 380V ± 10%, 60 Hz",
        "Corrente de entrada": "122A",
        "Divisão de energia": "Para cargas simultâneas em dois conectores, é destinado 40kW para cada. Se apenas um conector estiver carregando, 80kW são destinados ao conector.",
        "Protocolo de Comunicação Backend": "OCPP 1.6 JSON",
        "Conectividade": "Ethernet",
        "Interface de comissionamento": "Local via IHM"
      }
    },
    {
      id: "dc-40kw",
      name: "Carregador DC 40 kW",
      image: "https://i.imgur.com/GKrr3O7.png",
      shortName: "DC 40 kW",
      description: "A estação de recarga Hyper Carga DC 40 kW oferece flexibilidade e agilidade para recargas rápidas em um único plugue a 40 kW, com protocolo OCPP 1.6 para integração fácil em redes. Seu baixo consumo em standby e suporte nacional a tornam ideal para locais com demanda moderada, como condomínios ou pequenas empresas. Conectores: 1x CCS2. Dicas de instalação: Fixe em paredes ou pedestais com conexão elétrica dedicada; manutenção é simples, com alertas via app para filtros e conexões. Curiosidade: Essa unidade compacta é energeticamente eficiente, reduzindo custos operacionais em até 20% comparado a modelos semelhantes.",
      specs: {
        "Conectores DC": "CCS2 + CCS2",
        "Tamanho do Cabo": "5 m",
        "Tamanho do Display": "50\"",
        "Potência de saída": "80 kW (40 kW + 40 kW)",
        "Consumo em Standby": "> 50 W",
        "Tensão de entrada": "3F + N + PE 380V ± 10%, 60 Hz",
        "Corrente de entrada": "122A",
        "Divisão de energia": "Para cargas simultâneas em dois conectores, é destinado 40kW para cada. Se apenas um conector estiver carregando, 80kW são destinados ao conector.",
        "Protocolo de Comunicação Backend": "OCPP 1.6 JSON",
        "Conectividade": "Ethernet",
        "Interface de comissionamento": "Local via IHM"
      }
    },
    {
      id: "wallbox-22kw",
      name: "Wallbox 7.04 / 22 kW",
      image: "https://i.imgur.com/H2jfR1r.png",
      shortName: "Wallbox AC",
      description: "As estações de recarga Hyper Carga Wallbox AC são a escolha perfeita para hotéis, residências ou garagens, sem necessidade de grandes alterações na infraestrutura elétrica. Disponível em versões de 7.04 kW ou 22 kW, com conector 1x Tipo 2 e OCPP 1.6 (opcional na versão 7.04 kW), oferece baixo consumo em standby e suporte nacional. Dicas de instalação: Monte na parede com cabo de 5m para acessibilidade; manutenção envolve inspeções visuais semanais e atualizações firmware. Curiosidade: Projetada para uso diário, pode carregar um VE overnight, promovendo a adoção de mobilidade elétrica em lares brasileiros.",
      specs: {
        "Conector AC": "Tipo 2",
        "Tamanho do Cabo": "5 m",
        "Potência de saída": "7,04 kW / 22 kW",
        "Tensão de entrada": "F/N 220V ou F/F 220V, 3F + N + PE 380V ± 10%, 60 Hz",
        "Corrente de entrada": "32 A",
        "Protocolo de Comunicação Backend": "OCPP 1.6 JSON (Opcional na versão 7,04 kW)",
        "Conectividade": "WiFi (Opcional na versão 7,04 kW)"
      }
    },
    {
      id: "portatil-7kw",
      name: "Portátil Multicabos 7.04 kW Max",
      image: "https://i.imgur.com/9OtGpB8.png",
      shortName: "Portátil AC",
      description: "As estações de recarga Hyper Carga Portátil Multicabos AC proporcionam flexibilidade total para carregar em qualquer lugar, com potência máxima de 7.04 kW. Inclui conector 1x Tipo 2, ponteiras intercambiáveis (10A, 20A, 32A), tomada 32A e bolsa de transporte para portabilidade. Com suporte nacional, é ideal para viagens ou emergências. Dicas de instalação: Plugue diretamente em tomadas compatíveis; manutenção é mínima, com armazenamento seco recomendado. Curiosidade: Essa unidade versátil se adapta a diferentes redes elétricas, tornando a recarga acessível em todo o território nacional.",
      specs: {
        "Conector AC": "Tipo 2",
        "Tamanho do Cabo": "5 m",
        "Potência de saída": "7,04 kW MAX",
        "Tensão de entrada": "F/N 220V ou F/F 220V ± 10%, 60 Hz",
        "Corrente de entrada": "32 A MAX"
      }
    }
  ];

  const heroSlides = [
    {
      image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1756149794/Untitled_design_2_johl7t.png",
      title: "Portátil para Máxima Flexibilidade"
    },
    {
      image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1756149788/Untitled_design_boufjd.png", 
      title: "Wallbox para Casa e Empresas"
    },
    {
      image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1756149747/Untitled_design_1_reerf7.png",
      title: "Carregadores DC de Alta Potência"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-dark text-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-dark via-darker to-dark">
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Hero Content */}
          <div className="relative z-10 text-center px-6 mb-12">
            <p className="text-primary text-lg mb-4 animated-element">
              Potência para a Mobilidade Elétrica
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animated-element">
              Carregadores Hyper Carga
              <br />
              <span className="text-green-500">a energia que move o Brasil nasce aqui.</span>
            </h1>
            
            {/* Hero Carousel */}
            <div className="relative w-full max-w-4xl mx-auto h-64 md:h-80 rounded-lg overflow-hidden">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end">
                    <p className="text-white text-xl font-semibold p-6">{slide.title}</p>
                  </div>
                </div>
              ))}
              
              {/* Carousel Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-primary' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/555436983939"
            className="fixed bottom-6 right-6 z-50 bg-primary p-3 rounded-xl shadow-lg hover:bg-primary/90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contatar via WhatsApp"
          >
            <MessageCircle className="h-8 w-8 text-white" />
          </a>
        </section>

        {/* Welcome Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
              Bem-vindo ao universo Hyper Carga!
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed">
                  Com suporte nacional e recursos inovadores, os carregadores Hyper Carga tornam a recarga de VEs prática e sustentável. Conheça abaixo cada modelo, suas especificações, dicas de instalação, manutenção e curiosidades que fazem da Hyper Carga a escolha ideal.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://res.cloudinary.com/dt2qlgxcl/image/upload/v1756150445/Untitled_Instagram_Post_45_jk42ue.png"
                  alt="Carregador Hyper Carga"
                  className="w-full max-w-md rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Chargers Carousel Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Nossos carregadores
            </h2>
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {carregadores.map((charger) => (
                    <CarouselItem key={charger.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                      <div className="relative text-center group">
                        {/* Green circle background */}
                        <div className="absolute inset-x-0 top-8 mx-auto w-32 h-32 bg-green-500 rounded-full z-0 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                        
                        {/* Charger image */}
                        <div className="relative z-10 mb-4">
                          <img
                            src={charger.image}
                            alt={charger.name}
                            className="w-full h-40 object-contain mx-auto"
                          />
                        </div>
                        
                        {/* Charger name */}
                        <h3 className="text-lg font-bold text-white mb-4 relative z-10">
                          {charger.name}
                        </h3>
                        
                        {/* Saiba Mais button */}
                        <button
                          onClick={() => scrollToCharger(charger.id)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors relative z-10"
                        >
                          Saiba Mais
                        </button>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Detailed Charger Sections */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            {carregadores.map((charger) => (
              <div
                key={charger.id}
                id={`details-${charger.id}`}
                className={`transition-all duration-500 ${
                  selectedCharger === charger.id ? 'ring-2 ring-primary rounded-lg' : ''
                }`}
              >
                <div className="bg-card rounded-lg overflow-hidden">
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                      <div>
                        <h3 className="text-3xl font-bold text-primary mb-4">
                          {charger.name}
                        </h3>
                        <img
                          src={charger.image}
                          alt={charger.name}
                          className="w-full max-w-sm rounded-lg"
                        />
                      </div>
                      <div>
                        <Tabs defaultValue="description" className="w-full">
                          <TabsList className="grid w-full grid-cols-2 bg-darker">
                            <TabsTrigger 
                              value="description" 
                              className="data-[state=active]:bg-primary data-[state=active]:text-white"
                            >
                              Descrição
                            </TabsTrigger>
                            <TabsTrigger 
                              value="specs" 
                              className="data-[state=active]:bg-primary data-[state=active]:text-white"
                            >
                              Ficha Técnica
                            </TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="description" className="mt-6">
                            <div className="text-white/80 leading-relaxed">
                              {charger.description}
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="specs" className="mt-6">
                            <div className="overflow-x-auto">
                              <table className="w-full">
                                <tbody className="space-y-2">
                                  {Object.entries(charger.specs).map(([key, value]) => (
                                    <tr key={key} className="border-b border-border/20">
                                      <td className="py-3 pr-6 font-semibold text-primary capitalize">
                                        {key === 'potencia' ? 'Potência' :
                                         key === 'conectores' ? 'Conectores' :
                                         key === 'consumo' ? 'Consumo em Standby' :
                                         key === 'suporte' ? 'Suporte' :
                                         key === 'status' ? 'Status' :
                                         key === 'marca' ? 'Marca' :
                                         key === 'display' ? 'Display' :
                                         key === 'protocolo' ? 'Protocolo' :
                                         key === 'acessorios' ? 'Acessórios' : key}
                                      </td>
                                      <td className="py-3 text-white/80">{value}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>
                    </div>
                    
                    {/* Manual Button */}
                    <div className="mt-8 pt-8 border-t border-border/20 text-center">
                      <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors mb-8">
                        Manual
                      </button>
                    </div>

                    {/* Produtos Relacionados */}
                    <div className="mt-8 pt-8 border-t border-border/20">
                      <h4 className="text-lg font-semibold text-white mb-4">Produtos Relacionados:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {carregadores
                          .filter(other => other.id !== charger.id)
                          .map((other) => (
                            <button
                              key={other.id}
                              onClick={() => scrollToCharger(other.id)}
                              className="text-center group hover:scale-105 transition-transform"
                            >
                              <img
                                src={other.image}
                                alt={other.shortName}
                                className="w-full h-20 object-cover rounded mb-2 group-hover:ring-2 group-hover:ring-primary"
                              />
                              <p className="text-sm text-primary font-medium">
                                {other.shortName}
                              </p>
                            </button>
                          ))}
                      </div>
                      
                      {/* Fale Conosco Button */}
                      <div className="text-center">
                        <a
                          href="https://wa.me/555436983939"
                          className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Fale Conosco
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-card">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Encontre a solução perfeita na Hyper Carga!
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Entre em contato conosco para descobrir qual carregador é ideal para suas necessidades.
            </p>
            <a
              href="https://wa.me/555436983939"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale com um especialista
            </a>
          </div>
        </section>

        <PartnerSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Carregadores;
