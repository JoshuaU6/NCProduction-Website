"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Isaac Bokoko",
    role: "Creative Director & Co-Founder",
    bio: "Visionary leader with 15+ years in multimedia production, passionate about amplifying diverse voices through innovative storytelling.",
    image: "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748354414/Isaac_CoFounder_rerdae.jpg",
    social: {
      linkedin: "https://linkedin.com/in/michaelchen",
      twitter: "https://twitter.com/michaelchen",
      email: "michael@ncproductions.com",
    },
  },
  {
    name: "Ryan",
    role: "Co-Founder & Executive Producer",
    bio: "Award-winning producer specializing in socially impactful content, with expertise in film and theatre production management.",
    image: "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748354191/Ryan_CoFounder_vsoq8w.jpg",
    social: {
      linkedin: "https://linkedin.com/in/sophiawilliams",
      twitter: "https://twitter.com/sophiawilliams",
      email: "sophia@ncproductions.com",
    },
  },
  {
    name: "Joshua Unoarumhi",
    role: "Chief Technology Officer",
    bio: "Technical innovator bringing cutting-edge technology to storytelling, with expertise in cinematography and post-production.",
    image: "https://res.cloudinary.com/dmm9rjqf9/image/upload/v1748353977/Joshua_CTO_ibkdyb.jpg",
    social: {
      linkedin: "https://linkedin.com/in/jamesrodriguez",
      twitter: "https://twitter.com/jamesrodriguez",
      email: "james@ncproductions.com",
    },
  },
];

export function Leadership() {
  return (
    <section
      className="py-20 bg-white dark:bg-black"
      aria-labelledby="leadership-heading"
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
            OUR TEAM
          </Badge>
          <h2
            id="leadership-heading"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            LEADERSHIP
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meet the visionaries who guide NC Productions with passion,
            expertise, and a commitment to creative excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} - ${member.role} at NC Productions`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <a
                        href={member.social.linkedin}
                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                        aria-label={`${member.name}'s LinkedIn profile`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={16} aria-hidden="true" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                        aria-label={`${member.name}'s Twitter profile`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter size={16} aria-hidden="true" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={16} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-red-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
