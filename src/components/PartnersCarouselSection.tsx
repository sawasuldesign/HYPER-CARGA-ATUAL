
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PartnersCarouselSection = () => {
  const partners = [
    { name: "Parceiro 1", image: "https://i.imgur.com/3fjGWLW.png", alt: "Parceiro 1" },
    { name: "Parceiro 2", image: "https://i.imgur.com/bj7IthR.png", alt: "Parceiro 2" },
    { name: "Parceiro 3", image: "https://i.imgur.com/hgxhBlL.png", alt: "Parceiro 3" },
    { name: "Parceiro 4", image: "https://i.imgur.com/Ywhtqy9.png", alt: "Parceiro 4" },
    { name: "Parceiro 5", image: "https://i.imgur.com/ywaOxNO.png", alt: "Parceiro 5" },
    { name: "Parceiro 6", image: "https://i.imgur.com/2bGANR0.png", alt: "Parceiro 6" },
    { name: "Parceiro 7", image: "https://i.imgur.com/H7uIix1.png", alt: "Parceiro 7" },
    { name: "Parceiro 8", image: "https://i.imgur.com/V93MNWN.png", alt: "Parceiro 8" },
    { name: "Parceiro 9", image: "https://i.imgur.com/O06eF81.png", alt: "Parceiro 9" },
    { name: "Parceiro 10", image: "https://i.imgur.com/LX3OTFF.png", alt: "Parceiro 10" },
    { name: "Parceiro 11", image: "https://i.imgur.com/QSS4YKP.png", alt: "Parceiro 11" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 2 >= partners.length ? 0 : prevIndex + 2
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 2 < 0 ? Math.max(0, partners.length - 2) : prevIndex - 2
    );
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <section id="partners" className="section bg-dark">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animated-element">
          <h2 className="text-white text-3xl font-bold mb-2">Quem Confia na Hyper Carga</h2>
          <p className="text-white/70">
            Conheça nossos parceiros
          </p>
        </div>

        <div 
          className="relative animated-element"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-0 md:-left-12 flex items-center z-10">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-hyper-blue/10 hover:bg-hyper-blue/20 text-hyper-blue hover:text-hyper-blue/80 transition-colors"
              aria-label="Parceiros anteriores"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${(currentIndex / 2) * 100}%)` }}
            >
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="w-1/2 flex-shrink-0 px-4"
                >
                  <div className="bg-darker p-6 rounded-xl border border-border/40 flex items-center justify-center h-40">
                    <img 
                      src={partner.image} 
                      alt={partner.alt} 
                      className="max-h-24 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 right-0 md:-right-12 flex items-center z-10">
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-hyper-blue/10 hover:bg-hyper-blue/20 text-hyper-blue hover:text-hyper-blue/80 transition-colors"
              aria-label="Próximos parceiros"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarouselSection;
