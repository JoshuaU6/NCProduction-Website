"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

export function OurStory() {
  return (
    <section
      className="py-20 bg-white dark:bg-black"
      aria-labelledby="our-story-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
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
              OUR MISSION
            </Badge>
            <h2
              id="our-story-heading"
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              CRAFTING STORIES THAT
              <br />
              <span className="text-red-500">INSPIRE CHANGE</span>
            </h2>
            <div className="relative">
              <Quote
                className="absolute -top-4 -left-4 text-red-500/20"
                size={48}
                aria-hidden="true"
              />
              <blockquote className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed italic pl-8">
                &quot;NCProductions is a dynamic multimedia production company
                dedicated to amplifying the voices of underrepresented
                communities through the power of storytelling. We specialise in
                film, theatre, and fine art, using these mediums not only to
                showcase lived experiences but to craft compelling,
                thought-provoking narratives that challenge perspectives and
                inspire change.&quot;
              </blockquote>
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
                src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748337637/DSC_4046_tzp22j.jpg"
                alt="Diverse creative team working on multimedia storytelling projects"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm opacity-90 font-medium">
                  Empowering voices, creating impact
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Our mission is to elevate stories that often go unheard
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Creating content that is both artistically rich and socially
            impactful. Through our work, we strive to challenge perspectives,
            foster understanding, and inspire meaningful change in our
            communities and beyond.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
