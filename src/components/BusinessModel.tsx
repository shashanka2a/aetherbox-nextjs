"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap } from "lucide-react";
import { Button } from "./ui/button";

export function BusinessModel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Dedicated power allocation",
    "99.9% uptime SLA",
    "24/7 remote monitoring",
    "Renewable energy guarantee",
    "Flexible contract terms",
    "White-glove onboarding",
  ];

  return (
    <section ref={ref} className="py-32 bg-[#0F1229] relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7AC8FF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F5C542]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Pay only for the power you need. No hidden fees, no complexity — 
            just reliable edge infrastructure at predictable rates.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-[#1B1F3B] to-[#0F1229] rounded-3xl p-12 border border-[#7AC8FF]/20 overflow-hidden">
            {/* Glowing border effect */}
            <motion.div
              className="absolute inset-0 opacity-50"
              animate={{
                background: [
                  'linear-gradient(0deg, rgba(122,200,255,0.1) 0%, transparent 50%, transparent 100%)',
                  'linear-gradient(180deg, rgba(122,200,255,0.1) 0%, transparent 50%, transparent 100%)',
                  'linear-gradient(360deg, rgba(122,200,255,0.1) 0%, transparent 50%, transparent 100%)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative z-10">
              {/* Pricing header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-[#7AC8FF]/10 border border-[#7AC8FF]/30 rounded-full px-6 py-2 mb-6">
                  <Zap className="w-4 h-4 text-[#F5C542]" />
                  <span className="text-[#7AC8FF]">Enterprise Colocation</span>
                </div>

                <div className="mb-4">
                  <span className="text-7xl text-white">$150</span>
                  <span className="text-2xl text-white/60">/kW/month</span>
                </div>

                <p className="text-white/60">
                  All-inclusive power, cooling, connectivity, and management
                </p>
              </div>

              {/* Glowing divider */}
              <div className="relative h-px bg-gradient-to-r from-transparent via-[#7AC8FF] to-transparent mb-12">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7AC8FF] to-transparent blur-sm"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#7AC8FF]/20 border border-[#7AC8FF]/40 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#7AC8FF]" strokeWidth={3} />
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#7AC8FF] hover:bg-[#7AC8FF]/90 text-[#1B1F3B] relative overflow-hidden group"
                >
                  <span className="relative z-10">Request a Quote</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#7AC8FF] text-[#7AC8FF] hover:bg-[#7AC8FF]/10"
                >
                  Schedule a Demo
                </Button>
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F5C542]/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#7AC8FF]/10 to-transparent rounded-tr-full" />
          </div>

          {/* Additional info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center text-white/40 mt-8"
          >
            Custom enterprise packages available for deployments over 100kW
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
