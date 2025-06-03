"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Film, Mic, Music, Camera, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Feature Films", icon: Film },
  { name: "Short Films", icon: Camera },
  { name: "Documentaries", icon: Film },
  { name: "Commercial Productions", icon: Camera },
  { name: "Music Videos", icon: Music },
  { name: "Micro Content", icon: Mic },
];

export function FilmVision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      className="py-32 bg-white dark:bg-black overflow-hidden"
    >
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
              PRODUCTIONS
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              FILM
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              From concept development to post-production, we create compelling
              visual stories for screens of all sizes. Whether it&apos;s
              documentaries, dramas, comedies, commercial campaigns, or micro
              content, we meticulously approach all elements of production —
              from cinematography, direction, and sound engineering to
              composing.
            </p>

            <div className="relative mb-8">
              <Quote
                className="absolute -top-4 -left-4 text-red-500/20"
                size={48}
                aria-hidden="true"
              />
              <blockquote className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed italic pl-8">
                &quot;Our commitment is not only to our clients—but also to the
                communities and individuals we represent and serve.&quot;
              </blockquote>
            </div>

            {/* Services List */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                    <service.icon className="text-red-500" size={16} />
                  </div>
                  <span className="font-medium text-sm">{service.name}</span>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/contact">
                INQUIRE ABOUT FILM
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>

          {/* Featured Film Equipment Image */}
          <motion.div
            className="relative"
            style={{ y }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748353385/Benchwarmers_E1-15_kgnfu9.jpg"
                alt="Professional vintage film equipment and camera setup"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
