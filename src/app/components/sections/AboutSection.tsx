"use client";
import { TypeAnimation } from "react-type-animation";
import ToggleTheme from "../ui/ToggleTheme";

type AboutProps = {
  id: string;
};

export default function App({ id }: AboutProps) {
  return (
    <section
      id={id}
      className="h-[100vh] grid grid-rows-[1fr,1fr,1fr] grid-cols-1 px-12"
    >
      <p className="font-roboto font-extralight text-black dark:text-white md:text-lg text-xs pt-12 text-left">
        <TypeAnimation
          sequence={[
            `PASSIONATE FULL STACK DEVELOPER\nCREATING AMAZING WEB AND MOBILE\nEXPERIENCES`,
            1000,
          ]}
          wrapper="span"
          cursor={false}
          speed={80}
          style={{ whiteSpace: "pre-line", display: "block" }}
        />
      </p>
      <ToggleTheme />
      <h1 className="font-robotoSerif text-center font-normal md:text-8xl text-4xl mt-8">
        <span className="block">HENSELL</span>
        <span className="block md:mt-12 mt-0 mb-10">ESPINOZA</span>
      </h1>
    </section>
  );
}
