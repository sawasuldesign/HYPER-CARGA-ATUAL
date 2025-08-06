
import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { initScrollAnimation } from "@/utils/scrollAnimation";

const CarregadoresCasa = () => {
  useEffect(() => {
    initScrollAnimation();

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);

    document.title = "Carregadores para Casa e Pequenos Negócios - Hyper Carga";
    
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Carregadores elétricos para casa e pequenos negócios com a Hyper Carga.";
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
            backgroundImage: "linear-gradient(to right bottom, rgba(14, 17, 22, 0.8), rgba(7, 8, 10, 0.95)), url('https://imgur.com/ctrNRtR.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 container-custom text-left">
            <div className="max-w-2xl">
              <p className="text-hyper-green text-lg mb-2 animated-element">
                Potência para a Mobilidade Elétrica
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animated-element">
                Carregadores para Casa e Pequenos Negócios
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
              <h2 className="text-3xl font-bold text-white">Carregadores para Casa e Pequenos Negócios</h2>
              <p className="text-lg text-white/70">Praticidade, segurança e autonomia para carregar onde e quando quiser.</p>
            </div>

            <div className="max-w-4xl mx-auto mb-8 animated-element">
              <p className="text-lg text-white/70 text-center">
                Se você quer a liberdade de carregar seu carro elétrico em casa ou no seu negócio, a Hyper Carga oferece opções de carregadores Wallbox AC e portáteis sob medida para ambientes residenciais, pequenos estabelecimentos e áreas privativas. Descubra qual combina mais com seu estilo de vida:
              </p>
            </div>

            <div className="space-y-8">
              {/* Box 1 */}
              <div className="flex flex-col md:flex-row items-center bg-darker rounded-xl border border-border/40 hover:border-hyper-blue/30 transition-all p-6 animated-element">
                <div className="w-full md:w-1/2 mr-0 md:mr-6">
                  <img
                    src="https://imgur.com/ctrNRtR.jpg"
                    alt="Wallbox AC para residências"
                    className="w-full h-[300px] object-cover rounded-xl"
                  />
                </div>
                
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                  <h3 className="text-xl font-bold text-white mb-2">Para casas, apartamentos e condomínios</h3>
                  <p className="text-white/70 font-bold mb-2">Wallbox AC 7,2kW e 22kW</p>
                  <p className="text-white/70 flex items-start">
                    <span className="h-2 w-2 bg-hyper-green rounded-full inline-block mr-2 mt-2 flex-shrink-0"></span>
                    Compactos, elegantes e de instalação simplificada, esses carregadores são perfeitos para quem busca conveniência no dia a dia. Deixe seu veículo carregando durante a noite e acorde com 100% de autonomia. Diferenciais: Baixo consumo em standby, Opção com Wi-Fi e gestão por aplicativo, Compatível com as principais marcas de veículos elétricos, Sem necessidade de grandes reformas na instalação elétrica.
                  </p>
                </div>
              </div>

              {/* Box 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center bg-darker rounded-xl border border-border/40 hover:border-hyper-blue/30 transition-all p-6 animated-element">
                <div className="w-full md:w-1/2 ml-0 md:ml-6">
                  <img
                    src="https://imgur.com/31WQDuM.jpg"
                    alt="Wallbox AC para pequenos negócios"
                    className="w-full h-[300px] object-cover rounded-xl"
                  />
                </div>
                
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                  <h3 className="text-xl font-bold text-white mb-2">Para pequenos negócios, clínicas e escritórios</h3>
                  <p className="text-white/70 font-bold mb-2">Wallbox AC 22kW</p>
                  <p className="text-white/70 flex items-start">
                    <span className="h-2 w-2 bg-hyper-green rounded-full inline-block mr-2 mt-2 flex-shrink-0"></span>
                    Se o seu estabelecimento recebe clientes ou colaboradores com carros elétricos, ofereça um serviço extra que agrega valor e moderniza a imagem do seu negócio. Exemplos: Barbearias premium, Clínicas odontológicas e estéticas, Pousadas e hotéis boutique, Coworkings residenciais e consultórios home office. Benefícios: Recarga mais rápida durante a permanência do cliente, Possibilidade de personalização da cobrança ou cortesia, Atrativo a mais para fidelizar e valorizar a experiência do cliente.
                  </p>
                </div>
              </div>

              {/* Box 3 */}
              <div className="flex flex-col md:flex-row items-center bg-darker rounded-xl border border-border/40 hover:border-hyper-blue/30 transition-all p-6 animated-element">
                <div className="w-full md:w-1/2 mr-0 md:mr-6">
                  <img
                    src="https://imgur.com/rZ5NpPx.jpg"
                    alt="Carregadores Portáteis Multicabos"
                    className="w-full h-[300px] object-cover rounded-xl"
                  />
                </div>
                
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                  <h3 className="text-xl font-bold text-white mb-2">Para quem viaja muito ou precisa de mobilidade</h3>
                  <p className="text-white/70 font-bold mb-2">Carregadores Portáteis Multicabos (7,04kW)</p>
                  <p className="text-white/70 flex items-start">
                    <span className="h-2 w-2 bg-hyper-green rounded-full inline-block mr-2 mt-2 flex-shrink-0"></span>
                    Leve seu carregador com você. Compacto, resistente e compatível com diferentes tomadas, é ideal para carregar em residências de amigos, hotéis, chácaras ou onde você estiver. Ideal para: Profissionais de venda ou consultoria em viagem, Moradores de sítios ou casas de campo, Profissionais de audiovisual e produção externa. Vantagem: acompanha bolsa, conectores intercambiáveis e tomada de 32A.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-8 text-center animated-element">
              <p className="text-lg text-white/70 mb-4">
                Controle total na palma da mão. Com os modelos Wi-Fi ou via aplicativo, você acompanha a recarga em tempo real, define limites de consumo, horários de recarga e ainda acessa relatórios de uso.
              </p>
              <p className="text-lg text-white/70">
                Fale com nossa equipe e peça sua proposta para instalação residencial ou corporativa. Praticidade, segurança e tecnologia de ponta para sua casa ou pequeno negócio.
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

export default CarregadoresCasa;
