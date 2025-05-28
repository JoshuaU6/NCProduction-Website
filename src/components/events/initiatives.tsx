"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Film,
  Palette,
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const initiatives = [
  {
    title: "Community Film Collective",
    description:
      "A collaborative platform bringing together emerging filmmakers from diverse backgrounds to create, share, and celebrate authentic stories.",
    icon: Film,
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748241844/3cf8ff88-53d4-4737-ae7f-5410feef432b_qqlvj5.jpg",
    features: [
      "Monthly Screenings",
      "Filmmaker Workshops",
      "Mentorship Programs",
      "Equipment Sharing",
    ],
    nextEvent: "March 15, 2025",
    location: "Creative Hub, Downtown",
    participants: "150+ filmmakers",
    rating: 4.9,
    color: "from-blue-500/20 to-blue-900/40",
    darkColor: "from-blue-900/80 to-black/80",
  },
  {
    title: "Shades Of Resistance",
    description:
      "An immersive arts experience celebrating the spectrum of human creativity through multimedia installations and live performances.",
    icon: Palette,
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338175/Bomb_Factory_ART-08_tcvmo5.jpg",
    features: [
      "Interactive Installations",
      "Live Performances",
      "Artist Talks",
      "Community Workshops",
    ],
    nextEvent: "April 22, 2025",
    location: "Gallery District",
    participants: "200+ artists",
    rating: 5.0,
    color: "from-purple-500/20 to-purple-900/40",
    darkColor: "from-purple-900/80 to-black/80",
  },
];

export function Initiatives() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={containerRef}
      className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-5 dark:opacity-10"
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
            className="border-red-500 text-red-500 mb-6 bg-red-50 dark:bg-red-900/20 px-6 py-3 text-lg"
          >
            OUR INITIATIVES
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            SIGNATURE PROGRAMS
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ongoing initiatives that create lasting impact in our creative
            communities
          </p>
        </motion.div>

        <div className="space-y-32">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <Card className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border-gray-200 dark:border-gray-800 shadow-2xl">
                  <CardContent className="p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center">
                        <initiative.icon
                          className="text-red-500"
                          size={32}
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold">
                          {initiative.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {initiative.rating}/5.0
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                      {initiative.description}
                    </p>

                    {/* Event Details */}
                    <div className="grid grid-cols-2 gap-6 mb-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                      <div className="flex items-center gap-3">
                        <Calendar className="text-red-500" size={20} />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Next Event
                          </p>
                          <p className="font-semibold">
                            {initiative.nextEvent}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="text-red-500" size={20} />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Location
                          </p>
                          <p className="font-semibold">{initiative.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 col-span-2">
                        <Users className="text-red-500" size={20} />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Community
                          </p>
                          <p className="font-semibold">
                            {initiative.participants}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      <h4 className="font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide text-sm">
                        What We Offer
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {initiative.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-gray-600 dark:text-gray-400"
                          >
                            <div
                              className="w-2 h-2 bg-red-500 rounded-full mr-3"
                              aria-hidden="true"
                            ></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button className="bg-red-600 hover:bg-red-700 text-white flex-1">
                        Join {initiative.title}
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Image Bento Grid */}
              <div
                className={`space-y-4 ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <motion.div
                  className="relative h-80 rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={initiative.image}
                    alt={`${initiative.title} showcase`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${initiative.color} dark:${initiative.darkColor} opacity-60`}
                  />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-xl font-bold mb-2">
                      {initiative.title}
                    </h4>
                    <p className="text-sm opacity-90">
                      Building creative communities
                    </p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="relative h-40 rounded-2xl overflow-hidden shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748241931/DSC_2914_ycgisf.jpg"
                      alt="Community workshop"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-xs font-medium">Workshops</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="relative h-40 rounded-2xl overflow-hidden shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748241841/9bcace93-86e3-40de-b318-fe224ef13369_rziu7j.jpg"
                      alt="Artist collaboration"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-xs font-medium">Collaboration</p>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="relative h-32 rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748241844/1_1_jcrddz.jpg"
                    alt="Community impact"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm font-medium">Community Impact</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
