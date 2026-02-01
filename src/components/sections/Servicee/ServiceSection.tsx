"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ServiceSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
    setIsSubmitted(false);
    setEmail("");
    setMessage("");
    }, 3000);
  };

  return (
    <section className="w-full bg-white py-12 md:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Berikan Kritik dan Saran
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="contact-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              {/* Email Input */}
              <motion.div whileFocus={{ y: -2 }} className="flex flex-col">
                <input
                  type="email"
                  placeholder="Email Anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-200 bg-gray-50 text-gray-700 p-3 rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white outline-none transition-all"
                  required
                />
              </motion.div>

              {/* Message Input */}
              <motion.div whileFocus={{ y: -2 }} className="flex flex-col">
                <textarea
                  placeholder="Pesan Anda"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border border-gray-200 bg-gray-50 text-gray-700 p-3 rounded-xl h-32 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white outline-none transition-all resize-none"
                  required
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300 text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
              >
                <span>Kirim Pesan</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </motion.form>
          ) : (
            
            <motion.div
              key="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-10 text-center"
            >
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Pesan Terkirim!</h3>
              <p className="text-gray-500">Terima kasih atas masukannya.</p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-gray-500 text-center text-sm sm:text-base leading-relaxed"
        >
          Kami sangat menghargai kritik dan saran dari kalian. Umpan balik kalian sangat membantu perkembangan komunitas kami.
        </motion.p>
      </motion.div>
    </section>
  );
}