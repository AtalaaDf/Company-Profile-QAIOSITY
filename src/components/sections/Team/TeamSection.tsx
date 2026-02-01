"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillFlipModal from "./SkillFlipModal";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  skills: string[];
  image: string;
}

const teamData: TeamMember[] = [
  {
    name: "M Atala Daffa Alfaris",
    role: "Frontend Developer",
    description:
      "Berpengalaman membangun antarmuka web modern dengan fokus pada performa, skalabilitas, dan user experience.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/team/atala.jpeg",
  },
  {
    name: "Felix Gilbert",
    role: "Machine Learning Engineer",
    description:
      "Mengembangkan dan mengimplementasikan model machine learning untuk analisis data dan computer vision.",
    skills: [
      "Python", "TensorFlow", "Neural Network", "Scikit-Learn", 
      "Flask", "Data Analysis", "Next.js", "OpenCV",
    ],
    image: "/images/team/felix.jpeg",
  },
  { 
    name: "Alif Salsabil Salam", 
    role: "Public Relation", 
    description: "Memiliki kemampuan komunikasi teknis yang baik untuk presentasi dan kolaborasi antara sesama tim internal maupun external.", 
    skills: [ 
      "C++", "Public Speaking", "Video Editing"
    ], image: "/images/team/alip.jpeg", 
  }, 
  { 
    name: "Revania Azzahra", 
    role: "Creative Content Designer", 
    description: "Berpengalaman dalam mengedit konten visual dan video untuk media sosial dengan fokus pada branding dan engagement.", 
    skills: [
      "Canva", "Short Video Editing", "Content Design"
    ], image: "/images/team/revania.jpeg", 
  }, 
  { 
    name: "Agna Fadilla", 
    role: "Cyber Security Enthusiast", 
    description: "Memiliki pemahaman dasar keamanan siber serta pengalaman praktik melalui CTF dan pengembangan project keamanan.", 
    skills: [ 
      "Basic Cyber Security", "CTF", "EDR Project", "VM & Linux Basics", "Spring Boot",
    ], 
    image: "/images/team/Agna.jpeg", 
  }, 
  { 
    name: "Nayla Sahara", 
    role: "Administrative & Creative Support", 
    description: "Mendukung kegiatan publikasi dan administrasi dengan kemampuan komunikasi, desain, dan memiliki pengetahuan dan pengalaman dalam pengolahan data.", 
    skills: [ 
      "Public Speaking", "Canva", "Video Editing"
    ], 
    image: "/images/team/nayla.jpeg", 
  }, 
  { 
    name: "Muhammad Alfin Alfian", 
    role: "Copywriter & Content Writer", 
    description: "Menulis esai dan konten kreatif dengan kemampuan komunikasi lisan yang baik serta pemahaman dasar teknis.", 
    skills: [ "Essay Writing", "Public Speaking", "Canva", "C++" 
    ], 
    image: "/images/team/alpin.jpeg",
  }, 
  { 
    name: "Nayla Tristania Aprillia", 
    role: "Digital Media & Marketing Support", 
    description: "Mendukung pengelolaan media digital dengan keahlian editing multimedia, pemasaran digital, dan manajemen jadwal.", 
    skills: [ 
      "Multimedia Editing", "Digital Marketing", "Scheduling" 
    ], 
    image: "/images/team/naytris.jpeg", 
  }, 
  { 
    name: "Fadila Mumtazah", 
    role: "Junior Technical & Administrative Support", 
    description: "Memiliki dasar pemrograman dan kemampuan penulisan teknis serta administrasi untuk mendukung operasional proyek.", 
    skills: [ 
      "Java", "C++", "Technical Writing", "Administrative Writing", "Basic Digital Entrepreneurship", 
    ], 
    image: "/images/team/fadila.jpeg", 
  }, 
  { 
    name: "Galih Artha Ditha", 
    role: "Project & Digital Management", 
    description: "Mengelola proyek dan strategi konten digital dengan fokus pada perencanaan, koordinasi, dan eksekusi.", 
    skills: [ "Project Management", "Digital Marketing", "Content Scripting", "Content Ideation", "Canva", 
    ], 
    image: "/images/team/artha.jpeg", },
];

export default function TeamSection() {
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
            Tim Member
          </h2>
          <p className="mb-12 max-w-2xl text-gray-600 text-lg">
            We are a multidisciplinary team collaborating to build impactful
            digital solutions.
          </p>
        </motion.div>

        {/* Grid Kartu */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {teamData.map((member) => (
            <motion.div
              key={member.name} variants={cardVariants} whileHover={{ y: -10 }}
              className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              {/* Profile Image Container */}
              <div className="relative mx-auto mb-6 h-44 w-44 overflow-hidden rounded-full ring-4 ring-gray-50 group-hover:ring-blue-50 transition-all duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Info Member */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-500">
                  {member.role}
                </p>
                <p className="mb-6 text-sm leading-relaxed text-gray-600 line-clamp-3">
                  {member.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-tight text-blue-700 border border-blue-100"
                  >
                    {skill}
                  </span>
                ))}
                {member.skills.length > 3 && (
                  <span className="text-[11px] font-bold text-gray-400 self-center">
                    +{member.skills.length - 3} more
                  </span>
                )}
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelected(member)}
                className="w-full rounded-xl bg-gray-900 py-3 text-sm font-bold text-white hover:bg-blue-600 transition-colors duration-300 shadow-lg shadow-gray-200 hover:shadow-blue-200"
              >
                Selengkapnya
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <SkillFlipModal
            open={!!selected}
            onClose={() => setSelected(null)}
            member={selected}
          />
        )}
      </AnimatePresence>
    </section>
  );
}