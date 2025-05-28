"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Star, Clock, Calendar } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const films = [
  {
    id: 1,
    title: "Beneath the Surface",
    category: "DOCUMENTARY",
    description:
      "A documentary film exploring the challenges facing coastal communities.",
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338726/Screenshot_2025-05-21_at_11.40.49_woebkx.png",
    year: "2024",
    duration: "85 min",
    rating: 4.8,
    type: "Documentary",
  },
  {
    id: 2,
    title: "Vantage Series",
    category: "COMMERCIAL",
    description:
      "A visually striking commercial campaign for a luxury automotive brand.",
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338707/Screenshot_2025-05-21_at_11.28.37_nybt9k.png",
    year: "2024",
    duration: "3 min",
    rating: 4.9,
    type: "Commercial",
  },
  {
    id: 3,
    title: "Echoes",
    category: "SHORT FILM",
    description:
      "A haunting film exploring memory and identity through experimental cinematography.",
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338726/Screenshot_2025-05-21_at_11.40.49_woebkx.png",
    year: "2023",
    duration: "18 min",
    rating: 4.7,
    type: "Short Film",
  },
  {
    id: 4,
    title: "Harmonic",
    category: "MUSIC VIDEO",
    description:
      "A visually stunning music video for indie artist Eliza combining narrative and performance.",
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338594/Screenshot_2025-05-21_at_11.33.04_skvfyq.png",
    year: "2024",
    duration: "4 min",
    rating: 5.0,
    type: "Music Video",
  },
];

export function FilmPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={containerRef} className="py-32 bg-gray-50 dark:bg-gray-900">
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
            PORTFOLIO
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            FEATURED FILMS
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of our recent work across documentaries, commercials,
            short films, and music videos
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div className="grid grid-cols-12 gap-6" style={{ y }}>
          {/* Featured Film - Large */}
          <motion.article
            className="col-span-12 lg:col-span-8 group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="h-96 bg-white dark:bg-black border-gray-200 dark:border-gray-800 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="relative h-full">
                <Image
                  src={films[0].image || "/placeholder.svg"}
                  alt={`${films[0].title} - ${films[0].category.toLowerCase()}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Badges */}
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <Badge
                    variant="secondary"
                    className="bg-red-600 text-white px-3 py-1"
                  >
                    {films[0].category}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-600 text-white px-3 py-1"
                  >
                    FEATURED
                  </Badge>
                </div>

                {/* Rating */}
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/50 rounded-full px-3 py-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-white text-sm">{films[0].rating}</span>
                </div>

                {/* Play Button */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-20 h-20 bg-red-600/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="text-white ml-1" size={32} />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-3xl font-bold mb-3">{films[0].title}</h3>
                  <p className="text-lg opacity-90 mb-4 leading-relaxed">
                    {films[0].description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{films[0].year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{films[0].duration}</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      className="text-white hover:text-red-300 p-0"
                    >
                      Watch Film
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.article>

          {/* Side Film */}
          <motion.article
            className="col-span-12 lg:col-span-4 group cursor-pointer"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="h-96 bg-white dark:bg-black border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="relative h-full">
                <Image
                  src={films[1].image || "/placeholder.svg"}
                  alt={`${films[1].title} - ${films[1].category.toLowerCase()}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-purple-600 text-white px-2 py-1 text-xs"
                  >
                    {films[1].category}
                  </Badge>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 rounded-full px-2 py-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-white text-xs">{films[1].rating}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-xl font-bold mb-2">{films[1].title}</h4>
                  <p className="text-sm opacity-90 mb-3 line-clamp-2">
                    {films[1].description}
                  </p>
                  <div className="flex items-center gap-3 text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{films[1].year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{films[1].duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.article>

          {/* Bottom Row Films */}
          {films.slice(2).map((film, index) => (
            <motion.article
              key={film.id}
              className="col-span-12 md:col-span-6 group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-80 bg-white dark:bg-black border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="relative h-full">
                  <Image
                    src={film.image || "/placeholder.svg"}
                    alt={`${film.title} - ${film.category.toLowerCase()}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className={`px-2 py-1 text-xs text-white ${
                        film.category === "SHORT FILM"
                          ? "bg-green-600"
                          : "bg-orange-600"
                      }`}
                    >
                      {film.category}
                    </Badge>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 rounded-full px-2 py-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-white text-xs">{film.rating}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="text-xl font-bold mb-2">{film.title}</h4>
                    <p className="text-sm opacity-90 mb-3 line-clamp-2">
                      {film.description}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{film.year}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{film.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
