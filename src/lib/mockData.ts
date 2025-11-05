export interface FairyToken {
  id: string;
  name: string;
  ticker: string;
  avatarUrl: string;
  marketCap: string;
  volume: string;
  change: string;
  badges: ('Mooning' | 'Hot' | 'Fairy Blessed' | 'Lucky')[];
  lore: string;
}

export const mockTokens: FairyToken[] = [
  {
    id: 'stardust-dream',
    name: 'Stardust Dream',
    ticker: 'STDR',
    avatarUrl: 'https://placehold.co/100x100/B79CFF/FFFFFF?text=🧚',
    marketCap: '1.2M',
    volume: '250K',
    change: '+12.5%',
    badges: ['Fairy Blessed', 'Hot'],
    lore: 'Born from a whisper of a sleeping star, Stardust Dream tokens carry the essence of cosmic wishes. Holders are said to experience unusually sweet dreams.'
  },
  {
    id: 'moonpetal',
    name: 'Moonpetal',
    ticker: 'MPTL',
    avatarUrl: 'https://placehold.co/100x100/FFBCEC/000000?text=🌙',
    marketCap: '800K',
    volume: '120K',
    change: '+45.2%',
    badges: ['Mooning'],
    lore: 'These tokens are said to be crystallized petals from the rare lunar flowers of the Whispering Woods. They bloom only under the light of a blue moon.'
  },
  {
    id: 'goldenshimmer',
    name: 'Golden Shimmer',
    ticker: 'GLDS',
    avatarUrl: 'https://placehold.co/100x100/FFD876/000000?text=✨',
    marketCap: '2.5M',
    volume: '400K',
    change: '-2.1%',
    badges: ['Lucky'],
    lore: 'Forged in the heart of a fairy\'s forge, Golden Shimmer captures the warmth of the first sunrise. It is believed to bring good fortune to those who hold it.'
  },
];