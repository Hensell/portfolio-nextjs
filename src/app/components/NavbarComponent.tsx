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

export default function NavbarComponent() {
  const activeSection = useActiveSection();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const sections = [
    { id: "section-1", name: "About" },
    { id: "section-2", name: "Projects" },
    { id: "section-3", name: "Contact" },
  ];

  return (
    <Navbar
      onMenuOpenChange={(isOpen) => setIsMenuOpen(isOpen)}
      className="bg-[#D8D9D4]"
      isMenuOpen={isMenuOpen} // Controlar manualmente el estado
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden text-black"
      />
      <NavbarBrand>
        <p className="text-black font-bold">Aca va el logo</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {sections.map((section) => (
          <NavbarItem key={section.id}>
            <Link
              href={`#${section.id}`}
              className={`${
                activeSection === section.id
                  ? "text-slate-500 font-black"
                  : "text-black font-medium"
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
              onPress={() => setIsMenuOpen(false)} // Asegurar el cierre del menú
              className={`${
                activeSection === section.id
                  ? "text-blue-500 font-bold"
                  : "text-black"
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
