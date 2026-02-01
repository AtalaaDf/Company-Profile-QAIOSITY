"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";

const techs = [
  { name: "Web Development", color: "from-[#FFA074] to-[#FF8A5B]", icon: "🌐" },
  { name: "React & Next.js", color: "from-gray-900 to-black", icon: "⚛️" },
  { name: "TypeScript", color: "from-blue-600 to-blue-700", icon: "📘" },
  { name: "Tailwind CSS", color: "from-teal-500 to-teal-600", icon: "🎨" },
  { name: "Machine Learning", color: "from-[#C8CAEF] to-[#A8AAEF]", icon: "🤖" },
  { name: "Python", color: "from-yellow-500 to-yellow-600", icon: "🐍" },
  { name: "Data Analysis", color: "from-emerald-500 to-emerald-600", icon: "📊" },
  { name: "Research & Learning", color: "from-pink-500 to-pink-600", icon: "🔬" },
];

export default function TechStack() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    let scrollPosition = container.scrollLeft;
    let animationId: number;
    const scroll = () => {
      if (!isDragging) {
        scrollPosition += 0.5;
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
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
            What We Do
          </h3>
        </div>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
          We focus on modern technologies to design, develop, and experiment
          with intelligent digital systems.
        </p>
      </motion.div>

      {/* Entry Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative"
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={carouselRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={() => setIsDragging(false)}
          className={`
            flex gap-4 md:gap-6 overflow-x-hidden select-none py-6
            ${isDragging ? "cursor-grabbing" : "cursor-grab"}
          `}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {[...techs, ...techs, ...techs].map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.05, 
                rotate: 1,
                y: -5 
              }}
              whileTap={{ scale: 0.95 }}
              className={`
                group relative flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] 
                h-32 sm:h-36 md:h-40 rounded-2xl overflow-hidden bg-gradient-to-br ${tech.color} 
                shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300
              `}
            >
              {/* Efek Cahaya */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 
              to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">

                {/*Animasi Float */}
                <div className="text-4xl md:text-5xl mb-3 transition-transform duration-500 group-hover:scale-125 group-hover:drop-shadow-xl">
                  {tech.icon}
                </div>
                <h4 className={`
                  font-bold text-base sm:text-lg md:text-xl
                  ${["Web Development", "Machine Learning", "Python"].includes(tech.name)
                    ? "text-gray-900" 
                    : "text-white"}
                `}>
                  {tech.name}
                </h4>
                
                <div className="absolute top-4 right-4 flex gap-1">
                  <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2 }} className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} className="w-1.5 h-1.5 rounded-full bg-white/40" />
                </div>
              </div>

              <motion.div 
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                className="absolute bottom-0 left-0 h-1 bg-white/50" 
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        div::-webkit-scrollbar { display: none; }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}