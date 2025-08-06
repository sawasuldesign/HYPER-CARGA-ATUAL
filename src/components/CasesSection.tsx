
import React from "react";
import { ArrowRight } from "lucide-react";

const CasesSection = () => {
  const cases = [
    {
      title: "Recreio da Juventude",
      image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1754421704/case_site_ju_efrbwi.png",
      service: "Instalação de carregadores elétricos para veículos",
      description: "Realizamos a instalação de estações de recarga no clube, oferecendo praticidade e comodidade para associados e visitantes."
    },
    {
      title: "Villagio Iguatemi",
      image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1754421700/villagio_site_case_krkzez.png",
      service: "Instalação de carregadores elétricos em shopping center",
      description: "Instalamos pontos de recarga em áreas estratégicas do estacionamento, agregando valor à experiência dos clientes e fortalecendo o compromisso do shopping com a sustentabilidade."
    },
    {
      title: "Quinta São Luiz",
      image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1754421703/case_quinta_site_vdv5cc.png",
      service: "Instalação de carregador elétrico para clientes",
      description: "Levamos mobilidade elétrica ao Quinta São Luiz, espaço que reúne gastronomia, entretenimento e eventos em Caxias do Sul. Instalamos estações de recarga para veículos elétricos, oferecendo mais comodidade e sustentabilidade aos frequentadores e visitantes desse polo de lazer e cultura."
    },
    {
      title: "Allos | Shopping Praça",
      image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1754421714/case_allos_site_wled7r.png",
      service: "Instalação de carregadores elétricos em shopping center",
      description: "Realizamos a instalação de carregadores elétricos no Shopping Praça, administrado pela Allos, oferecendo mais infraestrutura para veículos elétricos em um dos principais centros de compras e convivência da região."
    }
  ];

  return (
    <section id="cta" className="section bg-dark">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animated-element">
          <h2 className="text-3xl font-bold text-white">Cases</h2>
          <p className="text-lg text-white/70">Conheça nossos projetos de sucesso</p>
        </div>

        <div className="space-y-8">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.title}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center bg-darker rounded-xl border border-border/40 hover:border-hyper-blue/30 transition-all p-6 animated-element`}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "mr-0 md:mr-6" : "ml-0 md:ml-6"}`}>
                <img
                  src={caseItem.image}
                  alt={`Imagem do case ${caseItem.title}`}
                  className="w-full h-[300px] object-cover rounded-xl"
                />
              </div>
              
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <h3 className="text-xl font-bold text-white mb-2">{caseItem.title}</h3>
                <p className="text-white/70 font-bold mb-2">{caseItem.service}</p>
                <p className="text-white/70 flex items-start">
                  <span className="h-2 w-2 bg-hyper-green rounded-full inline-block mr-2 mt-2 flex-shrink-0"></span>
                  {caseItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animated-element">
          <a 
            href="https://wa.me/5436983939" 
            className="inline-flex items-center bg-hyper-blue text-white px-6 py-3 rounded-lg hover:bg-hyper-blue/80 transition-colors"
            aria-label="Conheça mais sobre a Hyper Carga"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conheça mais sobre a Hyper Carga
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
