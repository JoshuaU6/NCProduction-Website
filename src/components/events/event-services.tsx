"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mic,
  Camera,
  Lightbulb,
  Users,
  Music,
  Monitor,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Community Events & Galas",
    description:
      "Elegant community celebrations that bring people together and honor diverse achievements.",
    icon: Users,
    features: [
      "Custom Staging",
      "Lighting Design",
      "Audio/Visual",
      "Event Coordination",
    ],
  },
  {
    title: "Artist Showcases",
    description:
      "Platforms for emerging and established artists to share their work with engaged audiences.",
    icon: Mic,
    features: [
      "Performance Spaces",
      "Technical Support",
      "Promotion",
      "Audience Development",
    ],
  },
  {
    title: "Cultural Celebrations",
    description:
      "Immersive cultural events that celebrate diversity and foster cross-cultural understanding.",
    icon: Music,
    features: [
      "Cultural Programming",
      "Multimedia Integration",
      "Community Partnerships",
      "Accessibility",
    ],
  },
  {
    title: "Film Screenings",
    description:
      "Community film screenings with post-screening discussions and filmmaker Q&As.",
    icon: Camera,
    features: [
      "Projection Systems",
      "Sound Design",
      "Venue Setup",
      "Moderated Discussions",
    ],
  },
  {
    title: "Interactive Installations",
    description:
      "Engaging multimedia installations that invite audience participation and exploration.",
    icon: Lightbulb,
    features: [
      "Interactive Technology",
      "Immersive Design",
      "User Experience",
      "Technical Innovation",
    ],
  },
  {
    title: "Live Streaming & Documentation",
    description:
      "Professional documentation and live streaming to extend event reach and impact.",
    icon: Monitor,
    features: [
      "Multi-Camera Setup",
      "Live Streaming",
      "Post-Production",
      "Archive Creation",
    ],
  },
];

export function EventServices() {
  return (
    <section
      className="py-20 bg-gray-50 dark:bg-gray-900"
      aria-labelledby="services-heading"
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
            OUR SERVICES
          </Badge>
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            EVENT PRODUCTION SERVICES
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive event services designed to create meaningful
            connections and celebrate community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-white dark:bg-black border-gray-200 dark:border-gray-800 h-full shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-100 dark:group-hover:bg-red-900/30 transition-colors duration-300">
                    <service.icon
                      className="text-red-500"
                      size={32}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Included Services
                    </h4>
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                      >
                        <div
                          className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"
                          aria-hidden="true"
                        ></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="text-red-500 hover:text-red-400 p-0 group"
                  >
                    Learn More
                    <ArrowRight
                      className="ml-1 transition-transform group-hover:translate-x-1"
                      size={16}
                      aria-hidden="true"
                    />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
