
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
  const [activeTab, setActiveTab] = useState<string>("specs");

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

  const [centerIndex, setCenterIndex] = useState(0);

  const carregadores = [
    {
      id: "dc-160kw",
      name: "Carregador DC 160 kW",
      image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1756146552/dc1_o514so.png",
      shortName: "DC 160 kW",
      description: "A estação de recarga Hyper Carga DC 160 kW é a solução perfeita para quem busca flexibilidade e agilidade na recarga de veículos elétricos. Projetada para alta performance, ela permite o carregamento simultâneo em dois plugues a 80 kW cada ou um único a 160 kW, garantindo eficiência máxima em estações públicas ou empresariais.",
      fullDescription: "Estação de recarga DC inteligente de 160 kW com duplo conector CCS2 e display de 50\". Oferece carregamento simultâneo (80 kW cada) ou individual (160 kW total), com eficiência superior a 95% e conectividade OCPP 1.6. Sistema de auto-diagnóstico, divisão inteligente de energia e interface touch proporcionam máxima flexibilidade operacional. Ideal para postos de alta demanda, corredores rodoviários e terminais de transporte.",
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
      image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1756146590/DCtv-cabo_lakgyf.png",
      shortName: "DC 80 kW",
      description: "A estação de recarga Hyper Carga DC 80 kW combina potência e inovação com um display de 50\" integrado, permitindo controle local ou remoto do conteúdo exibido – perfeito para exibir promoções ou informações em tempo real.",
      fullDescription: "Estação de recarga DC inteligente de 80 kW com duplo conector CCS2 e display de 50\". Oferece carregamento simultâneo (40 kW cada) ou individual (80 kW total), com eficiência superior a 95% e conectividade OCPP 1.6. Sistema de auto-diagnóstico, divisão inteligente de energia e interface touch proporcionam máxima flexibilidade operacional. Ideal para postos de alta demanda, corredores rodoviários e terminais de transporte.",
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
      image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1756146566/wall_dc_tfoqkq.png",
      shortName: "DC 40 kW",
      description: "A estação de recarga Hyper Carga DC 40 kW oferece flexibilidade e agilidade para recargas rápidas em um único plugue a 40 kW, com protocolo OCPP 1.6 para integração fácil em redes.",
      fullDescription: "Estação de recarga DC inteligente de 40 kW com duplo conector CCS2 e display de 50\". Oferece carregamento simultâneo (20 kW cada) ou individual (40 kW total), com eficiência superior a 95% e conectividade OCPP 1.6. Sistema de auto-diagnóstico, divisão inteligente de energia e interface touch proporcionam máxima flexibilidade operacional. Ideal para postos de média demanda.",
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
      image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1756146566/wallbox_msbbpu.png",
      shortName: "Wallbox AC",
      description: "As estações de recarga Hyper Carga Wallbox AC são a escolha perfeita para hotéis, residências ou garagens, sem necessidade de grandes alterações na infraestrutura elétrica.",
      fullDescription: "Carregador veicular AC residencial e comercial com potência ajustável entre 7,04 kW e 22 kW, conector Tipo 2 e conectividade OCPP opcional. Design robusto para instalação em parede, ideal para garagens e empresas. Oferece carregamento inteligente com proteções elétricas integradas.",
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
      image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1756146565/portatil_ppkbqj.png",
      shortName: "Portátil AC",
      description: "As estações de recarga Hyper Carga Portátil Multicabos AC proporcionam flexibilidade total para carregar em qualquer lugar, com potência máxima de 7.04 kW.",
      fullDescription: "Carregador veicular AC portátil de 7,04 kW com conector Tipo 2, ideal para uso em diferentes locais com adaptadores incluídos. Design leve e compacto, perfeito para viagens e residências. Oferece carregamento seguro com proteções elétricas.",
      specs: {
        "Conector AC": "Tipo 2",
        "Tamanho do Cabo": "5 m",
        "Potência de saída": "7,04 kW MAX",
        "Tensão de entrada": "F/N 220V ou F/F 220V ± 10%, 60 Hz",
        "Corrente de entrada": "32 A MAX"
      }
    },
    {
      id: "wallbox-ac-7kw",
      name: "Estação Wallbox AC 7,2kWh WiFi T2",
      image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1756146566/wallbox_msbbpu.png",
      shortName: "Wallbox AC 7.2kW",
      description: "Carregador veicular AC residencial e comercial de 7,2 kW com conectividade WiFi e conector Tipo 2. Design compacto para fixação em parede, ideal para garagens, condomínios e estabelecimentos comerciais.",
      fullDescription: "Carregador veicular AC residencial e comercial de 7,2 kW com conectividade WiFi e conector Tipo 2. Design compacto para fixação em parede, ideal para garagens, condomínios e estabelecimentos comerciais. Oferece carregamento inteligente com conectividade OCPP opcional, proteções elétricas integradas e instalação simplificada. Solução econômica e eficiente para carregamento regular de veículos elétricos.",
      specs: {
        "Potência nominal": "7,2 kW",
        "Tipo de carregamento": "AC",
        "Conector": "Tipo 2",
        "Conectividade": "WiFi integrado",
        "OCPP": "Opcional (modelo Z1W07W)",
        "Configuração": "Monofásica",
        "Tensão de operação": "220V (F-N)",
        "Frequência": "60 Hz",
        "Corrente nominal": "32A",
        "Bitola mínima dos cabos": "6 mm²"
      }
    },
    {
      id: "wallbox-dc-30kw",
      name: "Estação Wallbox DC 30kWh 1 CCS2",
      image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1756146566/wallbox_msbbpu.png",
      shortName: "Wallbox DC 30kW",
      description: "Estação de recarga DC inteligente de 30 kW com alta confiabilidade e interface touch colorida. Equipado com conector CCS2, protocolos ISO15118 e DIN SPEC 70121, oferece eficiência superior a 95%.",
      fullDescription: "Estação de recarga DC inteligente de 30 kW com alta confiabilidade e interface touch colorida. Equipado com conector CCS2, protocolos ISO15118 e DIN SPEC 70121, oferece eficiência superior a 95% e conectividade OCPP 1.6. Sistema de auto-diagnóstico e resfriamento ativo garantem operação segura em temperaturas de -35°C a 50°C. Ideal para estabelecimentos comerciais, condomínios e aplicações urbanas.",
      specs: {
        "Potência de saída": "30 kW",
        "Tensão de saída": "200V a 1000V",
        "Corrente máxima": "150A",
        "Eficiência nominal": "> 95%",
        "Fator de potência": "1",
        "DHT (THD)": "1,30%",
        "Conector": "CCS2",
        "Tamanho do cabo": "5m",
        "Protocolos": "ISO15118, DIN SPEC 70121",
        "Comunicação": "OCPP 1.6 JSON",
        "Conectividade": "Ethernet"
      }
    },
    {
      id: "wallbox-dc-40kw",
      name: "Estação Wallbox DC 40kWh 1 CCS2",
      image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1756146566/wallbox_msbbpu.png",
      shortName: "Wallbox DC 40kW",
      description: "Estação de recarga DC inteligente de 40 kW com alta confiabilidade e interface touch colorida. Equipado com conector CCS2, protocolos ISO15118 e DIN SPEC 70121, oferece eficiência superior a 95%.",
      fullDescription: "Estação de recarga DC inteligente de 40 kW com alta confiabilidade e interface touch colorida. Equipado com conector CCS2, protocolos ISO15118 e DIN SPEC 70121, oferece eficiência superior a 95% e conectividade OCPP 1.6. Sistema de auto-diagnóstico e resfriamento ativo garantem operação segura em temperaturas de -35°C a 50°C. Ideal para postos, estacionamentos comerciais e frotas corporativas.",
      specs: {
        "Potência de saída": "40 kW",
        "Tensão de saída": "200V a 1000V",
        "Corrente máxima": "150A",
        "Eficiência nominal": "> 95%",
        "Fator de potência": "1",
        "DHT (THD)": "1,30%",
        "Conector": "CCS2",
        "Tamanho do cabo": "5m",
        "Protocolos": "ISO15118, DIN SPEC 70121",
        "Comunicação": "OCPP 1.6 JSON",
        "Conectividade": "Ethernet"
      }
    },
    {
      id: "estacao-dc-80kw",
      name: "Estação DC 80 kWh 2 CCS2 TV",
      image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1754420072/dc1_ok4vm9.png",
      shortName: "Estação DC 80kW TV",
      description: "Estação de recarga DC inteligente de 80 kW com duplo conector CCS2 e display de 50\". Oferece carregamento simultâneo (40 kW cada) ou individual (80 kW total), com eficiência superior a 95%.",
      fullDescription: "Estação de recarga DC inteligente de 80 kW com duplo conector CCS2 e display de 50\". Oferece carregamento simultâneo (40 kW cada) ou individual (80 kW total), com eficiência superior a 95% e conectividade OCPP 1.6. Sistema de auto-diagnóstico, divisão inteligente de energia e interface touch proporcionam máxima flexibilidade operacional. Ideal para postos de alta demanda, corredores rodoviários e terminais de transporte.",
      specs: {
        "Potência de saída": "80 kW (40 kW + 40 kW)",
        "Divisão de energia": "40 kW por conector (simultâneo) ou 80 kW (individual)",
        "Tensão de saída": "200V a 1000V",
        "Corrente máxima": "250A",
        "Eficiência nominal": "> 95%",
        "Fator de potência": "1",
        "DHT (THD)": "1,30%",
        "Conectores": "CCS2 + CCS2",
        "Tamanho do cabo": "5m cada",
        "Protocolos": "ISO15118, DIN SPEC 70121",
        "Comunicação": "OCPP 1.6 JSON",
        "Conectividade": "Ethernet"
      }
    },
    {
      id: "estacao-dc-120kw",
      name: "Estação DC 120 kWh 2 CCS2 TV",
      image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1754420072/dc1_ok4vm9.png",
      shortName: "Estação DC 120kW TV",
      description: "Estação de recarga DC inteligente de 120 kW com duplo conector CCS2 e display de 50\". Oferece carregamento simultâneo (60 kW cada) ou individual (120 kW total), com eficiência superior a 95%.",
      fullDescription: "Estação de recarga DC inteligente de 80 kW com duplo conector CCS2 e display de 50\". Oferece carregamento simultâneo (40 kW cada) ou individual (80 kW total), com eficiência superior a 95% e conectividade OCPP 1.6. Sistema de auto-diagnóstico, divisão inteligente de energia e interface touch proporcionam máxima flexibilidade operacional. Ideal para postos de alta demanda, corredores rodoviários e terminais de transporte.",
      specs: {
        "Potência de saída": "120 kW (60 kW + 60 kW)",
        "Divisão de energia": "60 kW por conector (simultâneo) ou 120 kW (individual)",
        "Tensão de saída": "200V a 1000V",
        "Corrente máxima": "300A",
        "Eficiência nominal": "> 95%",
        "Fator de potência": "1",
        "DHT (THD)": "1,30%",
        "Conectores": "CCS2 + CCS2",
        "Tamanho do cabo": "5m cada",
        "Protocolos": "ISO15118, DIN SPEC 70121",
        "Comunicação": "OCPP 1.6 JSON",
        "Conectividade": "Ethernet"
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

  // Auto-scroll carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % carregadores.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carregadores.length]);

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
            <div className="relative overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${centerIndex * (100 / 3)}%)` }}>
                {/* Create infinite loop by duplicating items */}
                {[...carregadores, ...carregadores, ...carregadores].map((charger, index) => {
                  const actualIndex = index % carregadores.length;
                  const isCenter = index === centerIndex + carregadores.length;
                  
                  return (
                    <div 
                      key={`${charger.id}-${index}`} 
                      className={`flex-shrink-0 w-1/3 px-4 transition-all duration-300 ${
                        isCenter ? 'transform scale-110 z-10' : 'transform scale-90 opacity-75'
                      }`}
                    >
                      <div className="relative text-center group h-80 flex flex-col justify-between">
                        {/* Green circle background */}
                        <div className={`absolute inset-x-0 top-8 mx-auto ${
                          isCenter ? 'w-40 h-40' : 'w-32 h-32'
                        } bg-green-500 rounded-full z-0 opacity-80 group-hover:opacity-100 transition-all duration-300`}></div>
                        
                        {/* Charger image */}
                        <div className="relative z-10 mb-4 flex-grow flex items-center justify-center">
                          <img
                            src={charger.image}
                            alt={charger.name}
                            className={`object-contain mx-auto transition-all duration-300 ${
                              isCenter ? 'h-48 w-48' : 'h-40 w-40'
                            }`}
                          />
                        </div>
                        
                        {/* Charger name */}
                        <h3 className={`font-bold text-white mb-4 relative z-10 transition-all duration-300 ${
                          isCenter ? 'text-xl' : 'text-lg'
                        }`}>
                          {charger.name}
                        </h3>
                        
                        {/* Saiba Mais button */}
                        <button
                          onClick={() => scrollToCharger(charger.id)}
                          className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 relative z-10 mx-auto ${
                            isCenter ? 'transform scale-110' : ''
                          }`}
                        >
                          Saiba Mais
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Navigation buttons */}
              <button
                onClick={() => setCenterIndex((prev) => (prev - 1 + carregadores.length) % carregadores.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => setCenterIndex((prev) => (prev + 1) % carregadores.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              
            </div>
          </div>
        </section>

        {/* Detailed Charger Sections - Only show when selectedCharger */}
        {selectedCharger && (
          <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
              {carregadores.filter(charger => charger.id === selectedCharger).map((charger) => (
                <div
                  key={charger.id}
                  id={`details-${charger.id}`}
                  className="bg-card rounded-lg overflow-hidden ring-2 ring-primary"
                >
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-8">
                      {/* Charger image */}
                      <div className="flex justify-center">
                        <img
                          src={charger.image}
                          alt={charger.name}
                          className="w-full max-w-xs object-contain"
                        />
                      </div>
                      
                      {/* Charger details */}
                      <div className="lg:col-span-2">
                        <h3 className="text-3xl font-bold text-primary mb-6">
                          {charger.name}
                        </h3>
                        
                        {/* Full description */}
                        <div className="mb-6">
                          <p className="text-white/90 leading-relaxed">
                            {charger.fullDescription}
                          </p>
                        </div>
                        
                        {/* Key specs as bullet points */}
                        <div className="mb-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.entries(charger.specs).slice(0, 6).map(([key, value]) => (
                              <div key={key} className="flex items-center text-white/80">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                                <span className="text-sm">
                                  <strong className="text-white">{key}:</strong> {value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Tabs for Description and Ficha Técnica */}
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                          <TabsList className="grid w-full grid-cols-2 bg-darker max-w-md">
                            <TabsTrigger 
                              value="description" 
                              className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                            >
                              Descrição
                            </TabsTrigger>
                            <TabsTrigger 
                              value="specs" 
                              className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                            >
                              Ficha Técnica
                            </TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="description" className="mt-6">
                            <div className="bg-darker/50 rounded-lg p-6">
                              <p className="text-white/90 leading-relaxed">
                                {charger.fullDescription}
                              </p>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="specs" className="mt-6">
                            <div className="overflow-x-auto">
                              <table className="w-full bg-darker/50 rounded-lg">
                                <tbody>
                                  {Object.entries(charger.specs).map(([key, value], index) => (
                                    <tr key={key} className={`${index % 2 === 0 ? 'bg-darker/30' : 'bg-transparent'}`}>
                                      <td className="py-3 px-4 font-semibold text-green-500 capitalize border-r border-border/20">
                                        {key}
                                      </td>
                                      <td className="py-3 px-4 text-white/80">{value}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Produtos Relacionados Section */}
        <section className="py-16 px-6 bg-card">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Produtos Relacionados
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
              {carregadores.map((charger) => (
                <button
                  key={charger.id}
                  onClick={() => scrollToCharger(charger.id)}
                  className="text-center group hover:scale-105 transition-transform bg-darker rounded-lg p-4"
                >
                  <img
                    src={charger.image}
                    alt={charger.shortName}
                    className="w-full h-24 object-contain rounded mb-3 group-hover:ring-2 group-hover:ring-primary"
                  />
                  <p className="text-sm text-primary font-medium">
                    {charger.shortName}
                  </p>
                </button>
              ))}
            </div>
            
            {/* Fale Conosco Button */}
            <div className="text-center">
              <a
                href="https://wa.me/+555436983939"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale Conosco
              </a>
            </div>
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
