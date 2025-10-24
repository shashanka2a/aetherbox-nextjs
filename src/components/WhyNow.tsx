"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Zap, Globe } from "lucide-react";

function CountUp({ end, duration = 2, inView }: { end: number; duration?: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, inView]);

  return <span>{count}</span>;
}

export function WhyNow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Globe, value: 85, suffix: "%", label: "Tier-1 Markets Saturated", color: "#7AC8FF" },
    { icon: TrendingUp, value: 400, suffix: "%", label: "Growth in Tier-3 Demand", color: "#F5C542" },
    { icon: Zap, value: 12, suffix: "B", label: "Edge Computing Market by 2028", color: "#7AC8FF" },
  ];

  return (
    <section ref={ref} className="py-32 bg-[#1B1F3B] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-[#7AC8FF]/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-[#F5C542]/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl text-white mb-6">
            The Market Opportunity
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            As hyperscalers reach capacity in Tier-1 markets, the explosive growth 
            opportunity lies in underserved Tier-2 and Tier-3 regions demanding local, 
            sustainable compute infrastructure.
          </p>
        </motion.div>

        {/* Horizontal Infographic */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-2 bg-gradient-to-r from-[#7AC8FF] via-[#F5C542] to-[#7AC8FF] rounded-full mb-12"
          >
            {/* Markers on the timeline */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute left-[15%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute left-[50%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 1 }}
              className="absolute left-[85%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"
            />
          </motion.div>

          <div className="grid grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="text-[#7AC8FF]/60 mb-2">Tier-1 Markets</div>
              <div className="text-white/80">Near Saturation</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="text-[#F5C542] mb-2">Tier-2 & 3 Markets</div>
              <div className="text-white">Explosive Growth</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
            >
              <div className="text-[#7AC8FF] mb-2">AetherBox Opportunity</div>
              <div className="text-white">Edge Dominance</div>
            </motion.div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="relative bg-[#0F1229] rounded-2xl p-8 border border-white/5 hover:border-[#7AC8FF]/30 transition-all duration-300 group"
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-6"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>

                <div className="mb-4">
                  <span className="text-5xl text-white">
                    {stat.value === 12 ? "$" : ""}
                    <CountUp end={stat.value} inView={isInView} />
                    {stat.suffix}
                  </span>
                </div>

                <p className="text-white/60">{stat.label}</p>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"
                  style={{ backgroundColor: stat.color }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
