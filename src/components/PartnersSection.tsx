
import React from "react";

const PartnersSection = () => {
  return (
    <section className="py-16 bg-[#0000FF]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto animated-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">QUEM CONFIA NA HYPER CARGA</h2>
          <p className="text-lg text-white mb-12">
            Conheça nossos parceiros, onde a nova história da eletromobilidade no Brasil está sendo construída.
          </p>
          
          <div className="flex justify-center items-center space-x-6">
            <div className="w-[100px] p-2 bg-[#0000FF] border-2 border-[#00FF00] rounded-md shadow-md">
              <img src="/images/audi-logo.png" alt="Audi" className="w-full h-auto" />
            </div>
            <div className="w-[100px] p-2 bg-[#0000FF] border-2 border-[#00FF00] rounded-md shadow-md">
              <img src="/images/bmw-logo.png" alt="BMW" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
