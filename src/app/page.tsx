import { Toaster } from "sonner";
import { MainLayout } from "./components/layout/MainLayout";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import MeSection from "./components/sections/MeSection";
import ProjectSection from "./components/sections/ProjectSection";
import ContactSection from "./components/sections/ContactSection";
import FadeInOnScroll from "./components/ui/FadeInOnScroll";
import NavbarComponent from "./components/ui/NavbarComponent";
import Footer from "./components/ui/Footer";

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

      <SkillsSection />

      <ContactSection />

      <Footer />
    </MainLayout>
  );
}
