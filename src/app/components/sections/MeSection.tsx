"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full px-6 md:px-12 py-24 flex flex-col md:flex-row items-center gap-14 md:gap-24 relative overflow-hidden">
      {/* Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Imagen con glow sutil */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative w-[220px] h-[220px] md:w-[320px] md:h-[320px] flex-shrink-0"
      >
        <div className="absolute inset-0 z-0 rounded-xl bg-primary blur-2xl opacity-20"></div>
        <Image
          src="/me2.jpg"
          alt="Hensell working"
          fill
          className="rounded-xl shadow-2xl object-cover border-none"
          priority
        />
      </motion.div>

      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl text-center md:text-left"
      >
        <div className="mb-2 text-xs font-bold tracking-widest uppercase text-primary/90">
          About Me
        </div>
        <h2 className="text-4xl md:text-5xl font-robotoSerif font-extrabold mb-4 leading-tight text-foreground">
          Hensell Espinoza
        </h2>
        <div className="mb-3 text-base md:text-lg text-gray-700 dark:text-gray-300 font-normal leading-relaxed">
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
            Full Stack Engineer
          </span>{" "}
          based in Nicaragua — building scalable products for web & mobile using{" "}
          <b>Flutter</b>, <b>React</b>, <b>Node.js</b> & <b>.NET</b>.
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-sm mb-6">
          🚀 I ship robust apps fast, automate workflows, and love a challenge.
          Remote-friendly & ready for international collabs.
        </div>
        <div className="flex flex-col md:flex-row gap-3 items-center md:items-start justify-center md:justify-start">
          <a
            href="/doc/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-primary text-background font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            aria-label="Download CV"
          >
            Download CV
          </a>
          <a
            href="mailto:hensell@hensell.dev"
            className="px-6 py-3 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm text-primary font-semibold shadow-sm transition-all hover:bg-primary/5 hover:border-primary/40"
            aria-label="Contact Hensell by email"
          >
            Let’s Connect
          </a>
        </div>
      </motion.div>
    </section>
  );
}
