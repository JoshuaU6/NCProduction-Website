"use client";

import { motion } from "framer-motion";
import { Film, Theater, Calendar, Palette, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "FILM",
    description:
      "From concept to final cut, we create compelling visual stories for screens of all sizes.",
    icon: Film,
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748337635/DSC_4645-2_v9s1fq.jpg",
    features: [
      "Pre-production",
      "Cinematography",
      "Post-production",
    ],
    link: "/film",
  },
  {
    title: "THEATRE",
    description:
      "Bringing stories to life on stage with innovative productions that push creative boundaries.",
    icon: Theater,
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338382/THE_WHITE_ROSE-13_1_qoenva.jpg",
    features: [
      "Script Development",
      "Stage Design",
      "Direction",
      "Performance",
    ],
    link: "/theatre",
  },
  {
    title: "EVENTS",
    description:
      "Creating immersive event experiences with cutting-edge production technology.",
    icon: Calendar,
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748241844/3cf8ff88-53d4-4737-ae7f-5410feef432b_qqlvj5.jpg",
    features: [
      "Event Planning",
      "Technical Production",
      "Live Streaming",
      "Coordination",
    ],
    link: "/events",
  },
  {
    title: "SHADESOF",
    description:
      "Our exclusive creative methodology, thought-provoking installations and experiences.",
    icon: Palette,
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748338186/Bomb_Factory_ART-50_c1wysx.jpg",
    features: [
      "Creative Strategy",
      "Installation Art",
      "Interactive Design",
      "Experience Design",
    ],
    link: "/events",
  },
];

export function ServicesSection() {
  return (
    <section
      className="py-20 bg-gray-50 dark:bg-gray-900"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="border-red-500 text-red-500 mb-4 bg-red-50 dark:bg-red-900/20"
          >
            WHAT WE DO
          </Badge>
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            OUR EXPERTISE
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive creative services tailored to bring your vision to
            life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-white dark:bg-black border-gray-200 dark:border-gray-800 h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title.toLowerCase()} production services and capabilities`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <service.icon
                      className="text-red-500"
                      size={32}
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <ul
                    className="space-y-2 mb-4"
                    aria-label={`${service.title} service features`}
                  >
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                      >
                        <div
                          className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"
                          aria-hidden="true"
                        ></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="text-red-500 hover:text-red-400 p-0 group"
                    asChild
                  >
                    <Link href={service.link}>
                      Explore {service.title}
                      <ArrowRight
                        className="ml-1 transition-transform group-hover:translate-x-1"
                        size={16}
                        aria-hidden="true"
                      />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
