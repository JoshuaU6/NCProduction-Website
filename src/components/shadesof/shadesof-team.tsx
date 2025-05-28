"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const team = [
  {
    name: "Sarah Chen",
    role: "Creative Director",
    image: "/placeholder.svg?height=200&width=200",
    specialty: "Conceptual Design",
  },
  {
    name: "Marcus Williams",
    role: "Technical Lead",
    image: "/placeholder.svg?height=200&width=200",
    specialty: "Interactive Technology",
  },
  {
    name: "Elena Rossi",
    role: "Experience Designer",
    image: "/placeholder.svg?height=200&width=200",
    specialty: "User Experience",
  },
  {
    name: "Jamal Thompson",
    role: "Installation Artist",
    image: "/placeholder.svg?height=200&width=200",
    specialty: "Spatial Design",
  },
]

export function ShadesOfTeam() {
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
            TEAM
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            MEET THE{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
              SHADESOF
            </span>{" "}
            TEAM
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The creative minds behind our immersive experiences and innovative installations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 text-center p-8">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="128px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">{member.role}</p>
                <Badge variant="outline" className="border-purple-300 text-purple-600 dark:text-purple-400 text-sm">
                  {member.specialty}
                </Badge>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
