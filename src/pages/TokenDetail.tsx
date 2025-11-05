import { useParams } from 'react-router-dom';

const TokenDetail = () => {
  const { id } = useParams();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-5xl font-bold text-fairy-gold mb-4">Token Detail</h1>
      <p className="text-xl text-fairy-lavender">Details for token: <span className="text-white">{id}</span></p>
    </div>
  );
};

export default TokenDetail;