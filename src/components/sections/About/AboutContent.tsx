"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutContent = () => {
  const points = [
    {
      id: 1,
      title: "Ruang Interaksi dan Pembelajaran Komunitas",
      description: "Qaiosity Memfasilitasi kegiatan diskusi pengetahuan antara individu dan tim melalui lingkungan kolaboratif.",
      color: "text-gray-500",
      borderColor: "border-violet-400",
    },
    {
      id: 2,
      title: "Eksplorasi dan Pengembangan Inovasi Teknologi",
      description: "Qaiosity Mengkaji, menguji, dan Mengembangkan ide melalui proses eksplorasi dan eksperimen terstruktur.",
      color: "text-gray-500",
      borderColor: "border-pink-300",
    },
    {
      id: 3,
      title: "Kolaborasi Untuk Solusi Berdampak",
      description: "Perancangan solusi didasari kolaborasi yang menghasilkan solusi yang terintegrasi dan memberi dampak nyata.",
      color: "text-gray-500",
      borderColor: "border-teal-300",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="max-w-6xl mx-auto px-2 py-2 mb-10 font-sans">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Ruang <span className="text-[#908FDC]">kolaborasi</span> untuk inovasi teknologi.
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Qaiosity adalah ruang kolaborasi tempat komunitas teknologi bertemu, bereksperimen, 
          dan membangun inovasi. Kami mempertemukan individu, tim, dan ide untuk belajar bersama, 
          berkolaborasi secara terbuka, serta membangun solusi teknologi yang relevan dan <span className="text-indigo-400 underline cursor-pointer decoration-2 underline-offset-4">berdampak nyata</span>.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-slate-200 rounded-2xl rotate-3 transform transition-transform group-hover:rotate-6"></div>
          <div className="absolute inset-0 bg-slate-100 rounded-2xl -rotate-2 transform transition-transform group-hover:-rotate-3"></div>
          
          <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-slate-100">
            <div className="overflow-hidden rounded-xl aspect-[4/3] bg-blue-50 relative">
               <Image 
                  src="/images/team/Qaiosityteam.jpeg" 
                  alt="Team" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
               /> 
            </div>
            <p className="mt-3 text-sm font-medium text-slate-500 text-center">
               Kerja sama antar sesama team
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-10 ml-4"
        >
          {points.map((point) => (
            <motion.div 
              key={point.id} 
              variants={itemVariants}
              className="flex gap-5 group"
            >
              <motion.div 
                whileHover={{ scale: 1.2, backgroundColor: "#f8fafc" }}
                className={`flex-shrink-0 w-8 h-8 rounded-full border-2 ${point.borderColor} ${point.color} flex items-center justify-center font-bold text-sm mt-1 transition-colors`}
              >
                {point.id}
              </motion.div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#908FDC] transition-colors">
                  {point.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent;