import React from 'react';

const ParticleBackground = () => {
  const particles = Array.from({ length: 50 });

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {particles.map((_, i) => {
        const style = {
          '--d': `${Math.random() * 20 + 10}s`,
          '--x': `${Math.random() * 100}vw`,
          '--y': `${Math.random() * 100}vh`,
          '--s': `${Math.random() * 0.4 + 0.2}rem`,
        } as React.CSSProperties;
        return <div key={i} className="particle" style={style}></div>;
      })}
      <style>{`
        .particle {
          position: absolute;
          background: white;
          border-radius: 50%;
          top: var(--y);
          left: var(--x);
          width: var(--s);
          height: var(--s);
          animation: sparkle var(--d) linear infinite;
          opacity: 0;
        }

        @keyframes sparkle {
          0% { transform: translate(0, 0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translate(20px, -50px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ParticleBackground;