import ProjectCard from "../ui/ProjectCard";

export default function App() {
  return (
    <div
      id="projects"
      className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] px-12 mt-10"
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <ProjectCard
          key={index}
          src={"/projects/image4.png"}
          alt={"quantix page"}
          text={"QUANTIX"}
          link="https://quantix-page.pages.dev/"
          label={"WEBSITE"}
          date={"02/2025"}
        />
      ))}
    </div>
  );
}
