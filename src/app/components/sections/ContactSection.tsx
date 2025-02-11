"use client";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { toast, Toaster } from "sonner";

export default function App() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast("COPIED TO CLIPBOARD");
    });
  };

  return (
    <div id="contact" className="gap-5 flex justify-center py-20">
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
        showAnchorIcon
        anchorIcon={<Icon icon="ph:link-simple-light" width="16" height="16" />}
        onPress={() => copyToClipboard("hensell104@gmail.com")}
      >
        EMAIL
      </Link>

      <Link
        isExternal
        href="https://www.linkedin.com/in/hensell-espinoza-a2b473125/"
        className="font-robotoSerif"
        showAnchorIcon
        size="sm"
      >
        LINKEDIN
      </Link>
      <Link
        className="font-robotoSerif"
        size="sm"
        showAnchorIcon
        anchorIcon={<Icon icon="mdi-light:download" width="16" height="16" />}
      >
        CV
      </Link>
    </div>
  );
}
