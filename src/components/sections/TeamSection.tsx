interface TeamMember {
  name: string;
  role: string;
  description: string;
  skills: string[];
}

const teamData: TeamMember[] = [
  {
    name: "Atala",
    role: "Frontend Developer",
    description:
      "Berpengalaman membangun antarmuka web modern dengan fokus pada performa dan user experience.",
    skills: ["React", "Next.js", "Tailwind"],
  },
  {
    name: "Felix Gilbert",
    role: "Machine learning",
    description:
      "Mengembangkan dan mengimplementasikan model machine learning untuk analisis data, prediksi, dan automasi",
    skills: ["Python", "TensorFlow", "Scikit-Learn", "Data Analysis"],
  },
  {
    name: "Alif salsabil Salam",
    role: "Backend Developer",
    description:
      "Mengembangkan API dan sistem backend yang aman dan scalable.",
    skills: ["Node.js", "Express", "PostgreSQL"],
  },
];

export default function TeamSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold mb-4 text-black">
          Tim Kami
        </h2>

        <p className="text-gray-600 mb-10 max-w-2xl">
          Kami terdiri dari individu profesional yang memiliki keahlian
          di bidangnya masing-masing.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamData.map((member, index) => (
            <TeamCard key={index} member={member} />
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
    <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition">
      {/* Photo Placeholder */}
      <div className="h-40 w-40 mx-auto rounded-full bg-gray-200 mb-4" />

      <h3 className="text-lg font-semibold text-center">
        {member.name}
      </h3>

      <p className="text-sm text-blue-600 text-center mb-3">
        {member.role}
      </p>

      <p className="text-sm text-gray-600 text-center mb-4">
        {member.description}
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        {member.skills.map((skill, index) => (
          <span
            key={index}
            className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
