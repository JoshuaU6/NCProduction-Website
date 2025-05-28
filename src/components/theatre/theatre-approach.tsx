"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Users, Lightbulb, Zap, Palette } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export function TheatreApproach() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="border-red-500 text-red-500 mb-6 bg-red-50 dark:bg-red-900/20 px-4 py-2"
            >
              OUR APPROACH
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              CRAFTING
              <br />
              <span className="text-red-500">THEATRICAL</span>
              <br />
              EXPERIENCES
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Our approach to theatre production is built on a foundation of
              creative innovation, technical excellence, and collaborative
              storytelling. We believe that theatre is not just entertainment,
              it&apos;s a catalyst for social change and emotional connection.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
              Each production begins with a deep appreciation of the narrative,
              followed by a comprehensive development process that brings
              together directors, designers, performers, and technicians to
              create a cohesive artistic vision.
            </p>

            {/* Process Steps */}
            <div className="space-y-6">
              {[
                {
                  icon: Lightbulb,
                  title: "Creative Development",
                  description:
                    "Collaborative ideation and script development with diverse voices",
                },
                {
                  icon: Palette,
                  title: "Design Innovation",
                  description:
                    "Cutting-edge visual and technical design that serves the story",
                },
                {
                  icon: Users,
                  title: "Inclusive Casting",
                  description:
                    "Authentic representation that reflects our community's diversity",
                },
                {
                  icon: Zap,
                  title: "Technical Excellence",
                  description:
                    "State-of-the-art production values that enhance the narrative",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white dark:bg-black rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="text-red-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Bento Grid */}
          <motion.div className="space-y-6" style={{ y }}>
            <motion.div
              className="relative h-80 rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748353389/Benchwarmers_E2-27_yz111x.jpg"
                alt="Theatre director working with diverse cast"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">
                  Collaborative Direction
                </h3>
                <p className="text-sm opacity-90">
                  Working together to bring stories to life
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="relative h-48 rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748353389/Benchwarmers_E2-40_nvyzxo.jpg"
                  alt="Innovative set design process"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Set Design</p>
                </div>
              </motion.div>

              <motion.div
                className="relative h-48 rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Image
                  src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338567/Screenshot_2025-05-21_at_11.32.21_oriles.png"
                  alt="Costume and makeup design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Costume Design</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="relative h-64 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748353385/Benchwarmers_E1-15_kgnfu9.jpg"
                alt="Technical rehearsal with lighting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-bold mb-2">Technical Innovation</h3>
                <p className="text-sm opacity-90">
                  Cutting-edge lighting and sound design
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
