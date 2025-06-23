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
    <div id="contact" className="flex justify-center py-20 h-[100vh]">
      <Toaster
        position="bottom-center"
        toastOptions={{
          className:
            "rounded-none bg-background text-foreground font-robotoSerif ",
        }}
      />

      <ButtonGroup radius="none" className="font-robotoSerif">
        <Button
          href="https://www.linkedin.com/in/hensell-espinoza/"
          target="_blank"
          rel="noopener noreferrer"
          as={Link}
          className="bg-secondarybg"
        >
          LINKEDIN
        </Button>

        <Button
          variant="light"
          onPress={() => copyToClipboard("hensell@hensell.dev")}
          className="bg-secondarybg"
        >
          EMAIL
        </Button>
        <Button variant="light" className="bg-secondarybg">
          CV
        </Button>
      </ButtonGroup>
    </div>
  );
}
