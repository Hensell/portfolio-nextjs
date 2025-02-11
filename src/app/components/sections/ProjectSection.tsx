import ProjectCard from "../ui/ProjectCard";

export default function App() {
  return (
    <div
      id="projects"
      className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  px-12"
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <ProjectCard
          key={index}
          src={"/projects/quantixPage.png"}
          alt={"quantix page"}
          text={"QUANTIX"}
          link="https://quantix-page.pages.dev/"
        />
      ))}
    </div>
  );
}
