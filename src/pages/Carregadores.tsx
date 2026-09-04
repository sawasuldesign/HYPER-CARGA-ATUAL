import { useEffect, useState } from "react";
import { Check, MessageCircle, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Charger = {
  id: string;
  name: string;
  model: string;
  power: string;
  image: string;
  description: string;
  details: string;
  highlights: string[];
  specs: Array<[string, string]>;
  cardImageClass?: string;
};

const chargers: Charger[] = [
  {
    id: "z1d160-2ccs2",
    name: "Carregador DC 160 kW",
    model: "Z1D160-2CCS2",
    power: "160 kW",
    image: "/images/carregadores/dc-160-z1d160-2ccs2.png",
    description:
      "A estação de recarga Z1D160-2CCS2 é a solução perfeita para quem busca flexibilidade e agilidade na recarga de veículos elétricos. Permite o carregamento a 160 kW em um plugue ou em dois plugues a 80 kW, com consumo ínfimo em standby.",
    details:
      "A estação de recarga Z1D160-2CCS2 é a solução perfeita para quem busca flexibilidade e agilidade na recarga de veículos elétricos. Esta solução permite o carregamento a 160 kW em um plugue ou dois plugues a 80 kW, com um consumo ínfimo em standby.",
    highlights: ["2 conectores CCS2", "Baixo consumo em standby", "Suporte nacional"],
    specs: [
      ["Conectores DC", "CCS2 + CCS2"],
      ["Tamanho do cabo", "5 m"],
      ["Tamanho do display", '50"'],
      ["Potência de saída", "160 kW (80 kW + 80 kW)"],
      ["Tensão de entrada", "3F + N + PE 380 V ± 10%, 60 Hz"],
      ["Corrente de entrada", "250 A"],
      ["Divisão de energia", "80 kW para cada conector em cargas simultâneas; 160 kW para um único conector."],
      ["Protocolo de comunicação backend", "OCPP 1.6 JSON"],
      ["Conectividade", "Ethernet"],
      ["Interface de comissionamento", "Local via IHM"],
    ],
  },
  {
    id: "z1d60-2ccs2-tv",
    name: "Carregador DC 80 kW",
    model: "Z1D60-2CCS2-TV",
    power: "80 kW",
    image: "/images/carregadores/dc-80-z1d60-2ccs2-tv.png",
    description:
      "A estação de recarga Z1D60-2CCS2-TV oferece flexibilidade e agilidade, com display de 50 polegadas controlado local ou remotamente. Permite o carregamento a 80 kW em um plugue ou em dois plugues a 40 kW, com consumo ínfimo em standby.",
    details:
      "A estação de recarga Z1D60-2CCS2-TV é a solução perfeita para quem busca flexibilidade e agilidade na recarga de veículos elétricos. Com um display de 50 polegadas, permite que o usuário controle localmente ou remotamente o que é exibido no display. Esta solução permite o carregamento a 80 kW em um plugue ou dois plugues a 40 kW, com um consumo ínfimo em standby.",
    highlights: ["2 conectores CCS2", 'Display de 50"', "Baixo consumo em standby", "Suporte nacional"],
    specs: [
      ["Conectores DC", "CCS2 + CCS2"],
      ["Tamanho do cabo", "5 m"],
      ["Tamanho do display", '50"'],
      ["Potência de saída", "80 kW (40 kW + 40 kW)"],
      ["Tensão de entrada", "3F + N + PE 380 V ± 10%, 60 Hz"],
      ["Corrente de entrada", "122 A"],
      ["Divisão de energia", "40 kW para cada conector em cargas simultâneas; 80 kW para um único conector."],
      ["Protocolo de comunicação backend", "OCPP 1.6 JSON"],
      ["Conectividade", "Ethernet"],
      ["Interface de comissionamento", "Local via IHM"],
    ],
  },
  {
    id: "z1-d80",
    name: "Carregador DC 80 kW",
    model: "Z1 D80",
    power: "80 kW",
    image: "/images/carregadores/dc-80-z1-d80.png",
    description:
      "A estação de recarga Z1 D80 oferece flexibilidade e agilidade, com interface de 150 × 50 mm para acompanhar a situação do abastecimento. Permite o carregamento a 80 kW em um plugue ou em dois plugues a 40 kW, com consumo ínfimo em standby.",
    details:
      "A estação de recarga Z1 D80 é a solução perfeita para quem busca flexibilidade e agilidade na recarga de veículos elétricos. Com uma interface de 150 × 50 mm, permite que o usuário tenha acesso à situação do abastecimento. Esta solução permite o carregamento a 80 kW em um plugue ou dois plugues a 40 kW, com um consumo ínfimo em standby.",
    highlights: ["2 conectores CCS2", "Display de 150 × 50 mm", "Baixo consumo em standby", "Suporte nacional"],
    specs: [
      ["Conectores DC", "CCS2 + CCS2"],
      ["Tamanho do cabo", "5 m"],
      ["Tamanho do display", "150 × 50 mm"],
      ["Potência de saída", "80 kW (40 kW + 40 kW)"],
      ["Tensão de entrada", "3F + N + PE 380 V ± 10%, 60 Hz"],
      ["Corrente de entrada", "125 A"],
      ["Divisão de energia", "40 kW para cada conector em cargas simultâneas; 80 kW para um único conector."],
      ["Protocolo de comunicação backend", "OCPP 1.6 JSON"],
      ["Conectividade", "Ethernet"],
      ["Interface de comissionamento", "Local via IHM"],
    ],
  },
  {
    id: "z1d40-ccs2",
    name: "Carregador DC 40 kW",
    model: "Z1D40-CCS2",
    power: "40 kW",
    image: "/images/carregadores/dc-40-z1d40-ccs2.png",
    description:
      "A estação de recarga Z1D40-CCS2 é uma solução para recarga de veículos elétricos. Permite o carregamento em um plugue a 40 kW, com consumo ínfimo em standby.",
    details:
      "A estação de recarga Z1D40-CCS2 é a solução perfeita para quem busca flexibilidade e agilidade na recarga de veículos elétricos. Esta solução permite o carregamento em um plugue a 40 kW, com um consumo ínfimo em standby.",
    highlights: ["1 conector CCS2", "OCPP 1.6", "Baixo consumo em standby", "Suporte nacional"],
    specs: [
      ["Conector DC", "1 × CCS2"],
      ["Potência de saída", "40 kW"],
      ["Protocolo de comunicação", "OCPP 1.6"],
    ],
  },
  {
    id: "wallbox-704-22",
    name: "Wallbox 7,04 / 22 kW",
    model: "Modelo não informado no catálogo",
    power: "7,04 / 22 kW",
    image: "/images/carregadores/wallbox-704-22kw.png",
    description:
      "As estações de recarga Wallbox AC são uma solução para hotéis e residências, sem necessidade de grandes alterações na infraestrutura.",
    details:
      "As estações de recarga Wallbox AC são a solução perfeita para hotéis e residências, sem precisar de grandes alterações em infraestrutura.",
    highlights: ["1 conector Tipo 2", "OCPP 1.6 opcional na versão 7,04 kW", "Baixo consumo em standby", "Suporte nacional"],
    specs: [
      ["Conector AC", "Tipo 2"],
      ["Tamanho do cabo", "5 m"],
      ["Potência de saída", "7,04 kW / 22 kW"],
      ["Tensão de entrada", "F/N 220 V ou F/F 220 V; 3F + N + PE 380 V ± 10%, 60 Hz"],
      ["Corrente de entrada", "32 A"],
      ["Protocolo de comunicação backend", "OCPP 1.6 JSON (opcional na versão 7,04 kW)"],
      ["Conectividade", "Wi-Fi (opcional na versão 7,04 kW)"],
    ],
  },
  {
    id: "z1-w07",
    name: "Wallbox AC 7,04 kW Tipo 2",
    model: "Z1 W07",
    power: "7,04 kW",
    image: "/images/carregadores/wallbox-z1-w07.png",
    cardImageClass: "scale-90",
    description:
      "O protocolo OCPP permite a comunicação do carregador com serviços de monitoramento e controle, como aplicativos de recarga. O catálogo informa compatibilidade opcional com OCPP 1.6 e Wi-Fi.",
    details:
      "O protocolo OCPP (Open Charge Point Protocol) é o padrão de comunicação de carregadores veiculares com serviços de monitoramento e/ou controle, como aplicativos de recarga. O OCPP 1.6 é a versão mais utilizada no mercado atualmente, sendo compatível com a maioria dos serviços disponíveis. Para utilizar um aplicativo de recarga em carregador Zeta Uno com Wi-Fi, é necessário contratar o aplicativo e configurar o carregador com as informações do aplicativo.",
    highlights: ["Wi-Fi opcional", "OCPP 1.6 opcional", "Totem vendido separadamente"],
    specs: [
      ["Conector AC", "Tipo 2"],
      ["Tamanho do cabo", "5 m"],
      ["Potência de saída", "7,04 kW"],
      ["Tensão de entrada", "220 V (F-N ou F-F) + PE"],
      ["Corrente de entrada", "32 A"],
      ["Protocolo de comunicação backend", "OCPP 1.6 JSON (opcional)"],
      ["Conectividade", "Wi-Fi (opcional)"],
      ["Totem", "Opcional, vendido separadamente - 5001.001"],
      ["Temperatura de operação", "-35 °C a 50 °C"],
      ["Temperatura de armazenamento", "-35 °C a 70 °C"],
    ],
  },
  {
    id: "z1-w07w",
    name: "Wallbox AC 7,04 kW Wi-Fi Tipo 2",
    model: "Z1 W07W",
    power: "7,04 kW",
    image: "/images/carregadores/wallbox-z1-w07w.png",
    description:
      "As estações de recarga Wallbox AC são uma solução para hotéis e residências, sem necessidade de grandes alterações na infraestrutura.",
    details:
      "As estações de recarga Wallbox AC são a solução perfeita para hotéis e residências, sem precisar de grandes alterações em infraestrutura.",
    highlights: ["1 conector Tipo 2", "OCPP 1.6 opcional", "Baixo consumo em standby", "Suporte nacional"],
    specs: [
      ["Conector AC", "Tipo 2"],
      ["Tamanho do cabo", "5 m"],
      ["Potência de saída", "7,04 kW"],
      ["Tensão de entrada", "220 V (F-N ou F-F) + PE"],
      ["Corrente de entrada", "32 A"],
      ["Protocolo de comunicação backend", "OCPP 1.6 JSON (opcional)"],
      ["Totem", "Opcional, vendido separadamente - 5001.001"],
      ["Temperatura de operação", "-35 °C a 50 °C"],
      ["Temperatura de armazenamento", "-35 °C a 70 °C"],
    ],
  },
  {
    id: "portatil-multicabos",
    name: "Portátil Multicabos 7,04 kW Máx.",
    model: "Modelo não informado no catálogo",
    power: "7,04 kW máx.",
    image: "/images/carregadores/portatil-multicabos-704kw.png",
    description:
      "As estações de recarga Portátil Multicabos AC são uma solução para quem busca flexibilidade e confiabilidade para carregar em qualquer lugar.",
    details:
      "As estações de recarga Portátil Multicabos AC são a solução perfeita para quem quer flexibilidade e confiabilidade. Carregue em qualquer lugar.",
    highlights: ["1 conector Tipo 2", "Ponteiras intercambiáveis de 10 A, 20 A e 32 A", "Tomada 32 A inclusa", "Bolsa de transporte"],
    specs: [
      ["Conector AC", "Tipo 2"],
      ["Tamanho do cabo", "5 m"],
      ["Potência de saída", "7,04 kW"],
      ["Tensão de entrada", "F/N 220 V ou F/F 220 V ± 10%, 60 Hz"],
      ["Corrente de entrada", "32 A máx."],
    ],
  },
];

const specialistUrl = (charger: Charger) =>
  `https://wa.me/555499140301?text=${encodeURIComponent(
    `Olá, Rudinei! Vim pelo site da Hypercarga e gostaria de mais informações sobre o ${charger.name} - ${charger.model}.`,
  )}`;

const Carregadores = () => {
  const [selectedCharger, setSelectedCharger] = useState<Charger | null>(null);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Carregadores elétricos - Hyper Carga";
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Conheça os carregadores elétricos da Hyper Carga para residências, empresas, frotas e pontos de recarga.";
    document.head.appendChild(metaDescription);
    return () => {
      document.title = previousTitle;
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-dark text-white">
      <Navbar />
      <main className="flex-grow">
        <section className="relative overflow-hidden border-b border-border/30 bg-darker pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(25,65,210,0.22),transparent_45%)]" />
          <div className="container-custom relative mx-auto">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-hyper-green/30 bg-hyper-green/10 px-4 py-2 text-sm font-medium text-hyper-green">
              <Zap className="h-4 w-4" />
              Mobilidade elétrica
            </span>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              Carregadores para cada necessidade
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
              Soluções de recarga AC e DC para residências, hotéis, empresas,
              frotas e pontos de carregamento de alta demanda.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container-custom mx-auto">
            <div className="mb-12 max-w-3xl">
              <h2 className="section-title">Conheça nossos carregadores</h2>
              <p className="section-subtitle mb-0">
                Compare os modelos e consulte a ficha técnica completa de cada solução.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {chargers.map((charger) => (
                <article key={charger.id} className="flex h-full flex-col overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-hyper-blue/60 hover:shadow-xl hover:shadow-hyper-blue/10">
                  <div className="flex h-64 shrink-0 items-center justify-center overflow-hidden bg-white p-6 sm:h-72">
                    <img src={charger.image} alt={`${charger.name}, modelo ${charger.model}`} className={`block h-full max-h-full w-full max-w-full object-contain object-center ${charger.cardImageClass ?? ""}`} loading="lazy" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-hyper-green">{charger.model}</p>
                        <h3 className="text-xl font-bold leading-tight text-white">{charger.name}</h3>
                      </div>
                      <span className="shrink-0 rounded-full bg-hyper-blue/15 px-3 py-1 text-xs font-semibold text-hyper-blue">{charger.power}</span>
                    </div>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-white/65">{charger.description}</p>
                    <div className="space-y-3">
                      <button type="button" onClick={() => setSelectedCharger(charger)} className="btn-primary w-full" aria-label={`Ver especificações do ${charger.name} ${charger.model}`}>
                        Ver especificações
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Dialog open={selectedCharger !== null} onOpenChange={(open) => { if (!open) setSelectedCharger(null); }}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto border-border bg-card p-0 text-white">
          {selectedCharger && (
            <>
              <DialogHeader className="border-b border-border/40 p-6 pr-12 text-left">
                <p className="text-sm font-semibold uppercase tracking-wider text-hyper-green">{selectedCharger.model}</p>
                <DialogTitle className="text-2xl text-white md:text-3xl">{selectedCharger.name}</DialogTitle>
                <DialogDescription className="text-base leading-relaxed text-white/70">{selectedCharger.details}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-8 p-6 md:grid-cols-[240px_1fr]">
                <div>
                  <div className="flex aspect-square items-center justify-center rounded-lg bg-white p-5">
                    <img src={selectedCharger.image} alt={`${selectedCharger.name}, modelo ${selectedCharger.model}`} className="h-full w-full object-contain" />
                  </div>
                  <div className="mt-5 space-y-3">
                    {selectedCharger.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2 text-sm text-white/75">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-hyper-green" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-white">Ficha técnica</h3>
                  <dl className="overflow-hidden rounded-lg border border-border/50">
                    {selectedCharger.specs.map(([label, value], index) => (
                      <div key={label} className={`grid gap-1 px-4 py-3 sm:grid-cols-[180px_1fr] sm:gap-4 ${index % 2 === 0 ? "bg-darker/70" : "bg-dark/40"}`}>
                        <dt className="text-sm font-semibold text-white">{label}</dt>
                        <dd className="text-sm leading-relaxed text-white/70">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <a href={specialistUrl(selectedCharger)} target="_blank" rel="noopener noreferrer" className="btn-secondary mt-6 w-full">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Fale com um especialista
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Carregadores;
