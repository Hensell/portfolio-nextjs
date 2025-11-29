"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="w-full py-24 px-5 sm:px-12 text-center bg-background text-foreground relative overflow-hidden"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-robotoSerif font-bold mb-6 leading-snug">
                    Let’s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">amazing</span>{" "}
                    together.
                </h2>

                <p className="text-base md:text-lg font-roboto text-foreground/80 max-w-2xl mx-auto mb-8">
                    I’m currently open to freelance opportunities and remote
                    collaborations. Whether you have a project, a challenge, or just want
                    to connect — I’d love to hear from you.
                </p>

                <a
                    href="mailto:hensell@hensell.dev"
                    className="inline-block px-8 py-4 rounded-full bg-primary text-background text-sm font-bold tracking-widest hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                    GET IN TOUCH
                </a>
                <p className="mt-6 text-sm text-foreground/60">
                    Or find me on{" "}
                    <a
                        href="https://www.linkedin.com/in/hensell-espinoza-a2b473125/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-foreground"
                    >
                        LinkedIn
                    </a>{" "}
                    or{" "}
                    <a
                        href="/doc/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-foreground"
                    >
                        view my resume
                    </a>
                    .
                </p>
                <p className="mt-4 text-sm text-foreground/60">
                    You can also check out my{" "}
                    <a
                        href="https://github.com/Hensell"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-foreground"
                    >
                        GitHub profile
                    </a>
                    .
                </p>
            </motion.div>
        </section>
    );
}
