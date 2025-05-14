import { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#800080] shadow-md">
      <div className="container-custom mx-auto flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center">
          <div className="text-white font-bold text-xl flex items-center">
            <span className="w-[100px]">Hyper Carga</span>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <a href="/" className="text-white px-3 py-2 text-sm font-medium hover:bg-[#800080]/80 rounded-md">
            Home
          </a>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white px-3 py-2 text-sm font-medium hover:bg-[#800080]/80 rounded-md">
                  Serviços
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#800080]">
                  <div className="grid w-[400px] gap-3 p-4">
                    <a href="#" className="block p-3 text-white hover:bg-[#800080]/80 rounded-md">
                      Carregadores para negócios e frotas
                    </a>
                    <a href="#" className="block p-3 text-white hover:bg-[#800080]/80 rounded-md">
                      Carregadores para casa
                    </a>
                    <a href="#" className="block p-3 text-white hover:bg-[#800080]/80 rounded-md">
                      Aluguel de carregadores
                    </a>
                    <a href="#" className="block p-3 text-white hover:bg-[#800080]/80 rounded-md">
                      Projeto e instalação
                    </a>
                    <a href="#" className="block p-3 text-white hover:bg-[#800080]/80 rounded-md">
                      Carregadores com a sua marca
                    </a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <a href="#" className="text-white px-3 py-2 text-sm font-medium hover:bg-[#800080]/80 rounded-md">
            Parceiros
          </a>
          <a href="#" className="text-white px-3 py-2 text-sm font-medium hover:bg-[#800080]/80 rounded-md">
            Centro de Conteúdo
          </a>
          <a href="#" className="text-white px-3 py-2 text-sm font-medium hover:bg-[#800080]/80 rounded-md">
            Blog
          </a>
          <a href="#" className="text-white px-3 py-2 text-sm font-medium hover:bg-[#800080]/80 rounded-md">
            Sobre
          </a>
          <a href="#" className="text-white px-3 py-2 text-sm font-medium hover:bg-[#800080]/80 rounded-md">
            Contato
          </a>
          <a href="#" className="text-white bg-[#00FF00] px-4 py-2 rounded-md font-medium hover:bg-[#00FF00]/90">
            Loja
          </a>
        </div>

        {/* Mobile Menu Button - Keeping this but it won't be visible on desktop */}
        <button
          className="md:hidden p-2 rounded-md text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Navigation - Keeping this for responsiveness */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#800080]">
          <div className="px-4 py-2 space-y-2">
            <a href="/" className="block py-3 px-4 text-white hover:bg-[#800080]/80 rounded-md">
              Home
            </a>
            <a href="#" className="block py-3 px-4 text-white hover:bg-[#800080]/80 rounded-md">
              Serviços
            </a>
            <a href="#" className="block py-3 px-4 text-white hover:bg-[#800080]/80 rounded-md">
              Parceiros
            </a>
            <a href="#" className="block py-3 px-4 text-white hover:bg-[#800080]/80 rounded-md">
              Centro de Conteúdo
            </a>
            <a href="#" className="block py-3 px-4 text-white hover:bg-[#800080]/80 rounded-md">
              Blog
            </a>
            <a href="#" className="block py-3 px-4 text-white hover:bg-[#800080]/80 rounded-md">
              Sobre
            </a>
            <a href="#" className="block py-3 px-4 text-white hover:bg-[#800080]/80 rounded-md">
              Contato
            </a>
            <a href="#" className="block py-3 px-4 text-white bg-[#00FF00] rounded-md">
              Loja
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
