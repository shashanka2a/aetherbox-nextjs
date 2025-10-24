"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Mail, Github } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "mailto:hello@aetherbox.io", label: "Email" },
  ];

  return (
    <footer className="bg-[#0F1229] border-t border-white/5 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-4xl text-white mb-3">
              AetherBox
            </h3>
            <p className="text-xl text-[#7AC8FF]/80">
              Compute. Unbound.
            </p>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4 mb-8"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-[#1B1F3B] border border-[#7AC8FF]/20 flex items-center justify-center text-[#7AC8FF] hover:bg-[#7AC8FF]/10 hover:border-[#7AC8FF]/40 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              );
            })}
          </motion.div>

          {/* Contact email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <a
              href="mailto:hello@aetherbox.io"
              className="text-white/60 hover:text-[#7AC8FF] transition-colors duration-300"
            >
              hello@aetherbox.io
            </a>
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-[#7AC8FF]/20 to-transparent mb-8" />

          {/* Copyright and links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-4 text-white/40"
          >
            <p>© 2025 AetherBox. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#7AC8FF] transition-colors duration-300">
                Privacy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-[#7AC8FF] transition-colors duration-300">
                Terms
              </a>
              <span>•</span>
              <a href="#" className="hover:text-[#7AC8FF] transition-colors duration-300">
                Investors
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
