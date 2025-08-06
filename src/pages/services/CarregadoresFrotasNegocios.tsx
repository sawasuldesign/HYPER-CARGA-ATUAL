
import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { initScrollAnimation } from "@/utils/scrollAnimation";

const CarregadoresFrotasNegocios = () => {
  useEffect(() => {
    initScrollAnimation();

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);

    document.title = "Carregadores para Frotas e Negócios - Hyper Carga";
    
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Carregadores elétricos para frotas e negócios com a Hyper Carga.";
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-dark text-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(to right bottom, rgba(14, 17, 22, 0.8), rgba(7, 8, 10, 0.95)), url('https://imgur.com/KRDaL1O.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 container-custom text-left">
            <div className="max-w-2xl">
              <p className="text-hyper-green text-lg mb-2 animated-element">
                Potência para a Mobilidade Elétrica
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animated-element">
                Carregadores para Frotas e Empresas
              </h1>
              <a
                href="#about"
                className="inline-flex items-center bg-hyper-blue text-white px-6 py-3 rounded-lg hover:bg-hyper-blue/90 transition-colors animated-element"
              >
                Saiba Mais
              </a>
            </div>
          </div>
          
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/555436983939"
            className="fixed bottom-6 right-6 z-50 bg-hyper-green p-3 rounded-xl shadow-lg hover:bg-hyper-green/90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contatar via WhatsApp"
          >
            <MessageCircle className="h-8 w-8 text-white" />
          </a>
        </section>

        {/* Main Content Section */}
        <section id="about" className="section bg-dark">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16 animated-element">
              <h2 className="text-3xl font-bold text-white">Carregadores para Frotas e Empresas</h2>
              <p className="text-lg text-white/70">Escolha o carregador certo para a sua operação e turbine seus resultados.</p>
            </div>

            <div className="max-w-4xl mx-auto mb-8 animated-element">
              <p className="text-lg text-white/70 text-center">
                Cada negócio tem sua rotina, sua demanda e seu ritmo. Pensando nisso, a Hyper Carga oferece um portfólio completo de carregadores elétricos para atender desde pequenas operações até grandes centros logísticos. Conheça as opções e descubra qual combina mais com a sua necessidade:
              </p>
            </div>

            <div className="space-y-8">
              {/* Box 1 */}
              <div className="flex flex-col md:flex-row items-center bg-darker rounded-xl border border-border/40 hover:border-hyper-blue/30 transition-all p-6 animated-element">
                <div className="w-full md:w-1/2 mr-0 md:mr-6">
                  <img
                    src="https://imgur.com/KRDaL1O.jpg"
                    alt="Carregadores AC Wallbox"
                    className="w-full h-[300px] object-cover rounded-xl"
                  />
                </div>
                
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                  <h3 className="text-xl font-bold text-white mb-2">1. Para estacionamentos, shoppings e hotéis</h3>
                  <p className="text-white/70 font-bold mb-2">Carregadores AC Wallbox (7,2kW a 22kW)</p>
                  <p className="text-white/70 flex items-start">
                    <span className="h-2 w-2 bg-hyper-green rounded-full inline-block mr-2 mt-2 flex-shrink-0"></span>
                    Perfeitos para locais onde o cliente permanece por períodos prolongados. Enquanto ele faz compras, almoça ou se hospeda, o veículo carrega com segurança e você monetiza esse serviço. Vantagem: instalação rápida, baixo consumo em standby e possibilidade de cobrança pelo kWh ou tempo de uso.
                  </p>
                </div>
              </div>

              {/* Box 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center bg-darker rounded-xl border border-border/40 hover:border-hyper-blue/30 transition-all p-6 animated-element">
                <div className="w-full md:w-1/2 ml-0 md:ml-6">
                  <img
                    src="https://imgur.com/xu4PEOe.jpg"
                    alt="Carregadores DC para frotas leves"
                    className="w-full h-[300px] object-cover rounded-xl"
                  />
                </div>
                
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                  <h3 className="text-xl font-bold text-white mb-2">2. Para empresas com frotas de veículos leves</h3>
                  <p className="text-white/70 font-bold mb-2">Carregadores DC 40kW ou 80kW</p>
                  <p className="text-white/70 flex items-start">
                    <span className="h-2 w-2 bg-hyper-green rounded-full inline-block mr-2 mt-2 flex-shrink-0"></span>
                    Indicado para operações de entregas urbanas, transportes corporativos ou serviços de logística leve, onde há necessidade de carregamento rápido entre turnos ou viagens. Exemplos: Empresas de e-commerce, Frotas de delivery e manutenção técnica, Serviços de transporte executivo. Destaque: recargas de 20% a 80% em menos de 40 minutos, compatibilidade com os principais veículos e gestão via software inclusa.
                  </p>
                </div>
              </div>

              {/* Box 3 */}
              <div className="flex flex-col md:flex-row items-center bg-darker rounded-xl border border-border/40 hover:border-hyper-blue/30 transition-all p-6 animated-element">
                <div className="w-full md:w-1/2 mr-0 md:mr-6">
                  <img
                    src="https://imgur.com/uL9u7z8.jpg"
                    alt="Carregadores DC para carga pesada"
                    className="w-full h-[300px] object-cover rounded-xl"
                  />
                </div>
                
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                  <h3 className="text-xl font-bold text-white mb-2">3. Para centros logísticos e frotas de carga pesada</h3>
                  <p className="text-white/70 font-bold mb-2">Carregadores DC 160kW e 320kW</p>
                  <p className="text-white/70 flex items-start">
                    <span className="h-2 w-2 bg-hyper-green rounded-full inline-block mr-2 mt-2 flex-shrink-0"></span>
                    Ideais para operações que exigem alta velocidade de recarga e disponibilidade contínua de veículos. Permitem carregar simultaneamente dois veículos ou concentrar toda a potência em um único carregamento ultrarrápido. Exemplos: Centros de distribuição, Operadoras de logística, Garagens de ônibus elétricos. Diferencial: carregamento completo em minutos, baixo consumo em standby e possibilidade de customização com a marca da empresa.
                  </p>
                </div>
              </div>

              {/* Box 4 */}
              <div className="flex flex-col md:flex-row-reverse items-center bg-darker rounded-xl border border-border/40 hover:border-hyper-blue/30 transition-all p-6 animated-element">
                <div className="w-full md:w-1/2 ml-0 md:ml-6">
                  <img
                    src="https://res.cloudinary.com/dt2qlgxcl/image/upload/v1754424679/Para_quem_quer_flexibilidade_em_qualquer_lugar_wwdegm.jpg"
                    alt="Carregadores Portáteis Multicabos"
                    className="w-full h-[300px] object-cover rounded-xl"
                  />
                </div>
                
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                  <h3 className="text-xl font-bold text-white mb-2">4. Para quem quer flexibilidade em qualquer lugar</h3>
                  <p className="text-white/70 font-bold mb-2">Carregadores Portáteis Multicabos (7,04kW)</p>
                  <p className="text-white/70 flex items-start">
                    <span className="h-2 w-2 bg-hyper-green rounded-full inline-block mr-2 mt-2 flex-shrink-0"></span>
                    A solução perfeita para operações descentralizadas, eventos, transporte executivo ou veículos de apoio. Leves, compactos e compatíveis com diferentes tipos de tomadas. Exemplos: Eventos e feiras, Produções audiovisuais, Veículos de apoio corporativo. Benefício: mobilidade total e facilidade de transporte, com bolsa e conectores intercambiáveis.
                  </p>
                </div>
              </div>

              {/* Box 5 */}
              <div className="flex flex-col md:flex-row items-center bg-darker rounded-xl border border-border/40 hover:border-hyper-blue/30 transition-all p-6 animated-element">
                <div className="w-full md:w-1/2 mr-0 md:mr-6">
                  <img
                    src="https://imgur.com/R4tWlQ3.jpg"
                    alt="Carregadores DC ultrarrápidos"
                    className="w-full h-[300px] object-cover rounded-xl"
                  />
                </div>
                
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                  <h3 className="text-xl font-bold text-white mb-2">5. Para quem busca velocidade e alta rotatividade</h3>
                  <p className="text-white/70 font-bold mb-2">Carregadores DC 160kW e 320kW</p>
                  <p className="text-white/70 flex items-start">
                    <span className="h-2 w-2 bg-hyper-green rounded-full inline-block mr-2 mt-2 flex-shrink-0"></span>
                    Se o seu negócio precisa atender vários veículos elétricos por dia, com o menor tempo de espera e máxima eficiência, os carregadores ultrarrápidos DC da Hyper Carga são a solução ideal. Com capacidade de carregar dois veículos simultaneamente ou concentrar a potência total em um único carro, esses modelos garantem rapidez e satisfação ao cliente — além de gerar receita extra para o seu espaço.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-8 text-center animated-element">
              <p className="text-lg text-white/70">
                Personalize sua estação de recarga. Além de escolher o carregador ideal, a Hyper Carga personaliza as estações com a sua marca e identidade visual. Aproveite as telas de 50″ nos modelos DC para exibir publicidade ou mensagens corporativas, transformando a estação em uma nova fonte de receita.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <PartnerSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CarregadoresFrotasNegocios;
