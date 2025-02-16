"use client";
import { Button, ButtonGroup, Link } from "@heroui/react";
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

      <ButtonGroup radius="none" className="font-robotoSerif">
        <Button
          href="https://www.linkedin.com/in/hensell-espinoza-a2b473125/"
          target="_blank"
          rel="noopener noreferrer"
          as={Link}
          variant="light"
        >
          LINKEDIN
        </Button>

        <Button
          variant="light"
          onPress={() => copyToClipboard("hensell104@gmail.com")}
        >
          EMAIL
        </Button>
        <Button variant="light">CV</Button>
      </ButtonGroup>
    </div>
  );
}
