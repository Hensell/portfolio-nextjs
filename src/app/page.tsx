import { Toaster } from "sonner";
import { MainLayout } from "./components/layout/MainLayout";
import AboutSection from "./components/sections/AboutSection";
import SkillContactSection from "./components/sections/SkillContactSection";
import MeSection from "./components/sections/MeSection";
import ProjectSection from "./components/sections/ProjectSection";

export default function Home() {
  return (
    <MainLayout>
      <AboutSection id="about" />
      <Toaster
        position="bottom-center"
        toastOptions={{
          className:
            "rounded-none bg-background text-foreground font-robotoSerif ",
        }}
      />
      <MeSection />
      <ProjectSection />
      <SkillContactSection />
      <section className="w-full py-20 text-center sm:px-12 px-5">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-robotoSerif">
          Let’s build something amazing together.
        </h2>
        <p className="text-sm md:text-base text-foreground/80 mb-8 font-roboto">
          I’m currently open to freelance opportunities and remote positions. If
          you have a project or just want to connect, feel free to reach out.
        </p>
        <a
          href="mailto:hensell104@gmail.com"
          className="inline-block px-6 py-3 rounded-md bg-foreground text-background text-sm tracking-widest hover:bg-foreground/90 transition"
        >
          GET IN TOUCH
        </a>
      </section>
    </MainLayout>
  );
}
