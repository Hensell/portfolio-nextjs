"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  const sections = [
    {
      title: "SKILLS",
      links: [
        { label: "REACT JS", url: "https://reactjs.org/" },
        { label: "VITE", url: "https://vitejs.dev/" },
        { label: "NEXT JS", url: "https://nextjs.org/" },
        { label: "FLUTTER", url: "https://flutter.dev/" },
        {
          label: "JETPACK COMPOSE (KOTLIN)",
          url: "https://developer.android.com/jetpack/compose",
        },
        { label: "NODE JS", url: "https://nodejs.org/" },
        { label: "NEST JS", url: "https://nestjs.com/" },
        { label: "EXPRESS JS", url: "https://expressjs.com/" },
        { label: "TAILWIND CSS", url: "https://tailwindcss.com/" },
        { label: "MONGODB", url: "https://www.mongodb.com/" },
      ],
    },
    {
      title: "TOOLS & RESOURCES",
      links: [
        {
          label: "CLOUDFLARE PAGES & WORKERS",
          url: "https://www.cloudflare.com/",
        },
        { label: "FIREBASE", url: "https://firebase.google.com/" },
        { label: "RENDER", url: "https://render.com/" },
        { label: "FIGMA", url: "https://www.figma.com/" },
        { label: "IMAGEKIT.IO", url: "https://imagekit.io/" },
        { label: "RESEND", url: "https://resend.com/" },
        { label: "GIT", url: "https://git-scm.com/" },
        { label: "NPM", url: "https://www.npmjs.com/" },
      ],
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 py-16 bg-background text-foreground">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-screen-xl mx-auto">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-foreground/80 mb-6 uppercase">
              {section.title}
            </h2>
            <div className="flex flex-wrap gap-3">
              {section.links.map((link, j) => (
                <motion.a
                  key={j}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm font-medium hover:bg-secondary hover:border-primary/20 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
