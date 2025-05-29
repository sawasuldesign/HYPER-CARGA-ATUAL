
import React from "react";
import { MessageCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Carregadores e Equipamentos",
      subtitle: "Alta tecnologia carregando seu veículo",
      image: "https://i.imgur.com/lsP0plf.png"
    },
    {
      title: "Projetos, Instalação e Manutenção",
      subtitle: "Ciência energética e funcional sob medida",
      image: "https://i.imgur.com/ALH6KkC.png"
    },
    {
      title: "Gestão de Pontos de Recarga",
      subtitle: "Tecnologia e integração através da inteligência e apps Hyper Carga",
      image: "https://i.imgur.com/ywl1xih.jpeg"
    },
    {
      title: "Aluguel de Carregadores",
      subtitle: "Formando as novas mentes da eletromobilidade",
      image: "https://i.imgur.com/MWtCa0x.png"
    }
  ];

  return (
    <section id="services" className="section bg-dark">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animated-element">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">Soluções completas para a mobilidade elétrica</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-xl border border-border/40 hover:border-hyper-blue/30 transition-all animated-element"
              style={{
                height: "320px"
              }}
            >
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `linear-gradient(to bottom, rgba(7, 8, 10, 0.3), rgba(7, 8, 10, 0.8)), url(${service.image})` 
                }}
              ></div>
              
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/70">{service.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/555436983939" 
          className="fixed bottom-6 right-6 z-40 bg-hyper-green hover:bg-hyper-green/80 p-3 rounded-full shadow-lg transition-transform hover:scale-110 duration-300"
          aria-label="Contactar via WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;
