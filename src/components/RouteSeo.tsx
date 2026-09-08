import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://hypercarga.com";
const DEFAULT_IMAGE = `${SITE_URL}/images/hero-cars-poster.webp`;

type SeoConfig = {
  title: string;
  description: string;
  canonical?: string;
  noIndex?: boolean;
};

const seoByPath: Record<string, SeoConfig> = {
  "/": {
    title: "Carregadores para Veículos Elétricos | Hyper Carga",
    description:
      "Carregadores para veículos elétricos, wallbox e eletropostos com tecnologia brasileira. Soluções para residências, empresas, frotas e negócios.",
  },
  "/solucoes/motoristas": {
    title: "Soluções de Recarga para Motoristas | Hyper Carga",
    description:
      "Soluções de carregamento para motoristas de veículos elétricos, com praticidade, segurança e suporte especializado da Hyper Carga.",
  },
  "/carregadores": {
    title: "Carregadores Veiculares e Wallbox | Hyper Carga",
    description:
      "Conheça carregadores AC e DC para veículos elétricos, de wallbox a eletropostos ultrarrápidos, com opções para diferentes operações.",
  },
  "/solucoes/carregadores": {
    title: "Carregadores Veiculares e Wallbox | Hyper Carga",
    description:
      "Conheça carregadores AC e DC para veículos elétricos, de wallbox a eletropostos ultrarrápidos, com opções para diferentes operações.",
    canonical: "/carregadores",
  },
  "/servicos/aluguel": {
    title: "Aluguel de Carregadores Veiculares | Hyper Carga",
    description:
      "Aluguel de carregadores para veículos elétricos em empresas, estacionamentos, hotéis, condomínios e frotas, sem alto investimento inicial.",
  },
  "/solucoes/frotas": {
    title: "Recarga para Frotas e Empresas | Hyper Carga",
    description:
      "Infraestrutura de recarga para frotas elétricas e empresas, com carregadores adequados à operação e suporte especializado.",
  },
  "/servicos/carregadores-frotas": {
    title: "Carregadores para Frotas e Empresas | Hyper Carga",
    description:
      "Carregadores AC e DC para frotas, estacionamentos, shoppings, hotéis e operações empresariais de diferentes portes.",
  },
  "/servicos/carregadores-casa": {
    title: "Carregador Residencial e Wallbox | Hyper Carga",
    description:
      "Wallbox e carregadores para veículos elétricos em casas, condomínios e pequenos negócios, com instalação segura e eficiente.",
  },
  "/servicos/projetos-instalacao": {
    title: "Projeto e Instalação de Carregadores | Hyper Carga",
    description:
      "Projetos personalizados e instalação de carregadores para veículos elétricos, com análise técnica, segurança e suporte especializado.",
  },
  "/servicos/carregadores-marca": {
    title: "Carregadores Personalizados com Sua Marca | Hyper Carga",
    description:
      "Carregadores para veículos elétricos personalizados com a identidade da sua empresa, integrando tecnologia, marca e experiência.",
  },
};

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
};

const RouteSeo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const config = seoByPath[pathname] ?? {
      title: "Página não encontrada | Hyper Carga",
      description: "A página que você procura não foi encontrada.",
      noIndex: true,
    };
    const canonicalPath = config.canonical ?? pathname;
    const canonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;

    document.title = config.title;
    upsertMeta('meta[name="description"]', { name: "description", content: config.description });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: config.noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large",
    });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: config.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: config.description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: DEFAULT_IMAGE });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: config.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: config.description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: DEFAULT_IMAGE });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pathname]);

  return null;
};

export default RouteSeo;
