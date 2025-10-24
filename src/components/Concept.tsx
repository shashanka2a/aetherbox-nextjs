"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sun, Monitor, Lock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const concepts = [
  {
    title: "Sustainable Edge",
    description: "100% renewable energy powered infrastructure with integrated solar microgrids",
    image: "https://images.unsplash.com/photo-1711224116673-fd729b3db180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjEyOTM0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Sun,
  },
  {
    title: "Self-Service",
    description: "Deploy, manage, and scale your edge infrastructure through our intuitive dashboard",
    image: "https://images.unsplash.com/photo-1683200899447-d398198ed197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGFzaGJvYXJkJTIwc2NyZWVufGVufDF8fHx8MTc2MTMyMDAwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Monitor,
  },
  {
    title: "Sovereign Control",
    description: "Your data stays in your jurisdiction with enterprise-grade security and compliance",
    image: "https://images.unsplash.com/photo-1652212976547-16d7e2841b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGN1YmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTMyMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Lock,
  },
];

export function Concept() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-32 bg-gradient-to-b from-[#0F1229] to-[#1B1F3B]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-6xl text-white text-center mb-4 md:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          The AetherBox Concept
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl text-white/60 text-center mb-12 md:mb-20 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Three pillars that redefine what edge computing can be
        </motion.p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((concept, index) => {
            const Icon = concept.icon;
            return (
              <motion.div
                key={concept.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative bg-[#0F1229] rounded-3xl overflow-hidden border border-[#7AC8FF]/10 hover:border-[#7AC8FF]/30 transition-all duration-500"
              >
                {/* Image background */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={concept.image}
                    alt={concept.title}
                    width={400}
                    height={256}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1229] via-[#0F1229]/60 to-transparent" />
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#7AC8FF]/0 to-[#F5C542]/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    initial={false}
                  />
                </div>

                {/* Content */}
                <div className="relative p-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#F5C542]/10 border border-[#F5C542]/20 mb-4 group-hover:bg-[#F5C542]/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#F5C542]" />
                  </div>
                  
                  <h3 className="text-2xl text-white mb-3 group-hover:text-[#7AC8FF] transition-colors duration-300">
                    {concept.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed">
                    {concept.description}
                  </p>
                </div>

                {/* Animated border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #7AC8FF, transparent)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['200% 0%', '-200% 0%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
