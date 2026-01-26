"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function SkillFlipModal({ open, onClose, member }: any) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (open) setFlipped(false);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div
            className="relative h-[480px] w-[320px]"
            style={{ perspective: "1200px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className="relative h-full w-full cursor-pointer"
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
              onClick={() => setFlipped((v) => !v)}
            >
              {/* FRONT */}
              <div
                className="absolute inset-0 rounded-2xl bg-white shadow-2xl"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-blue-600">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.description}
                  </p>
                  <p className="mt-6 text-xs text-gray-400">
                    Click to skill detail
                  </p>
                </div>
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 rounded-2xl bg-gray-900 p-6 shadow-2xl"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <h3 className="mb-3 text-center text-lg font-bold text-white">
                  Skill Set
                </h3>

                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onClose}
                  className="mt-6 w-full rounded-lg bg-white py-2 text-sm font-semibold text-gray-900"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
