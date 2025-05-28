"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Lightbulb, Zap, Users } from "lucide-react"
import Image from "next/image"

const experiences = [
  {
    title: "Perspectives",
    description: "An interactive installation examining multiple viewpoints on contemporary social issues.",
    image: "/placeholder.svg?height=300&width=400",
    icon: Eye,
    color: "from-blue-500 to-purple-600",
    category: "INTERACTIVE INSTALLATION",
  },
  {
    title: "Digital Echoes",
    description: "Exploring the digital footprints we leave behind and their impact on future generations.",
    image: "/placeholder.svg?height=300&width=400",
    icon: Zap,
    color: "from-purple-500 to-pink-600",
    category: "MULTIMEDIA EXPERIENCE",
  },
  {
    title: "Illuminations",
    description: "A light-based installation that responds to human presence and emotion.",
    image: "/placeholder.svg?height=300&width=400",
    icon: Lightbulb,
    color: "from-pink-500 to-red-600",
    category: "LIGHT INSTALLATION",
  },
  {
    title: "Collective Memory",
    description:
      "A large-scale installation examining how shared stories shape our understanding of history and community.",
    image: "/placeholder.svg?height=400&width=800",
    icon: Users,
    color: "from-red-500 to-orange-600",
    category: "COMMUNITY INSTALLATION",
    featured: true,
  },
]

export function ShadesOfExperiences() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Top Row - Three Installations */}
          <div className="col-span-12 grid md:grid-cols-3 gap-6 mb-6">
            {experiences.slice(0, 3).map((experience, index) => (
              <motion.article
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-80 bg-gray-900 border-gray-700 overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-500">
                  <div className="relative h-full">
                    <Image
                      src={experience.image || "/placeholder.svg"}
                      alt={`${experience.title} installation`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-purple-600 text-white px-2 py-1 text-xs">
                        {experience.category}
                      </Badge>
                    </div>

                    <div className="absolute top-4 right-4">
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${experience.color} rounded-full flex items-center justify-center`}
                      >
                        {experience.icon && <experience.icon className="text-white" size={20} />}
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                      <p className="text-sm opacity-90 leading-relaxed">{experience.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>

          {/* Featured Installation - Full Width */}
          <motion.article
            className="col-span-12 group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="h-96 bg-gray-900 border-gray-700 overflow-hidden shadow-xl hover:shadow-purple-500/20 transition-all duration-500">
              <div className="relative h-full">
                <Image
                  src={experiences[3].image || "/placeholder.svg"}
                  alt={`${experiences[3].title} installation`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <Badge variant="secondary" className="bg-red-600 text-white px-3 py-1">
                    {experiences[3].category}
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-600 text-white px-3 py-1">
                    FEATURED
                  </Badge>
                </div>

                <div className="absolute top-6 right-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${experiences[3].color} rounded-full flex items-center justify-center`}
                  >
                    \{experiences[3].icon && <experiences[3].icon className="text-white" size={24} />}
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-4xl font-bold mb-4">{experiences[3].title}</h3>
                  <p className="text-xl opacity-90 leading-relaxed max-w-3xl">{experiences[3].description}</p>
                  <div className="flex gap-3 mt-6">
                    <Badge className="bg-purple-600 text-white">COMMUNITY</Badge>
                    <Badge className="bg-pink-600 text-white">MEMORY</Badge>
                    <Badge className="bg-red-600 text-white">STORYTELLING</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
