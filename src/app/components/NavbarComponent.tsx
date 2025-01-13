"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/react";
import { useActiveSection } from "../layouts/MainLayout";
import { ModeToggle } from "./modeToggle";


export default function NavbarComponent() {
  const activeSection = useActiveSection();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const sections = [
    { id: "about", name: "About" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ];

  return (
    <Navbar
      className="backdrop-blur-[8px] backdrop-saturate-[100%] bg-[#ffffff] bg-opacity-0"
      onMenuOpenChange={(isOpen) => setIsMenuOpen(isOpen)}
      isMenuOpen={isMenuOpen}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <Link href="#">
          <p className="font-bold mr-5">Aca va el logo</p>
        </Link>

        <ModeToggle />
      </NavbarBrand>

    
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {sections.map((section) => (
          <NavbarItem key={section.id}>
            <Link
              href={`#${section.id}`}
              className={`${
                activeSection === section.id
                  ? "font-black"
                  : "font-medium"
              }`}
            >
              {section.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {sections.map((section) => (
          <NavbarItem key={section.id}>
            <Link
              href={`#${section.id}`}
              onPress={() => setIsMenuOpen(false)}
              className={`${
                activeSection === section.id
                  ? "font-bold"
                  : "font-medium"
              }`}
            >
              {section.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
