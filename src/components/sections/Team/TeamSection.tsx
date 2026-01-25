import Image from "next/image";

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
    skills: [
      "React", "Next.js", "TypeScript", "Tailwind CSS"
    ],
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
    description:
      "Memiliki kemampuan komunikasi teknis yang baik untuk presentasi dan kolaborasi tim.",
    skills: [
      "C++", "Public Speaking", "Video Editing"
    ],
    image: "/images/team/alip.jpeg",
  },
  {
    name: "Revania Azzahra",
    role: "Creative Content Designer",
    description:
      "Berpengalaman dalam mengedit konten visual dan video untuk media sosial dengan fokus pada branding dan engagement.",
    skills: ["Canva", "Short Video Editing", "Content Design"],
    image: "/images/team/revania.jpeg",
  },
  {
    name: "Agna Fadilla",
    role: "Cyber Security Enthusiast",
    description:
      "Memiliki pemahaman dasar keamanan siber serta pengalaman praktik melalui CTF dan pengembangan project keamanan.",
    skills: [
      "Basic Cyber Security", "CTF", "EDR Project", "VM & Linux Basics", "Spring Boot",
    ],
    image: "/images/team/agna.jpeg",
  },
  {
    name: "Nayla Sahara",
    role: "Administrative & Creative Support",
    description:
      "Mendukung kegiatan publikasi dan administrasi dengan kemampuan komunikasi, desain, dan pengolahan data.",
    skills: [
      "Public Speaking", "Canva", "Video Editing"
    ],
    image: "/images/team/nayla.jpeg",
  },
  {
    name: "Muhammad Alfin Alfian",
    role: "Copywriter & Content Writer",
    description:
      "Menulis esai dan konten kreatif dengan kemampuan komunikasi lisan yang baik serta pemahaman dasar teknis.",
    skills: [
      "Essay Writing", "Public Speaking", "Canva", "C++"
    ],
    image: "/images/team/alfin.jpeg",
  },
  {
    name: "Nayla Tristania Aprillia",
    role: "Digital Media & Marketing Support",
    description:
      "Mendukung pengelolaan media digital dengan keahlian editing multimedia, pemasaran digital, dan manajemen jadwal.",
    skills: [
      "Multimedia Editing", "Digital Marketing", "Scheduling"
    ],
    image: "/images/team/naytris.jpeg",
  },
  {
    name: "Fadila Mumtazah",
    role: "Junior Technical & Administrative Support",
    description:
      "Memiliki dasar pemrograman dan kemampuan penulisan teknis serta administrasi untuk mendukung operasional proyek.",
    skills: [
      "Java", "C++", "Technical Writing", "Administrative Writing", "Basic Digital Entrepreneurship",
    ],
    image: "/images/team/fadila.jpeg",
  },
  {
    name: "Galih Artha Ditha",
    role: "Project & Digital Management",
    description:
      "Mengelola proyek dan strategi konten digital dengan fokus pada perencanaan, koordinasi, dan eksekusi.",
    skills: [
      "Project Management", "Digital Marketing", "Content Scripting", "Content Ideation", "Canva",
    ],
    image: "/images/team/artha.jpeg",
  },
];

/* =======================
  Section
   ======================= */

export default function TeamSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-3xl font-bold text-black">Tim Member</h2>

        <p className="mb-10 max-w-2xl text-gray-600">
          We are a multidisciplinary team collaborating to build impactful
          digital solutions.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamData.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =======================
  Team Card
   ======================= */

interface TeamCardProps {
  member: TeamMember;
}

function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="rounded-lg border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
        <Image
          src={member.image ?? "/images/team/default-avatar.png"}
          alt={`Foto ${member.name}`}
          fill
          sizes="160px"
          className="object-cover"
          priority
        />
      </div>


      <h3 className="text-center text-lg font-semibold text-gray-800">
        {member.name}
      </h3>

      <p className="mb-3 text-center text-sm font-medium text-blue-600">
        {member.role}
      </p>

      <p className="mb-4 text-center text-sm text-gray-600">
        {member.description}
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
