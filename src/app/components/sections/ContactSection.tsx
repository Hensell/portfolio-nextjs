"use client";
import { Link } from "@heroui/react";
import { toast, Toaster } from "sonner";

export default function App() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast("COPIED TO CLIPBOARD");
    });
  };

  return (
    <div id="contact" className="gap-5 flex justify-center py-20 h-[100vh]">
      <Toaster
        position="bottom-center"
        toastOptions={{
          className:
            "rounded-none bg-background text-foreground font-robotoSerif ",
        }}
      />
      <Link
        className="font-robotoSerif"
        size="sm"
        onPress={() => copyToClipboard("hensell104@gmail.com")}
      >
        EMAIL
      </Link>

      <Link
        onPress={() => {}}
        href="https://www.linkedin.com/in/hensell-espinoza-a2b473125/"
        className="font-robotoSerif"
        size="sm"
      >
        LINKEDIN
      </Link>
      <Link onPress={() => {}} className="font-robotoSerif" size="sm">
        CV
      </Link>
    </div>
  );
}
