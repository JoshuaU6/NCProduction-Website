"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CldImage } from "next-cloudinary";

export function EventsHero() {
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
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/85 dark:from-black/75 dark:via-black/60 dark:to-black/75 z-10" />
        <CldImage
          src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748242001/DSC_2573_nx1o23.jpg"
          alt="Diverse community gathering at NC Productions event"
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
            EVENTS THAT
            <br />
            <span className="text-transparent bg-gradient-to-r from-red-500 to-red-600 bg-clip-text ">
              UNITE COMMUNITIES
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We create inclusive, safe spaces for artists to share their work and
            for audiences to engage meaningfully with it. Through connection and
            celebration, we amplify underrepresented voices.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
