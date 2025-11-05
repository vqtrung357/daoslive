import { Link } from 'react-router-dom';
import { ConnectWalletButton } from '../wallet/ConnectWalletButton';

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-purple-2/50 backdrop-blur-lg border-b border-fairy-lavender/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-white">
            Fairy Launch ✨
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/discover" className="text-gray-300 hover:text-fairy-gold transition-colors">Discover</Link>
            <Link to="/launch" className="text-gray-300 hover:text-fairy-gold transition-colors">Launch Token</Link>
          </nav>
          <ConnectWalletButton />
        </div>
      </div>
    </header>
  );
};