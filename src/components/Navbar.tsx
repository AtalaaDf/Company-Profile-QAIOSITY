// Navbar.tsx
"use client";

import { useEffect, useState } from "react";

interface NavbarProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  teamRef: React.RefObject<HTMLDivElement>;
  serviceRef: React.RefObject<HTMLDivElement>
}

export default function Navbar({ aboutRef, teamRef, serviceRef }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200
        ${isScrolled ? "backdrop-blur-md bg-white/70 shadow-sm text-black" : "bg-transparent"}
      `}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-#C8CAEF">QAIOSITY</h1>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          <button onClick={() => scrollToSection(aboutRef)} className="hover:text-blue-600">
            About
          </button>
          <button onClick={() => scrollToSection(teamRef)} className="hover:text-blue-600">
            Team
          </button>
          <button onClick={() => scrollToSection(serviceRef)} className="hover:text-blue-600">
            Service
          </button>
          <button onClick={() => scrollToSection(serviceRef)} className="hover:text-blue-600">
            Contact
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/80 border-t px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <button onClick={() => scrollToSection(aboutRef)}>
            About
          </button>
          <button onClick={() => scrollToSection(teamRef)}>
            Team
          </button>
          <button onClick={() => scrollToSection(serviceRef)}>
            Service
          </button>
          <button onClick={() => scrollToSection(serviceRef)}>
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}