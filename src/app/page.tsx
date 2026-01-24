import AboutSection from "@/components/sections/About/AboutSection";
import TeamSection from "@/components/sections/Team/TeamSection";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative w-full h-[80vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/fasilkom.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Build real things. Grow together.
            </h1>

            <p className="text-gray-200 mb-8">
              A student-led tech community focused on learning through real projects, collaboration, and experimentation.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT / ABOUT SECTION */}
      <AboutSection />

      {/* TEAM / PERSONAL PORTFOLIO */}
      <TeamSection />
    </>
  );
}
