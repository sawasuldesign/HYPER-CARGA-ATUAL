
import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Carregadores e Equipamentos",
      subtitle: "Alta tecnologia carregando seu veículo",
      image: "https://i.imgur.com/lsP0plf.png",
      href: "/servicos/negocios-frotas",
      alt: "Carregadores Hyper Carga"
    },
    {
      title: "Projetos, Instalação e Manutenção",
      subtitle: "Ciência energética sob medida",
      image: "https://i.imgur.com/ALH6KkC.png",
      href: "/servicos/projeto-instalacao",
      alt: "Instalação Hyper Carga"
    },
    {
      title: "Gestão de Pontos de Recarga",
      subtitle: "Tecnologia via apps Hyper Carga",
      image: "https://i.imgur.com/ywl1xih.jpeg",
      href: "/servicos/marca-personalizada",
      alt: "Gestão de recarga Hyper Carga"
    },
    {
      title: "Aluguel de Carregadores",
      subtitle: "Formando mentes da eletromobilidade",
      image: "https://i.imgur.com/ywl1xih.jpeg",
      href: "/servicos/aluguel",
      alt: "Aluguel de carregadores Hyper Carga"
    }
  ];

  return (
    <section id="services" className="bg-dark py-16 animated-element fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white">Nossos Serviços</h2>
        <p className="mt-4 text-lg text-white/70">Soluções completas para a mobilidade elétrica</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-xl border border-border/40 hover:border-hyper-blue/30 transition-all"
              style={{ height: "320px" }}
            >
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `linear-gradient(to bottom, rgba(7, 8, 10, 0.3), rgba(7, 8, 10, 0.8)), url(${service.image})` 
                }}
              ></div>
              
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.subtitle}</p>
                
                <a 
                  href={service.href}
                  className="inline-flex items-center bg-hyper-green text-white px-4 py-2 rounded-lg hover:bg-hyper-green/80 transition self-start"
                  aria-label={`Conheça mais sobre ${service.title}`}
                >
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Button */}
        <div className="fixed bottom-20 right-4 z-30">
          <a
            href="https://wa.me/555436983939"
            className="bg-hyper-green text-white p-4 rounded-full shadow-lg hover:bg-hyper-green/80 transition-all duration-300"
            aria-label="Contactar via WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
