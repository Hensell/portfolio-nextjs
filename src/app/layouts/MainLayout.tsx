import React from 'react';
import NavbarComponent from '../components/NavbarComponent';


type mainLayoutProps = {
  children: React.ReactNode;
};

export default function main({ children }: mainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#000]">
    <NavbarComponent />
    <main className="flex-grow">{children}</main>
  </div>
  )
}
