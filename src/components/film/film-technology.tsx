"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Camera, Mic, Monitor, Zap, Settings, Award } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const equipment = [
  { name: "Professional Cinema Cameras (ARRI, RED, Sony)", icon: Camera },
  { name: "Drone and Aerial Systems", icon: Zap },
  { name: "Advanced Lighting Systems", icon: Monitor },
  { name: "Professional Audio Recording Equipment", icon: Mic },
  { name: "Stabilization Systems (Steadicam, Gimbal)", icon: Settings },
  { name: "Drone and Aerial Cinematography", icon: Award },
];

export function FilmTechnology() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-32 bg-white dark:bg-black">
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
              EQUIPMENT
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              CUTTING-EDGE
              <br />
              <span className="text-red-500">TECHNOLOGY</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              We utilize the latest film production technology to ensure the
              highest quality results for every project. Our equipment inventory
              includes professional-grade cameras, lighting, and audio systems.
            </p>

            {/* Equipment List */}
            <div className="space-y-4 mb-8">
              {equipment.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                    <item.icon className="text-red-500" size={20} />
                  </div>
                  <span className="font-medium">{item.name}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-600 dark:text-gray-400 italic">
              Professional camera equipment and cutting-edge technology for
              exceptional results.
            </p>
          </motion.div>

          {/* Equipment Images Bento Grid */}
          <motion.div className="space-y-6" style={{ y }}>
            <motion.div
              className="relative h-80 rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748353385/Benchwarmers_E1-15_kgnfu9.jpg"
                alt="Professional cinema camera equipment setup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Cinema Cameras</h3>
                <p className="text-sm opacity-90">
                  Professional ARRI and RED camera systems
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
                  alt="Professional lighting equipment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Lighting Systems</p>
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
                  src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748353388/Benchwarmers_E2-18_qdpnyz.jpg"
                  alt="Audio recording equipment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Audio Equipment</p>
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
                src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338661/Screenshot_2025-05-21_at_11.41.09_pd9ppn.png"
                alt="Drone and aerial cinematography equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-bold mb-2">Aerial Systems</h3>
                <p className="text-sm opacity-90">
                  Professional drone cinematography capabilities
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
