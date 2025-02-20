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
    <section className="flex flex-col  max-w-screen-md font-robotoSerif sm:px-12 px-3 text-xs py-10">
      <div className="flex max-w-screen-md justify-between mb-20">
        <div>
          <h2 className="opacity-85 tracking-widest mb-10">CONTACT & LINKS</h2>
          <div className="flex flex-col gap-3">
            <LinkComponent
              url={"https://www.linkedin.com/in/hensell-espinoza-a2b473125/"}
              label={"LINKEDIN"}
            />
            <LinkComponent label={"RESUME"} />
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
        <div>
          <h2 className="opacity-85 tracking-widest mb-10">
            SKILLS & TECH STACK
          </h2>
          <div className="flex flex-col gap-3">
            <LinkComponent
              url="https://nestjs.com/"
              label={"NODE JS (NEST JS)"}
            />

            <LinkComponent url="https://expressjs.com/" label="EXPRESS JS" />

            <LinkComponent url="https://flutter.dev/" label="FLUTTER" />
            <LinkComponent url="https://nextjs.org/" label="NEXT JS" />
          </div>
        </div>
      </div>
      <div className="flex max-w-screen-md justify-between">
        <div>
          <h2 className="opacity-85 tracking-widest mb-10">FEATURE PROJECTS</h2>
          <div className="flex flex-col gap-3">
            <LinkComponent
              url="https://nestjs.com/"
              label={"NODE JS (NEST JS)"}
            />

            <LinkComponent
              url="https://expressjs.com/"
              label="QUANTIX WEBSITE"
            />

            <LinkComponent url="https://flutter.dev/" label="NICA FINANCE" />
            <LinkComponent url="https://nextjs.org/" label="FINANCIAL STATS" />
          </div>
        </div>
        <div>
          <h2 className="opacity-85 tracking-widest mb-10">
            TOOLS & RESOURCES
          </h2>
          <div className="flex flex-col gap-3">
            <LinkComponent
              url={"https://github.com/Hensell"}
              label={"CLOUDFLARE PAGES & WORKERS"}
            />
            <LinkComponent
              url={"https://www.linkedin.com/in/hensell-espinoza-a2b473125/"}
              label={"GIT, GITHUB"}
            />
            <LinkComponent label={"RESUME"} />

            <LinkComponent
              onPress={() => copyToClipboard("hensell104@gmail.com")}
              label={"RENDER"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
