import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Businesses from "./pages/Businesses";
import Manufacturing from "./pages/Manufacturing";
import Investors from "./pages/Investors";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import GlobalPresence from "./pages/GlobalPresence";
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
          <Route path="/about" element={<About />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/contact" element={<Contact />} />
          {/* Business Vertical Routes */}
          <Route path="/businesses/manufacturing" element={<Manufacturing />} />
          <Route path="/businesses/real-estate" element={<Businesses />} />
          <Route path="/businesses/defence" element={<Businesses />} />
          <Route path="/businesses/energy" element={<Businesses />} />
          <Route path="/businesses/petrochemicals" element={<Businesses />} />
          <Route path="/businesses/offshore" element={<Businesses />} />
          {/* About Sub-routes */}
          <Route path="/about/leadership" element={<About />} />
          <Route path="/about/milestones" element={<About />} />
          <Route path="/about/csr" element={<About />} />
          {/* Investor Sub-routes */}
          <Route path="/investors/financials" element={<Investors />} />
          <Route path="/investors/governance" element={<Investors />} />
          <Route path="/investors/contact" element={<Investors />} />
          {/* Other Routes */}
          <Route path="/careers" element={<Contact />} />
          <Route path="/media" element={<Media />} />
          <Route path="/global-presence" element={<GlobalPresence />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
