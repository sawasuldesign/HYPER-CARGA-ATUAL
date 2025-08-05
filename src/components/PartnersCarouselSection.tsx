
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PartnersCarouselSection = () => {
  const partners = [
    { name: "Alfredo Jaconi", image: "https://i.imgur.com/aEwYFyN.png" },
    { name: "Allos", image: "https://i.imgur.com/aleJWhs.png" },
    { name: "Quinta São Luiz", image: "https://i.imgur.com/XbYBlzR.png" },
    { name: "Villagio", image: "https://i.imgur.com/Np2xtnG.png" },
    { name: "UCS", image: "https://i.imgur.com/AjVi8aR.png" },
    { name: "Gramado Parks", image: "https://i.imgur.com/wC3kXoM.png" },
    { name: "Beira Rio", image: "https://i.imgur.com/UiYWtPd.png" },
    { name: "Recreio da Juventude", image: "https://i.imgur.com/vWAQt3J.png" },
    { name: "Babymania", image: "https://i.imgur.com/sDifmGb.png" },
    { name: "Arena", image: "https://i.imgur.com/SEfZzdh.png" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <section id="partners" className="section bg-dark">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animated-element">
          <h2 className="section-title">Quem Confia na Hyper Carga</h2>
          <p className="section-subtitle">
            Conheça nossos parceiros, onde a nova história da eletromobilidade no Brasil está sendo construída
          </p>
        </div>

        <div className="relative animated-element">
          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-0 md:-left-12 flex items-center">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-hyper-blue/10 hover:bg-hyper-blue/20 text-hyper-blue transition-colors"
              aria-label="Parceiros anteriores"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 2)}%)` }}
            >
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-darker p-6 rounded-xl border border-border/40 flex items-center justify-center h-40">
                    <img 
                      src={partner.image} 
                      alt={`Logotipo da ${partner.name}`} 
                      className="max-h-24 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 right-0 md:-right-12 flex items-center">
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-hyper-blue/10 hover:bg-hyper-blue/20 text-hyper-blue transition-colors"
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
