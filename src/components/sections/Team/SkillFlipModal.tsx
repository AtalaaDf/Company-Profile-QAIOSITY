"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Sparkles, BrainCircuit, ExternalLink } from "lucide-react";

export default function SkillFlipModal({ open, onClose, member }: any) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (open) setFlipped(false);
  }, [open]);

  const skillContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };

  const skillItem = {
    hidden: { scale: 0.8, opacity: 0, y: 10 },
    show: { scale: 1, opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateX: 45 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateX: -45 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative h-[580px] w-[360px]"
            style={{ perspective: "2000px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -right-2 -top-12 z-10 flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <span className="text-sm font-medium">Close</span>
              <div className="rounded-full bg-white/10 p-2 backdrop-blur-md">
                <X className="h-5 w-5" />
              </div>
            </button>

            <motion.div
              className="relative h-full w-full cursor-pointer"
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ 
                duration: 0.7, 
                ease: [0.23, 1, 0.32, 1],
              }}
              style={{ transformStyle: "preserve-3d" }}
              onClick={() => setFlipped((v) => !v)}
            >
              {/*FRONT CARD*/}
              <div
                className="absolute inset-0 rounded-[2.5rem] bg-white shadow-2xl overflow-hidden border border-white/20"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent pointer-events-none" />

                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>

                <div className="p-8 -mt-12 relative bg-white rounded-t-[2.5rem]">
                  <div className="mb-4">
                    <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2">
                      {member.name}
                    </h3>
                    <div className="inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-bold text-blue-600 uppercase tracking-widest">
                      {member.role}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm mb-6 line-clamp-4">
                    {member.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                      <BrainCircuit className="h-4 w-4" />
                      <span>See Skills</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-300" />
                  </div>
                </div>
              </div>

              {/*BACK CARD*/}
              <div
                className="absolute inset-0 rounded-[2.5rem] bg-[#0f172a] p-8 shadow-2xl border border-white/10"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="flex h-full flex-col">
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-blue-400 animate-pulse" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white leading-none">Expertise</h3>
                        <p className="text-xs text-blue-400 font-medium tracking-wide">CORE COMPETENCIES</p>
                      </div>
                    </div>
                  </div>

                  <motion.div 
                    className="flex-1 grid grid-cols-2 gap-3 overflow-y-auto pr-2 custom-scrollbar"
                    variants={skillContainer}
                    initial="hidden"
                    animate={flipped ? "show" : "hidden"}
                  >
                    {member.skills.map((skill: string) => (
                      <motion.div
                        key={skill}
                        variants={skillItem}
                        className="group relative"
                      >
                        <div className="absolute inset-0 rounded-xl bg-white/5 group-hover:bg-blue-500/10 transition-colors border border-white/5" />
                        <span className="relative block py-3 px-2 text-[11px] font-bold text-gray-300 group-hover:text-blue-400 transition-colors text-center uppercase tracking-tighter">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="mt-8">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setFlipped(false);
                      }}
                      className="w-full rounded-2xl bg-blue-600 py-4 text-xs font-black uppercase tracking-widest text-white shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:bg-blue-500 active:scale-95 transition-all"
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}