"use client";

import { useEffect, useRef, useState } from "react";

const techs = [
  { name: "Web Development", color: "bg-[#FFA074] text-black" },
  { name: "React & Next.js", color: "bg-black text-white" },
  { name: "TypeScript", color: "bg-blue-600 text-white" },
  { name: "Tailwind CSS", color: "bg-teal-500 text-white" },
  { name: "Machine Learning", color: "bg-[#C8CAEF] text-black" },
  { name: "Python", color: "bg-yellow-500 text-black" },
  { name: "Data Analysis", color: "bg-emerald-500 text-white" },
  { name: "Research & Learning", color: "bg-pink-500 text-white" },
];

export default function TechStack() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  /* AUTO SCROLL */
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let scrollPosition = container.scrollLeft;
    let animationId: number;

    const scroll = () => {
      if (!isDragging) {
        scrollPosition += 0.4;
        container.scrollLeft = scrollPosition;

        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = 0;
        }
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isDragging]);

  /* DRAG HANDLERS */
  const handlePointerDown = (e: React.PointerEvent) => {
    const container = carouselRef.current;
    if (!container) return;

    setIsDragging(true);
    startX.current = e.clientX;
    scrollLeft.current = container.scrollLeft;
    container.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const container = carouselRef.current;
    if (!container) return;

    const x = e.clientX - startX.current;
    container.scrollLeft = scrollLeft.current - x;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    carouselRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <section className="w-full py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
          What We Do
        </h3>
        <p className="text-gray-600 mb-12 max-w-2xl">
          We focus on modern technologies to design, develop, and experiment
          with intelligent digital systems.
        </p>

        <div
          ref={carouselRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={() => setIsDragging(false)}
          className={`
            flex gap-6 overflow-x-hidden whitespace-nowrap
            select-none
            ${isDragging ? "cursor-grabbing" : "cursor-grab"}
          `}
        >
          {[...techs, ...techs].map((tech, index) => (
            <div
              key={index}
              className={` min-w-[220px] sm:min-w-[260px] md:min-w-[300px] 
                h-28 sm:h-32 rounded-xl ${tech.color} flex items-center justify-center 
                font-semibold text-base sm:text-lg shadow-lg
              `}
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
