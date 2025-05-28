"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director, TechVision",
    content:
      "NC Productions transformed our product launch into an unforgettable experience. Their attention to detail, creative vision, and technical expertise exceeded all our expectations.",
    rating: 5,
    event: "Vision X Product Launch",
  },
  {
    name: "Mark Reynolds",
    role: "Executive Director, Arts Foundation",
    content:
      "Working with NC Productions on our annual gala was a seamless experience. Their team's professionalism and creativity helped us create an event that received incredible feedback from our guests.",
    rating: 5,
    event: "Arts Foundation Gala",
  },
  {
    name: "Dr. Amara Okafor",
    role: "Community Leader",
    content:
      "The Community Film Collective has become a vital space for our local artists. NC Productions has created something truly special that celebrates our diverse voices.",
    rating: 5,
    event: "Community Film Collective",
  },
]

export function ClientTestimonials() {
  return (
    <section className="py-20 bg-white dark:bg-black" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="border-red-500 text-red-500 mb-4 bg-red-50 dark:bg-red-900/20">
            TESTIMONIALS
          </Badge>
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold mb-4">
            CLIENT FEEDBACK
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from our clients and community partners about their experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <Quote className="absolute top-4 right-4 text-red-500/20" size={32} aria-hidden="true" />
                <div className="flex items-center mb-4" aria-label={`${testimonial.rating} star rating`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </blockquote>
                <footer>
                  <cite className="font-semibold not-italic">{testimonial.name}</cite>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{testimonial.role}</p>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.event}
                  </Badge>
                </footer>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
