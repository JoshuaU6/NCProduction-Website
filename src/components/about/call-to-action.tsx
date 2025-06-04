"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CallToAction() {
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
            Ready to tell
            <br />
            <span className="text-red-500">your story?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Let&apos;s collaborate to create meaningful, impactful content that
            resonates with audiences and drives positive change. Our team is
            ready to bring your vision to life.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Get in touch with our team"
              asChild
            >
              <Link href="/contact" className="flex items-center">
                <MessageCircle className="mr-2" size={20} aria-hidden="true" />
                GET IN TOUCH WITH OUR TEAM
                <ArrowRight className="ml-2" size={20} aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center items-center gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[{ label: "Response Time", value: "< 48 hours" }].map(
              (stat, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl shadow-lg"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="text-2xl font-bold text-red-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
