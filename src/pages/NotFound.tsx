
import React from 'react';
import { ArrowRight } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark text-white px-4">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-7xl font-bold mb-8">
          <span className="text-hyper-blue">4</span>
          <span className="text-hyper-green">0</span>
          <span className="text-hyper-blue">4</span>
        </h1>
        
        <h2 className="text-3xl font-semibold mb-4">Página não encontrada</h2>
        
        <p className="text-lg text-white/70 mb-8">
          Parece que você tentou acessar uma página que não existe ou foi removida.
        </p>
        
        <a 
          href="/" 
          className="btn-primary inline-flex items-center"
        >
          Voltar para a página inicial
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default NotFound;
