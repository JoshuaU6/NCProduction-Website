"use client";

import { motion } from "framer-motion";
import { Award, Film, Theater, Users } from "lucide-react";

const stats = [
  { number: "120+", label: "PROJECTS COMPLETED", icon: Award },
  { number: "45", label: "FILM PRODUCTIONS", icon: Film },
  { number: "38", label: "THEATRE SHOWS", icon: Theater },
  { number: "25", label: "TEAM MEMBERS", icon: Users },
];

export const Stats = () => {
  return (
    <motion.div
      className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <stat.icon
            className="w-8 h-8 text-red-500 mx-auto mb-3"
            aria-hidden="true"
          />
          <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
            {stat.number}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
