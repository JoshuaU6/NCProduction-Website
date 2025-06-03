"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
        </motion.div>
      </div>
    </section>
  );
}
