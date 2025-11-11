import { highlightedProjects } from "@/content/projects";

const TickerItem = ({ project }: { project: { symbol: string, marketCap: string, avatar: string } }) => (
  <div className="flex-shrink-0 flex items-center gap-3 bg-surface/50 border border-white/10 rounded-lg px-4 py-2 mx-4">
    <img src={project.avatar} alt={project.symbol} className="w-6 h-6 rounded-full" />
    <span className="font-bold">{project.symbol}</span>
    <span className="text-text-secondary">${project.marketCap}</span>
  </div>
);

export const ScrollingTicker = () => {
  const tickerItems = [...highlightedProjects, ...highlightedProjects]; // Duplicate for seamless loop

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex animate-scroll">
        {tickerItems.map((project, index) => (
          <TickerItem key={`${project.id}-${index}`} project={project} />
        ))}
      </div>
    </div>
  );
};