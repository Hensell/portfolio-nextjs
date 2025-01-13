"use client";
import MainLayout from "./layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <section
        id="about"
        className="scroll-mt-[80px] flex flex-col lg:flex-row gap-4 mt-8"
      >
        <div className="bg-card p-5 md:p-16 rounded-3xl shadow-sm mr-0 md:mr-5  w-full lg:w-[85%]">
        <h1 className="text-[clamp(1rem,calc(1.8vw+0.8rem),3.5rem)] text-center lg:text-left">
  <span className="font-black">Hi, I’m Hensell! </span>
  I’m a passionate Full Stack Developer creating amazing web and mobile
  experiences with cutting-edge technologies.
</h1>

        </div>

        <dl className="bg-card p-5 md:p-16 rounded-3xl shadow-sm">
          {questions.map((e, i) => {
            return (
              <div key={i} className="flex flex-col pb-3">
                <dt className="mb-1 text-xl font-black">
                  {e.question}
                </dt>
                <dd className="text-medium font-thin mb-5">{e.answer}</dd>
              </div>
            );
          })}
        </dl>
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
