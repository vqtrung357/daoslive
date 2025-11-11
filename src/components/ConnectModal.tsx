import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: () => void;
}

export const ConnectModal = ({ isOpen, onClose, onConnect }: ConnectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-surface/80 backdrop-blur-lg border-white/10 text-text-primary">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Connect</DialogTitle>
          <DialogDescription className="text-center text-text-secondary">
            Choose your preferred connection method.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button onClick={onConnect} variant="outline" className="w-full justify-center text-lg py-6 bg-white/5 border-white/10 hover:bg-white/20">
            Connect X
          </Button>
          <Button onClick={onConnect} variant="outline" className="w-full justify-center text-lg py-6 bg-white/5 border-white/10 hover:bg-white/20">
            Connect Wallet
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};