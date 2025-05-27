
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-darker pt-16 border-t border-border/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 animated-element">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-white font-bold text-xl flex items-center">
              <span className="text-hyper-blue">Hyper</span>
              <span className="text-hyper-green">&nbsp;Carga</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-hyper-green mt-1 flex-shrink-0" />
                <p className="text-white/60 text-sm">
                  R. André Aguzzoli, 20 - L46 - Bela Vista, Caxias do Sul - RS, 95072-030
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-hyper-green flex-shrink-0" />
                <a 
                  href="mailto:marketing@sawasul.com.br" 
                  className="text-white/60 text-sm hover:text-hyper-green transition-colors"
                >
                  marketing@sawasul.com.br
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-hyper-green flex-shrink-0" />
                <a 
                  href="tel:+555436983939" 
                  className="text-white/60 text-sm hover:text-hyper-green transition-colors"
                >
                  (54) 3698-3939
                </a>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-hyper-blue hover:text-hyper-blue/80 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-hyper-blue hover:text-hyper-blue/80 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-hyper-blue hover:text-hyper-blue/80 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-hyper-blue hover:text-hyper-blue/80 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-hyper-blue hover:text-hyper-blue/80 transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "Sobre", href: "#about" },
                { name: "Produtos", href: "#products" },
                { name: "Serviços", href: "#services" },
                { name: "Contato", href: "#cta" },
                { name: "Loja", href: "/loja" }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-hyper-green transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Produtos</h3>
            <ul className="space-y-3">
              {[
                { name: "Walbox 7,04/22 kW", text: "Quero%20um%20orçamento%20do%20Walbox" },
                { name: "Carregador DC 80 kW", text: "Quero%20um%20orçamento%20do%20DC%2080kW" },
                { name: "Portátil Multicabos", text: "Quero%20um%20orçamento%20do%20Portátil" },
                { name: "Carregador DC 40 kW", text: "Quero%20um%20orçamento%20do%20DC%2040kW" }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={`https://wa.me/555436983939?text=${item.text}`}
                    className="text-white/60 hover:text-hyper-green transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-white/60 text-sm mb-4">
              Inscreva-se para receber novidades sobre nossa empresa e o setor de mobilidade elétrica.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 bg-dark border border-border px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-hyper-blue/50"
                aria-label="Seu e-mail para newsletter"
              />
              <button
                type="submit"
                className="bg-hyper-blue hover:bg-hyper-blue/90 text-white p-2 rounded-md"
                aria-label="Assinar newsletter"
              >
                <Mail className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/30 mt-12 py-6 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Hyper Carga. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 space-x-4 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
