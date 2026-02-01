"use client";

import { motion } from "framer-motion";
import TechStack from "./TechStack";
import AboutContent from "./AboutContent";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }} whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin:"-100px" }} transition={{duration: 0.8,    ease: [0.22, 1, 0.36, 1]
          }}
        >
          <AboutContent />
        </motion.div>

        {/* Divider */}
        <div className="relative py-12">
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
            className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" 
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} 
          transition={{type: "spring",   stiffness: 100,   damping: 20,   delay: 0.2 
          }}
        >
          <TechStack />
        </motion.div>

      </div>
    </section>
  );
}