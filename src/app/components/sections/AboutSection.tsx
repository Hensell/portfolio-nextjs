"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

type AboutProps = {
  id: string;
};

export default function App({ id }: AboutProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center mt-16 px-6 text-center max-w-full justify-center sm:max-w-screen-sm md:max-w-screen-md"
    >

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-light text-gray-700 dark:text-gray-300 text-sm md:text-base tracking-widest uppercase mb-4"
      >
        <TypeAnimation
          sequence={["PASSIONATE FULL STACK DEVELOPER", 1000]}
          wrapper="span"
          cursor={false}
          speed={80}
          style={{ whiteSpace: "pre-line", display: "block" }}
        />
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="font-robotoSerif text-5xl md:text-7xl font-normal leading-tight"
      >
        <span className="block">HENSELL</span>
        <span className="block mt-2 md:mt-6">ESPINOZA</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="font-light text-gray-700 dark:text-gray-300 text-sm md:text-base mt-6 max-w-xl"
      >
        <TypeAnimation
          sequence={["CREATING AMAZING WEB AND MOBILE EXPERIENCES", 2000]}
          wrapper="span"
          cursor={false}
          speed={80}
          style={{ whiteSpace: "pre-line", display: "block" }}
        />
      </motion.p>
      <a
        href="#contact"
        className="inline-block mt-10 px-6 py-3 rounded-md bg-foreground text-background text-sm tracking-widest font-semibold hover:bg-foreground/90 transition-colors duration-300 shadow-md"
      >
        CONTACT ME
      </a>
    </section>
  );
}
