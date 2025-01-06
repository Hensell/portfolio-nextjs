"use client";
import MainLayout from "./layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <section id="section-1" className="min-h-[100dvh] pt-10">
      <h1 className="text-[clamp(1.8rem,calc(7vw+1rem),5rem)] text-black scroll-mt-[80px]">Hensell </h1>
      </section>
      <section id="projects" className="min-h-[100dvh] bg-red-500 scroll-mt-[80px] ">
        Section 2
      </section>
      <section id="contact" className="min-h-[100dvh] bg-cyan-500 scroll-mt-[80px]">
        Section 3
      </section>
    </MainLayout>
  );
}
