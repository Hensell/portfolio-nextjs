"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ProjectData } from "../hooks/useProjectDrawer";
import { Chip } from "@heroui/react";

type ProjectCardProps = ProjectData & {
  featured?: boolean;
  onClick?: () => void;
};

export default function ProjectCard({
  src,
  alt,
  text,
  link,
  labels,
  description,
  private: isPrivate = false, // <-- nuevo nombre local
  featured = false,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)",
      }}
      className={`transition cursor-pointer bg-card/50 backdrop-blur-sm border border-border/50
        rounded-2xl overflow-hidden flex flex-col
        ${featured ? "md:flex-row shadow-xl" : "shadow-md"}
        hover:shadow-2xl group`}
      style={featured ? { minHeight: 340 } : {}}
      onClick={onClick}
    >
      <div
        className={`relative ${featured ? "md:w-2/3" : "w-full"
          } aspect-video min-h-[210px]`}
      >
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-500 group-hover:scale-105"
          priority={featured}
        />
      </div>

      <div
        className={`p-6 flex flex-col flex-1 gap-3 ${featured ? "md:w-1/3" : ""
          }`}
      >
        <h3
          className={`font-robotoSerif font-semibold text-lg md:text-2xl ${featured ? "text-primary" : ""
            }`}
        >
          {text}
        </h3>
        <p
          className={`text-foreground/80 text-sm md:text-base ${!featured && "line-clamp-3"
            }`}
        >
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {labels.map((label, i) => (
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
        {/* Botón o mensaje privado */}
        {link ? (
          <div className="flex gap-3 mt-auto">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-md bg-primary text-background text-xs font-bold shadow transition hover:bg-primary/90"
              onClick={(e) => e.stopPropagation()}
            >
              {link.includes("github.com")
                ? "View code on GitHub"
                : "View Project"}
            </a>
          </div>
        ) : isPrivate ? (
          <div className="mt-auto text-xs italic text-foreground/60">
            Private project (not publicly available)
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}
