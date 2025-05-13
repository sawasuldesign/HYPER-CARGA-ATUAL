
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const SolutionCard = ({ 
  title, 
  imageSrc, 
  description 
}: { 
  title: string; 
  imageSrc: string; 
  description: string; 
}) => {
  return (
    <Card className="w-[200px] h-[200px] rounded-[10px] shadow-[5px_5px_10px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col">
      <CardHeader className="p-3 pb-0">
        <h3 className="font-bold text-sm">{title}</h3>
      </CardHeader>
      <CardContent className="p-3 pt-1 pb-1 flex-grow">
        <div className="h-20 overflow-hidden mb-2">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover rounded-md" 
          />
        </div>
        <p className="text-xs font-semibold">{description}</p>
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <a 
          href="#" 
          className="w-full py-1 flex justify-center items-center bg-[#00FF00] text-white rounded-md text-sm hover:bg-[#00DD00] transition-colors"
        >
          Acesse
        </a>
      </CardFooter>
    </Card>
  );
};

const HyperCargaSolutionsSection = () => {
  const solutions = [
    {
      title: "Carregadores e Equipamentos",
      image: "/images/car-charging.jpg",
      description: "ALTA TECNOLOGIA CARREGANDO SEU VEÍCULO"
    },
    {
      title: "Projetos, instalação e manutenção",
      image: "/images/technician.jpg",
      description: "EFICIÊNCIA ENERGÉTICA E FUNCIONAL SOB MEDIDA"
    },
    {
      title: "Gestão e Operação de Pontos de Recarga",
      image: "/images/charging-point.jpg",
      description: "TECNOLOGIA E INTEGRAÇÃO ATRAVÉS DA INTELIGÊNCIA E APPS HYPER CARGA"
    },
    {
      title: "Cursos",
      image: "/images/training.jpg",
      description: "FORMANDO OS NOVAS MENTES DA ELETROMOBILIDADE"
    }
  ];

  return (
    <section id="hc-solutions" className="section bg-dark text-white">
      <div className="container-custom">
        <div className="text-center mb-12 animated-element">
          <h2 className="text-[36px] font-bold mb-4 text-[#00FF00]">
            Soluções Hyper Carga
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center animated-element">
          {solutions.map((solution, index) => (
            <SolutionCard 
              key={index}
              title={solution.title}
              imageSrc={solution.image}
              description={solution.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HyperCargaSolutionsSection;
