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
          label: "JETPACK COMPOSE",
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
          label: "CLOUDFLARE",
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
    <section className="w-full px-4 sm:px-6 md:px-12 py-24 bg-secondary-background/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Tools
          </h2>
          <p className="text-muted-foreground text-lg">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="font-sans text-sm font-bold tracking-widest text-primary/80 mb-6 uppercase">
                {section.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {section.links.map((link, j) => (
                  <motion.a
                    key={j}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-card to-secondary-background border border-border/50 text-sm font-medium hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
