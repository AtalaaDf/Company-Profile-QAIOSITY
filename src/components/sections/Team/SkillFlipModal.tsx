"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";

export default function SkillFlipModal({ open, onClose, member }: any) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (open) setFlipped(false);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative h-[520px] w-[340px]"
            style={{ perspective: "1200px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -right-4 -top-4 z-10 rounded-full bg-white p-2 shadow-lg transition-all hover:scale-110 hover:bg-gray-100"
            >
              <X className="h-5 w-5 text-gray-700" />
            </button>

            <motion.div
              className="relative h-full w-full cursor-pointer"
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.4, 0, 0.2, 1],
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              style={{ transformStyle: "preserve-3d" }}
              onClick={() => setFlipped((v) => !v)}
            >
              {/* FRONT CARD */}
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-2xl ring-1 ring-gray-200"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="relative h-64 w-full overflow-hidden rounded-t-3xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="p-6 text-center">
                  <motion.h3 
                    className="text-2xl font-bold text-gray-800 mb-1"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {member.name}
                  </motion.h3>
                  
                  <motion.p 
                    className="mb-4 text-sm font-semibold text-blue-600 uppercase tracking-wide"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {member.role}
                  </motion.p>
                  
                  <motion.p 
                    className="text-sm leading-relaxed text-gray-600"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {member.description}
                  </motion.p>
                  
                  <motion.div 
                    className="mt-8 flex items-center justify-center gap-2 text-xs font-medium text-gray-400"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>Klik untuk lihat skill detail</span>
                  </motion.div>
                </div>
              </div>

              {/* BACK CARD */}
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 shadow-2xl ring-1 ring-gray-700"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="flex h-full flex-col">
                  {/* Header */}
                  <div className="mb-6 text-center">
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                      <Sparkles className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Skill Set
                    </h3>
                    <p className="text-xs text-gray-400">
                      {member.name} • {member.role}
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="grid grid-cols-2 gap-2">
                      {member.skills.map((skill: string, index: number) => (
                        <motion.div
                          key={skill}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ 
                            delay: flipped ? index * 0.05 : 0,
                            type: "spring",
                            stiffness: 200,
                            damping: 20
                          }}
                          className="group relative"
                        >
                          <div className="absolute inset-0 rounded-lg bg-blue-600 opacity-0 blur transition-opacity group-hover:opacity-20" />
                          <span className="relative block rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 px-3 py-2.5 text-xs font-medium text-white shadow-md transition-all group-hover:scale-105 group-hover:shadow-lg text-center">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Button */}
                  <div className="mt-6 space-y-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setFlipped(false);
                      }}
                      className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                    >
                      Lihat Profil
                    </button>
                    <p className="text-center text-xs text-gray-500">
                      Klik card untuk kembali
                    </p>
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