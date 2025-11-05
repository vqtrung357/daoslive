import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useWallet } from './WalletContext';
import { Button } from "@/components/ui/button";

const wallets = [
  { name: "Phantom", icon: "👻" },
  { name: "Backpack", icon: "🎒" },
  { name: "Solflare", icon: "☀️" },
];

export const WalletConnectModal = () => {
  const { isModalOpen, setIsModalOpen, connectWallet } = useWallet();

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="bg-dark-purple-2/80 backdrop-blur-lg border-fairy-lavender/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-fairy-gold text-2xl text-center">Connect a Wallet</DialogTitle>
          <DialogDescription className="text-center text-gray-400">
            Choose your fairy-powered wallet to continue.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {wallets.map((wallet) => (
            <Button
              key={wallet.name}
              onClick={() => connectWallet(wallet.name)}
              variant="outline"
              className="w-full justify-start text-lg py-6 bg-white/5 border-white/10 hover:bg-white/20 hover:text-white"
            >
              <span className="mr-4 text-2xl">{wallet.icon}</span> {wallet.name}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};