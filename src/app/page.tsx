"use client";
import { Accordion, Content, Tab, Trigger } from "./components/accordion";
import MainLayout from "./layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <section
        id="about"
        className="scroll-mt-[80px] flex flex-col md:flex-row gap-4"
      >
        <div className="bg-[#EDEBE6] p-5 md:p-16 rounded-3xl shadow-lg mr-0 md:mr-5">
          <h1 className="text-[clamp(1rem,calc(5vw+0.8rem),2.5rem)] text-[#1C1C1C] text-center md:text-left">
            <span className="font-black">Hensell </span>is a Full Stack Developer crafting dynamic web and mobile solutions!
          </h1>
        </div>

        <div className="flex w-full max-w-[850px] items-start justify-center text-black bg-[#EDEBE6] p-5 md:p-16 rounded-3xl shadow-lg">
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
    question: "3 años de experiencia",
    answer: `Actualmente trabajando en FDL y quantix!`,
  },
  { question: "Mis tecnologias preferidas", answer: "Flutter, react y más" },
  {
    question: "Poner otra cosa",
    answer: "Eso",
  },
];
