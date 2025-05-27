
import React from "react";
import { Zap } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="cta" className="py-10 md:py-16 bg-hyper-dark-green">
      <div className="container-custom text-center animated-element">
        <h2 className="text-white text-2xl font-bold mb-2">
          Encontre a solução perfeita para carregar seus veículos elétricos!
        </h2>
        
        <p className="text-white text-base mt-2 mb-5">
          Nossa equipe está pronta para ajudar você a escolher o modelo ideal.
        </p>
        
        <a 
          href="https://wa.me/555436983939?text=Quero%20falar%20com%20um%20especialista"
          className="bg-hyper-green hover:bg-hyper-green/80 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-300 focus:outline-none inline-flex items-center mt-5"
          aria-label="Contactar especialista via WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Zap className="mr-2 h-5 w-5" />
          Fale com um especialista ⚡
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
