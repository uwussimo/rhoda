"use client";

import { motion } from "framer-motion";

interface FloatingOrbsProps {
  className?: string;
}

export function FloatingOrbs({ className = "" }: FloatingOrbsProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Large primary orb */}
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-black/5 to-black/10 blur-3xl"
        style={{
          top: "20%",
          right: "10%",
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Medium secondary orb */}
      <motion.div
        className="absolute w-60 h-60 rounded-full bg-gradient-to-br from-black/3 to-black/8 blur-2xl"
        style={{
          bottom: "30%",
          left: "15%",
        }}
        animate={{
          y: [0, 40, 0],
          x: [0, -25, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Small accent orb */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-black/8 to-black/12 blur-xl"
        style={{
          top: "60%",
          right: "25%",
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Tiny floating orb */}
      <motion.div
        className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-black/6 to-black/10 blur-lg"
        style={{
          top: "10%",
          left: "20%",
        }}
        animate={{
          y: [0, 25, 0],
          x: [0, -10, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />
    </div>
  );
}
