import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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
          <a href="/" className="flex items-center gap-3">
            <img src="/assets/logo.svg" alt="Daos Live Logo" className="h-8" />
            <span className="hidden sm:inline font-bold text-xl text-text-primary">Daos Live</span>
          </a>

          <div className="hidden md:flex items-center gap-6 text-text-secondary">
            <a href="#how-it-works" className="hover:text-text-primary transition-colors">How it Works</a>
            <a href="#create-fund" className="hover:text-text-primary transition-colors">Create Fund</a>
          </div>

          <div className="flex items-center gap-2">
            <Button 
              onClick={onConnectClick}
              className="bg-white/5 border border-white/10 hover:bg-white/20 text-text-primary rounded-lg"
            >
              {isConnected ? address : "Connect"}
            </Button>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-text-primary hover:bg-white/10">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-surface border-l-white/10 text-text-primary">
                  <nav className="flex flex-col gap-6 pt-12 text-lg">
                    <a href="#how-it-works" className="hover:text-text-primary transition-colors">How it Works</a>
                    <a href="#create-fund" className="hover:text-text-primary transition-colors">Create Fund</a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};