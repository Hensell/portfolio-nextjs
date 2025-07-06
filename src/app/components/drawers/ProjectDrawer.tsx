"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Link,
  Chip,
} from "@heroui/react";
import Image from "next/image";
import { ProjectData } from "../hooks/useProjectDrawer";

interface ProjectDrawerProps {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
  project: ProjectData | null;
}
// ...importaciones y tipos

export default function ProjectDrawer({
  isOpen,
  onOpenChange,
  onClose,
  project,
}: ProjectDrawerProps) {
  if (!project) return null;
  const isPrivate = project.private ?? false;

  return (
    <Drawer
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
      placement="right"
      size="md"
    >
      <DrawerContent>
        {() => (
          <>
            <DrawerHeader className="flex flex-col gap-1 font-robotoSerif text-xl font-semibold">
              {project.text}
            </DrawerHeader>

            <DrawerBody>
              <div className="relative w-full h-[200px] mb-4 rounded overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <p className="text-sm font-roboto text-foreground/80 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.labels.map((label, i) => (
                  <Chip
                    key={i}
                    size="sm"
                    variant="flat"
                    classNames={{
                      base: "bg-secondarybg",
                      content: "font-roboto font-normal",
                    }}
                  >
                    {label}
                  </Chip>
                ))}
              </div>
            </DrawerBody>

            <DrawerFooter>
              <Button color="default" variant="light" onPress={onClose}>
                Close
              </Button>
              {project.link ? (
                <Button
                  as={Link}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                >
                  {project.link.includes("github.com")
                    ? "View code on GitHub"
                    : "View Project"}
                </Button>
              ) : isPrivate ? (
                <span className="ml-2 text-xs italic text-foreground/60">
                  Private project (not publicly available)
                </span>
              ) : null}
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
