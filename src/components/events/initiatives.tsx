"use client";

import { motion } from "framer-motion";
import { Film, Palette, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const initiatives = [
  {
    title: "Community Film Collective",
    description:
      "Each month, we curate a themed selection of films submitted by local and emerging creatives.",
    icon: Film,
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748241844/3cf8ff88-53d4-4737-ae7f-5410feef432b_qqlvj5.jpg",
    featuresImages: [
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748337637/DSC_4046_tzp22j.jpg",
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748337635/DSC_4645-2_v9s1fq.jpg",
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748241984/Screenshot_2025-05-21_at_11.40.49_qlryio.png",
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748241844/3cf8ff88-53d4-4737-ae7f-5410feef432b_qqlvj5.jpg",
    ],
    rating: 4.9,
    color: "from-blue-500/20 to-blue-900/40",
    darkColor: "from-blue-900/80 to-black/80",
    link: "https://www.instagram.com/ncp.live",
  },
  {
    title: "ShadesOf",
    description:
      "A Series of Temporal Reflections — Each Show Investigates a Nuanced Sociopolitical Issue in All Its Shades, From the Perspectives of Practitioners Creating in the Current Climate",
    icon: Palette,
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338181/Bomb_Factory_ART-20_l3sw31.jpg",
    featuresImages: [
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338175/Bomb_Factory_ART-08_tcvmo5.jpg",
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338186/Bomb_Factory_ART-50_c1wysx.jpg",
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338192/IMG_0578_shdkjk.jpg",
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338194/IMG_0582_2_j3f3w1.jpg",
    ],
    rating: 5.0,
    color: "from-purple-500/20 to-purple-900/40",
    darkColor: "from-purple-900/80 to-black/80",
  },
];

export function Initiatives() {
  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
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

                    <div className="flex gap-4">
                      <Button
                        className="bg-red-600 hover:bg-red-700 text-white flex-1"
                        asChild
                      >
                        {initiative.link ? (
                          <Link href={initiative.link} target="_blank">
                            Join {initiative.title}
                            <ArrowRight className="ml-2" size={16} />
                          </Link>
                        ) : (
                          <Link href="/contact">
                            Partners and collaborators — reach out
                            <ArrowRight className="ml-2" size={16} />
                          </Link>
                        )}
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
                  </div>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  {initiative.featuresImages.slice(0, 3).map((image, idx) => (
                    <motion.div
                      key={idx}
                      // Apply col-span-2 if it's the last image (idx === 2)
                      className={`relative h-40 rounded-2xl overflow-hidden shadow-lg ${
                        idx === 2 ? "col-span-2" : ""
                      }`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={image}
                        alt="featured initiative"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
