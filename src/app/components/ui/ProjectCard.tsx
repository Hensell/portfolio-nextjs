import { Link } from "@heroui/react";
import Image from "next/image";

interface ProjectCardProps {
  src: string;
  alt: string;
  text: string;
  height?: string;
  link: string;
}

export default function ProjectCard({
  src,
  alt,
  text,
  height = "450px",
  link,
}: ProjectCardProps) {
  return (
    <Link isExternal href={link}>
      <div className="relative w-full overflow-hidden " style={{ height }}>
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="z-0"
        />

        <div className="absolute inset-0 bg-foreground opacity-75 dark:bg-black z-10" />

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h2 className="text-white text-3xl font-normal text-center px-4 font-robotoSerif">
            {text}
          </h2>
        </div>
      </div>
    </Link>
  );
}
