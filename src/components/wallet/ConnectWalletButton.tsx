import { useWallet } from './WalletContext';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

export const ConnectWalletButton = () => {
  const { isConnected, walletAddress, disconnectWallet, setIsModalOpen } = useWallet();

  const handleCopy = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress);
      toast.success("Copied to stardust ✨");
    }
  };

  if (isConnected && walletAddress) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-fairy-lavender/20 border border-fairy-lavender/50 text-white hover:bg-fairy-lavender/30">
            ✨ {walletAddress}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-dark-purple-2 border-fairy-lavender/20 text-white">
          <DropdownMenuItem onClick={handleCopy} className="cursor-pointer">Copy Address</DropdownMenuItem>
          <DropdownMenuItem onClick={disconnectWallet} className="cursor-pointer">Disconnect</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Button
      onClick={() => setIsModalOpen(true)}
      className="bg-fairy-lavender text-dark-purple-1 font-bold hover:bg-fairy-lavender/80 shadow-glow-primary"
    >
      Connect Wallet
    </Button>
  );
};