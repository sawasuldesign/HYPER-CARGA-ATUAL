
import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const MediaSection = () => {
  const mediaItems = [
    {
      image: "/images/modern-building.jpg",
      title: "Brasileira recebe R$22 milhões de fundo americano – Novo Momento",
      url: "#",
    },
    {
      image: "/images/porsche-car.jpg",
      title: "A Hyper Carga, mobilitytech que desenvolve tecnologias inteligentes em mobilidade elétrica, recebe um aporte de R$22 milhões de um fundo americano.",
      url: "#",
    },
    {
      image: "/images/ev-parking.jpg",
      title: "Empresa, que passa a ter um valuation de R$88 milhões, pretende lançar mais 70 inovadores no mercado brasileiro até 2025.",
      url: "#",
    },
    {
      image: "/images/office-team.jpg",
      title: "Hyper Carga expande operações com nova fábrica em São Paulo – Revista Energia",
      url: "#",
    },
    {
      image: "/images/tech-event.jpg",
      title: "Startup brasileira é destaque em feira internacional de mobilidade elétrica – TechBrasil",
      url: "#",
    },
    {
      image: "/images/charger-in-use.jpg",
      title: "Hyper Carga planeja dobrar pontos de recarga até 2026 – Mobilidade Hoje",
      url: "#",
    }
  ];

  return (
    <section className="py-16 bg-[#0000FF]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 animated-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">A Hyper Carga na Mídia</h2>
          <p className="text-lg text-white mb-8">
            Conheça e siga onde estamos aparecendo.
          </p>
        </div>
        
        <Carousel className="mx-auto max-w-5xl" opts={{ loop: true, align: "start" }}>
          <CarouselContent>
            {mediaItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                <div className="bg-dark rounded-[10px] overflow-hidden shadow-[5px_5px_10px_rgba(0,0,0,0.2)] border-2 border-[#00FF00] w-[200px] h-[200px] mx-auto animated-element">
                  <div className="relative h-24 overflow-hidden">
                    <img
                      src={item.image}
                      alt={`Media ${index+1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col h-[calc(200px-6rem)]">
                    <p className="text-sm text-white mb-3 line-clamp-2">{item.title}</p>
                    <div className="mt-auto">
                      <a
                        href={item.url}
                        className="inline-flex items-center text-white bg-[#800080] px-4 py-1 rounded-md text-sm font-medium hover:bg-[#800080]/90 transition-all duration-300"
                      >
                        Acesse a matéria
                      </a>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static translate-y-0 left-0 right-auto mx-2" />
            <CarouselNext className="relative static translate-y-0 right-0 left-auto mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default MediaSection;
