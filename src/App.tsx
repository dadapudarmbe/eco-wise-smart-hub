
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import WasteClassification from "./pages/WasteClassification";
import EnergyTracker from "./pages/EnergyTracker";
import EcoChatBot from "./pages/EcoChatBot";
import RecyclingCenters from "./pages/RecyclingCenters";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/waste-classification" element={<WasteClassification />} />
            <Route path="/energy-tracker" element={<EnergyTracker />} />
            <Route path="/eco-chatbot" element={<EcoChatBot />} />
            <Route path="/recycling-centers" element={<RecyclingCenters />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
