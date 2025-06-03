"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            CONTACT US
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Let&apos;s discuss how we can bring your creative vision to life.
          </motion.p>

          {/* <motion.div
            className="flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: Phone, label: "Call Us", value: "+44 (0) 123 456 789" },
              { icon: Mail, label: "Email Us", value: "info@ncproductions.com" },
              { icon: MessageCircle, label: "Response Time", value: "< 48 hours" },
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-white dark:bg-black rounded-2xl px-6 py-4 shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <contact.icon className="text-red-500" size={20} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{contact.label}</div>
                  <div className="font-semibold">{contact.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
