"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({
  src,
  alt,
  text,
  link,
  labels,
  description,
  featured = false,
  onClick,
}: any) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.13)" }}
      className={`transition cursor-pointer bg-white/5 dark:bg-black/10
        rounded-2xl overflow-hidden flex flex-col
        ${featured ? "md:flex-row shadow-xl" : "shadow-md"}
        hover:shadow-2xl`}
      style={featured ? { minHeight: 340 } : {}}
      onClick={onClick}
    >
      <div
        className={`relative ${featured ? "md:w-2/3" : "w-full"} aspect-video min-h-[210px]`}
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

      <div className={`p-6 flex flex-col gap-3 ${featured ? "md:w-1/3" : ""}`}>
        <h3 className={`font-robotoSerif font-semibold text-lg md:text-2xl ${featured ? "text-primary" : ""}`}>
          {text}
        </h3>
        <p className="text-foreground/80 text-sm md:text-base line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {labels.map((label: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-semibold rounded bg-primary/10 text-primary"
            >
              {label}
            </span>
          ))}
        </div>
        {link && (
          <div className="flex gap-3 mt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-md bg-primary text-background text-xs font-bold shadow transition hover:bg-primary/90"
              onClick={e => e.stopPropagation()} // Para que el link no dispare el drawer
            >
              {featured ? "Check this project" : "View Project"}
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
