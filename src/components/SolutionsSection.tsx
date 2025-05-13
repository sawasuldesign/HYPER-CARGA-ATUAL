
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const SolutionCard = ({ 
  title, 
  imageSrc, 
  buttonText 
}: { 
  title: string; 
  imageSrc: string; 
  buttonText: string; 
}) => {
  return (
    <Card className="w-[250px] h-[200px] rounded-[10px] shadow-[5px_5px_10px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col">
      <div className="h-24 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
      </div>
      <CardContent className="p-4 flex-grow">
        <h3 className="font-bold text-lg">{title}</h3>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <a 
          href="#" 
          className="w-full py-2 flex justify-center items-center bg-[#00FF00] text-white rounded-md hover:bg-[#00DD00] transition-colors"
        >
          {buttonText}
          <ChevronRight className="h-4 w-4 ml-1" />
        </a>
      </CardFooter>
    </Card>
  );
};

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Motoristas",
      image: "/images/driver-charging.jpg",
      buttonText: "Acesse as Soluções"
    },
    {
      title: "Frotas e Empresas",
      image: "/images/fleet-charging.jpg",
      buttonText: "Acesse as Soluções"
    },
    {
      title: "Hyper Carga Store",
      image: "/images/charger-outdoor.jpg",
      buttonText: "Acesse nossa Loja"
    }
  ];

  return (
    <section id="solutions" className="section bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animated-element">
            {solutions.map((solution, index) => (
              <SolutionCard 
                key={index}
                title={solution.title}
                imageSrc={solution.image}
                buttonText={solution.buttonText}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
