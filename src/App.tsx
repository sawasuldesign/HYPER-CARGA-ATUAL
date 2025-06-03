
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Motoristas from "./pages/Motoristas";
import Carregadores from "./pages/Carregadores";
import AluguelCarregadores from "./pages/AluguelCarregadores";
import FrotasEmpresas from "./pages/FrotasEmpresas";
import CarregadoresFrotasNegocios from "./pages/services/CarregadoresFrotasNegocios";
import CarregadoresCasa from "./pages/services/CarregadoresCasa";
import ProjetosInstalacao from "./pages/services/ProjetosInstalacao";
import CarregadoresMarca from "./pages/services/CarregadoresMarca";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solucoes/motoristas" element={<Motoristas />} />
          <Route path="/solucoes/carregadores" element={<Carregadores />} />
          <Route path="/servicos/aluguel" element={<AluguelCarregadores />} />
          <Route path="/solucoes/frotas" element={<FrotasEmpresas />} />
          <Route path="/servicos/carregadores-frotas" element={<CarregadoresFrotasNegocios />} />
          <Route path="/servicos/carregadores-casa" element={<CarregadoresCasa />} />
          <Route path="/servicos/projetos-instalacao" element={<ProjetosInstalacao />} />
          <Route path="/servicos/carregadores-marca" element={<CarregadoresMarca />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
