"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Palette, Users, Heart, Zap, Eye, Handshake } from "lucide-react"

const values = [
  {
    icon: Palette,
    title: "Creative Excellence",
    description:
      "We pursue the highest standards of creativity and technical execution in everything we do, constantly pushing boundaries and exploring new possibilities.",
    color: "from-purple-500/20 to-purple-900/40",
    darkColor: "from-purple-900/80 to-black/80",
  },
  {
    icon: Heart,
    title: "Authentic Storytelling",
    description:
      "We believe in the power of authentic, meaningful narratives that connect with audiences on a deeper level and leave lasting impressions.",
    color: "from-red-500/20 to-red-900/40",
    darkColor: "from-red-900/80 to-black/80",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description:
      "We thrive on collaboration, bringing together diverse talents and perspectives to create something greater than the sum of its parts.",
    color: "from-blue-500/20 to-blue-900/40",
    darkColor: "from-blue-900/80 to-black/80",
  },
  {
    icon: Eye,
    title: "Social Impact",
    description:
      "Every project we undertake is designed to create positive social change and amplify voices that need to be heard.",
    color: "from-green-500/20 to-green-900/40",
    darkColor: "from-green-900/80 to-black/80",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We embrace cutting-edge technology and innovative approaches to push the boundaries of multimedia storytelling.",
    color: "from-yellow-500/20 to-yellow-900/40",
    darkColor: "from-yellow-900/80 to-black/80",
  },
  {
    icon: Handshake,
    title: "Community Focus",
    description:
      "We are committed to serving and uplifting underrepresented communities through our work and partnerships.",
    color: "from-teal-500/20 to-teal-900/40",
    darkColor: "from-teal-900/80 to-black/80",
  },
]

export function OurValues() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" aria-labelledby="values-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="border-red-500 text-red-500 mb-4 bg-red-50 dark:bg-red-900/20">
            OUR VALUES
          </Badge>
          <h2 id="values-heading" className="text-4xl md:text-5xl font-bold mb-4">
            WHAT DRIVES US
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our core values guide every decision we make and every story we tell
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} dark:${value.darkColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                    <value.icon
                      className="text-red-500 group-hover:text-white transition-colors duration-300"
                      size={32}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-white/90 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
