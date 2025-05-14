
import React from "react";
import { ChevronRight } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Carregadores e Equipamentos",
      image: "/images/ev-charging.jpg",
      description: "ALTA TECNOLOGIA CARREGANDO SEU VEÍCULO",
      url: "#",
    },
    {
      title: "Projetos, instalação e manutenção",
      image: "/images/technician.jpg",
      description: "EFICIÊNCIA ENERGÉTICA E FUNCIONAL SOB MEDIDA",
      url: "#",
    },
    {
      title: "Gestão e Operação de Pontos de Recarga",
      image: "/images/charging-point.jpg",
      description: "TECNOLOGIA E INTEGRAÇÃO ATRAVÉS DA INTELIGÊNCIA E APPS HYPER CARGA",
      url: "#",
    },
    {
      title: "Cursos",
      image: "/images/training.jpg",
      description: "FORMANDO OS NOVAS MENTES DA ELETROMOBILIDADE",
      url: "#",
    },
  ];

  return (
    <section className="py-16 bg-dark">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#00FF00] text-center">Soluções Hyper Carga</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-dark rounded-[10px] overflow-hidden shadow-[5px_5px_10px_rgba(0,0,0,0.2)] border-2 border-[#00FF00] w-[200px] h-[200px] mx-auto animated-element"
            >
              <div className="relative h-24 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col">
                <h3 className="text-lg font-semibold mb-1 text-white">{solution.title}</h3>
                <p className="text-xs text-white mb-3">{solution.description}</p>
                <div className="mt-auto">
                  <a
                    href={solution.url}
                    className="inline-flex items-center text-white bg-[#00FF00] px-4 py-1 rounded-md text-sm font-medium hover:bg-[#00FF00]/90 transition-all duration-300"
                  >
                    Acesse
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
