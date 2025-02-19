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
    <section className="flex flex-row  max-w-screen-md mx-auto justify-between mb-40 font-robotoSerif px-12 text-xs">
      
      <div>
        <h2 className="opacity-85 tracking-widest mb-10">SKILLS & FOCUS</h2>
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
<div>
        <h2 className="opacity-85 tracking-widest mb-10">CONTACT</h2>
        <div className="flex flex-col gap-3">
          <LinkComponent
            url={"https://www.linkedin.com/in/hensell-espinoza-a2b473125/"}
            label={"LINKEDIN"}
          />
          <LinkComponent label={"RESUME"} />
          <LinkComponent url={"https://github.com/Hensell"} label={"GITHUB"} />
          <LinkComponent
            onPress={() => copyToClipboard("hensell104@gmail.com")}
            label={"EMAIL"}
          />
        </div>
      </div>
    </section>
  );
}
