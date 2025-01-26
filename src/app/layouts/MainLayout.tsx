"use client";

import NavbarComponent from "../components/NavbarComponent";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavbarComponent />
      <div className="px-[min(4em,8%)] space-y-12">{children}</div>
    </>
  );
}
