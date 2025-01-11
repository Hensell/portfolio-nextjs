"use client";
import { Accordion, Content, Tab, Trigger } from "./components/accordion";
import MainLayout from "./layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <section
        id="about"
        className="scroll-mt-[80px] gap-4 grid grid-cols-1 md:grid-cols-3"
      >
        <div className="mr-0 md:mr-5 md:col-span-2 md:row-span-1">
          <div className="p-5 md:p-16 bg-[#EDEBE6] shadow-lg mb-8 rounded-3xl">
            <h1 className="text-[clamp(1rem,calc(5vw+0.8rem),2.5rem)] text-[#1C1C1C] text-center md:text-left">
              <span className="font-black">Hensell </span>
              is a Full Stack Developer creating seamless web and mobile
              experiences with modern technologies
            </h1>
          </div>
        </div>

        <div className=" text-black bg-[#EDEBE6] p-5 md:p-16 rounded-3xl shadow-lg md:col-span-1 md:row-span-1">
          <div className="w-full">
            <Accordion>
              {questions.map((e, i) => {
                return (
                  <Tab key={i}>
                    <Trigger>
                      <p className="font-bold">{e.question}</p>
                    </Trigger>
                    <Content>{e.answer}</Content>
                  </Tab>
                );
              })}
            </Accordion>
          </div>
        </div>
        <div className="bg-[#EDEBE6] p-5 md:p-16 rounded-3xl shadow-lg md:col-span-1 md:row-span-1 h-96">
            Hola
          </div>
      </section>

      <section
        id="projects"
        className="min-h-[100vh] bg-red-500 scroll-mt-[80px]"
      >
        Section 2
      </section>
      <section
        id="contact"
        className="min-h-[100vh] bg-cyan-500 scroll-mt-[80px]"
      >
        Section 3
      </section>
    </MainLayout>
  );
}

const questions = [
  {
    question: "How much experience do you have?",
    answer:
      "I have 3 years of experience in software development, currently working at FDL and Quantix.",
  },
  {
    question: "What are your preferred technologies?",
    answer: "React, Next.js, Flutter, and Node.js (with Express and NestJS).",
  },

  {
    question: "What projects have you worked on?",
    answer:
      "I have built a LinkTree-inspired app with React and TypeScript, created an offline map for client management in Flutter, and developed an internal app integrating OpenAI APIs for support teams.",
  },
  {
    question: "What is your favorite aspect of programming?",
    answer:
      "The challenge of solving problems creatively and building applications that make people's lives easier.",
  },
];
