"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ContentSection } from "./content-section";
import { Typography } from "@/components/ui/typography";
import { FloatingOrbs } from "@/components/ui/floating-orbs";

const fadeInUp = {
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
      staggerChildren: 0.15,
    },
  },
};

// Problem visualization component
const ProblemDemo = () => (
  <div className="relative max-w-5xl mx-auto">
    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-black/10 shadow-xl">
      {/* Traditional computing simulation */}
      <div className="absolute inset-6">
        <div className="grid grid-cols-4 gap-4 h-full">
          {/* Multiple disconnected apps */}
          <div className="bg-white rounded-lg border border-black/10 p-4 shadow-sm">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
            <Typography
              variant="label"
              className="text-black/40 text-xs mb-2 block"
            >
              Photo Manager
            </Typography>
            <div className="space-y-1">
              <div className="w-full h-2 bg-black/5 rounded"></div>
              <div className="w-3/4 h-2 bg-black/5 rounded"></div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-black/10 p-4 shadow-sm">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
            <Typography
              variant="label"
              className="text-black/40 text-xs mb-2 block"
            >
              File Explorer
            </Typography>
            <div className="space-y-1">
              <div className="w-full h-2 bg-black/5 rounded"></div>
              <div className="w-2/3 h-2 bg-black/5 rounded"></div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-black/10 p-4 shadow-sm">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
            <Typography
              variant="label"
              className="text-black/40 text-xs mb-2 block"
            >
              Calendar App
            </Typography>
            <div className="space-y-1">
              <div className="w-full h-2 bg-black/5 rounded"></div>
              <div className="w-1/2 h-2 bg-black/5 rounded"></div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-black/10 p-4 shadow-sm">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
            <Typography
              variant="label"
              className="text-black/40 text-xs mb-2 block"
            >
              Notes App
            </Typography>
            <div className="space-y-1">
              <div className="w-full h-2 bg-black/5 rounded"></div>
              <div className="w-4/5 h-2 bg-black/5 rounded"></div>
            </div>
          </div>
        </div>

        {/* User confusion */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 border border-black/10 shadow-lg max-w-sm text-center">
            <Typography variant="body" className="text-black/60 mb-2">
              &ldquo;Which app do I need?&rdquo;
            </Typography>
            <Typography variant="body-small" className="text-black/40">
              The user juggles between disconnected tools
            </Typography>
          </div>
        </div>
      </div>
    </div>

    <Typography variant="body" className="text-center text-black/40 mt-6">
      Traditional OS: Disconnected apps, manual workflows, constant switching
    </Typography>
  </div>
);

export function ProblemSection() {
  const { scrollYProgress } = useScroll();
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const orbOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.3, 0.2, 0.1]
  );

  return (
    <section className="relative py-32 bg-gray-50/30 overflow-hidden">
      {/* Floating orbs background with parallax */}
      <motion.div style={{ y: orbY, opacity: orbOpacity }}>
        <FloatingOrbs className="opacity-30" />
      </motion.div>

      <ContentSection
        title={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <Typography
              as="h2"
              variant="display"
              className="text-black font-bold leading-tight text-display-small"
            >
              Traditional operating systems{" "}
              <span className="relative">
                weren&apos;t built
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute -bottom-1 left-0 right-0 h-[0.08em] bg-black/30 origin-left"
                />
              </span>{" "}
              for intelligence
            </Typography>
          </motion.div>
        }
        subtitle={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Typography
              variant="subhead-large"
              className="text-black/70 leading-relaxed py-4"
            >
              Every OS today is fundamentally app-centric. You open
              applications, navigate interfaces, and manage files manually. But
              what if your computer could understand what you want to
              accomplish?
            </Typography>
          </motion.div>
        }
        align="center"
      >
        {/* Problem demo */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
            scale: {
              type: "spring",
              stiffness: 120,
              damping: 20,
            },
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <ProblemDemo />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-16 mt-20 max-w-4xl mx-auto text-center"
        >
          {/* Pain points */}
          <motion.div variants={fadeInUp}>
            <Typography
              variant="display-small"
              className="text-black mb-6 font-bold"
            >
              The app-centric paradigm
            </Typography>
            <Typography
              variant="body-large"
              className="text-black/70 leading-relaxed"
            >
              You don&apos;t think in applications — you think in goals.
              &quot;Organize my photos,&quot; &quot;Plan my week,&quot;
              &quot;Share this idea.&quot; Yet every OS forces you to translate
              these natural intentions into a series of app launches and
              interface navigation.
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="display-small"
              className="text-black mb-6 font-bold"
            >
              Intelligence as an afterthought
            </Typography>
            <Typography
              variant="body-large"
              className="text-black/70 leading-relaxed"
            >
              Current AI assistants are just chatbots sitting on top of old
              systems. They can&apos;t truly integrate with your workflow
              because the OS itself wasn&apos;t designed to be intelligent.
              It&apos;s like adding a smart brain to a mechanical body.
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="display-small"
              className="text-black mb-6 font-bold"
            >
              One interface for everyone
            </Typography>
            <Typography
              variant="body-large"
              className="text-black/70 leading-relaxed"
            >
              Every person thinks differently, but every OS looks the same.
              Sarah organizes by emotion, David by hierarchy, Maria by time. Yet
              they all use identical desktops, menus, and folder structures
              designed for no one in particular.
            </Typography>
          </motion.div>
        </motion.div>

        {/* Transition statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-black/10 text-center"
        >
          <Typography
            variant="display"
            className="text-black font-bold max-w-4xl mx-auto leading-tight"
          >
            What if we built an OS <span className="italic">with</span>{" "}
            intelligence from the ground up?
          </Typography>
        </motion.div>
      </ContentSection>
    </section>
  );
}
