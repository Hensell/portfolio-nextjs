"use client";
import { DrawerProjects } from "./components/ui/Drawer";
import MainLayout from "./components/layout/MainLayout";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/button";

export default function Home() {
  return (
    <MainLayout>
      <section
        id="about"
        className="min-h-[90vh] flex flex-col sm:justify-end justify-center sm:pb-20 "
      >
        <h1 className="text-[clamp(1rem,calc(5vw+2rem),5rem)] font-bold text-center md:text-left">
          Hensell
        </h1>
        <p className="text-[clamp(1rem,calc(1.8vw+0.8rem),3.5rem)] text-center md:text-left font-light">
          I’m a passionate Full Stack Developer creating amazing web and mobile
          experiences with cutting-edge technologies.
        </p>
      </section>

      <section
        id="projects"
        className="scroll-mt-[80px] "
      >
        <h2 className="text-[clamp(0.5rem,calc(2.5vw+1rem),2.5rem)] font-bold text-center md:text-left mb-10">
          Projects
        </h2>

        <div className="flex justify-center items-center flex-wrap gap-5">
        <DrawerProjects
          triggerProps={{
            footer: "Link Tree",
            imageUrl: "/image.jpg",
          }}
          title="HenTree clon de LinkTree"
          description="Es un clon de LinkTree hecho con React y TypeScript."
          content={
            <div>
              <div className="flex flex-wrap mb-5">
                <Button isIconOnly aria-label="Like">
                  <Icon icon="ri:nextjs-fill" width="48" height="48" />
                </Button>
              </div>
              <Button
                as="a"
                href="https://react-hentree.pages.dev/"
                target="_blank"
                className="bg-card rounded-3xl"
              >
                Click to see it
              </Button>
            </div>
          }
        />

<DrawerProjects
          triggerProps={{
            footer: "Link Tree",
            imageUrl: "/image.jpg",
          }}
          title="HenTree clon de LinkTree"
          description="Es un clon de LinkTree hecho con React y TypeScript."
          content={
            <div>
              <div className="flex flex-wrap mb-5">
                <Button isIconOnly aria-label="Like">
                  <Icon icon="ri:nextjs-fill" width="48" height="48" />
                </Button>
              </div>
              <Button
                as="a"
                href="https://react-hentree.pages.dev/"
                target="_blank"
                className="bg-card rounded-3xl"
              >
                Click to see it
              </Button>
            </div>
          }
        />
                <DrawerProjects
          triggerProps={{
            footer: "Link Tree",
            imageUrl: "/image.jpg",
          }}
          title="HenTree clon de LinkTree"
          description="Es un clon de LinkTree hecho con React y TypeScript."
          content={
            <div>
              <div className="flex flex-wrap mb-5">
                <Button isIconOnly aria-label="Like">
                  <Icon icon="ri:nextjs-fill" width="48" height="48" />
                </Button>
              </div>
              <Button
                as="a"
                href="https://react-hentree.pages.dev/"
                target="_blank"
                className="bg-card rounded-3xl"
              >
                Click to see it
              </Button>
            </div>
          }
        />

        </div>
      


      </section>

      <section id="contact" className="scroll-mt-[80px]">
        <div>
          <h2 className="text-4xl font-bold text-center py-10">Contact</h2>
          aca van los links ejej
        </div>

        <h2 className="text-4xl font-bold text-center py-10">FAQ</h2>

        <dl className="bg-card p-5 md:p-16 rounded-3xl shadow-sm">
          {questions.map((e, i) => {
            return (
              <div key={i} className="flex flex-col pb-3">
                <dt className="mb-1 text-xl font-black">{e.question}</dt>
                <dd className="text-medium font-thin mb-5">{e.answer}</dd>
              </div>
            );
          })}
        </dl>
      </section>
    </MainLayout>
  );
}

const questions = [
  {
    question: "How much experience do I have?",
    answer:
      "I have 3 years of experience in software development. Currently, I work at FDL and also freelance for Quantix.",
  },
  {
    question: "What are my preferred technologies?",
    answer: "React, Next.js, Flutter, and Node.js (with Express and NestJS).",
  },
  {
    question: "What projects have I worked on?",
    answer:
      "I have built a LinkTree-inspired app with React and TypeScript, created an offline map for client management in Flutter, and developed an internal app integrating OpenAI APIs for support teams.",
  },
  {
    question: "What is my favorite aspect of programming?",
    answer:
      "The challenge of solving problems creatively and building applications that make people's lives easier.",
  },
];
