"use client";
import ProjectDrawer from "../drawers/ProjectDrawer";
import { useProjectDrawer } from "../hooks/useProjectDrawer";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../data/projects";

export default function ProjectSection() {
  const { isOpen, onOpenChange, onClose, selectedProject, openDrawer } =
    useProjectDrawer();

  return (
    <div className="px-3 space-y-2 mt-20">
      <div id="projects" className="flex flex-col px-5 space-y-5 scroll-mt-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onClick={() => openDrawer(project)}
          />
        ))}
      </div>

      <ProjectDrawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
        project={selectedProject}
      />
    </div>
  );
}
