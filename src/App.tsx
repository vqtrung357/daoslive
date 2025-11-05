import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import TokenDetail from "./pages/TokenDetail";
import Launch from "./pages/Launch";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/layout/MainLayout";
import { WalletProvider } from "./components/wallet/WalletContext";

const App = () => (
  <WalletProvider>
    <Sonner theme="dark" position="bottom-right" />
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/token/:id" element={<TokenDetail />} />
          <Route path="/launch" element={<Launch />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  </WalletProvider>
);

export default App;