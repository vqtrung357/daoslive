import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HighlightGrid } from "@/components/HighlightGrid";
import { ProjectTable } from "@/components/ProjectTable";
import { ScrollingTicker } from "@/components/ScrollingTicker";
import { Footer } from "@/components/Footer";
import { ConnectModal } from "@/components/ConnectModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

  const handleConnect = () => {
    setIsConnected(true);
    setAddress("0xAcA...39c0");
    setIsModalOpen(false);
  };

  return (
    <div className="bg-background">
      <Navbar 
        isConnected={isConnected} 
        address={address} 
        onConnectClick={() => setIsModalOpen(true)} 
      />
      <main>
        <HeroSection />
        <HighlightGrid />
        <ProjectTable />
        <ScrollingTicker />
      </main>
      <Footer />
      <ConnectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConnect={handleConnect} 
      />
    </div>
  );
};

export default Home;