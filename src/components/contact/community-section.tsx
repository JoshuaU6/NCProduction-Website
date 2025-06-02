"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Handshake, Users, Briefcase, Heart } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export function CommunitySection() {
  const handleWorkWithUs = () => {
    window.open(CONTACT_INFO.social.instagram, "_blank", "noopener,noreferrer");
  };

  const handleJoinCommunity = () => {
    window.open(CONTACT_INFO.social.instagram, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            WORK WITH US &{" "}
            <span className="text-red-500">JOIN OUR COMMUNITY</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re looking to partner with us or join our creative
            network, we&apos;re always excited to connect with passionate
            individuals and organizations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Work With Us */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <Card className="h-full bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors duration-300">
                  <Handshake className="text-red-500" size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-4">Work With Us</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  We&apos;re always looking for new partnerships and funders to
                  bring bold ideas and projects to life. Don&apos;t be a
                  stranger—reach out and let&apos;s work together.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Briefcase className="text-red-500" size={16} />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Partnership Opportunities
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="text-red-500" size={16} />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Funding & Investment
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="text-red-500" size={16} />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Collaborative Projects
                    </span>
                  </div>
                </div>

                <Button
                  onClick={handleWorkWithUs}
                  className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 group"
                >
                  GET IN TOUCH
                  <ArrowRight
                    className="ml-2 transition-transform group-hover:translate-x-1"
                    size={16}
                  />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Join Our Community */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <Card className="h-full bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                  <Users className="text-blue-500" size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Are you a freelancer or creative? Join Our Community and get
                  involved in exciting projects across the arts.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Users className="text-blue-500" size={16} />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Creative Network
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="text-blue-500" size={16} />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Freelance Opportunities
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="text-blue-500" size={16} />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Collaborative Projects
                    </span>
                  </div>
                </div>

                <Button
                  onClick={handleJoinCommunity}
                  variant="outline"
                  className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 group"
                >
                  JOIN OUR COMMUNITY
                  <ArrowRight
                    className="ml-2 transition-transform group-hover:translate-x-1"
                    size={16}
                  />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Ready to be part of something bigger? Let&apos;s create amazing
            things together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Active Community
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Regular Projects
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Creative Growth
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
