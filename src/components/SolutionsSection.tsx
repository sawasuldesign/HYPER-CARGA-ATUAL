
import React from "react";
import { ArrowRight } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Motoristas",
      image: "https://i.imgur.com/1OXZrUZ.png",
      href: "/solucoes/motoristas",
      cta: "Acesse as Soluções",
      alt: "Soluções para motoristas"
    },
    {
      title: "Frotas e Empresas",
      image: "https://i.imgur.com/IQWDgYh.png",
      href: "/solucoes/frotas",
      cta: "Acesse as Soluções",
      alt: "Soluções para frotas"
    },
    {
      title: "Academy by Hyper Carga",
      image: "/images/academy-bg.jpg",
      href: "/cursos",
      cta: "Acesse os Cursos",
      alt: "Academy Hyper Carga"
    },
    {
      title: "Hyper Carga Store",
      image: "https://i.imgur.com/AFisAN6.png",
      href: "/loja",
      cta: "Acesse a nossa Loja",
      alt: "Loja Hyper Carga"
    }
  ];

  return (
    <section id="solutions" className="section bg-dark">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 animated-element">
          <h2 className="text-white text-3xl font-bold mb-2">Nossas Soluções</h2>
          <p className="text-white/70">
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
                  className="bg-hyper-green hover:bg-hyper-green/80 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 focus:outline-none inline-flex items-center self-start"
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
