import React, { createContext, useState, useContext, ReactNode } from 'react';
import { toast } from "sonner";

interface WalletContextType {
  isConnected: boolean;
  walletAddress: string | null;
  connectWallet: (walletName: string) => void;
  disconnectWallet: () => void;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const connectWallet = (walletName: string) => {
    console.log(`Connecting with ${walletName}...`);
    const fakeAddress = `7Gs9...${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    setWalletAddress(fakeAddress);
    setIsConnected(true);
    setIsModalOpen(false);
    toast.success(`Connected with ${walletName}! ✨`);
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    setIsConnected(false);
    toast.info("Wallet disconnected.");
  };

  return (
    <WalletContext.Provider value={{ isConnected, walletAddress, connectWallet, disconnectWallet, isModalOpen, setIsModalOpen }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};