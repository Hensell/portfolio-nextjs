import React from 'react';
import Navbar from '../components/Navbar';


type mainLayoutProps = {
  children: React.ReactNode;
};

export default function main({ children }: mainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#E2E2DC]">
    <Navbar />
    <main className="flex-grow">{children}</main>
  </div>
  )
}
