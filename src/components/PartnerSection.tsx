
import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const PartnerSection = () => {
  return (
    <section id="contact" className="section bg-darker">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 animated-element">
          <h2 className="text-2xl font-bold text-white">Encontre a solução perfeita na Hyper Carga!</h2>
          <p className="mt-4 text-base text-white">
            Oferecemos suporte para carregar suas frotas, instalação e estabelecimentos que desejam expandir a infraestrutura de recarga para veículos elétricos.
          </p>
        </div>

        {/* Two-column button layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-md mx-auto animated-element">
          <a 
            href="https://wa.me/555436983939" 
            className="inline-flex items-center justify-center bg-hyper-green text-white px-6 py-3 rounded-lg hover:bg-hyper-green/90 transition-colors md:w-auto md:whitespace-nowrap md:text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale com um especialista
          </a>
          <a 
            href="https://drive.google.com/uc?export=download&id=1RdLoL4qmtPmli3jgD5sC5H1ottLNptf7" 
            className="inline-flex items-center justify-center bg-hyper-green text-white px-6 py-3 rounded-lg hover:bg-hyper-green/90 transition-colors"
            download="catalogo_carregadores_hyper_carga.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Catálogo PDF
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Informações de Contato */}
          <div className="animated-element">
            <h3 className="text-xl font-bold text-white mb-6">Entre em Contato</h3>
            <div className="space-y-4 text-white/70">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-hyper-green mr-2 mt-1 flex-shrink-0" />
                <p>R. André Aguzzoli, 20 - L46 - Bela Vista, Caxias do Sul - RS, 95072-030</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-hyper-green mr-2" />
                <a href="mailto:marketing@sawasul.com.br" className="hover:text-hyper-blue transition-colors">
                  marketing@sawasul.com.br
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-hyper-green mr-2" />
                <a href="tel:+555436983939" className="hover:text-hyper-blue transition-colors">
                  +55 (54) 3698 3939
                </a>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="animated-element">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.885328384704!2d-51.17997368468248!3d-29.16808698221089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951eb7c6b7c7c7c7%3A0x7c7c7c7c7c7c7c7!2sR.%20Andr%C3%A9%20Aguzzoli%2C%2020%2C%20Bela%20Vista%2C%20Caxias%20do%20Sul%20-%20RS%2C%2095072-030!5e0!3m2!1spt-BR!2sbr!4v1634567890123"
              className="w-full h-64 rounded-lg border-0"
              allowFullScreen
              loading="lazy"
              aria-label="Mapa da Hyper Carga em Caxias do Sul"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
