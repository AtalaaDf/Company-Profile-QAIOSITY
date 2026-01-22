import TeamSection from "@/components/sections/TeamSection";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
          <h1 className="text-black text-4xl md:text-5xl font-bold mb-6">
            We Are a Digital Team
          </h1>

          <p className="text-gray-600 mb-8">
            Kami adalah tim profesional yang berkolaborasi membangun
            solusi digital berkualitas tinggi.
          </p>
        </div>
        </div>
      </section>

      {/* TEAM / PERSONAL PORTFOLIO */}
      <TeamSection />
    </>
  );
}
