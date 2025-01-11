"use client";
import MainLayout from "./layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <section
        id="about"
        className="scroll-mt-[80px] flex flex-col lg:flex-row gap-4 mt-8"
      >
        <div className="bg-[#f1e8b8] p-5 md:p-16 rounded-3xl shadow-sm mr-0 md:mr-5  w-full lg:w-[85%]">
          <h1 className="text-[clamp(1rem,calc(2vw+0.8rem),3.5rem)] text-[#1C1C1C] text-center lg:text-left">
            <span className="font-black">Hensell </span>
            is a Full Stack Developer creating seamless web and mobile
            experiences with modern technologies
          </h1>
        </div>

        <dl className=" text-gray-900 bg-[#f1e8b8] p-5 md:p-16 rounded-3xl shadow-sm">
          {questions.map((e, i) => {
            return (
              <div key={i} className="flex flex-col pb-3">
                <dt className="mb-1 text-gray-500 text-lg font-light">
                  {e.question}
                </dt>
                <dd className="text-lg font-thin mb-5">{e.answer}</dd>
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
