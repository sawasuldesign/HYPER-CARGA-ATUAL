
import React from "react";
import { ChevronRight, ZapIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-[#0000FF] overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to right bottom, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0.95))",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-hyper-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-hyper-green/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
      </div>

      <div className="container-custom relative z-10 mt-16 md:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animated-element">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00FF00]/10 text-white text-sm font-medium">
              <ZapIcon className="h-4 w-4 mr-2 text-[#00FF00]" />
              <span>Energia brasileira, inovação sustentável</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Soluções de <span className="text-[#00FF00]">carregamento</span> para o <span className="text-[#00FF00]">futuro</span> da mobilidade
            </h1>
            
            <p className="text-lg text-white md:pr-10">
              Desenvolvemos e fabricamos no Brasil carregadores para veículos elétricos
              com alta tecnologia, eficiência energética e compromisso ambiental.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="btn-primary bg-[#00FF00] text-white py-3 px-6 rounded-md inline-flex items-center hover:bg-[#00FF00]/90 transition-all duration-300">
                Conheça nossos produtos
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#about" className="btn-outline border border-white text-white py-3 px-6 rounded-md inline-flex items-center hover:bg-white/10 transition-all duration-300">
                Saiba mais
              </a>
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00FF00] text-white text-xs">100%</span>
              </div>
              <p className="text-sm text-white">
                Tecnologia <span className="font-semibold">100% brasileira</span> com excelência internacional
              </p>
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px] animated-element">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[80%] mx-auto">
                <img 
                  src="/images/charging-station.png" 
                  alt="Carregador HyperCarga para veículos elétricos" 
                  className="relative z-10 w-[400px] h-[300px] object-cover rounded-[10px] border-2 border-[#00FF00] shadow-[5px_5px_10px_rgba(0,0,0,0.2)] animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="text-white/50 hover:text-white transition-colors p-2"
          aria-label="Scroll para saber mais"
        >
          <div className="h-10 w-6 rounded-full border-2 border-white/20 flex justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce mt-2"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
