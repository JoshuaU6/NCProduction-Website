"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "The Last Chapter",
    category: "FILM",
    description:
      "A complex drama exploring themes of identity and belonging in contemporary society.",
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748241994/DSC_3717_dewsgt.jpg",
    color: "from-red-500/20 to-red-900/40",
    darkColor: "from-red-900/80 to-black/80",
    rating: 4.8,
    year: "2024",
    link: "/film",
  },
  {
    id: 2,
    title: "Echoes of Tomorrow",
    category: "THEATRE",
    description:
      "An innovative stage production blending traditional theatre with modern technology.",
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748241838/452633233_880258994136132_5076902531185505532_n_vowwep.jpg",
    color: "from-blue-500/20 to-blue-900/40",
    darkColor: "from-blue-900/80 to-black/80",
    rating: 4.9,
    year: "2024",
    link: "/theatre",
  },
  {
    id: 3,
    title: "Luminescence Gala",
    category: "EVENTS",
    description:
      "A spectacular charity event featuring immersive lighting and multimedia installations.",
    image:
      "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748242001/DSC_2479_1_tlpprv.jpg",
    color: "from-purple-500/20 to-purple-900/40",
    darkColor: "from-purple-900/80 to-black/80",
    rating: 5.0,
    year: "2023",
    link: "/events",
  },
];

export function FeaturedProjects() {
  return (
    <section
      id="featured-projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-10"
      aria-labelledby="featured-projects-heading"
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
            PORTFOLIO
          </Badge>
          <h2
            id="featured-projects-heading"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            FEATURED PROJECTS
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our latest creative endeavors that have captivated
            audiences worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer" // The grid itself will handle making these articles the same height per row
            >
              <Card className="h-full flex flex-col bg-white dark:bg-black border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  {" "}
                  {/* Fixed height image container */}
                  <CldImage
                    width="960"
                    height="600"
                    src={project.image}
                    alt={`${
                      project.title
                    } - ${project.category.toLowerCase()} production showcase`}
                    crop="fill"
                    gravity="auto"
                    quality="auto" // Automatically determine best quality
                    format="auto" // Automatically determine best format (WebP, AVIF, etc.)
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} dark:${project.darkColor} opacity-60`}
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-red-600 text-white"
                    >
                      {project.category}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-black/50 text-white"
                    >
                      {project.year}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded">
                    <Star
                      className="fill-yellow-400 text-yellow-400"
                      size={14}
                      aria-hidden="true"
                    />
                    <span
                      className="text-sm"
                      aria-label={`Rating: ${project.rating} out of 5 stars`}
                    >
                      {project.rating}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  {" "}
                  {/* Make content area grow and arrange vertically */}
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-red-500 hover:text-red-400 p-0 group mt-auto w-max"
                    asChild
                  >
                    <Link href={project.link}>
                      View Project
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
