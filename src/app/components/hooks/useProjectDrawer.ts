"use client";
import { useState } from "react";
import { useDisclosure } from "@heroui/react";

export interface ProjectData {
  src: string;
  alt: string;
  text: string;
  link: string;
  labels: string[];
  description: string;
}

export function useProjectDrawer() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  const openDrawer = (project: ProjectData) => {
    setSelectedProject(project);
    onOpen();
  };

  return {
    isOpen,
    onClose,
    onOpenChange,
    selectedProject,
    openDrawer,
  };
}
