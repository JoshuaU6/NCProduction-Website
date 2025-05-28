"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Play, Star, Clock } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const productions = [
  {
    id: 1,
    title: "Echoes of Tomorrow",
    category: "NEW WORK",
    description:
      "A groundbreaking production exploring the human condition in a post-digital world.",
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338740/Screenshot_2025-05-21_at_11.41.52_ojlvbb.png",
    date: "March 15 - April 2, 2025",
    venue: "Main Stage Theatre",
    duration: "2h 15min",
    rating: 4.9,
    status: "Upcoming",
    featured: true,
  },
  {
    id: 2,
    title: "Whispers in the Dark",
    category: "CONTEMPORARY",
    description:
      "An intimate exploration of memory and identity through movement and sound.",
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338661/Screenshot_2025-05-21_at_11.41.09_pd9ppn.png",
    date: "February 20 - March 5, 2025",
    venue: "Studio Theatre",
    duration: "1h 30min",
    rating: 4.8,
    status: "Running",
  },
  {
    id: 3,
    title: "The Forgotten Path",
    category: "EXPERIMENTAL",
    description:
      "A journey through memory and loss, featuring minimalist set design.",
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338688/Screenshot_2025-05-21_at_11.26.36_fydjrn.png",
    date: "January 10 - 28, 2025",
    venue: "Black Box Theatre",
    duration: "1h 45min",
    rating: 4.7,
    status: "Past",
  },
  {
    id: 4,
    title: "Movements",
    category: "DANCE THEATRE",
    description: "A fusion of contemporary dance and theatrical storytelling.",
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748353385/Benchwarmers_E1-15_kgnfu9.jpg",
    date: "April 15 - May 1, 2025",
    venue: "Dance Studio",
    duration: "1h 20min",
    rating: 5.0,
    status: "Upcoming",
  },
  {
    id: 5,
    title: "Reflections",
    category: "IMMERSIVE",
    description:
      "An immersive theatrical experience exploring identity through innovative staging.",
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338707/Screenshot_2025-05-21_at_11.28.37_nybt9k.png",
    date: "May 20 - June 10, 2025",
    venue: "Warehouse Space",
    duration: "2h 00min",
    rating: 4.9,
    status: "Upcoming",
  },
];

export function ProductionShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={containerRef}
      className="py-32 bg-black text-white relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-purple-500 to-blue-500" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge
            variant="outline"
            className="border-red-500 text-red-400 mb-6 bg-red-900/20 px-6 py-3 text-lg"
          >
            PRODUCTIONS
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            CURRENT & UPCOMING
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our theatrical productions blend traditional stagecraft with
            innovative technology to create unforgettable experiences
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          className="grid grid-cols-12 gap-6 auto-rows-[250px]"
          style={{ y: backgroundY }}
        >
          {/* Featured Production - Large */}
          <motion.article
            className="col-span-12 lg:col-span-8 row-span-2 group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="h-full bg-gray-900 border-gray-700 overflow-hidden shadow-2xl hover:shadow-red-500/20 transition-all duration-500">
              <div className="relative h-full">
                <Image
                  src={productions[0].image || "/placeholder.svg"}
                  alt={`${
                    productions[0].title
                  } - ${productions[0].category.toLowerCase()} production`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Badges */}
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <Badge
                    variant="secondary"
                    className="bg-red-600 text-white px-3 py-1"
                  >
                    {productions[0].category}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-green-600 text-white px-3 py-1"
                  >
                    FEATURED
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-600 text-white px-3 py-1"
                  >
                    {productions[0].status.toUpperCase()}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/50 rounded-full px-3 py-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-white text-sm">
                    {productions[0].rating}
                  </span>
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
                  <h3 className="text-3xl font-bold mb-3">
                    {productions[0].title}
                  </h3>
                  <p className="text-lg opacity-90 mb-4 leading-relaxed">
                    {productions[0].description}
                  </p>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{productions[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{productions[0].venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{productions[0].duration}</span>
                    </div>
                    <Button
                      variant="ghost"
                      className="text-red-400 hover:text-red-300 p-0 justify-start"
                    >
                      Learn More
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.article>

          {/* Side Productions */}
          <div className="col-span-12 lg:col-span-4 row-span-2 space-y-6">
            {productions.slice(1, 3).map((production, index) => (
              <motion.article
                key={production.id}
                className="group cursor-pointer h-[calc(50%-12px)]"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full bg-gray-900 border-gray-700 overflow-hidden shadow-lg hover:shadow-red-500/20 transition-all duration-500">
                  <div className="relative h-full">
                    <Image
                      src={production.image || "/placeholder.svg"}
                      alt={`${production.title} production`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-red-600 text-white px-2 py-1 text-xs"
                      >
                        {production.category}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className={`px-2 py-1 text-xs ${
                          production.status === "Running"
                            ? "bg-green-600 text-white"
                            : production.status === "Upcoming"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-600 text-white"
                        }`}
                      >
                        {production.status.toUpperCase()}
                      </Badge>
                    </div>

                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 rounded-full px-2 py-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-white text-xs">
                        {production.rating}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="text-lg font-bold mb-2">
                        {production.title}
                      </h4>
                      <p className="text-sm opacity-90 mb-3 line-clamp-2">
                        {production.description}
                      </p>
                      <div className="flex items-center gap-3 text-xs">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{production.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{production.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>

          {/* Bottom Row Productions */}
          {productions.slice(3).map((production, index) => (
            <motion.article
              key={production.id}
              className="col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full bg-gray-900 border-gray-700 overflow-hidden shadow-lg hover:shadow-red-500/20 transition-all duration-500">
                <div className="relative h-full">
                  <Image
                    src={production.image || "/placeholder.svg"}
                    alt={`${production.title} production`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-red-600 text-white px-2 py-1 text-xs"
                    >
                      {production.category}
                    </Badge>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 rounded-full px-2 py-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-white text-xs">
                      {production.rating}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="text-lg font-bold mb-2">
                      {production.title}
                    </h4>
                    <p className="text-sm opacity-90 mb-3 line-clamp-2">
                      {production.description}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{production.venue}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{production.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
          >
            CONTACT ABOUT THEATRE PRODUCTIONS
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
