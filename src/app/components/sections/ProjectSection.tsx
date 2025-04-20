import ProjectCard from "../ui/ProjectCard";

export default function App() {
  return (
    <div className="px-3 space-y-2 mt-20">
      <div id="projects" className="flex flex-col px-5 space-y-5">
        <ProjectCard
          src={"/projects/image4.png"}
          alt={"quantix page"}
          text={"quantix.software"}
          link="https://quantix.software/"
          labels={["Next.js", "Tailwind", "SEO"]}
          description={
            "Developed the official website for Quantix, a company that provides advanced software solutions for business management, inventory control, and automation."
          }
        />
        <ProjectCard
          src={"/projects/image4.png"}
          alt={"nicafinanzas.com"}
          text={"nicafinanzas.com"}
          link="https://nicafinanzas.com/"
          labels={["Open AI API", "Flutter Web", "SEO"]}
          description={
            "Nicafinanzas is a web platform that helps Nicaraguans make smarter financial decisions through an AI-powered chatbot. It offers guidance on savings, loans, and personal finance, tailored to the local context."
          }
        />
      </div>
    </div>
  );
}
