"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { FloatingOrbs } from "@/components/ui/floating-orbs";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const RealTimeDemo = () => (
  <div className="relative max-w-4xl mx-auto">
    {/* Main demo container */}
    <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-white border border-black/10 shadow-2xl shadow-black/10">
      {/* Voice command input */}
      <div className="absolute top-8 left-8 right-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-black/10 p-4 shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
            <Typography
              variant="body"
              className="text-black/60 font-mono text-sm"
            >
              &ldquo;Rhoda, help me organize my photos from this week&rdquo;
            </Typography>
            <div className="flex space-x-1">
              <div className="w-1 h-4 bg-black/40 animate-pulse"></div>
              <div
                className="w-1 h-4 bg-black/30 animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-1 h-4 bg-black/20 animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Generated interface */}
      <div className="absolute inset-8 mt-24 bg-white/60 backdrop-blur-sm rounded-2xl border border-black/10 p-8">
        <div className="h-full flex flex-col justify-center items-center space-y-6">
          {/* AI response */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 max-w-lg">
            <Typography
              variant="body-small"
              className="text-blue-800 font-medium"
            >
              Found 47 photos from this week. I&apos;ve organized them by
              location and moment. Would you like me to create albums?
            </Typography>
          </div>

          {/* Dynamic interface elements */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-md">
            <div className="bg-white rounded-lg border border-black/10 p-3 text-center">
              <div className="w-full h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-2"></div>
              <Typography variant="label" className="text-black/60 text-xs">
                Weekend Trip
              </Typography>
            </div>
            <div className="bg-white rounded-lg border border-black/10 p-3 text-center">
              <div className="w-full h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-2"></div>
              <Typography variant="label" className="text-black/60 text-xs">
                Coffee Shop
              </Typography>
            </div>
            <div className="bg-white rounded-lg border border-black/10 p-3 text-center">
              <div className="w-full h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-2"></div>
              <Typography variant="label" className="text-black/60 text-xs">
                Home
              </Typography>
            </div>
          </div>

          <Typography
            variant="body-small"
            className="text-black/40 text-center max-w-md"
          >
            Interface created instantly based on your request
          </Typography>
        </div>
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      ></div>
    </div>

    {/* Feature callouts */}
    <div className="grid grid-cols-3 gap-8 mt-8">
      <div className="text-center">
        <Typography
          variant="label"
          className="text-black font-semibold mb-2 block"
        >
          VOICE-FIRST
        </Typography>
        <Typography variant="body-small" className="text-black/60">
          Natural conversation
        </Typography>
      </div>
      <div className="text-center">
        <Typography
          variant="label"
          className="text-black font-semibold mb-2 block"
        >
          INTELLIGENT
        </Typography>
        <Typography variant="body-small" className="text-black/60">
          Understands context
        </Typography>
      </div>
      <div className="text-center">
        <Typography
          variant="label"
          className="text-black font-semibold mb-2 block"
        >
          ADAPTIVE
        </Typography>
        <Typography variant="body-small" className="text-black/60">
          Learns your patterns
        </Typography>
      </div>
    </div>
  </div>
);

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center py-32 pt-40 bg-white overflow-hidden">
      {/* Floating orbs background */}
      <FloatingOrbs />

      <Container as="div" className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-6xl mx-auto text-center mb-20"
        >
          <motion.div variants={fadeIn}>
            <Typography
              variant="label"
              className="text-black/60 font-semibold mb-4 block tracking-wide uppercase"
            >
              From Rhoda Labs
            </Typography>
            <h1 className="text-display-large text-black mb-8 leading-[0.9] font-bold tracking-tight">
              The first{" "}
              <span className="relative inline-block">
                AI-native
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1,
                    delay: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-black/20 rounded-full"
                />
              </span>{" "}
              <br />
              operating system
            </h1>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Typography
              as="p"
              variant="subhead-large"
              className="text-black/70 mb-16 leading-relaxed font-medium max-w-4xl mx-auto"
            >
              Meet Rhoda, your intelligent companion that lives inside the OS.
              Just speak naturally — she understands, adapts, and creates the
              perfect interface for any task, instantly.
            </Typography>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <Button
              size="lg"
              className="bg-black hover:bg-black/90 text-white px-10 py-4 h-16 text-lg font-semibold shadow-xl shadow-black/20 border-0"
              onClick={() =>
                document
                  .getElementById("waitlist")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Experience the Future
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-black/20 hover:border-black/40 px-10 py-4 h-16 text-lg font-semibold bg-white/80 backdrop-blur-sm text-black hover:text-black"
            >
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
            scale: {
              type: "spring",
              stiffness: 100,
              damping: 15,
            },
          }}
        >
          <RealTimeDemo />
        </motion.div>
      </Container>
    </section>
  );
}
