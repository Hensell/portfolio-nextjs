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
    { id: "section-1", name: "Section 1" },
    { id: "section-2", name: "Section 2" },
    { id: "section-3", name: "Section 3" },
  ];

  return (
    <Navbar  onMenuOpenChange={setIsMenuOpen}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      <NavbarBrand>
        <p>Hensell</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4"  justify="center" >
        {sections.map((section) => (
          <NavbarItem key={section.id}>
            <Link
              href={`#${section.id}`}
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
      </NavbarContent>
      <NavbarMenu>
        {sections.map((section) => (
             <NavbarItem key={section.id}>
             <Link
               href={`#${section.id}`}
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
