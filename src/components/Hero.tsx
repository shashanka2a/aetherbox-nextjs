"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative h-[85vh] overflow-hidden bg-gradient-to-br from-[#1B1F3B] via-[#1B1F3B] to-[#7AC8FF]/20">
      {/* Animated background gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#7AC8FF]/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#F5C542]/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="z-10"
          >
            <motion.h1
              className="text-[8rem] leading-none tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Compute.
              <br />
              Unbound.
            </motion.h1>
            
            <motion.p
              className="text-xl text-[#7AC8FF]/90 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              From the cloud of the gods to the edge of the earth — we bring Aether closer.
            </motion.p>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button
                size="lg"
                className="bg-[#7AC8FF] hover:bg-[#7AC8FF]/90 text-[#1B1F3B] relative overflow-hidden group"
              >
                <span className="relative z-10">Explore the Concept</span>
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
                View Deck
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Floating Cube Visual */}
          <motion.div
            className="relative h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="relative w-[400px] h-[400px]"
              animate={{
                y: [0, -20, 0],
                rotateY: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7AC8FF]/30 to-[#F5C542]/30 rounded-3xl blur-2xl" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1652212976547-16d7e2841b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGN1YmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTMyMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cubic node visual"
                width={400}
                height={400}
                className="relative z-10 w-full h-full object-contain rounded-3xl"
              />
              {/* Solar flare highlights */}
              <motion.div
                className="absolute top-1/4 right-0 w-32 h-32 bg-[#F5C542]/40 rounded-full blur-xl"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#7AC8FF]/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#7AC8FF] rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
