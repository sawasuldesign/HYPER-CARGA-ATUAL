
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const ProductsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("carregadores");

  const products = {
    carregadores: [
      {
        id: 1,
        name: "Walbox 7,04/22 kW",
        image: "https://i.imgur.com/pGWHvrI.png",
        description: "Solução residencial compacta com tecnologia inteligente.",
        subDescription: "1x Tipo 2, OCPP 1.6 (opcional 7,04 kW), baixo consumo, suporte nacional.",
        whatsappLink: "https://wa.me/555436983939?text=Quero%20um%20orçamento%20do%20Walbox%207,04/22%20kW",
        alt: "Walbox 7,04/22 kW carregador residencial"
      },
      {
        id: 2,
        name: "Carregador DC 80 kW",
        image: "https://i.imgur.com/Xdv2UgQ.png", 
        description: "Carregador rápido DC para estações públicas.",
        subDescription: "2x CCS2, display 50\", baixo consumo, suporte nacional.",
        whatsappLink: "https://wa.me/555436983939?text=Quero%20um%20orçamento%20do%20Carregador%20DC%2080%20kW",
        alt: "Carregador DC 80 kW para estações públicas"
      },
      {
        id: 3,
        name: "Portátil Multicabos 7,04 kW Max",
        image: "https://i.imgur.com/1OXZrUZ.png",
        description: "Solução portátil para flexibilidade.",
        subDescription: "1x Tipo 2, ponteiras 10A/20A/32A, tomada 32A, bolsa.",
        whatsappLink: "https://wa.me/555436983939?text=Quero%20um%20orçamento%20do%20Portátil%20Multicabos%207,04%20kW",
        alt: "Portátil Multicabos 7,04 kW Max carregador"
      },
      {
        id: 4,
        name: "Carregador DC 40 kW",
        image: "https://i.imgur.com/IqYaNLl.png",
        description: "Estação dupla para empresas e condomínios.",
        subDescription: "1x CCS2, OCPP 1.6, baixo consumo, suporte nacional.",
        whatsappLink: "https://wa.me/555436983939?text=Quero%20um%20orçamento%20do%20Carregador%20DC%2040%20kW",
        alt: "Carregador DC 40 kW para empresas"
      }
    ],
    gestao: [
      {
        id: 5,
        name: "HyperControl Platform",
        image: "https://i.imgur.com/ywl1xih.jpeg",
        description: "Software de gerenciamento para controle total da sua infraestrutura de carregamento.",
        subDescription: "Monitoramento em tempo real, relatórios detalhados, gestão de usuários, integração de pagamentos.",
        whatsappLink: "https://wa.me/555436983939?text=Quero%20um%20orçamento%20do%20HyperControl%20Platform",
        alt: "HyperControl Platform software de gestão"
      }
    ]
  };

  const categories = [
    { id: "carregadores", label: "Carregadores" },
    { id: "gestao", label: "Sistemas de Gestão" },
  ];

  return (
    <section id="products" className="bg-darker py-16 animated-element fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white">Nossos Produtos</h2>
        <p className="mt-4 text-lg text-white/70">Soluções completas de recarga para todos os contextos</p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 mt-8">
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products[activeTab as keyof typeof products].map((product) => (
            <div key={product.id} className="bg-dark rounded-xl overflow-hidden border border-border/40 hover:border-hyper-blue/30 transition-all">
              <div className="h-60 bg-darker flex items-center justify-center p-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="object-contain h-full max-w-full transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{product.name}</h3>
                <p className="text-white/70 mb-2">{product.description}</p>
                <p className="text-white/60 text-sm mb-6">{product.subDescription}</p>
                
                <a
                  href={product.whatsappLink}
                  className="inline-flex items-center bg-hyper-blue text-white px-4 py-2 rounded-lg hover:bg-hyper-blue/80 transition"
                  aria-label={`Solicitar orçamento do ${product.name}`}
                >
                  Solicite um orçamento
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

export default ProductsSection;
