
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const MediaCard = ({ 
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
          alt="Media mention" 
          className="w-full h-full object-cover" 
        />
      </div>
      <CardContent className="p-4 flex-grow">
        <p className="text-xs">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <a 
          href="#" 
          className="w-full py-1 flex justify-center items-center bg-[#800080] text-white rounded-md text-sm hover:bg-[#700070] transition-colors"
        >
          Acesse a matéria
        </a>
      </CardFooter>
    </Card>
  );
};

const MediaSection = () => {
  const mediaItems = [
    {
      image: "/images/modern-building.jpg",
      description: "Brasileira recebe R$22 milhões de fundo americano – Novo Momento"
    },
    {
      image: "/images/porsche-car.jpg",
      description: "A Hyper Carga, mobilitytech que desenvolve tecnologias inteligentes em mobilidade elétrica, recebe um aporte de R$22 milhões de um fundo americano."
    },
    {
      image: "/images/parking-ev.jpg",
      description: "Empresa, que passa a ter um valuation de R$88 milhões, pretende lançar mais 70 inovadores no mercado brasileiro até 2025."
    }
  ];

  return (
    <section id="media" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 animated-element">
          <h2 className="text-[36px] font-bold mb-4 text-[#800080]">
            A Hyper Carga na Mídia
          </h2>
          <p className="text-[18px] text-black max-w-3xl mx-auto">
            Conheça e siga onde estamos aparecendo.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 animated-element">
          {mediaItems.map((item, index) => (
            <MediaCard 
              key={index}
              imageSrc={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
