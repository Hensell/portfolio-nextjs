import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function App() {
  const { theme, setTheme } = useTheme();
  const [iconKey, setIconKey] = useState(0);

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setIconKey((prev) => prev + 1);
  };

  const toggleTheme = () => {
    if (!document.startViewTransition) {
      switchTheme();
    } else {
      document.startViewTransition(switchTheme);
    }
  };

  return (
    <Button
      isIconOnly
      onPress={toggleTheme}
      variant="light"
      radius="none"
      className="w-fit mx-auto"
    >
      <Icon
        key={`sun-${iconKey}`}
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        icon="line-md:sunny-filled-loop-to-moon-filled-alt-loop-transition"
        width="24"
        height="24"
      />
      <Icon
        key={`moon-${iconKey}`}
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
        width="24"
        height="24"
      />
    </Button>
  );
}
