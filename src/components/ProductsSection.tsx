
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("carregadores");

  const chargerCategories = [
      {
        id: 1,
        name: "Wallbox",
        image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1754419845/wallbox_vrgozj.png",
      },
      {
        id: 2,
        name: "Carregador DC",
        image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1754420072/dc1_ok4vm9.png",
      },
      {
        id: 3,
        name: "Carregador Portátil",
        image: "https://res.cloudinary.com/dt2qlgxcl/image/upload/v1754420066/portatil_jhvvlu.png",
      }
    ];

  const installationProducts = [
      {
        id: 5,
        name: "Solicitar Orçamento de Instalação",
        image: null,
        description: "Fale com especialistas que irão realizar um estudo de área para viabilizar a instalação do seu novo carregador",
        features: ["Orçamento", "Projeto", "Adequação", "Instalação"],
        whatsappText: "Ol%C3%A1%2C%20Rudinei!%20Vim%20pelo%20site%20da%20Hypercarga%20e%20gostaria%20de%20um%20or%C3%A7amento%20de%20instala%C3%A7%C3%A3o%20de%20carregador."
      }
    ];

  const categories = [
    { id: "carregadores", label: "Carregadores" },
    { id: "instalacao", label: "Instalação" },
  ];

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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {chargerCategories.map((product) => (
              <div key={product.id} className="bg-dark rounded-xl overflow-hidden border border-border/40 hover:border-hyper-blue/30 transition-all animate-fade-in-up">
                <div className="flex h-60 items-center justify-center overflow-hidden bg-darker p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full max-h-full w-full max-w-full object-contain object-center transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <a
                    href="/carregadores"
                    className="inline-flex items-center bg-hyper-blue text-white px-4 py-2 rounded-lg hover:bg-hyper-blue/90 transition-colors w-full justify-center"
                  >
                    Ver modelos disponíveis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center">
            {installationProducts.map((product) => (
              <div key={product.id} className="bg-dark rounded-xl overflow-hidden border border-border/40 hover:border-hyper-blue/30 transition-all animate-fade-in-up max-w-md w-full">
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
                    href={`https://wa.me/555499140301?text=${product.whatsappText}`}
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
            href="https://wa.me/555499140301?text=Ol%C3%A1%2C%20Rudinei!%20Vim%20pelo%20site%20da%20Hypercarga%20e%20gostaria%20de%20falar%20com%20um%20especialista."
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
