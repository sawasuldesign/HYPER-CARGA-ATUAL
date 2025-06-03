
import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { initScrollAnimation } from "@/utils/scrollAnimation";

const Carregadores = () => {
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

  const carregadores = [
    {
      name: "Carregador DC ZID160-2CCS2",
      image: "https://i.imgur.com/oC4s8bY.png",
      description: "Carregador DC ultrarrápido de 160kW",
      whatsappText: "Quero%20informações%20sobre%20Carregador%20DC%20ZID160-2CCS2"
    },
    {
      name: "Carregador DC ZID60-2CCS2-TV (80 kW)",
      image: "https://i.imgur.com/oC4s8bY.png",
      description: "Carregador DC com tela de 60″ e potência de 80kW",
      whatsappText: "Quero%20informações%20sobre%20Carregador%20DC%20ZID60-2CCS2-TV"
    },
    {
      name: "Carregador DC ZID80 (80 kW)",
      image: "https://i.imgur.com/oC4s8bY.png",
      description: "Carregador DC de 80kW para uso comercial",
      whatsappText: "Quero%20informações%20sobre%20Carregador%20DC%20ZID80"
    },
    {
      name: "Carregador DC ZID40-CCS2 (40 kW)",
      image: "https://i.imgur.com/GKrr3O7.png",
      description: "Carregador DC compacto de 40kW",
      whatsappText: "Quero%20informações%20sobre%20Carregador%20DC%20ZID40-CCS2"
    },
    {
      name: "Wallbox AC 7,04 kW / 22 kW",
      image: "https://i.imgur.com/H2jfR1r.png",
      description: "Carregador residencial AC de 7,04 ou 22kW",
      whatsappText: "Quero%20informações%20sobre%20Wallbox%20AC"
    },
    {
      name: "Wallbox AC 7,2 kWh Z1 W07 / Z1 W07W (WiFi)",
      image: "https://i.imgur.com/H2jfR1r.png",
      description: "Carregador AC com conectividade WiFi",
      whatsappText: "Quero%20informações%20sobre%20Wallbox%20AC%20WiFi"
    },
    {
      name: "Carregador Portátil Multicabos AC (7,04 kW)",
      image: "https://i.imgur.com/9OtGpB8.png",
      description: "Carregador portátil para uso móvel",
      whatsappText: "Quero%20informações%20sobre%20Carregador%20Portátil%20Multicabos"
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
            backgroundImage: "linear-gradient(to right bottom, rgba(14, 17, 22, 0.8), rgba(7, 8, 10, 0.95)), url('https://imgur.com/oz7dc74.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 container-custom text-left">
            <div className="max-w-2xl">
              <p className="text-hyper-green text-lg mb-2 animated-element">
                Potência para a Mobilidade Elétrica
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animated-element">
                Tudo sobre Carregadores
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

        {/* Carregadores Section */}
        <section id="about" className="section bg-dark p-6 md:p-12">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4 animated-element">
                Nossos Carregadores
              </h2>
              <p className="text-base text-white/70 mb-6 animated-element">
                Descubra nossa linha completa de carregadores elétricos para todas as necessidades.
              </p>
              
              {/* Segunda Coluna (Imagem Principal) */}
              <div className="mb-8 animated-element">
                <img
                  src="https://imgur.com/oz7dc74.jpg"
                  alt="Carregadores Hyper Carga"
                  className="w-full max-w-2xl mx-auto rounded-lg"
                />
              </div>

              {/* Terceira Coluna (Texto Secundário e Imagem) */}
              <div className="mb-8 animated-element">
                <img
                  src="https://i.imgur.com/H2jfR1r.png"
                  alt="Tecnologia de carregamento"
                  className="w-full max-w-lg mx-auto rounded-lg mb-4"
                />
                <p className="text-lg text-white/70">
                  Tecnologia brasileira de ponta para carregar seu veículo elétrico com segurança e eficiência.
                </p>
              </div>

              {/* Grid de Carregadores */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {carregadores.map((carregador, index) => (
                  <div key={index} className="bg-darker rounded-lg p-6 border border-border/40 hover:border-hyper-blue/30 transition-all animated-element">
                    <img
                      src={carregador.image}
                      alt={carregador.name}
                      className="w-full h-40 object-contain mb-4"
                    />
                    <h3 className="text-lg font-bold text-white mb-2">{carregador.name}</h3>
                    <p className="text-white/70 mb-4">{carregador.description}</p>
                    <a
                      href={`https://wa.me/555436983939?text=${carregador.whatsappText}`}
                      className="inline-flex items-center bg-hyper-blue text-white px-4 py-2 rounded-lg hover:bg-hyper-blue/90 transition-colors w-full justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Saiba Mais
                    </a>
                  </div>
                ))}
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

export default Carregadores;
