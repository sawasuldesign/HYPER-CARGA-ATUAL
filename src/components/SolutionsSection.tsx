
import React from "react";
import { ArrowRight } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Motoristas",
      image: "/images/driver-bg.jpg",
      href: "/solucoes/motoristas",
      cta: "Acesse as Soluções"
    },
    {
      title: "Frotas e Empresas",
      image: "/images/fleet-bg.jpg",
      href: "/solucoes/frotas",
      cta: "Acesse as Soluções"
    },
    {
      title: "Academy by Hyper Carga",
      image: "/images/academy-bg.jpg",
      href: "/cursos",
      cta: "Acesse os Cursos"
    },
    {
      title: "Hyper Carga Store",
      image: "/images/store-bg.jpg",
      href: "/loja",
      cta: "Acesse a nossa Loja"
    }
  ];

  return (
    <section id="solutions" className="section bg-dark">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 animated-element">
          <h2 className="section-title">Nossas Soluções</h2>
          <p className="section-subtitle">
            Descubra como a Hyper Carga está transformando a mobilidade elétrica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-xl border border-border/40 hover:border-hyper-blue/30 transition-all animated-element"
              style={{
                height: "320px"
              }}
            >
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `linear-gradient(to bottom, rgba(7, 8, 10, 0.3), rgba(7, 8, 10, 0.8)), url(${solution.image})` 
                }}
              ></div>
              
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-6">{solution.title}</h3>
                
                <a 
                  href={solution.href}
                  className="btn-secondary inline-flex items-center self-start"
                  aria-label={`${solution.cta} para ${solution.title}`}
                >
                  {solution.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
