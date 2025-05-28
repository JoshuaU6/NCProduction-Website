"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Palette, Users, Lightbulb, Zap } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

export function PowerOfExperience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={containerRef} className="py-32 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="border-purple-500 text-purple-400 mb-6 bg-purple-900/20 px-4 py-2">
              PHILOSOPHY
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              THE POWER OF
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                EXPERIENCE
              </span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              At ShadesOf, we believe in the transformational power of immersive experiences. Our installations are
              designed to challenge preconceptions, foster empathy, and create meaningful connections between
              individuals and communities.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              We explore the intersection of art, technology, and human experience, creating spaces where visitors can
              engage with complex themes through multiple senses. Each installation is carefully crafted to provoke
              thought, inspire dialogue, and leave lasting impressions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              Our approach combines cutting-edge technology with artistic vision, resulting in experiences that are both
              intellectually stimulating and emotionally resonant. We believe that art has the power to transform
              perspectives and build bridges between diverse communities.
            </p>

            {/* Core Principles */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { icon: Palette, title: "Artistic Vision", description: "Creative excellence in every detail" },
                { icon: Users, title: "Human Connection", description: "Fostering empathy and understanding" },
                { icon: Lightbulb, title: "Innovation", description: "Cutting-edge technology integration" },
                { icon: Zap, title: "Impact", description: "Creating lasting transformational experiences" },
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <principle.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{principle.title}</h3>
                    <p className="text-sm text-gray-400">{principle.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              EXPLORE OUR METHODOLOGY
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>

          {/* Artistic Image */}
          <motion.div className="relative" style={{ y }}>
            <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Abstract artistic installation with vibrant colors and organic forms"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
