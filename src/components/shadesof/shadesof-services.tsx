"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Zap, Settings } from "lucide-react"

const services = [
  {
    title: "Exhibition Design",
    description:
      "Comprehensive exhibition design and conceptual development for galleries, museums, and public spaces.",
    icon: Palette,
    features: [
      "Conceptual Development",
      "Spatial Design",
      "Visitor Journey Mapping",
      "Thematic Curation",
      "Visual Identity Design",
      "Interpretive Materials",
    ],
  },
  {
    title: "Interactive Installations",
    description:
      "Creation of engaging interactive experiences and multimedia installations that respond to human presence.",
    icon: Zap,
    features: [
      "Sensor Integration",
      "Motion Tracking",
      "Responsive Environments",
      "Touch Interfaces",
      "Gesture Recognition",
      "Real-time Interaction",
    ],
  },
  {
    title: "Production & Implementation",
    description:
      "End-to-end production services from technical planning to final installation and ongoing maintenance.",
    icon: Settings,
    features: [
      "Technical Planning",
      "Project Management",
      "Installation Services",
      "Quality Assurance",
      "Maintenance Support",
      "Documentation",
    ],
  },
]

export function ShadesOfServices() {
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
            className="border-purple-500 text-purple-500 mb-6 bg-purple-50 dark:bg-purple-900/20 px-6 py-3 text-lg"
          >
            SERVICES
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">WHAT WE OFFER</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive services span from initial concept development to final implementation, helping to create
            memorable, impactful experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 h-full shadow-lg hover:shadow-xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:from-purple-200 group-hover:to-pink-200 dark:group-hover:from-purple-800/50 dark:group-hover:to-pink-800/50 transition-all duration-300">
                    <service.icon className="text-purple-600 dark:text-purple-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Key Services
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" aria-hidden="true"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
