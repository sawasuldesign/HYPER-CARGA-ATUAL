
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const links = [
    { name: "Home", href: "/", ariaLabel: "Ir para a página inicial" },
    { name: "Sobre", href: "#about", ariaLabel: "Ir para a seção Sobre" },
    { name: "Produtos", href: "#products", ariaLabel: "Ir para a seção Produtos" },
    { name: "Serviços", href: "#services", ariaLabel: "Ir para a seção Serviços" },
    { name: "Contato", href: "#partner", ariaLabel: "Ir para a seção Contato" },
    { name: "Loja", href: "/loja", ariaLabel: "Ir para a loja" },
  ];

  const products = [
    { name: "Walbox 7,04/22 kW", href: "https://wa.me/555436983939?text=Quero%20um%20orçamento%20do%20Walbox%207,04/22%20kW" },
    { name: "Carregador DC 80 kW", href: "https://wa.me/555436983939?text=Quero%20um%20orçamento%20do%20Carregador%20DC%2080%20kW" },
    { name: "Portátil Multicabos 7,04 kW Max", href: "https://wa.me/555436983939?text=Quero%20um%20orçamento%20do%20Portátil%20Multicabos%207,04%20kW" },
    { name: "Carregador DC 40 kW", href: "https://wa.me/555436983939?text=Quero%20um%20orçamento%20do%20Carregador%20DC%2040%20kW" },
  ];

  const socials = [
    { icon: Facebook, href: "#", ariaLabel: "Visite nosso Facebook" },
    { icon: Instagram, href: "#", ariaLabel: "Visite nosso Instagram" },
    { icon: Linkedin, href: "#", ariaLabel: "Visite nosso LinkedIn" },
    { icon: Twitter, href: "#", ariaLabel: "Visite nosso Twitter" },
    { icon: Youtube, href: "#", ariaLabel: "Visite nosso YouTube" },
  ];

  return (
    <footer id="footer" className="bg-darker py-12 animated-element fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Informações da Empresa */}
          <div>
            <div className="flex items-center space-x-1 mb-4">
              <span className="text-2xl font-bold text-hyper-blue">Hyper</span>
              <span className="text-2xl font-bold text-hyper-green">Carga</span>
            </div>
            <p className="text-white/70 mb-4">
              A Hyper Carga desenvolve soluções de carregamento para veículos elétricos com tecnologia
              brasileira e foco em sustentabilidade.
            </p>
            
            {/* Informações de Contato */}
            <div className="space-y-2 text-white/70 text-sm">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-hyper-green mr-2 mt-0.5 flex-shrink-0" />
                <p>R. André Aguzzoli, 20 - L46 - Bela Vista, Caxias do Sul - RS, 95072-030</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-hyper-green mr-2" />
                <p>marketing@sawasul.com.br</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-hyper-green mr-2" />
                <a href="tel:+555436983939" className="hover:text-hyper-blue transition-colors">
                  (54) 3698-3939
                </a>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-hyper-blue transition-colors"
                    aria-label={link.ariaLabel}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Produtos</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    className="text-white/70 hover:text-hyper-blue transition-colors text-sm"
                    aria-label={`Solicitar orçamento do ${product.name}`}
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
            <form className="mb-6">
              <div className="flex items-center border border-border/40 rounded-lg">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="bg-transparent text-white/70 p-2 w-full outline-none placeholder:text-white/50"
                  aria-label="Insira seu email para a newsletter"
                />
                <button
                  type="submit"
                  className="bg-hyper-blue text-white p-2 rounded-r-lg hover:bg-hyper-blue/80 transition-colors"
                  aria-label="Inscrever-se na newsletter"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </form>

            {/* Socials */}
            <div className="flex space-x-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-hyper-blue hover:text-hyper-blue/80 transition-colors"
                  aria-label={social.ariaLabel}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-white/70">
          <p>&copy; {new Date().getFullYear()} Hyper Carga. Todos os direitos reservados.</p>
          <div className="mt-2">
            <a href="/termos" className="text-white/70 hover:text-hyper-blue transition-colors" aria-label="Termos de Uso">
              Termos de Uso
            </a>
            <span className="mx-2">|</span>
            <a href="/privacidade" className="text-white/70 hover:text-hyper-blue transition-colors" aria-label="Política de Privacidade">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
