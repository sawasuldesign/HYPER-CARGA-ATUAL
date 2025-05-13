
import React from "react";

const PartnersSection = () => {
  return (
    <section id="partners" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 animated-element">
          <h2 className="text-[36px] font-bold mb-4 text-[#800080]">
            QUEM CONFIA NA HYPER CARGA
          </h2>
          <p className="text-[18px] text-black max-w-3xl mx-auto">
            Conheça nossos parceiros, onde a nova história da eletromobilidade no Brasil está sendo construída.
          </p>
        </div>
        
        <div className="flex justify-center items-center space-x-20 animated-element">
          <img 
            src="/images/audi-logo.png" 
            alt="Audi Logo" 
            className="w-[100px] h-auto" 
          />
          <img 
            src="/images/bmw-logo.png" 
            alt="BMW Logo" 
            className="w-[100px] h-auto" 
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
