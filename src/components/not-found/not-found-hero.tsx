"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Home,
  ArrowLeft,
  Film,
  Theater,
  Calendar,
  Palette,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function NotFoundHero() {
  const router = useRouter();

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-red-500/10 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-blue-500/10 rounded-lg"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-purple-500/10 rounded-full"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-green-500/10 rounded-lg"
          animate={{
            y: [0, 25, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="border-r border-gray-300 dark:border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Animated 404 Illustration */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
              {/* Main 404 Text */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  rotateY: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  404
                </span>
              </motion.div>

              {/* Orbiting Icons */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <div className="relative w-full h-full">
                  <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Film className="text-red-500" size={24} />
                  </motion.div>
                  <motion.div
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Theater className="text-blue-500" size={24} />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Calendar className="text-green-500" size={24} />
                  </motion.div>
                  <motion.div
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Palette className="text-purple-500" size={24} />
                  </motion.div>
                </div>
              </motion.div>

              {/* Pulsing rings */}
              <motion.div
                className="absolute inset-8 border-2 border-red-500/20 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-16 border-2 border-blue-500/20 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              OOPS! PAGE NOT
              <br />
              <span className="text-red-500">FOUND</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              The page you&apos;re looking for seems to have wandered off into the
              creative void. Let&apos;s get you back on track!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={() => router.back()}
              size="lg"
              variant="outline"
              className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
            >
              <ArrowLeft
                className="mr-2 transition-transform group-hover:-translate-x-1"
                size={20}
              />
              GO BACK
            </Button>
            <Link href="/">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <Home className="mr-2" size={20} />
                HOME PAGE
              </Button>
            </Link>
          </motion.div>

          {/* Fun Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { number: "404", label: "Error Code" },
              { number: "∞", label: "Creative Ideas" },
              { number: "100%", label: "Still Amazing" },
              { number: "0", label: "Worries" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-2xl font-bold text-red-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
