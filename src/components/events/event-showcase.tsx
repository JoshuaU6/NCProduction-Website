"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const events = [
  {
    id: 1,
    title: "Tech Summit 2025",
    category: "CONFERENCE",
    description:
      "Annual technology conference featuring diverse speakers and interactive installations.",
    image: "/placeholder.svg?height=400&width=600",
    date: "June 15-17, 2025",
    location: "Convention Center",
    attendees: "2,500+",
    status: "Upcoming",
    featured: true,
  },
  {
    id: 2,
    title: "Arts Foundation Gala",
    category: "FUNDRAISER",
    description:
      "Elegant fundraising gala featuring custom staging and lighting design.",
    image: "/placeholder.svg?height=300&width=400",
    date: "May 8, 2025",
    location: "Grand Ballroom",
    attendees: "500",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Vision X Product Launch",
    category: "PRODUCT LAUNCH",
    description:
      "High-profile product launch with immersive technology demonstrations.",
    image: "/placeholder.svg?height=300&width=400",
    date: "March 22, 2025",
    location: "Innovation Hub",
    attendees: "1,200",
    status: "Past Event",
  },
  {
    id: 4,
    title: "Global Leadership Conference",
    category: "CONFERENCE",
    description:
      "International business conference with streaming capabilities.",
    image: "/placeholder.svg?height=300&width=400",
    date: "February 10-12, 2025",
    location: "Business District",
    attendees: "3,000+",
    status: "Past Event",
  },
  {
    id: 5,
    title: "Community Art Festival",
    category: "FESTIVAL",
    description: "Celebrating local artists and diverse creative expressions.",
    image: "/placeholder.svg?height=300&width=400",
    date: "January 20, 2025",
    location: "City Park",
    attendees: "5,000+",
    status: "Past Event",
  },
];

export function EventShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-32 bg-white dark:bg-black">
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
            className="border-red-500 text-red-500 mb-6 bg-red-50 dark:bg-red-900/20 px-6 py-3 text-lg"
          >
            PORTFOLIO
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            FEATURED EVENTS
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Showcasing our recent community-focused events and productions
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          className="grid grid-cols-12 gap-6 auto-rows-[200px]"
          style={{ y }}
        >
          {/* Featured Event - Large */}
          <motion.article
            className="col-span-12 lg:col-span-8 row-span-2 group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="h-full bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="relative h-full">
                <Image
                  src={events[0].image || "/placeholder.svg"}
                  alt={`${
                    events[0].title
                  } - ${events[0].category.toLowerCase()} event`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Badges */}
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <Badge
                    variant="secondary"
                    className="bg-red-600 text-white px-3 py-1"
                  >
                    {events[0].category}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-green-600 text-white px-3 py-1"
                  >
                    FEATURED
                  </Badge>
                </div>

                {/* Play Button */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="text-white ml-1" size={32} />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-3xl font-bold mb-3">{events[0].title}</h3>
                  <p className="text-lg opacity-90 mb-4 leading-relaxed">
                    {events[0].description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{events[0].date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{events[0].location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>{events[0].attendees}</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      className="text-white hover:text-red-300 p-0"
                    >
                      View Details
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.article>

          {/* Side Events */}
          <div className="col-span-12 lg:col-span-4 row-span-2 space-y-6">
            {events.slice(1, 3).map((event, index) => (
              <motion.article
                key={event.id}
                className="group cursor-pointer h-[calc(50%-12px)]"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="relative h-full">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={`${event.title} event`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className={`${
                          event.status === "Upcoming"
                            ? "bg-green-600 text-white"
                            : "bg-gray-600 text-white"
                        } px-2 py-1 text-xs`}
                      >
                        {event.category}
                      </Badge>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="text-lg font-bold mb-2">{event.title}</h4>
                      <div className="flex items-center gap-3 text-xs">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={12} />
                          <span>{event.attendees}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>

          {/* Bottom Row Events */}
          {events.slice(3).map((event, index) => (
            <motion.article
              key={event.id}
              className="col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="relative h-full">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={`${event.title} event`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-gray-600 text-white px-2 py-1 text-xs"
                    >
                      {event.category}
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="text-lg font-bold mb-2">{event.title}</h4>
                    <p className="text-sm opacity-90 mb-3 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={12} />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
