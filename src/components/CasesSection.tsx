
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const CaseCard = ({ 
  imageSrc, 
  description 
}: { 
  imageSrc: string; 
  description: string; 
}) => {
  return (
    <Card className="w-[200px] h-[200px] rounded-[10px] shadow-[5px_5px_10px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col">
      <div className="h-24 overflow-hidden">
        <img 
          src={imageSrc} 
          alt="Case study" 
          className="w-full h-full object-cover" 
        />
      </div>
      <CardContent className="p-4 flex-grow">
        <p className="text-xs">{description}</p>
      </CardContent>
    </Card>
  );
};

const CasesSection = () => {
  const cases = [
    {
      image: "/images/bmw-charging.jpg",
      description: "A convite da BMW, instalamos o carregador dos primeiros veículos elétricos vendidos ao consumidor final no Brasil, sendo o BMW i3 e BMW i8."
    },
    {
      image: "/images/audi-car.jpg",
      description: "Marcamos presença na concessionária Audi Morumbi, com dois carregadores DC 50 kW e na Audi Bremer Recife, com carregador DC 24 kW."
    },
    {
      image: "/images/airport-cars.jpg",
      description: "Instalamos dois carregadores Porsche, um no Catarina Aeroporto Executivo Internacional, e outro no Aeroporto Internacional de Guarulhos em São Paulo."
    }
  ];

  return (
    <section id="cases" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 animated-element">
          <h2 className="text-[36px] font-bold mb-4 text-[#00FF00]">
            Cases
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 animated-element">
          {cases.map((caseItem, index) => (
            <CaseCard 
              key={index}
              imageSrc={caseItem.image}
              description={caseItem.description}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center animated-element">
          <a 
            href="#about" 
            className="py-3 px-6 bg-[#800080] text-white rounded-md hover:bg-[#700070] transition-colors"
          >
            Conheça mais sobre a Hyper Carga
          </a>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
