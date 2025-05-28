"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

export function Footer() {
  const socialLinks = [
    {
      Icon: Instagram,
      href: CONTACT_INFO.social.instagram,
      label: "Instagram",
      available: true,
    },
    // {
    //   Icon: Twitter,
    //   href: CONTACT_INFO.social.twitter,
    //   label: "Twitter",
    //   available: false,
    // },
    {
      Icon: Linkedin,
      href: CONTACT_INFO.social.linkedin,
      label: "LinkedIn",
      available: true,
    },
    // {
    //   Icon: Youtube,
    //   href: CONTACT_INFO.social.youtube,
    //   label: "YouTube",
    //   available: false,
    // },
  ];

  return (
    <footer
      className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-16"
      role="contentinfo"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">NCPRODUCTIONS</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Creating unforgettable experiences across film, theatre, events,
              and exhibitions since 2010.
            </p>
            <div
              className="flex space-x-4"
              role="list"
              aria-label="Social media links"
            >
              {socialLinks.map(({ Icon, href, label, available }, index) => (
                <motion.a
                  key={index}
                  href={available ? href : undefined}
                  target={available ? "_blank" : undefined}
                  rel={available ? "noopener noreferrer" : undefined}
                  whileHover={available ? { scale: 1.2, color: "#ef4444" } : {}}
                  className={`transition-colors duration-300 p-2 rounded-full shadow-md ${
                    available
                      ? "text-gray-500 dark:text-gray-400 hover:text-red-500 bg-white dark:bg-gray-800 cursor-pointer"
                      : "text-gray-400 dark:text-gray-600 bg-gray-200 dark:bg-gray-700 cursor-not-allowed opacity-50"
                  }`}
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
                  <Icon size={20} aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">COMPANY</h4>
            <nav aria-label="Company links">
              <ul className="space-y-2">
                {["About", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">SERVICES</h4>
            <nav aria-label="Services links">
              <ul className="space-y-2">
                {["Film", "Theatre", "Events"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">CONNECT</h4>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {CONTACT_INFO.email.general}
              </p>
              {/* <p className="text-gray-600 dark:text-gray-400 text-sm">
                {CONTACT_INFO.phone}
              </p> */}
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {CONTACT_INFO.address.city}, {CONTACT_INFO.address.country}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 NC Productions. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                Cookies
              </Link>
            </div>
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}
