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

          <div
            className="rounded-xl relative p-6  bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${triggerProps.imageUrl})` }}
          >
            <div className="rounded-xl absolute inset-0 backdrop-blur-[4px] backdrop-saturate-[100%] bg-[#ffffff] bg-opacity-5"></div>
            <div className="relative z-10">{content}</div>
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
