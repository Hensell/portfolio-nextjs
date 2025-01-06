"use client";
import MainLayout from "./layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <section id="section-1" className="min-h-[100dvh]">
      <h1 className="text-[clamp(1.8rem,calc(7vw+1rem),5rem)] text-black">Hensell </h1>
      </section>
      <section id="section-2" className="min-h-[100dvh] bg-red-500">
        Section 2
      </section>
      <section id="section-3" className="min-h-[100dvh] bg-cyan-500">
        Section 3
      </section>
    </MainLayout>
  );
}
