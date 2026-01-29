import AboutIntro from "./AboutIntro";
import VisionMission from "./AboutContent";
import TechStack from "./TechStack";
import AboutContent from "./AboutContent";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* <AboutIntro /> */}
        <AboutContent/>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-20" />

        <TechStack />
      </div>
    </section>
  );
}
