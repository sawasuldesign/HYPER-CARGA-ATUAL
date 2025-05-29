
import React from "react";
import { CheckCircle, Zap, ShieldCheck, Factory } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Factory className="h-5 w-5" />,
      title: "Fabricação Nacional",
      description: "100% projetado e fabricado no Brasil, com componentes de alta qualidade."
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Alta Confiabilidade",
      description: "Engenharia especializada e componentes premium para maior durabilidade."
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Eficiência Energética",
      description: "Tecnologia avançada que otimiza o consumo e reduz perdas."
    }
  ];

  return (
    <section id="about" className="section bg-dark">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animated-element">
          <h2 className="section-title">Sobre a Hyper Carga</h2>
          <p className="section-subtitle">Nascemos com o propósito de acelerar a transição energética no Brasil</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8 animated-element">
            <p className="text-lg text-white/80">
              A <span className="font-semibold text-white">Hyper Carga</span> é uma empresa 100% brasileira especializada no desenvolvimento e fabricação de soluções de carregamento para veículos elétricos, combinando alta tecnologia, eficiência energética e compromisso ambiental.
            </p>
            
            <p className="text-lg text-white/80">
              Nossa missão é democratizar e expandir a infraestrutura de recarga para veículos elétricos no Brasil, contribuindo para um futuro mais sustentável e menos dependente de combustíveis fósseis.
            </p>

            <div className="space-y-4">
              {[
                "Tecnologia nacional de ponta",
                "Engenharia especializada",
                "Componentes premium",
                "Suporte técnico dedicado",
                "Compromisso com a sustentabilidade"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-hyper-green mr-2 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a href="#products" className="inline-flex items-center bg-hyper-green text-white px-6 py-3 rounded-lg hover:bg-hyper-green/90 transition-colors">
              Conheça nossos produtos
            </a>
          </div>

          <div className="relative animated-element">
            <div className="w-full md:w-1/2 aspect-video relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-20 rounded-lg"></div>
              <video
                className="w-full h-full rounded-lg object-cover"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Vídeo sobre a Hyper Carga"
              >
                <source src="https://imgur.com/IWYUnfj.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
            
            {/* Decorative pattern */}
            <div 
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg" 
              style={{ 
                backgroundImage: "radial-gradient(rgba(46, 183, 14, 0.2) 2px, transparent 2px)", 
                backgroundSize: "15px 15px" 
              }}
            ></div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-darker p-6 rounded-lg border border-border/40 hover:border-hyper-blue/30 transition-all animated-element">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-hyper-blue/10 text-hyper-blue mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
