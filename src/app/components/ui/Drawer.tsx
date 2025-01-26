"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import CustomCard from "./CustomCard";

type DrawerProjectsProps = {
  triggerProps: {
    footer: React.ReactNode;
    imageUrl: string;
  };
  title: string;
  description: string;
  content: React.ReactNode;
};

export function DrawerProjects({
  triggerProps,
  title,
  description,
  content,
}: DrawerProjectsProps) {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <CustomCard
          footer={triggerProps.footer}
          imageUrl={triggerProps.imageUrl}
        />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>

          <div className="p-4 pb-0">
            {content}
            <div
              className="rounded-3xl w-min-sm h-40 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${triggerProps.imageUrl})` }}
            ></div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
