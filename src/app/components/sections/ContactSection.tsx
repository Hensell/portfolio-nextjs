"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="w-full py-32 px-5 sm:px-12 text-center bg-secondary-background/30 relative overflow-hidden"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 max-w-4xl mx-auto"
            >
                <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-snug">
                    Let&apos;s build something{" "}
                    <span className="gradient-text">amazing</span> together.
                </h2>

                <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                    I&apos;m currently open to freelance opportunities and remote
                    collaborations. Whether you have a project, a challenge, or just want
                    to connect — I&apos;d love to hear from you.
                </p>

                <a
                    href="mailto:hensell@hensell.dev"
                    className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-primary via-accent to-secondary text-white text-base font-bold tracking-wide hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                >
                    GET IN TOUCH
                </a>

                <div className="mt-12 space-y-3">
                    <p className="text-sm text-muted-foreground">
                        Or find me on{" "}
                        <a
                            href="https://www.linkedin.com/in/hensell-espinoza-a2b473125/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-accent transition-colors font-medium"
                        >
                            LinkedIn
                        </a>{" "}
                        or{" "}
                        <a
                            href="/doc/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-accent transition-colors font-medium"
                        >
                            view my resume
                        </a>
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Check out my{" "}
                        <a
                            href="https://github.com/Hensell"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-accent transition-colors font-medium"
                        >
                            GitHub profile
                        </a>
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
