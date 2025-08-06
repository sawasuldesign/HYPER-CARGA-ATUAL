
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("carregadores");

  const products = {
    carregadores: [
      {
        id: 1,
        name: "Walbox 7,04/22 kW",
        image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1754419845/wallbox_vrgozj.png",
        description: "Solução residencial compacta com tecnologia inteligente de carregamento eficiente.",
        features: ["1x Tipo 2", "OCPP 1.6 (Opcional na versão 7,04 kW)", "Baixo consumo em standby", "Suporte nacional"],
        whatsappText: "Quero%20um%20orçamento%20do%20Walbox%207,04/22%20kW"
      },
      {
        id: 2,
        name: "Carregador DC 80 kW",
        image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1754420072/dc1_ok4vm9.png",
        description: "Carregador rápido DC de alta potência, ideal para estações públicas e corredores elétricos.",
        features: ["2x CCS2", "Display 50″", "Baixo consumo em standby", "Suporte nacional"],
        whatsappText: "Quero%20um%20orçamento%20do%20Carregador%20DC%2080%20kW"
      },
      {
        id: 3,
        name: "Portátil Multicabos 7,04 kW Max",
        image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1754420066/portatil_jhvvlu.png",
        description: "As estações de recarga Portátil Multicabos AC são a solução perfeita para quem quer flexibilidade e confiabilidade. Carregue em qualquer lugar.",
        features: ["1x Tipo 2", "Ponteiras intercambiáveis de 10A, 20A e 32A", "Tomada 32A inclusa", "Bolsa de transporte"],
        whatsappText: "Quero%20um%20orçamento%20do%20Portátil%20Multicabos%207,04%20kW"
      },
      {
        id: 4,
        name: "Carregador DC 40 kW",
        image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1754420050/wall_dc_zedhtr.png",
        description: "Estação de carregamento dupla para empresas, condomínios e estabelecimentos comerciais.",
        features: ["1x CCS2", "OCPP 1.6", "Baixo consumo em standby", "Suporte nacional"],
        whatsappText: "Quero%20um%20orçamento%20do%20Carregador%20DC%2040%20kW"
      }
    ],
    instalacao: [
      {
        id: 5,
        name: "Solicitar Orçamento de Instalação",
        image: null,
        description: "Fale com especialistas que irão realizar um estudo de área para viabilizar a instalação do seu novo carregador",
        features: ["Orçamento", "Projeto", "Adequação", "Instalação"],
        whatsappText: "Quero%20um%20orçamento%20de%20instalação%20de%20carregador"
      }
    ]
  };

  const categories = [
    { id: "carregadores", label: "Carregadores" },
    { id: "instalacao", label: "Instalação" },
  ];

  const currentProducts = products[activeTab as keyof typeof products] || [];

  return (
    <section id="products" className="section bg-darker">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animated-element">
          <h2 className="section-title">Nossos Produtos</h2>
          <p className="section-subtitle">Soluções completas de recarga para todos os contextos</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animated-element">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === category.id
                  ? "bg-hyper-blue text-white"
                  : "bg-dark text-white/60 hover:bg-dark/80 hover:text-white"
              }`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid - Layout based on tab */}
        {activeTab === "carregadores" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentProducts.map((product) => (
              <div key={product.id} className="bg-dark rounded-xl overflow-hidden border border-border/40 hover:border-hyper-blue/30 transition-all animated-element">
                <div className="h-60 bg-darker flex items-center justify-center p-6 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain h-full max-w-full transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-white/70 mb-4">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-hyper-green mt-2 mr-2"></span>
                        <span className="text-sm text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={`https://wa.me/555436983939?text=${product.whatsappText}`}
                    className="inline-flex items-center bg-hyper-blue text-white px-4 py-2 rounded-lg hover:bg-hyper-blue/90 transition-colors w-full justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar orçamento +
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center">
            {currentProducts.map((product) => (
              <div key={product.id} className="bg-dark rounded-xl overflow-hidden border border-border/40 hover:border-hyper-blue/30 transition-all animated-element max-w-md w-full">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-white/70 mb-4">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-hyper-green mt-2 mr-2"></span>
                        <span className="text-sm text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={`https://wa.me/555436983939?text=${product.whatsappText}`}
                    className="inline-flex items-center bg-hyper-blue text-white px-4 py-2 rounded-lg hover:bg-hyper-blue/90 transition-colors w-full justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center animated-element">
          <a 
            href="https://wa.me/555436983939" 
            className="inline-flex items-center bg-hyper-blue text-white px-6 py-3 rounded-lg hover:bg-hyper-blue/90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale com um especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
