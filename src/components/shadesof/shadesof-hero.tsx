"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Palette, Sparkles, Eye } from "lucide-react"
import Image from "next/image"

export function ShadesOfHero() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ opacity, scale, y }}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/90 dark:from-black/80 dark:via-black/65 dark:to-black/80 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Immersive art installation with colorful lighting and interactive elements"
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
            className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Palette size={16} aria-hidden="true" />
            Immersive exhibitions creating thought-provoking experiences
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
              SHADESOF
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Our exclusive creative methodology that challenges perspectives and engages audiences through immersive,
            multimedia experiences that blur the lines between art, technology, and human connection.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: Eye, label: "Exhibitions Created", count: "15+" },
              { icon: Sparkles, label: "Interactive Installations", count: "40+" },
              { icon: Palette, label: "Visitors Engaged", count: "25K+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-2xl px-8 py-4 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl flex items-center justify-center">
                  <stat.icon className="text-purple-600 dark:text-purple-400" size={24} aria-hidden="true" />
                </div>
                <div>
                  <div className="font-bold text-2xl">{stat.count}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}
