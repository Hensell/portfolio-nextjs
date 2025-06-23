"use client";

import { motion } from "framer-motion";
import Image from "next/image";
export default function AboutSection() {
  return (
    <section className="w-full px-6 md:px-12 py-20 flex flex-col md:flex-row items-center gap-12">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-robotoSerif font-medium mb-6">
          Hey, I’m Hensell
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl font-light leading-relaxed">
          I craft elegant full-stack solutions with <strong>Flutter</strong>,{" "}
          <strong>React</strong>, <strong>Kotlin</strong>,{" "}
          <strong>Node.js</strong>, and <strong>.NET</strong>. From sleek UIs to
          robust backends, I bridge design and logic with purpose.
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-md">
          🚀 Currently building apps, automating workflows, and shaping tech
          that scales — all while sipping good coffee ☕.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Image
          src="/me2.jpg"
          alt="Hensell working"
          width={320}
          height={320}
          className="rounded-xl shadow-lg border dark:border-white/10 border-black/10"
          priority
        />
      </motion.div>
    </section>
  );
}
