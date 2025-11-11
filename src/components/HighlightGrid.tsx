import { highlightedProjects, Project } from "@/content/projects";

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group relative rounded-3xl overflow-hidden transition-transform hover:scale-105">
    <img src={project.highlightImage} alt={project.name} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-full">
      ${project.marketCap}
    </div>
    <div className="absolute bottom-6 left-6">
      <p className="font-bold text-lg">{project.symbol}</p>
      <p className="text-text-secondary">{project.name}</p>
    </div>
  </div>
);

export const HighlightGrid = () => {
  return (
    <section id="highlights" className="py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">🔥 Featured Projects</h2>
          <a href="#all-projects" className="text-text-secondary hover:text-text-primary">See All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightedProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};