
import React from "react";
import { ArrowRight } from "lucide-react";

const CasesSection = () => {
  const cases = [
    {
      id: 1,
      image: "https://i.imgur.com/pPEYqS7.png",
      service: "Instalação de carregadores elétricos para veículos",
      description: "Instalação de estações de recarga no clube, oferecendo praticidade e comodidade.",
      title: "Recreio da Juventude",
      position: "left",
      alt: "Case Recreio da Juventude"
    },
    {
      id: 2,
      image: "https://i.imgur.com/uiDMopa.png",
      service: "Instalação de carregadores elétricos em shopping center",
      description: "Pontos de recarga em estacionamentos, agregando valor e sustentabilidade.",
      title: "Villagio Iguatemi",
      position: "right",
      alt: "Case Villagio Iguatemi"
    },
    {
      id: 3,
      image: "https://i.imgur.com/jo9aYl1.png",
      service: "Instalação de carregador elétrico para clientes",
      description: "Mobilidade elétrica no espaço de gastronomia e eventos em Caxias do Sul.",
      title: "Quinta São Luiz",
      position: "left",
      alt: "Case Quinta São Luiz"
    },
    {
      id: 4,
      image: "https://i.imgur.com/NknfRsf.png",
      service: "Instalação de carregadores elétricos em shopping center",
      description: "Carregadores no Shopping Praça, ampliando infraestrutura elétrica.",
      title: "Allos | Shopping Praça",
      position: "right",
      alt: "Case Allos Shopping Praça"
    }
  ];

  return (
    <section id="cases" className="section bg-dark">
      <div className="container-custom">
        <div className="text-center mb-16 animated-element">
          <h2 className="text-3xl font-bold text-hyper-green mb-8">Cases</h2>
        </div>

        <div className="space-y-8">
          {cases.map((caseItem) => (
            <div 
              key={caseItem.id} 
              className={`flex flex-col md:flex-row items-center gap-8 animated-element ${
                caseItem.position === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`w-full md:w-1/2 ${caseItem.position === 'right' ? 'md:ml-6' : 'md:mr-6'}`}>
                <img 
                  src={caseItem.image} 
                  alt={caseItem.alt}
                  className="w-full max-w-[600px] h-[600px] object-cover rounded-xl mx-auto"
                />
              </div>
              
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-white">{caseItem.title}</h3>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-hyper-green mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-white font-medium">{caseItem.service}</p>
                    <p className="text-white/70 mt-2">{caseItem.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animated-element">
          <a 
            href="#about" 
            className="bg-hyper-blue hover:bg-hyper-blue/80 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 focus:outline-none inline-flex items-center"
            aria-label="Conheça mais sobre a Hyper Carga"
          >
            Conheça mais sobre a Hyper Carga
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
