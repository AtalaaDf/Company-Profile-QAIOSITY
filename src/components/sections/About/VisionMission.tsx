export default function VisionMission() {
  return (
    <div className="grid gap-12 md:grid-cols-2 mb-20">
      <div>
        <h3 className="text-xl text-gray-800 font-semibold mb-4">Our Vision</h3>
        <p className="text-gray-600">
          To become a collaborative technology team that creates meaningful,
          intelligent, and sustainable digital solutions while growing together
          through innovation and learning.
        </p>
      </div>

      <div>
        <h3 className="text-xl text-gray-800 font-semibold mb-4">Our Mission</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Build practical and impactful technology solutions</li>
          <li>Continuously improve technical and problem-solving skills</li>
          <li>Explore emerging technologies responsibly</li>
          <li>Encourage teamwork and knowledge sharing</li>
        </ul>
      </div>
    </div>
  );
}
