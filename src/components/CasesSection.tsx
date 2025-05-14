
import React from "react";
import { ArrowRight } from "lucide-react";

const CasesSection = () => {
  const cases = [
    {
      image: "/images/case-bmw.jpg",
      text: "A convite da BMW, instalamos os carregadores dos primeiros veículos elétricos vendidos ao consumidor final no Brasil, incluindo os modelos BMW i3 e BMW i8."
    },
    {
      image: "/images/case-audi.jpg",
      text: "Marcamos presença na concessionária Audi Morumbi, com dois carregadores DC 50 kW, e na Audi Bremer Recife, com carregador DC 24 kW."
    },
    {
      image: "/images/case-airport.jpg",
      text: "Instalamos carregadores de alta potência em dois aeroportos: um no Catarinense Aeroporto Executivo Internacional e outro no Aeroporto Internacional de Guarulhos em São Paulo."
    },
    {
      image: "/images/case-generic.jpg",
      text: "Implementamos uma rede de carregadores para frotas corporativas em São Paulo, com integração ao HyperCharge App para gestão eficiente."
    },
  ];

  return (
    <section id="cases" className="section bg-dark">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animated-element">
          <h2 className="section-title">Cases</h2>
          <p className="section-subtitle">Conheça nossos projetos de sucesso</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, index) => (
            <div 
              key={index} 
              className="bg-darker rounded-xl overflow-hidden border border-border/40 animated-element"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={`Case Hyper Carga ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-white/80 text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animated-element">
          <a 
            href="/sobre" 
            className="btn-primary inline-flex items-center"
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
