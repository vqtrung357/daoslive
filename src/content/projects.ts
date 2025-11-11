export interface Project {
  id: string;
  symbol: string;
  name: string;
  marketCap: string;
  avatar: string;
  
  // For new highlight cards
  category?: string;
  status?: 'Live' | 'Raising' | 'Closed';
  raised?: string;
  volume24h?: string;
  tagline?: string;
  image?: string;

  // For old highlight cards (to be removed but keep for now)
  highlightImage: string;

  // For project table
  price?: string;
  change?: number;
  volume?: string;
  participants?: number;
}

export const highlightedProjects: Project[] = [
  { 
    id: 'agent', 
    symbol: '$AGENT', 
    name: 'AgentAlgo', 
    category: 'AI Infrastructure', 
    status: 'Live', 
    marketCap: '87.7M', 
    raised: '1.2M', 
    volume24h: '450K', 
    participants: 3210, 
    tagline: 'Decentralized AI agent network for automated data flows.', 
    image: '/assets/projects/highlights/highlight1.png',
    highlightImage: '/assets/highlight1.png', 
    avatar: '/assets/avatar1.png' 
  },
  { 
    id: 'aixx', 
    symbol: '$AIXX', 
    name: 'NeuralDAO', 
    category: 'Compute & Cloud', 
    status: 'Raising', 
    marketCap: '64.2M', 
    raised: '980K', 
    volume24h: '220K', 
    participants: 2980, 
    tagline: 'Community DAO powering neural compute for decentralized apps.', 
    image: '/assets/projects/highlights/highlight2.png',
    highlightImage: '/assets/highlight2.png', 
    avatar: '/assets/avatar2.png' 
  },
  { 
    id: 'mint', 
    symbol: '$MINT', 
    name: 'MintLab', 
    category: 'NFT Labs', 
    status: 'Closed', 
    marketCap: '32.5M', 
    raised: '2.5M', 
    volume24h: '150K', 
    participants: 1840, 
    tagline: 'Pixel-art inspired NFT minting ecosystem for creators.', 
    image: '/assets/projects/highlights/highlight3.png',
    highlightImage: '/assets/highlight3.png', 
    avatar: '/assets/avatar3.png' 
  },
  { 
    id: 'sent', 
    symbol: '$SENT', 
    name: 'Sentinel', 
    category: 'Security', 
    status: 'Live', 
    marketCap: '19.8M', 
    raised: '1.0M', 
    volume24h: '360K', 
    participants: 2120, 
    tagline: 'Autonomous protocol defense network protecting DeFi from exploits.', 
    image: '/assets/projects/highlights/highlight4.png',
    highlightImage: '/assets/highlight4.png', 
    avatar: '/assets/avatar4.png' 
  },
  { 
    id: 'star', 
    symbol: '$STAR', 
    name: 'StarStack', 
    category: 'Infrastructure', 
    status: 'Raising', 
    marketCap: '51.4M', 
    raised: '760K', 
    volume24h: '410K', 
    participants: 2490, 
    tagline: 'Modular smart contract stack DAO for governance and composability.', 
    image: '/assets/projects/highlights/highlight5.png',
    highlightImage: '/assets/highlight5.png', 
    avatar: '/assets/avatar5.png' 
  },
  { 
    id: 'aicc', 
    symbol: '$AICC', 
    name: 'AccelNet', 
    category: 'Accelerator', 
    status: 'Live', 
    marketCap: '88.7M', 
    raised: '1.5M', 
    volume24h: '520K', 
    participants: 3500, 
    tagline: 'DAO accelerator bridging early-stage founders with liquidity.', 
    image: '/assets/projects/highlights/highlight6.png',
    highlightImage: '/assets/highlight6.png', 
    avatar: '/assets/avatar6.png' 
  },
];

export const allProjects: Project[] = [
  { id: 'alfz', symbol: '$ALFZ', name: 'AlphaZone', price: '103,026.27', change: 2.5, marketCap: '1,310,190,158', volume: '17,062,189', participants: 2333, avatar: '/assets/avatar7.png', highlightImage: '' },
  { id: 'aicc2', symbol: '$AICC', name: 'AccelNet', price: '88,700.00', change: -1.2, marketCap: '1,120,000,000', volume: '15,300,000', participants: 1987, avatar: '/assets/avatar6.png', highlightImage: '' },
  { id: 'sent2', symbol: '$SENT', name: 'Sentinel', price: '19,800.00', change: 3.1, marketCap: '250,000,000', volume: '5,200,000', participants: 1500, avatar: '/assets/avatar4.png', highlightImage: '' },
  { id: 'mint2', symbol: '$MINT', name: 'MintLab', price: '32,500.00', change: 0.5, marketCap: '410,000,000', volume: '8,900,000', participants: 1245, avatar: '/assets/avatar3.png', highlightImage: '' },
  { id: 'aixx2', symbol: '$AIXX', name: 'NeuralDAO', price: '64,200.00', change: -4.1, marketCap: '815,000,000', volume: '11,500,000', participants: 2100, avatar: '/assets/avatar2.png', highlightImage: '' },
  { id: 'star2', symbol: '$STAR', name: 'StarStack', price: '51,400.00', change: 1.8, marketCap: '650,000,000', volume: '9,800,000', participants: 1800, avatar: '/assets/avatar5.png', highlightImage: '' },
  { id: 'wave', symbol: '$WAVE', name: 'WaveForm', price: '45,000.00', change: 2.2, marketCap: '570,000,000', volume: '7,100,000', participants: 1650, avatar: '/assets/avatar8.png', highlightImage: '' },
  { id: 'core', symbol: '$CORE', name: 'CoreUnit', price: '72,000.00', change: -0.8, marketCap: '910,000,000', volume: '12,400,000', participants: 2200, avatar: '/assets/avatar9.png', highlightImage: '' },
  { id: 'gems', symbol: '$GEMS', name: 'GemStone', price: '28,000.00', change: 5.3, marketCap: '350,000,000', volume: '6,300,000', participants: 1100, avatar: '/assets/avatar10.png', highlightImage: '' },
  { id: 'flux', symbol: '$FLUX', name: 'FluxCap', price: '95,000.00', change: -2.5, marketCap: '1,200,000,000', volume: '16,000,000', participants: 2500, avatar: '/assets/avatar11.png', highlightImage: '' },
];