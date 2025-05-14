
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const MediaCarouselSection = () => {
  const mediaItems = [
    {
      image: "/images/media-building.jpg",
      title: "Brasileira recebe fundo americano - Novo Momento - Resumo Cast.",
      href: "/materia-1"
    },
    {
      image: "/images/media-porsche.jpg",
      title: "A Hyper Carga, mobilitech que desenvolve tecnologias inteligentes em mobilidade elétrica, recebeu um aporte de R$22 milhões de um Fundo americano. Startup.",
      href: "/materia-2"
    },
    {
      image: "/images/media-futuristic.jpg",
      title: "Empresa, que passa a ter um valuation de R$88 milhões, pretende lançar mais de 70 inovações no mercado brasileiro até 2025. Bem-Vindos - The Future is Ours.",
      href: "/materia-3"
    },
    {
      image: "/images/media-parking.jpg",
      title: "Hyper Carga expande rede de carregadores em parceria com grandes shoppings no Brasil. Revista Mobilidade.",
      href: "/materia-4"
    },
    {
      image: "/images/media-event.jpg",
      title: "Hyper Carga participa de evento global de eletromobilidade em São Paulo, apresentando novas tecnologias. Tech Insider.",
      href: "/materia-5"
    },
    {
      image: "/images/media-highway.jpg",
      title: "Hyper Carga inicia projeto de corredores elétricos em rodovias brasileiras, conectando cidades. Jornal Sustentável.",
      href: "/materia-6"
    },
    {
      image: "/images/media-academy.jpg",
      title: "Academy by Hyper Carga forma primeira turma de especialistas em eletromobilidade no Brasil. Educação Hoje.",
      href: "/materia-7"
    },
    {
      image: "/images/media-urban.jpg",
      title: "Hyper Carga é destaque em programa de TV sobre o futuro da mobilidade sustentável. Rede Verde.",
      href: "/materia-8"
    },
    {
      image: "/images/media-conference.jpg",
      title: "CEO da Hyper Carga fala sobre o impacto da eletromobilidade no Brasil em conferência internacional. Global Tech News.",
      href: "/materia-9"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const itemsPerView = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerView >= mediaItems.length ? 0 : prevIndex + itemsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerView < 0 ? Math.max(0, mediaItems.length - itemsPerView) : prevIndex - itemsPerView
    );
  };

  useEffect(() => {
    if (!isHovering) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isHovering, currentIndex]);

  return (
    <section id="media" className="section bg-dark">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animated-element">
          <h2 className="section-title">A Hyper Carga na Mídia</h2>
          <p className="section-subtitle">Conheça e siga onde estamos aparecendo</p>
        </div>

        <div 
          className="relative animated-element" 
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-0 md:-left-12 flex items-center z-10">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-hyper-blue/10 hover:bg-hyper-blue/20 text-hyper-blue transition-colors"
              aria-label="Ver matérias anteriores"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {mediaItems.map((item, index) => (
                <div 
                  key={index} 
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="h-80 rounded-xl overflow-hidden relative group">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ 
                        backgroundImage: `linear-gradient(rgba(7, 8, 10, 0.5), rgba(7, 8, 10, 0.8)), url(${item.image})` 
                      }}
                    ></div>
                    
                    <div className="relative h-full flex flex-col justify-between p-6">
                      <div className="text-sm text-white/60 font-medium">
                        <span>Hyper Carga na Mídia</span>
                      </div>
                      
                      <div>
                        <p className="text-white font-medium mb-6 line-clamp-4">
                          {item.title}
                        </p>
                        
                        <a 
                          href={item.href}
                          className="btn-primary inline-flex items-center"
                          aria-label={`Acesse a matéria sobre: ${item.title}`}
                        >
                          Acesse a Matéria
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 right-0 md:-right-12 flex items-center z-10">
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-hyper-blue/10 hover:bg-hyper-blue/20 text-hyper-blue transition-colors"
              aria-label="Ver próximas matérias"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCarouselSection;
