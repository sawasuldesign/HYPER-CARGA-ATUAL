
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", ariaLabel: "Ir para a página inicial" },
    { name: "Sobre", href: "#about", ariaLabel: "Ir para a seção sobre" },
    { name: "Produtos", href: "#products", ariaLabel: "Ir para a seção produtos" },
    { 
      name: "Serviços", 
      href: "#services", 
      ariaLabel: "Expandir menu de serviços",
      hasDropdown: true,
      dropdownItems: [
        { name: "Carregadores para negócios e frotas", href: "/servicos/negocios-frotas" },
        { name: "Carregadores para casa", href: "/servicos/casa" },
        { name: "Aluguel de carregadores", href: "/servicos/aluguel" },
        { name: "Projeto e instalação", href: "/servicos/projeto-instalacao" },
        { name: "Carregadores com a sua marca", href: "/servicos/marca-personalizada" }
      ]
    },
    { name: "Blog", href: "#blog", ariaLabel: "Ir para a seção blog" },
    { name: "Contato", href: "#contact", ariaLabel: "Ir para a seção contato" },
    { name: "Loja", href: "/loja", ariaLabel: "Ir para a loja" }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-darker/95 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
      <div className="container-custom mx-auto flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center" aria-label="Hyper Carga - Página inicial">
          <div className="font-bold text-xl flex items-center">
            <span className="text-hyper-blue">Hyper</span>
            <span className="text-hyper-green ml-1">Carga</span>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.hasDropdown ? (
                <div className="flex items-center">
                  <button
                    className={`nav-item inline-flex items-center text-sm font-medium text-white hover:text-hyper-blue transition-colors px-4 py-2`}
                    aria-haspopup="true"
                    aria-expanded={isServicesOpen}
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4 text-white/50 group-hover:text-hyper-blue transition-colors" />
                  </button>
                  
                  {/* Desktop Dropdown */}
                  <div 
                    className={`absolute top-full left-0 mt-1 w-64 bg-darker/95 backdrop-blur border border-border/40 rounded-md shadow-lg overflow-hidden transition-all duration-200 origin-top-left ${isServicesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="py-2">
                      {item.dropdownItems?.map((dropItem) => (
                        <a
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-dark hover:text-hyper-blue border-l-2 border-transparent hover:border-hyper-blue/30 transition-colors"
                        >
                          {dropItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className="nav-item text-sm font-medium text-white hover:text-hyper-blue transition-colors px-4 py-2"
                  aria-label={item.ariaLabel}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-darker/95 backdrop-blur">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="flex justify-between items-center w-full py-3 px-4 text-white hover:bg-dark hover:text-hyper-blue rounded-md"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      aria-expanded={isServicesOpen}
                    >
                      <span>{item.name}</span>
                      {isServicesOpen ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                    
                    {isServicesOpen && (
                      <div className="pl-4 mt-1 border-l border-border/40">
                        {item.dropdownItems?.map((dropItem) => (
                          <a
                            key={dropItem.name}
                            href={dropItem.href}
                            className="block py-2 px-4 text-sm text-white hover:bg-dark hover:text-hyper-blue border-l-2 border-transparent hover:border-hyper-blue/30 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block py-3 px-4 text-white hover:bg-dark hover:text-hyper-blue rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label={item.ariaLabel}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
