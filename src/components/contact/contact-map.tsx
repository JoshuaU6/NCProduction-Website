"use client"

import { motion } from "framer-motion"

export function ContactMap() {
  return (
    <section className="py-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-96 bg-gray-200 dark:bg-gray-800 relative overflow-hidden"
      >
        {/* Google Maps Embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4061718!2d-0.0877!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760349331f38dd%3A0xa8bf49dde1d56467!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1635789012345!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="NC Productions Location"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>

        {/* Overlay with location info */}
        <div className="absolute top-6 left-6 bg-white dark:bg-black p-4 rounded-lg shadow-lg max-w-xs">
          <h3 className="font-bold text-lg mb-2">NC Productions</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            1234 Creative Avenue
            <br />
            Studio 56
            <br />
            London, UK EC4R 3TE
          </p>
        </div>
      </motion.div>
    </section>
  )
}
