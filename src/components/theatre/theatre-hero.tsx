"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Theater, Sparkles, Users } from "lucide-react";
import Image from "next/image";

export function TheatreHero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ opacity, scale, y }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10" />
        <Image
          src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748241838/452633233_880258994136132_5076902531185505532_n_vowwep.jpg"
          alt="Dramatic theatre stage with innovative lighting and performers"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            THEATRE
            <br />
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              PRODUCTIONS
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We see the stage as a space to play, experiment, and provoke
            conversation. Committed to introducing new works and fresh
            approaches to theatre in bold and inclusive ways.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: Theater, label: "Productions", count: "25+" },
              { icon: Sparkles, label: "New Works", count: "40+" },
              { icon: Users, label: "Audiences Reached", count: "15K+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 shadow-xl border border-white/20"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <stat.icon
                    className="text-red-400"
                    size={24}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="font-bold text-2xl text-white">
                    {stat.count}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
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
