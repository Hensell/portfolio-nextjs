"use client";
import { Chip } from "@heroui/react";
import Image from "next/image";

interface ProjectCardProps {
  src: string;
  alt: string;
  text: string;
  height?: string;
  link: string;
  labels: string[];
  description: string;
  onClick?: () => void;
}

export default function ProjectCard({
  src,
  alt,
  text,
  height = "120px",
  labels,
  description,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex flex-col space-y-5 sm:flex-row justify-center transition duration-500 w-full p-2 rounded-lg bg-white/0 hover:bg-foreground/10 hover:backdrop-blur-md"
    >
      <div className="relative overflow-hidden w-[300px]" style={{ height }}>
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="z-0 transition duration-1000 hover:scale-110"
        />
      </div>

      <div className="ml-3 flex flex-col justify-between w-full">
        <div className="px-1 space-y-1">
          <p className="font-robotoSerif font-semibold text-base">{text}</p>
          <p className="font-roboto font-extralight text-sm">
            {description.length > 120 ? (
              <>
                {description.slice(0, 120)}
                <span className="text-primary underline font-semibold ml-1 hover:opacity-80">
                  ...click to view more
                </span>
              </>
            ) : (
              description
            )}
          </p>
        </div>

        <div className="flex flex-wrap gap-1 mt-2 px-1">
          {labels.map((label, index) => (
            <Chip
              key={index}
              size="sm"
              radius="none"
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
      </div>
    </div>
  );
}
