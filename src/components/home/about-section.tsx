"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { home } from "@/lib/assets";

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
              for storytelling, we&apos;ve spent time bringing creative visions
              to life across multiple media platforms.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              Our diverse team of creatives, technicians, and producers work
              collaboratively to deliver innovative projects that captivate
              audiences and create lasting impressions.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <Button
                size="lg"
                variant="outline"
                className="border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 hover:bg-red-50 dark:hover:bg-gray-800 transition-all duration-300 rounded-lg text-lg py-3 cursor-pointer"
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
      </div>
    </section>
  );
}
