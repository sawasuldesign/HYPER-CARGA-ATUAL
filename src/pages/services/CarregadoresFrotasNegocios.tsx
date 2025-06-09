
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
        <section id="about" className="section bg-dark p-6 md:p-12">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4 animated-element">
                Carregadores para Frotas e Empresas
              </h2>
              <p className="text-base text-white/70 mb-6 animated-element">
                Escolha o carregador certo para a sua operação e turbine seus resultados.
              </p>
              <p className="text-lg text-white/70 mb-4 animated-element">
                Cada negócio tem sua rotina, sua demanda e seu ritmo. Pensando nisso, a Hyper Carga oferece um portfólio completo de carregadores elétricos para atender desde pequenas operações até grandes centros logísticos. Conheça as opções e descubra qual combina mais com a sua necessidade:
              </p>

              {/* Tópicos numerados */}
              <div className="space-y-8 text-left">
                {/* 1. Para estacionamentos, shoppings e hotéis */}
                <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 animated-element">
                  <img
                    src="https://imgur.com/KRDaL1O.jpg"
                    alt="Carregadores AC Wallbox"
                    className="w-full md:w-48 h-48 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">1. Para estacionamentos, shoppings e hotéis</h3>
                    <p className="text-base text-white mb-4">
                      Carregadores AC Wallbox (7,2kW a 22kW) Perfeitos para locais onde o cliente permanece por períodos prolongados. Enquanto ele faz compras, almoça ou se hospeda, o veículo carrega com segurança e você monetiza esse serviço. Vantagem: instalação rápida, baixo consumo em standby e possibilidade de cobrança pelo kWh ou tempo de uso.
                    </p>
                  </div>
                </div>

                {/* 2. Para empresas com frotas de veículos leves */}
                <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 animated-element">
                  <img
                    src="https://imgur.com/xu4PEOe.jpg"
                    alt="Carregadores DC para frotas leves"
                    className="w-full md:w-48 h-48 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">2. Para empresas com frotas de veículos leves</h3>
                    <p className="text-base text-white mb-4">
                      Carregadores DC 40kW ou 80kW Indicado para operações de entregas urbanas, transportes corporativos ou serviços de logística leve, onde há necessidade de carregamento rápido entre turnos ou viagens. Exemplos: Empresas de e-commerce, Frotas de delivery e manutenção técnica, Serviços de transporte executivo. Destaque: recargas de 20% a 80% em menos de 40 minutos, compatibilidade com os principais veículos e gestão via software inclusa.
                    </p>
                  </div>
                </div>

                {/* 3. Para centros logísticos e frotas de carga pesada */}
                <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 animated-element">
                  <img
                    src="https://imgur.com/uL9u7z8.jpg"
                    alt="Carregadores DC para carga pesada"
                    className="w-full md:w-48 h-48 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">3. Para centros logísticos e frotas de carga pesada</h3>
                    <p className="text-base text-white mb-4">
                      Carregadores DC 160kW e 320kW Ideais para operações que exigem alta velocidade de recarga e disponibilidade contínua de veículos. Permitem carregar simultaneamente dois veículos ou concentrar toda a potência em um único carregamento ultrarrápido. Exemplos: Centros de distribuição, Operadoras de logística, Garagens de ônibus elétricos. Diferencial: carregamento completo em minutos, baixo consumo em standby e possibilidade de customização com a marca da empresa.
                    </p>
                  </div>
                </div>

                {/* 4. Para quem quer flexibilidade em qualquer lugar - IMAGEM CORRIGIDA */}
                <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 animated-element">
                  <img
                    src="https://i.imgur.com/9OtGpB8.png"
                    alt="Carregadores Portáteis Multicabos"
                    className="w-full md:w-48 h-48 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">4. Para quem quer flexibilidade em qualquer lugar</h3>
                    <p className="text-base text-white mb-4">
                      Carregadores Portáteis Multicabos (7,04kW) A solução perfeita para operações descentralizadas, eventos, transporte executivo ou veículos de apoio. Leves, compactos e compatíveis com diferentes tipos de tomadas. Exemplos: Eventos e feiras, Produções audiovisuais, Veículos de apoio corporativo. Benefício: mobilidade total e facilidade de transporte, com bolsa e conectores intercambiáveis.
                    </p>
                  </div>
                </div>

                {/* 5. Para quem busca velocidade e alta rotatividade */}
                <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 animated-element">
                  <img
                    src="https://imgur.com/R4tWlQ3.jpg"
                    alt="Carregadores DC ultrarrápidos"
                    className="w-full md:w-48 h-48 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">5. Para quem busca velocidade e alta rotatividade</h3>
                    <p className="text-base text-white mb-4">
                      Carregadores DC 160kW e 320kW Se o seu negócio precisa atender vários veículos elétricos por dia, com o menor tempo de espera e máxima eficiência, os carregadores ultrarrápidos DC da Hyper Carga são a solução ideal. Com capacidade de carregar dois veículos simultaneamente ou concentrar a potência total em um único carro, esses modelos garantem rapidez e satisfação ao cliente — além de gerar receita extra para o seu espaço. Exemplos de aplicação: Estacionamentos de shoppings e centros comerciais, Estacionamentos de aeroportos, Complexos hoteleiros e resorts, Centros empresariais de grande fluxo. Diferenciais: Recarga de 20% a 80% em menos de 20 minutos, Carregamento simultâneo em dois veículos, Display de 50″ para exibição de anúncios e publicidade paga, Gestão completa via software incluso, Personalização da estação com a marca do shopping ou do empreendimento. Resultado: mais clientes satisfeitos, maior tempo de permanência no local e um serviço que agrega valor à experiência do usuário — tudo isso enquanto o ponto de recarga gera receita para o seu negócio.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-white/70 mt-4 animated-element">
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
