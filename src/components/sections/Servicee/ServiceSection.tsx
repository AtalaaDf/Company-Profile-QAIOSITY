// ServiceSection.tsx
"use client";

import { useState } from "react";

export default function ServiceSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
    setMessage("");
  };

  return (
    <section className="w-full bg-white py-12 md:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-600 mb-4 text-center">
          Berikan Kritik dan Saran
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
          <input
            type="email"
            placeholder="Email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 text-gray-500 p-2.5 sm:p-3 rounded text-sm sm:text-base"
            required
          />
          <textarea
            placeholder="Pesan Anda"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 text-gray-500 p-2.5 sm:p-3 rounded h-28 sm:h-32 text-sm sm:text-base"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2.5 sm:py-3 rounded hover:bg-blue-700 transition duration-200 text-sm sm:text-base font-medium"
          >
            Kirim Pesan
          </button>
        </form>
        <p className="mt-4 sm:mt-6 text-gray-500 text-center text-sm sm:text-base leading-relaxed">
          Kami sangat menghargai kritik dan saran dari kalian. Umpan balik kalian sangat membantu perkembangan komunitas kami.
        </p>
      </div>
    </section>
  );
}