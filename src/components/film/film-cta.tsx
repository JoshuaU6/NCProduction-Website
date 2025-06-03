"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Calendar, Film } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function FilmCTA() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to bring your
            <br />
            <span className="text-red-500">story to life?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Whether you have a script or need an engaging social campaign or
            commercial, we&apos;re here to create impactful projects that
            resonate with your audience.
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
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Start your film project"
              asChild
            >
              <Link href="/contact">
                <Film className="mr-2" size={20} aria-hidden="true" />
                START YOUR PROJECT
                <ArrowRight className="ml-2" size={20} aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: MessageCircle,
                label: "Free Consultation",
                value: "Always",
              },
              { icon: Calendar, label: "Response Time", value: "< 48 hours" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-900 rounded-2xl shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <stat.icon
                  className="w-8 h-8 text-red-500 mx-auto mb-3"
                  aria-hidden="true"
                />
                <div className="text-2xl font-bold text-red-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
