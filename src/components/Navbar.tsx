import { Button } from "./ui/button";

interface NavbarProps {
  isConnected: boolean;
  address: string | null;
  onConnectClick: () => void;
}

export const Navbar = ({ isConnected, address, onConnectClick }: NavbarProps) => {
  return (
    <header className="sticky top-4 z-50">
      <div className="container mx-auto max-w-6xl">
        <nav className="flex items-center justify-between bg-surface/50 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-3 h-[70px]">
          <div className="flex items-center gap-8">
            <img src="/assets/logo.svg" alt="Daos Live Logo" className="h-8" />
            <div className="hidden md:flex items-center gap-6 text-text-secondary">
              <a href="#how-it-works" className="hover:text-text-primary transition-colors">How it Works</a>
              <a href="#create-fund" className="hover:text-text-primary transition-colors">Create Fund</a>
            </div>
          </div>
          <Button 
            onClick={onConnectClick}
            className="bg-white/5 border border-white/10 hover:bg-white/20 text-text-primary rounded-lg"
          >
            {isConnected ? address : "Connect"}
          </Button>
        </nav>
      </div>
    </header>
  );
};