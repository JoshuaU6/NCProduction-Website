"use client";

import { motion } from "framer-motion";
import { Award, Film, Theater, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { home } from "@/lib/assets";

const stats = [
  { number: "120+", label: "PROJECTS COMPLETED", icon: Award },
  { number: "45", label: "FILM PRODUCTIONS", icon: Film },
  { number: "38", label: "THEATRE SHOWS", icon: Theater },
  { number: "25", label: "TEAM MEMBERS", icon: Users },
];

export function AboutSection() {
  const { push } = useRouter();

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-black"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="border-red-500 text-red-500 mb-4 bg-red-50 dark:bg-red-900/20"
            >
              ABOUT US
            </Badge>
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              CRAFTING STORIES
              <br />
              <span className="text-red-500">ACROSS MEDIUMS</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              NC Productions is a multidisciplinary creative studio specializing
              in film, theatre, events, and exhibitions. Founded with a passion
              for storytelling, we&apos;ve spent the last decade bringing
              creative visions to life across multiple media platforms.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              Our diverse team of creatives, technicians, and producers work
              collaboratively to deliver innovative projects that captivate
              audiences and create lasting impressions.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <Badge className="bg-red-600 text-white text-lg px-4 py-2">
                10+ YEARS OF EXPERIENCE
              </Badge>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 rounded-lg text-lg py-3"
                aria-label="Contact us to discuss your project"
                onClick={() => push("/contact")}
              >
                GET IN TOUCH
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={home.about}
                alt="NC Productions creative team collaborating in modern studio environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm opacity-90">
                  Our creative team in action
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <stat.icon
                className="w-8 h-8 text-red-500 mx-auto mb-3"
                aria-hidden="true"
              />
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
