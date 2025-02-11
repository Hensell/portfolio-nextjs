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
          <Link
            className="font-robotoSerif font-light"
            color="foreground"
            href="#"
          >
            HENSELL
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className="font-robotoSerif font-light"
            color="foreground"
            href="#"
          >
            ABOUT
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
