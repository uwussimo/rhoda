"use client";

import { motion } from "framer-motion";
import { ContentSection } from "./content-section";
import { Typography } from "@/components/ui/typography";
import { FloatingOrbs } from "@/components/ui/floating-orbs";

// Feature demonstration components
const VoiceInterfaceDemo = () => (
  <div className="relative max-w-4xl mx-auto">
    <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-white to-gray-50 border border-black/10 shadow-xl">
      {/* Voice interaction */}
      <div className="p-8 space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          </div>
          <div className="flex-1">
            <div className="bg-blue-50 rounded-2xl rounded-tl-sm p-4 max-w-md">
              <Typography variant="body-small" className="text-blue-900">
                &quot;Rhoda, I need to prepare for tomorrow&apos;s client
                presentation&quot;
              </Typography>
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-black/5 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-black/30 rounded-full"></div>
          </div>
          <div className="flex-1">
            <div className="bg-gray-50 rounded-2xl rounded-tl-sm p-4 max-w-lg">
              <Typography variant="body-small" className="text-black/80">
                I found your client files, recent project updates, and
                presentation template. I&apos;ll create a focused workspace with
                everything you need.
              </Typography>
            </div>
          </div>
        </div>

        {/* Generated workspace */}
        <div className="bg-white/80 rounded-xl border border-black/5 p-4 mt-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <div className="w-full h-12 bg-blue-200 rounded mb-2"></div>
              <Typography variant="label" className="text-blue-800 text-xs">
                Client Files
              </Typography>
            </div>
            <div className="bg-green-50 rounded-lg p-3 text-center">
              <div className="w-full h-12 bg-green-200 rounded mb-2"></div>
              <Typography variant="label" className="text-green-800 text-xs">
                Project Updates
              </Typography>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 text-center">
              <div className="w-full h-12 bg-purple-200 rounded mb-2"></div>
              <Typography variant="label" className="text-purple-800 text-xs">
                Presentation
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AdaptiveInterfaceDemo = () => (
  <div className="relative max-w-4xl mx-auto">
    <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-white to-gray-50 border border-black/10 shadow-xl">
      <div className="p-8">
        <div className="text-center mb-6">
          <Typography variant="subhead" className="text-black/60 mb-2">
            Sarah&apos;s Visual Workflow
          </Typography>
          <Typography variant="body-small" className="text-black/40">
            Interface adapts to visual thinking patterns
          </Typography>
        </div>

        {/* Visual-first layout */}
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-black/10 p-4">
              <Typography
                variant="label"
                className="text-black/40 text-xs mb-3 block"
              >
                MOOD BOARD
              </Typography>
              <div className="grid grid-cols-2 gap-2">
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg"></div>
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-lg"></div>
                <div className="aspect-square bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg"></div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-black/10 p-4">
              <Typography
                variant="label"
                className="text-black/40 text-xs mb-3 block"
              >
                COLOR HARMONY
              </Typography>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="col-span-2 bg-white rounded-xl border border-black/10 p-4">
            <Typography
              variant="label"
              className="text-black/40 text-xs mb-3 block"
            >
              CANVAS
            </Typography>
            <div className="aspect-[4/3] bg-gray-50 rounded-lg border border-black/5 flex items-center justify-center">
              <Typography variant="body-small" className="text-black/40">
                Visual workspace optimized for creative flow
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const IntelligentMemoryDemo = () => (
  <div className="relative max-w-4xl mx-auto">
    <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-white to-gray-50 border border-black/10 shadow-xl">
      <div className="p-8 space-y-6">
        {/* Natural language search */}
        <div className="bg-gray-100 rounded-xl p-4">
          <Typography variant="body-small" className="text-black/60 font-mono">
            &ldquo;That blue presentation from the Q3 client meeting&rdquo;
          </Typography>
        </div>

        {/* AI understanding */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <Typography
              variant="body-small"
              className="text-green-800 font-medium"
            >
              Found: BluePoint_Q3_Strategy.key
            </Typography>
          </div>
          <Typography variant="body-small" className="text-green-700 mb-3">
            Created during VideoCall with BluePoint team, Oct 15, 2024
          </Typography>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-12 bg-blue-300 rounded"></div>
            <div className="flex-1">
              <Typography variant="label" className="text-black/60 text-xs">
                Dominant color: Blue (#2563eb) • Themes: Strategy, Growth, Q3
                Results
              </Typography>
            </div>
          </div>
        </div>

        {/* Related context */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-3">
            <Typography
              variant="label"
              className="text-black/40 text-xs mb-2 block"
            >
              RELATED FILES
            </Typography>
            <Typography variant="body-small" className="text-black/60">
              BluePoint_Notes.txt, Q3_Data.xlsx
            </Typography>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <Typography
              variant="label"
              className="text-black/40 text-xs mb-2 block"
            >
              SIMILAR PROJECTS
            </Typography>
            <Typography variant="body-small" className="text-black/60">
              GreenCorp Q2, RedLabs Strategy
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Feature = ({
  title,
  description,
  demo,
  highlight,
}: {
  title: string;
  description: string;
  demo: React.ReactNode;
  highlight: string;
}) => (
  <motion.div
    className="space-y-12 text-center"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <motion.div
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    >
      <Typography
        variant="display-small"
        className="text-black font-bold mb-6 leading-tight"
      >
        {title}
      </Typography>
      <Typography
        variant="body-large"
        className="text-black/70 leading-relaxed mb-6"
      >
        {description}
      </Typography>
      <Typography variant="subhead" className="text-black font-semibold">
        {highlight}
      </Typography>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.4,
        ease: [0.16, 1, 0.3, 1],
        scale: {
          type: "spring",
          stiffness: 100,
          damping: 15,
        },
      }}
      viewport={{ once: true }}
    >
      {demo}
    </motion.div>
  </motion.div>
);

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 bg-white overflow-hidden">
      {/* Floating orbs background */}
      <FloatingOrbs className="opacity-20" />

      <ContentSection
        title={
          <div className="text-center">
            <Typography
              as="h2"
              variant="display"
              className="text-black font-bold leading-tight max-w-5xl mx-auto"
            >
              Intelligence at the{" "}
              <span className="relative">
                core
                <div className="absolute -bottom-1 left-0 right-0 h-[0.08em] bg-black/30" />
              </span>
              , not the surface
            </Typography>
          </div>
        }
        subtitle={
          <div className="text-center">
            <Typography
              variant="subhead-large"
              className="text-black/70 leading-relaxed max-w-4xl mx-auto"
            >
              Rhoda isn&apos;t an app or add-on — she&apos;s woven into the
              fabric of the operating system. Every interaction is intelligent,
              every interface is adaptive, every experience is personal.
            </Typography>
          </div>
        }
        align="center"
      >
        <div className="space-y-32 mt-20">
          <Feature
            title="Conversation, not commands"
            description="Speak to Rhoda like you would a colleague. She understands context, remembers your preferences, and creates exactly what you need without learning complex interfaces or shortcuts."
            highlight="Natural language becomes your new interface"
            demo={<VoiceInterfaceDemo />}
          />

          <Feature
            title="Interfaces that adapt to you"
            description="Everyone thinks differently. Rhoda observes how your mind works and reshapes itself to match your mental model. Visual thinkers get visual interfaces. Logical thinkers get structured layouts."
            highlight="Your OS becomes as unique as your fingerprint"
            demo={<AdaptiveInterfaceDemo />}
          />

          <Feature
            title="Memory that understands meaning"
            description="Rhoda doesn't just store files — she understands relationships, context, and intent. Find anything by describing what you remember, not where you saved it."
            highlight="Search by meaning, not just keywords"
            demo={<IntelligentMemoryDemo />}
          />
        </div>

        {/* Vision statement */}
        <div className="mt-32 pt-16 border-t border-black/10 text-center">
          <Typography
            variant="display"
            className="text-black font-bold max-w-4xl mx-auto leading-tight"
          >
            This is what computing looks like <br />
            when <em>intelligence</em> comes first
          </Typography>
        </div>
      </ContentSection>
    </section>
  );
}
