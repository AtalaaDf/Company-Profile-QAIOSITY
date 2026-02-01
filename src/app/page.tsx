"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/About/AboutSection";
import TeamSection from "@/components/sections/Team/TeamSection";
import ServiceSection from "@/components/sections/Servicee/ServiceSection";

export default function HomePage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* NAVBAR */}
      <Navbar aboutRef={aboutRef} teamRef={teamRef} serviceRef={serviceRef} />

      {/* HERO SECTION */}
      <section
        className="relative w-full h-[80vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/team/Qaiosityteam.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Build real things. Grow together.
            </h1>
            <p className="text-gray-200 mb-8">
              A student-led tech community focused on learning through real projects, collaboration, and experimentation.
            </p>
          </div>
        </div>
      </section>

      {/* About / ABOUT SECTION */}
      <div ref={aboutRef}>
        <AboutSection />
      </div>

      {/* Team / PERSONAL PORTFOLIO */}
      <div ref={teamRef}>
        <TeamSection />
      </div>

      {/* Service / SERVICE SECTION */}
      <div ref={serviceRef}>
        <ServiceSection />
      </div>
    </>
  );
}