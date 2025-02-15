"use client";
import { Button, Link } from "@heroui/react";
import { TypeAnimation } from "react-type-animation";

type AboutProps = {
  id: string;
};

export default function App({ id }: AboutProps) {
  return (
    <section
      id={id}
      className="h-[100vh] grid grid-rows-[1fr,1fr,1fr] grid-cols-1 px-12"
    >
      <p className="font-roboto font-extralight text-black dark:text-white md:text-lg text-xs pt-12">
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

      <h1 className="font-robotoSerif text-center font-normal md:text-8xl text-4xl ">
        <span className="block">HENSELL</span>
        <span className="block md:mt-12 mt-0 mb-10">ESPINOZA</span>
      </h1>
      <Button
        className="w-fit mx-auto font-roboto text-base font-extralight"
        variant="light"
        radius="none"
        as={Link}
        href="#contact"
        endContent={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeDasharray={10}
              strokeDashoffset={10}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.4}
              d="M12 15l-5 -5M12 15l5 -5"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="5s"
                values="10;0"
              ></animate>
            </path>
          </svg>
        }
      >
        CONTACT
      </Button>
    </section>
  );
}
