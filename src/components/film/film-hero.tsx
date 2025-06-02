"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function FilmHero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ opacity, scale, y }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/85 dark:from-black/75 dark:via-black/60 dark:to-black/75 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Professional film production setup with cinema camera and lighting equipment"
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            FILM
            <br />
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              PRODUCTION
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We believe in the power of film to empower, inspire, and uplift both
            individuals and communities. Compelling visual stories for screens
            of all sizes.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
