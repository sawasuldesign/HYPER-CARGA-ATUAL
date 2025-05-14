
import React, { useState } from "react";
import { Download, ChevronRight } from "lucide-react";

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("carregadores");

  const products = {
    carregadores: [
      {
        id: 1,
        name: "HyperCharge Pro Max",
        image: "/images/product-1.png",
        description: "Carregador rápido DC de alta potência, ideal para estações públicas e corredores elétricos.",
        features: ["150kW de potência", "Conectores CCS e CHAdeMO", "Display touchscreen 15\"", "Pagamento integrado"],
      },
      {
        id: 2,
        name: "HyperWall Home",
        image: "/images/product-2.png",
        description: "Solução residencial compacta com tecnologia inteligente de carregamento eficiente.",
        features: ["22kW de potência", "Conector Tipo 2", "Wi-Fi e Bluetooth", "Programação inteligente"],
      },
      {
        id: 3,
        name: "HyperStation Business",
        image: "/images/product-3.png",
        description: "Estação de carregamento dupla para empresas, condomínios e estabelecimentos comerciais.",
        features: ["2x 22kW de potência", "Conectores Tipo 2", "Gerenciamento de usuários", "Balanceamento de carga"],
      }
    ],
    gestao: [
      {
        id: 4,
        name: "Projetos de Instalação",
        image: "/images/installation.png",
        description: "Projetos personalizados para instalação de infraestrutura de recarga em diferentes contextos.",
        features: ["Análise de viabilidade", "Dimensionamento elétrico", "Instalação profissional", "Comissionamento"],
      }
    ]
  };

  const categories = [
    { id: "carregadores", label: "Carregadores" },
    { id: "gestao", label: "Projetos de Instalação" },
  ];

  return (
    <section id="products" className="section bg-[#0000FF]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animated-element">
          <h2 className="section-title text-white">Nossos Produtos</h2>
          <p className="section-subtitle text-white">Soluções completas de recarga para todos os contextos</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animated-element">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === category.id
                  ? "bg-[#00FF00] text-white"
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
            <div key={product.id} className="bg-dark rounded-xl overflow-hidden border-2 border-[#00FF00] hover:border-[#00FF00] transition-all animated-element">
              <div className="h-60 bg-darker flex items-center justify-center p-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain h-full max-w-full transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{product.name}</h3>
                <p className="text-white mb-4">{product.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] mt-2 mr-2"></span>
                      <span className="text-sm text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-between items-center">
                  <a
                    href="#contact"
                    className="text-[#0000FF] bg-white hover:text-[#00FF00] text-sm font-medium flex items-center transition-colors px-3 py-1 rounded"
                  >
                    Solicitar orçamento
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                  
                  <button
                    className="flex items-center text-sm text-white hover:text-[#00FF00] transition-colors"
                  >
                    <Download className="mr-1 h-4 w-4 text-[#00FF00]" />
                    Ficha técnica
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animated-element">
          <a href="#contact" className="btn-primary bg-[#00FF00] text-white py-3 px-6 rounded-md inline-flex items-center hover:bg-[#00FF00]/90 transition-all duration-300">
            Fale com um especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
