"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Users } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function EventsCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-50 via-white to-red-50 dark:from-red-900/10 dark:via-black dark:to-red-900/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to create an
            <br />
            <span className="text-red-500">unforgettable event?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Let&apos;s work together to build meaningful connections, celebrate
            community, and amplify the voices that matter most. Our team is
            ready to bring your vision to life.
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
              aria-label="Inquire about event services"
              asChild
            >
              <Link href="/contact" className="flex items-center">
                <MessageCircle className="mr-2" size={20} aria-hidden="true" />
                INQUIRE ABOUT EVENTS
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
              { icon: Users, label: "Community First", value: "Always" },
              {
                icon: MessageCircle,
                label: "Response Time",
                value: "< 24 hours",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl shadow-lg"
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
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
