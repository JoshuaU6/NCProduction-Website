"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { home } from "@/lib/assets";

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("featured-projects");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0" style={{ opacity, scale }}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/80 dark:from-black/70 dark:via-black/50 dark:to-black/70 z-10" />
        <Image
          src={home.hero}
          alt="Film production team working with professional equipment"
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
          <motion.div
            className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Zap size={16} aria-hidden="true" />
            Award-winning creative studio
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            CREATING
            <br />
            <span className="text-red-500">UNFORGETTABLE</span>
            <br />
            EXPERIENCES
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-800 dark:text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Film. Theatre. Events. Exhibitions. We bring creative visions to
            life across multiple media platforms with cutting-edge technology
            and artistic excellence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Discover our creative work and portfolio"
            >
              DISCOVER OUR WORK
              <ArrowRight className="ml-2" size={20} aria-hidden="true" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        aria-hidden="true"
        onClick={scrollToNextSection}
      >
        <div className="w-6 h-10 border-2 border-gray-600 dark:border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 dark:bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
