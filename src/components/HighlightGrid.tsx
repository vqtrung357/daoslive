import { highlightedProjects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export const HighlightGrid = () => {
  return (
    <section id="highlights" className="py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">🔥 Featured Projects</h2>
          <a href="#all-projects" className="text-text-secondary hover:text-text-primary">See All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlightedProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};