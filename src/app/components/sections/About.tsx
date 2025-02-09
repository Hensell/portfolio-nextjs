import { Button } from "@heroui/react";

type AboutProps = {
  id: string;
};

export default function App({ id }: AboutProps) {
  return (
    <section
      id={id}
      className="h-[100vh] grid grid-rows-[1fr,1fr,1fr] grid-cols-1 px-12"
    >
      <p className="font-roboto font-extralight text-black dark:text-white text-lg pt-12">
        PASSIONATE FULL STACK DEVELOPER
        <br /> CREATING AMAZING WEB AND MOBILE
        <br /> EXPERIENCES
      </p>

      <h1 className="font-robotoSerif text-center font-normal text-[clamp(1rem,calc(2.5vw+4rem),7rem)]">
        <span className="block">HENSELL</span>
        <span className="block">ESPINOZA</span>
      </h1>
      <Button
        className="w-fit mx-auto font-roboto text-base font-extralight"
        variant="light"
        radius="none"
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
