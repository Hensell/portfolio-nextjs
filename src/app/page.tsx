"use client";
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
      <span className="font-black">Hensell </span>
      is a Full Stack Developer creating seamless web and mobile experiences with modern technologies
    </h1>
  </div>

  <div>
    <p className="text-black break-words">
      Experienceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    </p>
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
