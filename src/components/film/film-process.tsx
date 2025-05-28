"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Camera, Film, Scissors } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Development",
    description:
      "Concept ideation, script development, and creative foundation.",
    icon: Lightbulb,
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    title: "Pre-Production",
    description:
      "Comprehensive planning including casting, location scouting, and technical preparation.",
    icon: Camera,
    color: "from-green-500 to-green-600",
  },
  {
    number: "03",
    title: "Production",
    description:
      "Expert direction, cinematography, and sound recording during the filming process.",
    icon: Film,
    color: "from-purple-500 to-purple-600",
  },
  {
    number: "04",
    title: "Post-Production",
    description:
      "Editing, color grading, sound design, and final delivery of your project.",
    icon: Scissors,
    color: "from-red-500 to-red-600",
  },
];

export function FilmProcess() {
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
            className="border-red-500 text-red-400 mb-6 bg-red-900/20 px-6 py-3 text-lg"
          >
            OUR PROCESS
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            FROM CONCEPT TO SCREEN
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach ensures that every project receives
            meticulous attention at every stage of production
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative mb-8">
                {/* Number Circle */}
                <div
                  className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto bg-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors duration-300">
                  <step.icon className="text-white" size={32} />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
