"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Quote, Mic, Palette, Zap } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export function TheatreVision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      className="py-32 bg-white dark:bg-black overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Sticky Content */}
          <div className="lg:sticky lg:top-32">
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
                OUR VISION
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                THE STAGE AS A
                <br />
                <span className="text-red-500">PLAYGROUND</span>
              </h2>
              <div className="relative mb-8">
                <Quote
                  className="absolute -top-6 -left-6 text-red-500/20"
                  size={64}
                  aria-hidden="true"
                />
                <blockquote className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed italic pl-12 font-light">
                  &quot;We see the stage as a space to play, experiment, and
                  provoke conversation. We&apos;re committed to introducing new
                  works and fresh approaches to the craft.&quot;
                </blockquote>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
                Opening the door for new communities and audiences to experience
                theatre in bold and inclusive ways. Our productions challenge
                conventions while honoring the transformative power of live
                performance.
              </p>

              {/* Core Values */}
              {/* <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: Lightbulb,
                    title: "Innovation",
                    description: "Fresh approaches to traditional craft",
                  },
                  {
                    icon: Users,
                    title: "Inclusion",
                    description: "Welcoming new communities",
                  },
                  {
                    icon: Mic,
                    title: "Voice",
                    description: "Amplifying diverse stories",
                  },
                  {
                    icon: Zap,
                    title: "Impact",
                    description: "Provoking meaningful conversation",
                  },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <value.icon className="w-8 h-8 text-red-500 mb-3" />
                    <h3 className="font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div> */}
            </motion.div>
          </div>

          {/* Scrolling Bento Grid */}
          <motion.div className="space-y-6" style={{ y }}>
            {/* Large featured image */}
            <motion.div
              className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748241838/452533386_880258540802844_4752932826746701906_n_btpipb.jpg"
                alt="Experimental theatre performance with innovative staging"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Experimental Staging</h3>
                <p className="text-sm opacity-90">
                  Pushing boundaries of traditional theatre
                </p>
              </div> */}
            </motion.div>

            {/* Grid of smaller images */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="relative h-48 rounded-2xl overflow-hidden shadow-lg group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338382/THE_WHITE_ROSE-13_1_qoenva.jpg"
                  alt="Diverse cast in contemporary production"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
              </motion.div>

              <motion.div
                className="relative h-48 rounded-2xl overflow-hidden shadow-lg group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Image
                  src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748241841/WhatsApp_Image_2025-03-27_at_14.37.37_zhowek.jpg"
                  alt="Innovative lighting design"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              </motion.div>
            </div>

            {/* Wide image */}
            <motion.div
              className="relative h-64 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338391/THE_WHITE_ROSE-44_1_smi6dj.jpg"
                alt="Community engagement workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 via-transparent to-transparent" />
            </motion.div>

            {/* Three column grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  icon: Palette,
                  label: "Design",
                  color: "from-red-500/20 to-red-900/60",
                },
                {
                  icon: Mic,
                  label: "Performance",
                  color: "from-blue-500/20 to-blue-900/60",
                },
                {
                  icon: Zap,
                  label: "Innovation",
                  color: "from-green-500/20 to-green-900/60",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative h-32 rounded-xl overflow-hidden shadow-md bg-gradient-to-br ${item.color}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <item.icon size={24} className="mb-2" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Final large image */}
            <motion.div
              className="relative h-80 rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338386/THE_WHITE_ROSE-24_cizv0v.jpg"
                alt="Audience engagement during interactive performance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">Audience Connection</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Creating intimate moments that bridge the gap between
                  performer and audience
                </p>
              </div> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
