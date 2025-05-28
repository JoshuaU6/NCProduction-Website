"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Creative Director, Artisan Studios",
    content:
      "NC Productions transformed our vision into reality with exceptional creativity and professionalism.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Event Coordinator, Global Events",
    content:
      "Their attention to detail and innovative approach made our event truly unforgettable.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Theatre Producer",
    content:
      "Working with NC Productions was a game-changer for our theatrical productions.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="py-20 bg-white dark:bg-black"
      aria-labelledby="testimonials-heading"
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
            TESTIMONIALS
          </Badge>
          <h2
            id="testimonials-heading"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            WHAT CLIENTS SAY
          </h2>
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
              <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <div
                  className="flex items-center mb-4"
                  aria-label={`${testimonial.rating} star rating`}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </blockquote>
                <footer>
                  <cite className="font-semibold not-italic">
                    {testimonial.name}
                  </cite>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </footer>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
