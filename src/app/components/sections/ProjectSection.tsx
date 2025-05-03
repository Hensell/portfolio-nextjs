import ProjectCard from "../ui/ProjectCard";

export default function App() {
  return (
    <div className="px-3 space-y-2 mt-20">
      <div id="projects" className="flex flex-col px-5 space-y-5">
        <ProjectCard
          src={"/projects/quantixPage.png"}
          alt={"quantix page"}
          text={"quantix.software"}
          link="https://quantix.software/"
          labels={["Next.js", "Tailwind", "SEO"]}
          description={
            "Developed the official website for Quantix, a company that provides advanced software solutions for business management, inventory control, and automation."
          }
        />
        <ProjectCard
          src={"/projects/nicafinanzas.png"}
          alt={"nicafinanzas.com"}
          text={"nicafinanzas.com"}
          link="https://nicafinanzas.com/"
          labels={["OpenAI API", "Flutter Web", "SEO"]}
          description={
            "Nicafinanzas is a web platform that helps Nicaraguans make smarter financial decisions through an AI-powered chatbot. It offers guidance on savings, loans, and personal finance, tailored to the local context."
          }
        />
        <ProjectCard
          src={"/projects/quantixai.png"}
          alt={"quantixai"}
          text={"Quantix Chat bot AI API"}
          link="https://github.com/Hensell/quantix-page-ai"
          labels={["OpenAI API", "Cloudflare Workers", "Node.JS", "Hono.JS"]}
          description={
            "Open-source API built with Cloudflare Workers, Hono, and TypeScript to easily connect any frontend to OpenAI’s Assistant API for real-time AI-powered chatbots."
          }
        />
        <ProjectCard
          src={"/projects/chatbotdemo.png"}
          alt={"demo for a chat bot with ai"}
          text={"Quantix Chatbot – Cloudflare-Powered OpenAI Demo"}
          link="https://github.com/Hensell/demo-quantix-chat"
          labels={["OpenAI API", "Cloudflare Workers", "Next.js"]}
          description={
            "Lightweight, open-source AI chatbot demo built with TypeScript, Hono, Cloudflare Workers, and the OpenAI Assistant API."
          }
        />
      </div>
    </div>
  );
}
