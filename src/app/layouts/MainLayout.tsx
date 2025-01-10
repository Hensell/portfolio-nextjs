"use client";

import React, { useEffect, useState, createContext, useContext } from "react";
import NavbarComponent from "../components/NavbarComponent";

const SectionContext = createContext("");

export const useActiveSection = () => useContext(SectionContext);

import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, 
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
      
        if (entry.isIntersecting) {
          console.log(entry.target.id); 
          setActiveSection(entry.target.id); 
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <SectionContext.Provider value={activeSection}>
      <NavbarComponent />
      <main className="px-[min(4em,8%)] space-y-12 bg-gradient-to-r from-[#F6F5F2] via-[#FFEFEF] to-[#FFEFEF] bg-[length:400%_400%] animate-gradient">{children}</main>
    </SectionContext.Provider>
  );
}
