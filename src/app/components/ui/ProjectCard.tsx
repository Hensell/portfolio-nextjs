import { Link, Chip } from "@heroui/react";
import Image from "next/image";

interface ProjectCardProps {
  src: string;
  alt: string;
  text: string;
  height?: string;
  link: string;
  label: string;
  date: string;
}

export default function ProjectCard({
  src,
  alt,
  text,
  height = "150px",
  link,
  label,
  date,
}: ProjectCardProps) {
  return (
    <Link isExternal href={link} className="flex flex-col">
      <div
        className="relative w-full overflow-hidden bg-secondary-50"
        style={{ height }}
      >
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="z-0 transition duration-1000 hover:scale-105"
        />
      </div>

      <Chip
        size="sm"
        radius="none"
        className="my-2 font-robotoSerif font-thin self-start bg-secondary-50"
      >
        {label}
      </Chip>

      <div className="flex flex-row justify-between w-full ">
        <p className="font-roboto font-normal text-md"> {text}</p>
        <p className="font-robotoSerif font-thin text-sm">{date}</p>
      </div>
    </Link>
  );
}
