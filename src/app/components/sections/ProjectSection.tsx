import ProjectCard from "../ui/ProjectCard";

export default function App() {
  return (
    <div
      id="projects"
      className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:px-12 px-0 mt-10"
    >
      {Array.from({ length: 4 }).map((_, index) => (
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
