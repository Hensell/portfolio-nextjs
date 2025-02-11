"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import ToggleTheme from "./ToggleTheme";
import DrawerComponent from "./DrawerComponent";

export default function App() {
  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand>
          <DrawerComponent />

          <Link href="#" className="sm:hidden font-robotoSerif">
            HENSELL
          </Link>
          <Link
            className="font-robotoSerif font-light hidden sm:flex"
            color="foreground"
            href="#"
            showAnchorIcon
            anchorIcon={
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
          >
            ABOUT
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className="font-robotoSerif font-light"
            color="foreground"
            href="#projects"
          >
            PROJECTS
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ToggleTheme />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
