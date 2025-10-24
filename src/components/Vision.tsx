"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-[#0F1229] relative overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B1F3B]/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-6xl text-white text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Redefining Data Infrastructure.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xl text-white/80 leading-relaxed">
              AetherBox reimagines edge computing as a decentralized network of modular, 
              sustainable data centers. We deploy intelligent infrastructure where it's needed most, 
              powered by renewable energy and managed through intuitive self-service platforms.
            </p>
            <p className="text-xl text-white/80 leading-relaxed">
              In an era where data sovereignty and environmental responsibility converge, 
              we're building the foundation for the next generation of computing — 
              distributed, resilient, and rooted in the communities it serves.
            </p>
            <div className="flex gap-8 pt-6">
              <div>
                <div className="text-4xl text-[#F5C542] mb-2">100+</div>
                <div className="text-white/60">Edge Nodes</div>
              </div>
              <div>
                <div className="text-4xl text-[#7AC8FF] mb-2">99.9%</div>
                <div className="text-white/60">Uptime SLA</div>
              </div>
              <div>
                <div className="text-4xl text-[#F5C542] mb-2">75%</div>
                <div className="text-white/60">Carbon Reduction</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYxMzE2NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modular data infrastructure"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F3B] via-[#1B1F3B]/40 to-transparent" />
              
              {/* Network beams overlay effect */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <motion.line
                  x1="10%" y1="10%" x2="90%" y2="50%"
                  stroke="#7AC8FF"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.6 } : {}}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
                <motion.line
                  x1="90%" y1="90%" x2="10%" y2="50%"
                  stroke="#F5C542"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.6 } : {}}
                  transition={{ duration: 1.5, delay: 1 }}
                />
                <motion.circle
                  cx="10%" cy="10%" r="8"
                  fill="#7AC8FF"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.8 }}
                />
                <motion.circle
                  cx="90%" cy="50%" r="8"
                  fill="#7AC8FF"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 1.3 }}
                />
                <motion.circle
                  cx="90%" cy="90%" r="8"
                  fill="#F5C542"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 1 }}
                />
                <motion.circle
                  cx="10%" cy="50%" r="8"
                  fill="#F5C542"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 1.5 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
