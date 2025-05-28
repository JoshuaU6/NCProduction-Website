"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Instagram, Linkedin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export function ContactInfo() {
  const socialLinks = [
    {
      Icon: Instagram,
      href: CONTACT_INFO.social.instagram,
      label: "Instagram",
      available: true,
    },
    {
      Icon: Linkedin,
      href: CONTACT_INFO.social.linkedin,
      label: "LinkedIn",
      available: true,
    },
    // {
    //   Icon: Twitter,
    //   href: CONTACT_INFO.social.twitter,
    //   label: "Twitter",
    //   available: false, // Will be enabled when link is updated
    // },
    // {
    //   Icon: Youtube,
    //   href: CONTACT_INFO.social.youtube,
    //   label: "YouTube",
    //   available: false, // Will be enabled when link is updated
    // },
  ];

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge
            variant="outline"
            className="border-red-500 text-red-500 mb-6 bg-red-50 dark:bg-red-900/20"
          >
            GET IN TOUCH
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">CONTACT US</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            We&apos;re always interested in new projects, creative
            collaborations, and conversations about how we can bring your vision
            to life.
          </p>

          {/* Location */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Location</h3>
            <div className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-red-500" size={24} />
              </div>
              <div>
                <div className="font-semibold mb-1">
                  {CONTACT_INFO.address.street}
                </div>
                <div className="text-gray-600 dark:text-gray-400 mb-1">
                  {CONTACT_INFO.address.unit}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {CONTACT_INFO.address.city}, {CONTACT_INFO.address.country}{" "}
                  {CONTACT_INFO.address.postcode}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <Mail className="text-red-500" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    General Inquiries
                  </div>
                  <a
                    href={`mailto:${CONTACT_INFO.email.general}`}
                    className="font-semibold text-red-500 hover:text-red-600 transition-colors"
                  >
                    {CONTACT_INFO.email.general}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <Mail className="text-red-500" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    New Projects
                  </div>
                  <a
                    href={`mailto:${CONTACT_INFO.email.projects}`}
                    className="font-semibold text-red-500 hover:text-red-600 transition-colors"
                  >
                    {CONTACT_INFO.email.projects}
                  </a>
                </div>
              </div>

              {/* <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <Phone className="text-red-500" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Phone
                  </div>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                    className="font-semibold text-red-500 hover:text-red-600 transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div> */}
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label, available }, index) => (
                <motion.a
                  key={index}
                  href={available ? href : undefined}
                  target={available ? "_blank" : undefined}
                  rel={available ? "noopener noreferrer" : undefined}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    available
                      ? "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-500 cursor-pointer"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed opacity-50"
                  }`}
                  whileHover={available ? { scale: 1.1 } : {}}
                  whileTap={available ? { scale: 0.95 } : {}}
                  aria-label={
                    available
                      ? `Follow us on ${label}`
                      : `${label} - Coming Soon`
                  }
                  title={
                    available
                      ? `Follow us on ${label}`
                      : `${label} - Coming Soon`
                  }
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              More social platforms coming soon!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
