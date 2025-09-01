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
    <div className="relative aspect-[16/10] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-white border border-black/10 shadow-xl sm:shadow-2xl shadow-black/10">
      {/* Voice command input */}
      <div className="absolute top-4 left-4 right-4 sm:top-8 sm:left-8 sm:right-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-black/10 p-3 sm:p-4 shadow-lg">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400 animate-pulse"></div>
            <Typography
              variant="body"
              className="text-black/60 font-mono text-xs sm:text-sm"
            >
              &ldquo;Rhoda, help me organize my photos&rdquo;
            </Typography>
            <div className="flex space-x-1">
              <div className="w-0.5 h-3 sm:w-1 sm:h-4 bg-black/40 animate-pulse"></div>
              <div
                className="w-0.5 h-3 sm:w-1 sm:h-4 bg-black/30 animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-0.5 h-3 sm:w-1 sm:h-4 bg-black/20 animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Generated interface */}
      <div className="absolute inset-4 mt-16 sm:inset-8 sm:mt-24 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-black/10 p-4 sm:p-8">
        <div className="h-full flex flex-col justify-center items-center space-y-4 sm:space-y-6">
          {/* AI response */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 sm:p-4 max-w-full sm:max-w-lg">
            <Typography
              variant="body-small"
              className="text-blue-800 font-medium text-xs sm:text-sm"
            >
              Found 47 photos from this week. I&apos;ve organized them by
              location and moment. Would you like me to create albums?
            </Typography>
          </div>

          {/* Dynamic interface elements */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-xs sm:max-w-md">
            <div className="bg-white rounded-lg border border-black/10 p-2 sm:p-3 text-center">
              <div className="w-full h-8 sm:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-1 sm:mb-2"></div>
              <Typography variant="label" className="text-black/60 text-xs">
                Weekend Trip
              </Typography>
            </div>
            <div className="bg-white rounded-lg border border-black/10 p-2 sm:p-3 text-center">
              <div className="w-full h-8 sm:h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-1 sm:mb-2"></div>
              <Typography variant="label" className="text-black/60 text-xs">
                Coffee Shop
              </Typography>
            </div>
            <div className="bg-white rounded-lg border border-black/10 p-2 sm:p-3 text-center">
              <div className="w-full h-8 sm:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-1 sm:mb-2"></div>
              <Typography variant="label" className="text-black/60 text-xs">
                Home
              </Typography>
            </div>
          </div>

          <Typography
            variant="body-small"
            className="text-black/40 text-center max-w-xs sm:max-w-md text-xs sm:text-sm"
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
    <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-6 sm:mt-8">
      <div className="text-center">
        <Typography
          variant="label"
          className="text-black font-semibold mb-1 sm:mb-2 block text-xs sm:text-sm"
        >
          VOICE-FIRST
        </Typography>
        <Typography
          variant="body-small"
          className="text-black/60 text-xs sm:text-sm"
        >
          Natural conversation
        </Typography>
      </div>
      <div className="text-center">
        <Typography
          variant="label"
          className="text-black font-semibold mb-1 sm:mb-2 block text-xs sm:text-sm"
        >
          INTELLIGENT
        </Typography>
        <Typography
          variant="body-small"
          className="text-black/60 text-xs sm:text-sm"
        >
          Understands context
        </Typography>
      </div>
      <div className="text-center">
        <Typography
          variant="label"
          className="text-black font-semibold mb-1 sm:mb-2 block text-xs sm:text-sm"
        >
          ADAPTIVE
        </Typography>
        <Typography
          variant="body-small"
          className="text-black/60 text-xs sm:text-sm"
        >
          Learns your patterns
        </Typography>
      </div>
    </div>
  </div>
);

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center py-16 pt-28 sm:py-32 sm:pt-40 bg-white overflow-hidden">
      {/* Floating orbs background */}
      <FloatingOrbs />

      <Container as="div" className="relative z-10 px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-6xl mx-auto text-center mb-12 sm:mb-20"
        >
          <motion.div variants={fadeIn}>
            <Typography
              variant="label"
              className="text-black/60 font-semibold mb-3 sm:mb-4 block tracking-wide uppercase text-xs sm:text-sm"
            >
              From Rhoda Labs
            </Typography>
            <h1 className="text-4xl sm:text-6xl lg:text-display-large text-black mb-6 sm:mb-8 leading-[0.9] font-bold tracking-tight px-4">
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
                  className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-black/20 rounded-full"
                />
              </span>{" "}
              <br />
              operating system
            </h1>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Typography
              as="p"
              variant="body-large"
              className="text-black/70 mb-12 sm:mb-16 leading-relaxed font-medium max-w-4xl mx-auto text-base sm:text-lg lg:text-xl px-4"
            >
              Meet Rhoda, your intelligent companion that lives inside the OS.
              Just speak naturally — she understands, adapts, and creates the
              perfect interface for any task, instantly.
            </Typography>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:gap-6 justify-center items-center mb-12 sm:mb-20 px-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-black hover:bg-black/90 text-white px-8 sm:px-10 py-4 h-14 sm:h-16 text-base sm:text-lg font-semibold shadow-xl shadow-black/20 border-0"
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
              className="w-full sm:w-auto border-2 border-black/20 hover:border-black/40 px-8 sm:px-10 py-4 h-14 sm:h-16 text-base sm:text-lg font-semibold bg-white/80 backdrop-blur-sm text-black hover:text-black"
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
