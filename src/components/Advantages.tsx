"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Network, Battery, Boxes, Maximize2 } from "lucide-react";

const advantages = [
  {
    icon: Network,
    title: "Decentralized Edge",
    description: "Distributed nodes eliminate single points of failure while reducing latency for end-users through proximity deployment.",
  },
  {
    icon: Battery,
    title: "Renewable Microgrids",
    description: "Solar-powered infrastructure with battery backup ensures sustainable, off-grid capable operations with minimal carbon footprint.",
  },
  {
    icon: Boxes,
    title: "Self-Service Colocation",
    description: "Seamless deployment and management through our platform — provision resources, monitor performance, and scale instantly.",
  },
  {
    icon: Maximize2,
    title: "Modular Expansion",
    description: "Containerized architecture allows rapid deployment and flexible scaling based on demand, from pilot to multi-region networks.",
  },
];

export function Advantages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#1B1F3B] to-[#0F1229]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl text-white mb-6">
            Why AetherBox Wins
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Four competitive advantages that position us at the forefront of edge infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative bg-[#1B1F3B] rounded-2xl p-8 border border-[#7AC8FF]/10 hover:border-[#7AC8FF]/30 transition-all duration-500 h-full">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#F5C542]/10 border border-[#F5C542]/20 group-hover:bg-[#F5C542]/20 group-hover:border-[#F5C542]/40 transition-all duration-300">
                      <Icon className="w-8 h-8 text-[#F5C542]" strokeWidth={1.5} />
                    </div>
                    
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-[#F5C542]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl text-white mb-4 group-hover:text-[#7AC8FF] transition-colors duration-300">
                    {advantage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed">
                    {advantage.description}
                  </p>

                  {/* Gradient line accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7AC8FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                </div>

                {/* Hover background glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7AC8FF]/0 to-[#F5C542]/0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-2xl -z-10"
                  initial={false}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Additional highlight section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-[#1B1F3B] rounded-2xl px-8 py-6 border border-[#7AC8FF]/20">
            <p className="text-white/80 text-lg">
              <span className="text-[#F5C542]">Enterprise-grade infrastructure</span> meets{" "}
              <span className="text-[#7AC8FF]">startup agility</span> —{" "}
              deploy in weeks, not months
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
