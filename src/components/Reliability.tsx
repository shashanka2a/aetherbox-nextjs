"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle } from "lucide-react";

export function Reliability() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const outages = [
    {
      date: "October 20, 2025",
      provider: "AWS",
      duration: "15+ hours",
      impact: "Global services",
      description: "US-East-1 region DNS failure cascading to EC2, Lambda, S3, RDS. Affected Microsoft 365, Slack, Disney+, Amazon Alexa, DoorDash, and major financial institutions",
      icon: AlertTriangle,
      color: "#d4183d"
    },
    {
      date: "September 2024", 
      provider: "Google Cloud",
      duration: "12 hours",
      impact: "Global services",
      description: "Authentication service failure disrupting YouTube, Gmail, Google Workspace, and Google Cloud Platform services worldwide",
      icon: AlertTriangle,
      color: "#d4183d"
    },
    {
      date: "August 2024",
      provider: "Microsoft Azure",
      duration: "8 hours", 
      impact: "Enterprise customers",
      description: "Power grid failure in European data centers causing cascading service disruptions across Office 365, Teams, and Azure services",
      icon: AlertTriangle,
      color: "#d4183d"
    }
  ];


  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0F1229] to-[#1B1F3B] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4183d]/5 via-transparent to-[#7AC8FF]/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl text-white mb-6">
            The Hyperscale Problem
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Recent outages from AWS, Google Cloud, and Azure have exposed the fragility 
            of centralized infrastructure. When hyperscalers fail, the entire internet feels it.
          </p>
        </motion.div>

        {/* Recent Outages */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-3xl text-white mb-12 text-center"
          >
            Recent Major Outages
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outages.map((outage, index) => {
              const Icon = outage.icon;
              return (
                <motion.div
                  key={outage.date}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative bg-[#0F1229] rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{outage.provider}</div>
                      <div className="text-white/60 text-sm">{outage.date}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-white/60">Duration:</span>
                      <span className="text-red-400 font-semibold">{outage.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Impact:</span>
                      <span className="text-white">{outage.impact}</span>
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-sm leading-relaxed">
                    {outage.description}
                  </p>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-2xl bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </div>
        </div>


        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#7AC8FF]/10 to-[#F5C542]/10 rounded-2xl p-8 border border-[#7AC8FF]/20">
            <h4 className="text-2xl text-white mb-4">
              Don't Let Hyperscale Outages Break Your Business
            </h4>
            <p className="text-white/60 mb-6 max-w-2xl mx-auto">
              Join the decentralized future. Deploy resilient edge infrastructure 
              that keeps your applications running even when the cloud giants fail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl text-[#7AC8FF] font-bold">99.9%</div>
                <div className="text-white/60">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-[#F5C542] font-bold">0</div>
                <div className="text-white/60">Single Points of Failure</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-[#7AC8FF] font-bold">100%</div>
                <div className="text-white/60">Renewable Energy</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
