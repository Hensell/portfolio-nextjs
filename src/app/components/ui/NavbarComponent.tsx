"use client";
import React from "react";
import { Navbar, NavbarContent, NavbarItem, Link } from "@heroui/react";
import ToggleTheme from "./ToggleTheme";

export default function NavbarComponent() {
  return (
    <Navbar
      className="backdrop-blur-xl bg-background/60 border-b border-border/30 fixed top-0 z-50"
      maxWidth="xl"
    >
      <NavbarContent justify="center">
        <NavbarItem>
          <Link
            className="font-sans font-medium text-foreground/80 hover:text-primary transition-colors"
            color="foreground"
            href="#projects"
            showAnchorIcon
            anchorIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                className="ml-1"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray={10}
                  strokeDashoffset={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15l-5-5M12 15l5-5"
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
            PROJECTS
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex items-center gap-2">
          <Link
            className="font-sans font-medium text-foreground/80 hover:text-primary transition-colors"
            color="foreground"
            href="#"
            showAnchorIcon
            anchorIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                className="ml-1"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray={10}
                  strokeDashoffset={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 9l-5 5M12 9l5 5"
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
          ></Link>
          <ToggleTheme />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
