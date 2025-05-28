"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Calendar, Palette } from "lucide-react"

export function ShadesOfCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-black to-pink-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's create something
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              extraordinary
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Ready to challenge perspectives and create immersive experiences that leave lasting impressions? Let's
            collaborate to bring your vision to life through the ShadesOf methodology.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Start your ShadesOf project"
            >
              <Palette className="mr-2" size={20} aria-hidden="true" />
              START PROJECT
              <ArrowRight className="ml-2" size={20} aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-300 hover:bg-purple-800/30 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              aria-label="View ShadesOf portfolio"
            >
              <Calendar className="mr-2" size={20} aria-hidden="true" />
              VIEW PORTFOLIO
            </Button>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[
              { icon: MessageCircle, label: "Creative Consultation", value: "Free" },
              { icon: Calendar, label: "Response Time", value: "< 48 hours" },
              { icon: Palette, label: "Custom Solutions", value: "Always" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" aria-hidden="true" />
                <div className="text-2xl font-bold text-purple-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
