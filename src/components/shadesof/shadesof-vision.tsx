"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function ShadesOfVision() {
  return (
    <section className="py-32 bg-black text-white">
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
            className="border-purple-500 text-purple-400 mb-6 bg-purple-900/20 px-6 py-3 text-lg"
          >
            METHODOLOGY
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              SHADESOF
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            ShadesOf is our exclusive creative methodology that challenges perspectives and engages audiences in new
            ways. We create immersive exhibitions and experiences that challenge perspectives and engage audiences in
            new ways.
          </p>
        </motion.div>

        {/* Featured Installation */}
        <motion.div
          className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/placeholder.svg?height=500&width=1200"
            alt="ShadesOf Identity - Immersive multimedia exhibition with purple and pink lighting"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/30 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-4xl font-bold mb-4">ShadesOf Identity</h3>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl">
              An immersive multimedia exhibition exploring the multifaceted nature of personal and collective identity
              in the digital age.
            </p>
            <div className="flex gap-4 mt-6">
              <Badge className="bg-purple-600 text-white">MULTIMEDIA</Badge>
              <Badge className="bg-pink-600 text-white">INTERACTIVE</Badge>
              <Badge className="bg-red-600 text-white">IMMERSIVE</Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
