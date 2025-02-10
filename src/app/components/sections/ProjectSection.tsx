import ProjectCard from "../ui/ProjectCard";

export default function App() {
  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  sm:px-16 px-0">
      {Array.from({ length: 12 }).map((_, index) => (
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
