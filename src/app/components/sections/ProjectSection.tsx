"use client";
import { useState } from "react";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../data/projects";
import ProjectDrawer from "../drawers/ProjectDrawer"; 
import type { ProjectData } from "../hooks/useProjectDrawer";

const stacks = [
  "All","Flutter", "Next.JS","Node.JS"
];

export default function ProjectSection() {
  const [filter, setFilter] = useState("All");
  // <-- TIPO explícito aquí 👇
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.labels.includes(filter));

  // Most featured project
  const [featured, ...rest] = filteredProjects;

  // Cuando das click, abre el drawer con ese proyecto
  const handleCardClick = (project: ProjectData) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  return (
    <section id="projects" className="w-full py-24 px-5 sm:px-12 bg-background text-foreground">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center tracking-tight font-robotoSerif scroll-mt-24">
        <span className="text-primary">Projects</span> that actually matter
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {stacks.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-2 rounded-full border text-sm font-semibold transition
              ${
                filter === s
                  ? "bg-primary text-background border-primary"
                  : "bg-transparent border-foreground/20 text-foreground/70 hover:bg-foreground/10"
              }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Featured Project */}
      {featured && (
        <div className="mb-16">
          <ProjectCard
            {...featured}
            featured
            onClick={() => handleCardClick(featured)}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {rest.map((project, i) => (
          <ProjectCard
            key={i}
            {...project}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>

      {/* Drawer */}
      <ProjectDrawer
        isOpen={isOpen}
        onOpenChange={() => setIsOpen(!isOpen)}
        onClose={() => setIsOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}
