"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MeSection() {
  return (
    <section className="w-full px-6 md:px-12 py-32 flex flex-col md:flex-row items-center gap-16 md:gap-24 relative overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Image with gradient border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] flex-shrink-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur-xl opacity-30 animate-pulse"></div>
        <div className="relative w-full h-full p-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
              src="/me2.jpg"
              alt="Hensell working"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl text-center md:text-left"
      >
        <div className="mb-3 text-xs font-bold tracking-widest uppercase text-primary">
          About Me
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight text-primary">
          Hensell Espinoza
        </h2>
        <div className="mb-4 text-lg md:text-xl text-foreground/80 font-normal leading-relaxed">
          <span className="font-semibold text-primary">
            Full Stack Engineer
          </span>{" "}
          based in Nicaragua — building scalable products for web & mobile using{" "}
          <b className="text-primary">Flutter</b>, <b className="text-accent">React</b>, <b className="text-secondary">Node.js</b> & <b className="text-primary">.NET</b>.
        </div>
        <div className="text-muted-foreground text-base mb-8">
          🚀 I ship robust apps fast, automate workflows, and love a challenge.
          Remote-friendly & ready for international collabs.
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
          <a
            href="/doc/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-full bg-primary text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all hover:-translate-y-1 hover:bg-primary/90"
            aria-label="Download CV"
          >
            Download CV
          </a>
          <a
            href="mailto:hensell@hensell.dev"
            className="px-8 py-4 rounded-full border-2 border-primary/20 bg-background/50 backdrop-blur-sm text-primary font-semibold shadow-sm transition-all hover:border-primary/40 hover:shadow-lg hover:-translate-y-1"
            aria-label="Contact Hensell by email"
          >
            Let&apos;s Connect
          </a>
        </div>
      </motion.div>
    </section>
  );
}
