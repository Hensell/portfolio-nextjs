"use client";
import { toast } from "sonner";
import LinkComponent from "../ui/LinkComponent";

export default function App() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast("COPIED TO CLIPBOARD");
    });
  };

  return (
    <section className="flex flex-col md:flex-row w-full font-robotoSerif sm:px-12 px-3 text-xs py-10">
      <div className="flex max-w-screen-md justify-between mb-20">
        {/* CONTACT & LINKS */}
        <div className="md:mr-10">
          <h2 className="opacity-85 tracking-widest mb-10">CONTACT & LINKS</h2>
          <div className="flex flex-col gap-3">
            <LinkComponent
              url={"https://www.linkedin.com/in/hensell-espinoza-a2b473125/"}
              label={"LINKEDIN"}
            />
            <LinkComponent url={"doc/resume.pdf"} label={"RESUME"} />
            <LinkComponent
              url={"https://github.com/Hensell"}
              label={"GITHUB"}
            />
            <LinkComponent
              onPress={() => copyToClipboard("hensell104@gmail.com")}
              label={"EMAIL"}
            />
          </div>
        </div>

        {/* FEATURED PROJECTS */}
        <div className="md:mr-10">
          <h2 className="opacity-85 tracking-widest mb-10">FEATURE PROJECTS</h2>
          <div className="flex flex-col gap-3">
            <LinkComponent
              url="https://nicafinanzas.com/"
              label={"NICA FINANZAS"}
            />
            <LinkComponent
              url={"https://quantix.software/"}
              label="QUANTIX SOFTWARE"
            />
            <LinkComponent label="WORK IN PROGRESS..." />
            <LinkComponent label="WORK IN PROGRESS..." />
          </div>
        </div>
      </div>

      <div className="flex max-w-screen-md justify-between flex-wrap gap-10">
        {/* SKILLS */}
        <div className="md:mr-10">
          <h2 className="opacity-85 tracking-widest mb-10">SKILLS</h2>
          <div className="flex flex-col gap-3">
            <LinkComponent url="https://reactjs.org/" label="REACT JS" />
            <LinkComponent url="https://vitejs.dev/" label="VITE" />
            <LinkComponent url="https://nextjs.org/" label="NEXT JS" />
            <LinkComponent url="https://flutter.dev/" label="FLUTTER" />
            <LinkComponent
              url="https://developer.android.com/jetpack/compose"
              label="JETPACK COMPOSE (KOTLIN)"
            />
            <LinkComponent url="https://nodejs.org/" label="NODE JS" />
            <LinkComponent url="https://nestjs.com/" label="NEST JS" />
            <LinkComponent url="https://expressjs.com/" label="EXPRESS JS" />
            <LinkComponent
              url="https://tailwindcss.com/"
              label="TAILWIND CSS"
            />
            <LinkComponent url="https://www.mongodb.com/" label="MONGODB" />
          </div>
        </div>

        {/* TOOLS & RESOURCES */}
        <div>
          <h2 className="opacity-85 tracking-widest mb-10">
            TOOLS & RESOURCES
          </h2>
          <div className="flex flex-col gap-3">
            <LinkComponent
              url="https://www.cloudflare.com/"
              label="CLOUDFLARE PAGES & WORKERS"
            />
            <LinkComponent
              url="https://firebase.google.com/"
              label="FIREBASE"
            />
            <LinkComponent url="https://render.com/" label="RENDER" />
            <LinkComponent url="https://www.figma.com/" label="FIGMA" />
            <LinkComponent url="https://imagekit.io/" label="IMAGEKIT.IO" />
            <LinkComponent url="https://resend.com/" label="RESEND" />
            <LinkComponent url="https://git-scm.com/" label="GIT" />
            <LinkComponent url="https://www.npmjs.com/" label="NPM" />
          </div>
        </div>
      </div>
    </section>
  );
}
