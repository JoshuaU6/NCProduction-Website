"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Users, Mic, Palette, Film, Calendar } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import { Badge } from "@/components/ui/badge";

export function CommunityFocus() {
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
                OUR MISSION
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                BREAKING DOWN
                <br />
                <span className="text-red-500">CREATIVE BARRIERS</span>
              </h2>
              <div className="relative mb-8">
                <Quote
                  className="absolute -top-6 -left-6 text-red-500/20"
                  size={64}
                  aria-hidden="true"
                />
                <blockquote className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed italic pl-12 font-light">
                  &quot;We understand that the arts can often feel
                  isolating—that&apos;s why we champion the diverse communities
                  that make up our creative sector.&quot;
                </blockquote>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
                Community is at the heart of everything we do. By bringing
                artists and audiences together, we amplify underrepresented
                voices and help build a more connected, creative future.
              </p>

              {/* Impact Stats */}
              {/* <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "98%", label: "Artist Satisfaction" },
                  { number: "15K+", label: "Community Members" },
                  { number: "200+", label: "Events Hosted" },
                  { number: "50+", label: "Partnerships" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold text-red-500 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
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
                src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748241994/DSC_3717_dewsgt.jpg"
                alt="Community gathering at NC Productions event"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">
                  Community Film Collective
                </h3>
                <p className="text-sm opacity-90">
                  Monthly screenings & workshops
                </p>
              </div>
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
                  src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748241957/DSC_4641-2_ud8zlr.jpg"
                  alt="Artist showcase event"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mb-2">
                    <Mic size={16} />
                  </div>
                  <p className="text-sm font-medium">Artist Spotlight</p>
                </div>
              </motion.div>

              <motion.div
                className="relative h-48 rounded-2xl overflow-hidden shadow-lg group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Image
                  src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338181/Bomb_Factory_ART-20_l3sw31.jpg"
                  alt="Shades Of Resistance"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mb-2">
                    <Palette size={16} />
                  </div>
                  <p className="text-sm font-medium">ShadesOf</p>
                </div>
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
                src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748242114/DSC_4584-2_iujrst.jpg"
                alt="Community workshop in progress"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-bold mb-2">
                  Interactive Workshops
                </h3>
                <p className="text-sm opacity-90">
                  Hands-on learning experiences
                </p>
              </div>
            </motion.div>

            {/* Three column grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  icon: Film,
                  label: "Film",
                  color: "from-red-500/20 to-red-900/60",
                },
                {
                  icon: Users,
                  label: "Community",
                  color: "from-blue-500/20 to-blue-900/60",
                },
                {
                  icon: Calendar,
                  label: "Events",
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
                src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748241845/9804c297-6a57-4834-a75f-30457f0d13f1_e1pd77.jpg"
                alt="Diverse artists collaborating"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">
                  Building Creative Futures
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Empowering the next generation of diverse storytellers through
                  mentorship and collaboration
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
