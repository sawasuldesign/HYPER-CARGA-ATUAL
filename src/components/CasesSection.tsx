
import React from "react";

const CasesSection = () => {
  const cases = [
    {
      image: "/images/bmw-charging.jpg",
      description: "A convite da BMW, instalamos o carregador dos primeiros veículos elétricos vendidos ao consumidor final no Brasil, sendo o BMW i3 e BMW i8.",
    },
    {
      image: "/images/audi-car.jpg",
      description: "Marcamos presença na concessionária Audi Morumbi, com dois carregadores DC 50 kW e na Audi Bremer Recife, com carregador DC 24 kW.",
    },
    {
      image: "/images/airport-cars.jpg",
      description: "Instalamos dois carregadores Porsche, um no Catarina Aeroporto Executivo Internacional, e outro no Aeroporto Internacional de Guarulhos em São Paulo.",
    }
  ];

  return (
    <section className="py-16 bg-dark">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#00FF00] text-center">Cases</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-dark rounded-[10px] overflow-hidden shadow-[5px_5px_10px_rgba(0,0,0,0.2)] border-2 border-[#00FF00] w-[200px] h-[200px] mx-auto animated-element"
            >
              <div className="relative h-24 overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={`Case ${index+1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-white">{caseItem.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="#about" className="inline-flex items-center justify-center text-white bg-[#800080] px-6 py-3 rounded-md text-sm font-medium hover:bg-[#800080]/90 transition-all duration-300">
            Conheça mais sobre a Hyper Carga
          </a>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
