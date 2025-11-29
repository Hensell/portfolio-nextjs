"use client";
import { useState } from "react";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../data/projects";
import ProjectDrawer from "../drawers/ProjectDrawer";
import type { ProjectData } from "../hooks/useProjectDrawer";

const stacks = ["All", "Flutter", "Next.JS", "Node.JS"];

export default function ProjectSection() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.labels.includes(filter));

  const [featured, ...rest] = filteredProjects;

  const handleCardClick = (project: ProjectData) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  return (
    <section
      id="projects"
      className="w-full py-32 px-5 sm:px-12 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-primary">Projects</span> that actually matter
          </h2>
          <p className="text-muted-foreground text-lg">Real-world solutions I&apos;ve built</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {stacks.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${filter === s
                ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30"
                : "bg-secondary-background border border-border/50 text-foreground/70 hover:border-primary/30 hover:shadow-md"
                }`}
            >
              {s}
            </button>
          ))}
        </div>

        {featured && (
          <div className="mb-20">
            <ProjectCard
              {...featured}
              featured
              onClick={() => handleCardClick(featured)}
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((project, i) => (
            <ProjectCard
              key={i}
              {...project}
              onClick={() => handleCardClick(project)}
            />
          ))}
        </div>
      </div>

      <ProjectDrawer
        isOpen={isOpen}
        onOpenChange={() => setIsOpen(!isOpen)}
        onClose={() => setIsOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}
