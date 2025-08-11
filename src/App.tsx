import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import CustomCursor from "@/components/ui/custom-cursor";
import BackToTop from "@/components/ui/back-to-top";
import Index from "./pages/Index";
import About from "./pages/About";
import Businesses from "./pages/Businesses";
import Energy from "./pages/Energy";
import Manufacturing from "./pages/Manufacturing";
import Investors from "./pages/Investors";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Media from "./pages/Media";
import GlobalPresence from "./pages/GlobalPresence";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CustomCursor>
        <Toaster />
        <Sonner />
        <HashRouter>
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
            <Route path="/businesses/energy" element={<Energy />} />
            {/* About Sub-routes */}
            <Route path="/about/leadership" element={<About />} />
            <Route path="/about/milestones" element={<About />} />
            <Route path="/about/csr" element={<About />} />
            {/* Investor Sub-routes */}
            <Route path="/investors/financials" element={<Investors />} />
            <Route path="/investors/governance" element={<Investors />} />
            <Route path="/investors/contact" element={<Investors />} />
                      {/* Other Routes */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/media" element={<Media />} />
            <Route path="/global-presence" element={<GlobalPresence />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
        <BackToTop />
      </CustomCursor>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
