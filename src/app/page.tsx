"use client";
import { DrawerProjects } from "./components/ui/Drawer";
import MainLayout from "./components/layout/MainLayout";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/button";
import SubTitle from "./components/ui/Title";
import { Accordion, Tab, Trigger, Content } from "./components/ui/Accordion";
import { toast, Toaster } from "sonner";

const copyToClipboard = () => {
  const email = "hensell104@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    toast("Email copied to clipboard!");
  });
};

export default function Home() {
  return (
    <MainLayout>
      <section
        id="about"
        className="min-h-[90vh] flex flex-col  justify-center pb-16"
      >
        <h1 className="text-[clamp(1rem,calc(5vw+2rem),5rem)] font-bold text-center md:text-left">
          Hensell
        </h1>
        <p className="text-[clamp(1rem,calc(1.8vw+0.8rem),3.5rem)] text-center md:text-left font-light">
          I’m a passionate Full Stack Developer creating amazing web and mobile
          experiences with cutting-edge technologies.
        </p>
      </section>

      <section id="projects" className="scroll-mt-[80px] ">
        <SubTitle text="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center">
          <DrawerProjects
            triggerProps={{
              footer: "Link Tree",
              imageUrl: "/image.jpg",
            }}
            title="HenTree clon de LinkTree"
            description="Es un clon de LinkTree hecho con React y TypeScript."
            content={
              <div>
                <div className="flex flex-wrap mb-5">
                  <Button isIconOnly aria-label="Like">
                    <Icon icon="ri:nextjs-fill" width="48" height="48" />
                  </Button>
                </div>
                <Button
                  as="a"
                  href="https://react-hentree.pages.dev/"
                  target="_blank"
                  className="bg-card rounded-3xl"
                >
                  Click to see it
                </Button>
              </div>
            }
          />

          <DrawerProjects
            triggerProps={{
              footer: "Link Tree",
              imageUrl: "/image.jpg",
            }}
            title="HenTree clon de LinkTree"
            description="Es un clon de LinkTree hecho con React y TypeScript."
            content={
              <div>
                <div className="flex flex-wrap mb-5">
                  <Button isIconOnly aria-label="Like">
                    <Icon icon="ri:nextjs-fill" width="48" height="48" />
                  </Button>
                </div>
                <Button
                  as="a"
                  href="https://react-hentree.pages.dev/"
                  target="_blank"
                  className="bg-card rounded-3xl"
                >
                  Click to see it
                </Button>
              </div>
            }
          />
          <div className="md:col-span-2 col-span-1">
            <DrawerProjects
              triggerProps={{
                footer: "Link Tree",
                imageUrl: "/image.jpg",
              }}
              title="HenTree clon de LinkTree"
              description="Es un clon de LinkTree hecho con React y TypeScript."
              content={
                <div>
                  <div className="flex flex-wrap mb-5">
                    <Button isIconOnly aria-label="Like">
                      <Icon icon="ri:nextjs-fill" width="48" height="48" />
                    </Button>
                  </div>
                  <Button
                    as="a"
                    href="https://react-hentree.pages.dev/"
                    target="_blank"
                    className="bg-card rounded-3xl"
                  >
                    Click to see it
                  </Button>
                </div>
              }
            />
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-[80px] pb-28">
        <div>
        <Toaster  position="top-right" />
          <SubTitle text="Contact" />
          <div className="flex flex-row space-x-5 items-center justify-center">
            <Button
              as="a"
              href="https://github.com/Hensell"
              target="_blank"
              variant="shadow"
              isIconOnly
              className="backdrop-blur-[4px] backdrop-saturate-[100%] bg-gray-700 bg-opacity-50"
            >
              <Icon icon="mdi:github" width="24" height="24" />
            </Button>
            
            <Button
              onPress={copyToClipboard}
              variant="shadow"
              isIconOnly
              className="backdrop-blur-[4px] backdrop-saturate-[100%] bg-gray-700 bg-opacity-50"
            >
              <Icon icon="material-symbols:mail" width="24" height="24" />
            </Button>
            <Button
              as="a"
              href="https://www.linkedin.com/in/hensell-espinoza-a2b473125/"
              target="_blank"
              variant="shadow"
              isIconOnly
              className="backdrop-blur-[4px] backdrop-saturate-[100%] bg-gray-700 bg-opacity-50"
            >
              <Icon icon="mdi:linkedin" width="24" height="24" />
            </Button>
          </div>
        </div>

        <SubTitle text="FAQ" />
        <Accordion className=" mx-auto bg-card rounded-3xl shadow-sm">
          {questions.map((item, index) => (
            <Tab key={index}>
              <Trigger className="font-black">{item.question}</Trigger>
              <Content className="text-[foreground]">{item.answer}</Content>
            </Tab>
          ))}
        </Accordion>
      </section>
    </MainLayout>
  );
}

const questions = [
  {
    question: "How much experience do I have?",
    answer:
      "I have 3 years of experience in software development. Currently, I work at FDL and also freelance for Quantix.",
  },
  {
    question: "What are my preferred technologies?",
    answer: "React, Next.js, Flutter, and Node.js (with Express and NestJS).",
  },
  {
    question: "What projects have I worked on?",
    answer:
      "I have built a LinkTree-inspired app with React and TypeScript, created an offline map for client management in Flutter, and developed an internal app integrating OpenAI APIs for support teams.",
  },
  {
    question: "What is my favorite aspect of programming?",
    answer:
      "The challenge of solving problems creatively and building applications that make people's lives easier.",
  },
];
