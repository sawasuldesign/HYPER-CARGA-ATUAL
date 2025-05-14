
import React from "react";
import { ChevronRight } from "lucide-react";

const CardsSection = () => {
  const cards = [
    {
      title: "Motoristas",
      image: "/images/driver-charging.jpg",
      buttonText: "Acesse as Soluções",
      buttonUrl: "#",
    },
    {
      title: "Frotas e Empresas",
      image: "/images/fleet-parking.jpg",
      buttonText: "Acesse as Soluções",
      buttonUrl: "#",
    },
    {
      title: "Hyper Carga Store",
      image: "/images/charger-outdoor.jpg",
      buttonText: "Acesse nossa Loja",
      buttonUrl: "#",
    },
  ];

  return (
    <section className="py-16 bg-[#0000FF]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-[#0000FF]/80 rounded-[10px] overflow-hidden shadow-[5px_5px_10px_rgba(0,0,0,0.2)] border-2 border-[#00FF00] w-[250px] h-[200px] mx-auto animated-element"
            >
              <div className="relative h-24 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col h-[calc(200px-6rem)]">
                <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
                <div className="mt-auto">
                  <a 
                    href={card.buttonUrl} 
                    className="inline-flex items-center text-white bg-[#00FF00] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#00FF00]/90 transition-all duration-300"
                  >
                    {card.buttonText}
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
