import React, { useState, useEffect } from "react";
import { Project } from "@/content/projects";
import { useIsMobile } from "@/hooks/use-mobile";
import { Wallet, BarChart2, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const parseValue = (valueStr?: string): number => {
  if (!valueStr) return 0;
  const value = parseFloat(valueStr.replace(/[^0-9.]/g, ''));
  const multiplier = valueStr.slice(-1).toUpperCase();
  if (multiplier === 'M') return value * 1_000_000;
  if (multiplier === 'K') return value * 1_000;
  return value;
};

const StatusPill = ({ status }: { status: Project['status'] }) => {
  const statusStyles = {
    Live: "border-l-accent-teal",
    Raising: "border-l-accent-purple",
    Closed: "border-l-text-secondary/50",
  };
  return (
    <div className={cn("text-xs font-bold px-2 py-1 border-l-2", statusStyles[status!])}>
      {status}
    </div>
  );
};

const MetricChip = ({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value?: string }) => (
  <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1.5 text-xs">
    <Icon className="w-3 h-3 text-accent-teal" />
    <span className="text-text-secondary">{label}</span>
    <span className="font-bold text-text-primary">{value}</span>
  </div>
);

const ProgressBar = ({ raised, marketCap }: { raised?: string, marketCap?: string }) => {
  if (!raised || !marketCap) return null;
  const raisedValue = parseValue(raised);
  const capValue = parseValue(marketCap);
  const targetValue = capValue * 0.05;
  const progress = targetValue > 0 ? Math.min((raisedValue / targetValue) * 100, 100) : 0;

  return (
    <div className="px-4 pt-2">
      <div className="flex justify-between items-center mb-1 text-xs text-text-secondary">
        <span>Progress</span>
        <span>{progress.toFixed(0)}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-1.5">
        <div
          className="bg-gradient-to-r from-accent-purple to-accent-pink h-1.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export const ProjectCard = ({ project }: { project: Project }) => {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(isMobile);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsExpanded(isMobile);
  }, [isMobile]);

  const handleToggleExpand = () => {
    if (isMobile) setIsExpanded(!isExpanded);
  };

  const infoLayerHeight = isMobile 
    ? (isExpanded ? 'h-[70%]' : 'h-[40%]')
    : 'h-[40%] group-hover:h-[70%]';

  return (
    <div className="group relative transition-transform duration-300 ease-in-out md:hover:-translate-y-1 md:hover:scale-[1.02]" onClick={handleToggleExpand}>
      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-accent-purple via-accent-pink to-accent-teal opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-[length:200%_200%] animate-gradient-sweep" />
      <div className="relative rounded-3xl overflow-hidden bg-surface/70 backdrop-blur-xl border border-white/10 h-full">
        <div className="relative aspect-square">
          {imageError ? (
            <div className="absolute inset-0 bg-gradient-to-br from-background via-accent-purple to-accent-pink flex items-center justify-center">
              <span className="font-bold text-4xl text-white/80">{project.symbol}</span>
            </div>
          ) : (
            <img
              src={project.image}
              alt={`${project.name} cover image`}
              className="w-full h-full object-cover scale-[1.02] transition-transform duration-500 md:group-hover:scale-105 md:group-hover:brightness-90"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-[radial-gradient(circle_at_0%_0%,_rgba(176,106,249,0.2),_transparent_40%)]" />

          <div className="absolute top-4 right-4 bg-surface/50 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 text-xs font-bold">
            ${project.marketCap}
          </div>
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <div className="bg-surface/50 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 text-xs font-bold">{project.category}</div>
            <StatusPill status={project.status} />
          </div>
        </div>

        <div className={cn("absolute bottom-0 left-0 right-0 bg-surface/50 backdrop-blur-xl transition-[height] duration-500 ease-in-out flex flex-col justify-end pb-4", infoLayerHeight)}>
          <div className="px-4 pb-3">
            <div className="flex items-baseline gap-2">
              <h3 className="font-bold text-xl tracking-tight">{project.symbol}</h3>
              <p className="text-text-secondary">{project.name}</p>
            </div>
            <p className="text-sm text-text-secondary truncate mt-1">{project.tagline}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 px-4">
            <MetricChip icon={Wallet} label="Raised" value={`$${project.raised}`} />
            <MetricChip icon={BarChart2} label="24h Vol" value={`$${project.volume24h}`} />
            <MetricChip icon={Users} label="Participants" value={project.participants?.toLocaleString()} />
          </div>
          {project.status === 'Raising' && <ProgressBar raised={project.raised} marketCap={project.marketCap} />}
        </div>
      </div>
    </div>
  );
};