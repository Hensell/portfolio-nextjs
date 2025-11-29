"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

type AboutProps = {
  id: string;
};

export default function AboutSection({ id }: AboutProps) {
  return (
    <section
      id={id}
      className="flex flex-col items-center justify-center min-h-[85vh] px-6 text-center relative"
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <TypeAnimation
          sequence={["FULL STACK DEVELOPER", 1000]}
          wrapper="p"
          cursor={false}
          speed={80}
          className="font-sans font-medium text-primary text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        />

        <h1 className="font-display text-6xl md:text-8xl font-bold leading-tight mb-2">
          <span className="block gradient-text">HENSELL</span>
          <span className="block gradient-text mt-2">ESPINOZA</span>
        </h1>

        <TypeAnimation
          sequence={["CREATING AMAZING WEB AND MOBILE EXPERIENCES", 2000]}
          wrapper="p"
          cursor={false}
          speed={80}
          className="font-sans text-muted-foreground text-base md:text-lg mt-8 max-w-2xl mx-auto leading-relaxed"
        />

        <a
          href="#contact"
          className="inline-block mt-12 px-8 py-4 rounded-full bg-gradient-to-r from-primary via-accent to-secondary text-white text-sm tracking-wider font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1"
        >
          LET&apos;S WORK TOGETHER
        </a>
      </motion.div>
    </section>
  );
}