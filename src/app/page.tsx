import { Toaster } from "sonner";
import { MainLayout } from "./components/layout/MainLayout";
import AboutSection from "./components/sections/AboutSection";
import SkillContactSection from "./components/sections/SkillContactSection";
import MeSection from "./components/sections/MeSection";
import ProjectSection from "./components/sections/ProjectSection";
import FadeInOnScroll from "./components/ui/FadeInOnScroll";
import NavbarComponent from "./components/ui/NavbarComponent";

export default function Home() {
  return (
    <MainLayout>
      <NavbarComponent />

      <AboutSection id="about" />

      <FadeInOnScroll delay={0.1}>
        <MeSection />
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.2}>
        <ProjectSection />
      </FadeInOnScroll>

      <Toaster
        position="bottom-center"
        toastOptions={{
          className:
            "rounded-none bg-background text-foreground font-robotoSerif ",
        }}
      />

      <SkillContactSection />

      <section
        id="contact"
        className="w-full py-24 px-5 sm:px-12 text-center bg-background text-foreground"
      >
        <h2 className="text-3xl md:text-4xl font-robotoSerif font-bold mb-6 leading-snug">
          Let’s build something <span className="text-primary">amazing</span>{" "}
          together.
        </h2>

        <p className="text-base md:text-lg font-roboto text-foreground/80 max-w-2xl mx-auto mb-8">
          I’m currently open to freelance opportunities and remote
          collaborations. Whether you have a project, a challenge, or just want
          to connect — I’d love to hear from you.
        </p>

        <a
          href="mailto:hensell@hensell.dev"
          className="inline-block px-6 py-3 rounded-md bg-foreground text-background text-sm font-semibold tracking-widest hover:bg-foreground/90 transition-colors duration-300 shadow-md"
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
      </section>
    </MainLayout>
  );
}
