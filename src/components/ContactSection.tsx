
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section bg-darker">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animated-element">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Tire suas dúvidas ou solicite um orçamento personalizado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animated-element">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-dark border border-border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hyper-blue/50 text-white"
                    placeholder="Seu nome"
                    aria-label="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-dark border border-border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hyper-blue/50 text-white"
                    placeholder="seu@email.com"
                    aria-label="Seu email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-dark border border-border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hyper-blue/50 text-white"
                  placeholder="Assunto da mensagem"
                  aria-label="Assunto da mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-dark border border-border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hyper-blue/50 text-white"
                  placeholder="Sua mensagem..."
                  aria-label="Sua mensagem"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full sm:w-auto"
                aria-label="Enviar mensagem"
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          {/* Map and Info */}
          <div className="space-y-8 animated-element">
            <div className="rounded-xl overflow-hidden h-64">
              <iframe
                title="Location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2895887659626!2d-46.66967492222935!3d-23.558111361624355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1684416128166!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Informações de Contato</h3>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-hyper-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-hyper-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white/70">Endereço</h4>
                    <p className="text-base">Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-hyper-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 text-hyper-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white/70">Email</h4>
                    <p className="text-base">contato@hypercarga.com.br</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-hyper-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 text-hyper-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white/70">Telefone</h4>
                    <p className="text-base">+55 (11) 3000-0000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
