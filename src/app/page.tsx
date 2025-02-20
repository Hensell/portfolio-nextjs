import { Toaster } from "sonner";
import { MainLayout } from "./components/layout/MainLayout";
import AboutSection from "./components/sections/AboutSection";
import SkillContactSection from "./components/sections/SkillContactSection";

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
      <SkillContactSection />
    </MainLayout>
  );
}
