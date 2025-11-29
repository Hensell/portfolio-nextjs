"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ProjectData } from "../hooks/useProjectDrawer";

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
  private: isPrivate = false,
  featured = false,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: featured ? 1.01 : 1.02,
      }}
      className={`group transition cursor-pointer bg-card/80 backdrop-blur-sm border border-border/50
        rounded-3xl overflow-hidden flex flex-col
        ${featured ? "md:flex-row shadow-2xl shadow-primary/10" : "shadow-lg"}
        hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30`}
      style={featured ? { minHeight: 360 } : {}}
      onClick={onClick}
    >
      <div
        className={`relative ${featured ? "md:w-2/3" : "w-full"
          } aspect-video min-h-[220px] overflow-hidden`}
      >
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-700 group-hover:scale-110"
          priority={featured}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div
        className={`p-8 flex flex-col flex-1 gap-4 ${featured ? "md:w-1/3" : ""
          }`}
      >
        <h3
          className={`font-display font-bold ${featured ? "text-3xl text-primary" : "text-2xl text-foreground"
            }`}
        >
          {text}
        </h3>
        <p
          className={`text-foreground/70 text-base leading-relaxed ${!featured && "line-clamp-3"
            }`}
        >
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {labels.map((label, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-secondary-background/50 border border-border/30 text-xs font-medium text-foreground/80"
            >
              {label}
            </span>
          ))}
        </div>
        {link ? (
          <div className="flex gap-3 mt-auto">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-bold shadow-md hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
              onClick={(e) => e.stopPropagation()}
            >
              {link.includes("github.com")
                ? "View Code →"
                : "View Project →"}
            </a>
          </div>
        ) : isPrivate ? (
          <div className="mt-auto text-xs italic text-muted-foreground">
            Private project (not publicly available)
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}
