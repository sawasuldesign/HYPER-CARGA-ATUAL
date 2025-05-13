
import React from "react";
import { ChevronRight } from "lucide-react";

const PartnerSection = () => {
  return (
    <section 
      id="partner" 
      className="py-20 bg-dark relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(7, 8, 10, 0.85), rgba(7, 8, 10, 0.95)), url('/images/partner-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center animated-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Seja um parceiro Hyper Carga</h2>
          <p className="text-lg text-white/80 mb-8">
            Oferecemos parcerias para revendedores, instaladores e estabelecimentos 
            que desejam expandir a infraestrutura de recarga para veículos elétricos.
          </p>
          <a 
            href="#contact" 
            className="btn-primary inline-flex items-center"
          >
            Quero ser um parceiro
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
