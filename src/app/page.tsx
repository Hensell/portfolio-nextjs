import { MainLayout } from "./components/layout/MainLayout";
import About from "./components/sections/About";
import NavbarComponent from "./components/ui/NavbarComponent";

export default function Home() {
  return (
    <MainLayout>
      <About id="about" />
      <NavbarComponent />
      <About id="about" />
    </MainLayout>
  );
}
