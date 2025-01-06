"use client";
import MainLayout from "./layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <section id="about" className="min-h-[100dvh]  bg-slate-600 scroll-mt-[80px]">
      <h1 className="text-[clamp(1.8rem,calc(7vw+1rem),5rem)] text-black">Hensell </h1>
      </section>
      <section id="projects" className="min-h-[100dvh] bg-red-500 scroll-mt-[80px]">
        Section 2
      </section>
      <section id="contact" className="min-h-[100dvh] bg-cyan-500 scroll-mt-[80px]">
        Section 3
      </section>
    </MainLayout>
  );
}
