"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Film,
  Theater,
  Calendar,
  Palette,
  ArrowRight,
  Search,
  Mail,
} from "lucide-react";
import Link from "next/link";

const suggestions = [
  {
    title: "Film Production",
    description: "Explore our latest film projects and cinematography work",
    icon: Film,
    href: "/film",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50 dark:bg-red-900/20",
  },
  {
    title: "Theatre Productions",
    description: "Discover our innovative stage productions and performances",
    icon: Theater,
    href: "/theatre",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    title: "Events & Community",
    description: "Join our community events and creative gatherings",
    icon: Calendar,
    href: "/events",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
  {
    title: "ShadesOf Exhibitions",
    description: "Experience our immersive art installations and exhibitions",
    icon: Palette,
    href: "/shadesof",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function NotFoundSuggestions() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            EXPLORE OUR <span className="text-red-500">CREATIVE WORLD</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            While you&apos;re here, why not discover what we do best? From film
            to theatre, events to exhibitions.
          </p>
        </motion.div>

        {/* Main Suggestions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {suggestions.map((suggestion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link href={suggestion.href}>
                <Card className="h-full bg-white dark:bg-black border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className={`w-16 h-16 ${suggestion.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <suggestion.icon
                        className={`bg-gradient-to-r ${suggestion.color} bg-clip-text text-transparent`}
                        size={32}
                      />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors duration-300">
                      {suggestion.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {suggestion.description}
                    </p>
                    <Button
                      variant="ghost"
                      className="text-red-500 hover:text-red-400 p-0 group-hover:translate-x-2 transition-transform duration-300"
                    >
                      Explore
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Links and Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Quick Links */}
          <Card className="bg-white dark:bg-black border-gray-200 dark:border-gray-800 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Search className="text-blue-500" size={20} />
                </div>
                <h3 className="text-2xl font-bold">Quick Links</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      href={link.href}
                      className="block p-3 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-300 group"
                    >
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-red-500 transition-colors duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Card */}
          <Card className="bg-white dark:bg-black border-gray-200 dark:border-gray-800 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <Mail className="text-red-500" size={20} />
                </div>
                <h3 className="text-2xl font-bold">Need Help?</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Can&apos;t find what you&apos;re looking for? Our team is here
                to help you navigate our creative universe.
              </p>
              <Link href="/contact">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 group">
                  <Mail className="mr-2" size={16} />
                  CONTACT US
                  <ArrowRight
                    className="ml-2 transition-transform group-hover:translate-x-1"
                    size={16}
                  />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        {/* Fun Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 dark:text-gray-400 italic">
            &quot;Every great story starts with getting a little lost...&quot; -
            NC Productions
          </p>
        </motion.div>
      </div>
    </section>
  );
}
