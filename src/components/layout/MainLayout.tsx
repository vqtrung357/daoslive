import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import ParticleBackground from '../ui/ParticleBackground';
import { WalletConnectModal } from '../wallet/WalletConnectModal';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <WalletConnectModal />
    </div>
  );
};

export default MainLayout;