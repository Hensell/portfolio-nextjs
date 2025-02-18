"use client";
import { Link } from "@heroui/react";
import { toast } from "sonner";

export default function App() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast("COPIED TO CLIPBOARD");
    });
  };

  return (
    <section className="flex flex-row  max-w-screen-md mx-auto justify-between mb-16 font-robotoSerif px-5 sm:px-0">
      <div>
        <h2 className="opacity-85 tracking-widest mb-10">CONTACT</h2>
        <div className="flex flex-col gap-3">
          <Link
            className="cursor-pointer"
            isExternal
            href="https://www.linkedin.com/in/hensell-espinoza-a2b473125/"
          >
            LINKEDIN
          </Link>
          <Link
            className="cursor-pointer"
            onPress={() => copyToClipboard("hensell104@gmail.com")}
          >
            EMAIL
          </Link>
          <Link className="cursor-pointer">CV</Link>
        </div>
      </div>
      <div>
        <h2 className="opacity-85 tracking-widest mb-10">SKILLS</h2>
        <div className="flex flex-col gap-3">
          <Link
            className="cursor-pointer"
            isExternal
            href="https://www.linkedin.com/in/hensell-espinoza-a2b473125/"
          >
            NODE JS (NEST JS)
          </Link>
          <Link
            className="cursor-pointer"
            isExternal
            href="https://www.linkedin.com/in/hensell-espinoza-a2b473125/"
          >
            EXPRESS JS
          </Link>
          <Link
            className="cursor-pointer"
            isExternal
            href="https://www.linkedin.com/in/hensell-espinoza-a2b473125/"
          >
            FLUTTER
          </Link>
          <Link
            className="cursor-pointer"
            isExternal
            href="https://www.linkedin.com/in/hensell-espinoza-a2b473125/"
          >
            NEXT JS
          </Link>
        </div>
      </div>
    </section>
  );
}
