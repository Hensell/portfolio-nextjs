import { MainLayout } from "./components/layout/MainLayout";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import ProjectSection from "./components/sections/ProjectSection";
import NavbarComponent from "./components/ui/NavbarComponent";

export default function Home() {
  return (
    <MainLayout>
      <AboutSection id="about" />
      <NavbarComponent />
      <ProjectSection />
      <ContactSection />
    </MainLayout>
  );
}
