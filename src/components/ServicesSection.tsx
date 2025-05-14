
import React from "react";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Carregadores e Equipamentos",
      subtitle: "Alta tecnologia carregando seu veículo",
      image: "/images/chargers-bg.jpg",
      href: "/servicos/carregadores"
    },
    {
      title: "Projetos, Instalação e Manutenção",
      subtitle: "Ciência energética e funcional sob medida",
      image: "/images/installation-bg.jpg",
      href: "/servicos/instalacao"
    },
    {
      title: "Gestão e Operação de Pontos de Recarga",
      subtitle: "Tecnologia e integração através da inteligência e apps Hyper Carga",
      image: "/images/management-bg.jpg",
      href: "/servicos/gestao"
    },
    {
      title: "Cursos",
      subtitle: "Formando as novas mentes da eletromobilidade",
      image: "/images/courses-bg.jpg",
      href: "/cursos"
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
                <p className="text-white/70 mb-6">{service.subtitle}</p>
                
                <a 
                  href={service.href}
                  className="btn-secondary inline-flex items-center self-start"
                  aria-label={`Conheça mais sobre ${service.title}`}
                >
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
