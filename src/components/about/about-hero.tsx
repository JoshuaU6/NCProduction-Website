"use client";

import { motion } from "framer-motion";
import { Heart, Users, Megaphone } from "lucide-react";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/90 dark:from-black/80 dark:via-black/60 dark:to-black/80 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Diverse creative team collaborating on multimedia projects"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            ABOUT
            <br />
            <span className="text-red-500">NC PRODUCTIONS</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A dynamic multimedia production company dedicated to amplifying the
            voices of underrepresented communities through the power of
            storytelling across film, theatre, and fine art.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: Users, label: "Diverse Voices", count: "100+" },
              { icon: Megaphone, label: "Stories Told", count: "250+" },
              { icon: Heart, label: "Communities Served", count: "50+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <stat.icon
                  className="text-red-500"
                  size={24}
                  aria-hidden="true"
                />
                <div>
                  <div className="font-bold text-lg">{stat.count}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
