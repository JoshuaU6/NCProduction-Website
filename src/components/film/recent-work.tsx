"use client";

import { motion } from "framer-motion";
import { Film } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { films } from "@/lib/constants";

export function RecentWorks() {
  return (
    <section className="py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge
            variant="outline"
            className="border-red-500 text-red-500 mb-6 bg-red-50 dark:bg-red-900/20 px-6 py-3 text-lg"
          >
            RECENT WORKS
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            OUR LATEST FILMS
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Showcasing our most recent film productions, from compelling short
            films to powerful documentaries and creative music videos
          </p>
        </motion.div>

        {/* Featured Film - First in Array */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden shadow-2xl hover:shadow-red-500/20 transition-all duration-500 group cursor-pointer">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <Image
                  src={films[0].image}
                  alt={films[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <Badge
                    variant="secondary"
                    className="bg-red-600 text-white px-3 py-1"
                  >
                    {films[0].category}
                  </Badge>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center bg-gray-50 dark:bg-gray-900">
                <div className="flex items-center gap-3 mb-4">
                  <Film className="text-red-500" size={24} />
                  <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Featured Work
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  {films[0].title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {films[0].description}
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <Badge
                    variant="outline"
                    className="border-red-300 text-red-600 dark:text-red-400"
                  >
                    {films[0].category}
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Other Films Grid - Fixed Height Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {films.slice(1).map((film, index) => (
            <motion.article
              key={index}
              className="group cursor-pointer h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 bg-white dark:bg-black border-gray-200 dark:border-gray-800 h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={film.image || "/placeholder.svg"}
                    alt={film.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className={`px-2 py-1 text-xs text-white ${
                        film.category === "DOCUMENTARY"
                          ? "bg-blue-600"
                          : film.category === "MUSIC VIDEO"
                          ? "bg-purple-600"
                          : "bg-green-600"
                      }`}
                    >
                      {film.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors duration-300">
                    {film.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {film.description}
                  </p>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
