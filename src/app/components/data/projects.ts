import { ProjectData } from "../hooks/useProjectDrawer";

export const projects: ProjectData[] = [
  {
    src: "/projects/quantixPage.png",
    alt: "quantix page",
    text: "quantix.software",
    link: "https://quantix.software/",
    labels: ["Next.JS", "Tailwind", "SEO"],
    description:
      "Designed and developed the official website for Quantix, a Nicaraguan software company focused on inventory and sales management solutions. Led the UI/UX design, implemented SEO best practices, and deployed the project using Cloudflare Pages. Integrated Google Search Console for indexing and performance tracking. Also collaborated on building a custom AI assistant using the OpenAI API to enhance customer interaction.",
  },
  {
    src: "/projects/nicafinanzas.png",
    alt: "nicafinanzas.com",
    text: "nicafinanzas.com",
    link: "https://nicafinanzas.com/",
    labels: ["OpenAI API", "Flutter", "SEO"],
    description:
      "Created NicaFinanzas, a Flutter web platform designed to improve financial literacy in Nicaragua through an AI-powered chatbot. Developed the frontend using Flutter Web and integrated the OpenAI API to provide real-time guidance on savings, loans, and personal finance. Focused on delivering localized, accessible content tailored to the Nicaraguan context, with emphasis on UX and educational impact.",
  },
  {
    src: "/projects/quantixai.png",
    alt: "quantixai",
    text: "Quantix Chat bot AI API",
    link: "https://github.com/Hensell/quantix-page-ai",
    labels: ["OpenAI API", "Cloudflare Workers", "Node.JS", "Hono.JS"],
    description:
      "Built an open-source API using Cloudflare Workers, Hono, and TypeScript to enable seamless integration between any frontend and OpenAI’s Assistant API. Designed to be lightweight, fast, and developer-friendly, the project serves as a plug-and-play backend for real-time AI-powered chatbots. Emphasized modular architecture and public documentation to support community adoption and extensibility.",
  },
  {
    src: "/projects/chatbotdemo.png",
    alt: "demo for a chat bot with ai",
    text: "Quantix Chatbot – Cloudflare-Powered OpenAI Demo",
    link: "https://github.com/Hensell/demo-quantix-chat",
    labels: ["OpenAI API", "Cloudflare Workers", "Next.JS"],
    description:
      "Developed a lightweight, open-source chatbot demo that connects a Next.js frontend to OpenAI’s Assistant API via a backend powered by Cloudflare Workers and Hono. Built with TypeScript and designed for fast deployment, the project showcases real-time AI interaction and can be easily adapted for custom use cases. Published on GitHub with clear documentation to support developers exploring OpenAI integrations.",
  },
];
