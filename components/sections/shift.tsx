"use client";

import { ContentSection } from "./content-section";
import { Typography } from "@/components/ui/typography";
import { FloatingOrbs } from "@/components/ui/floating-orbs";

export function ShiftSection() {
  return (
    <section
      id="vision"
      className="relative py-20 sm:py-40 bg-gradient-to-b from-gray-50/40 to-white overflow-hidden"
    >
      {/* Floating orbs background */}
      <FloatingOrbs className="opacity-25" />

      <ContentSection
        title={
          <div className="text-center">
            <Typography
              as="h2"
              variant="display"
              className="text-black font-bold leading-tight max-w-4xl mx-auto text-display-small"
            >
              The{" "}
              <span className="relative">
                AI-native
                <div className="absolute -bottom-1 left-0 right-0 h-[0.08em] bg-black/30" />
              </span>{" "}
              revolution
            </Typography>
          </div>
        }
        subtitle={
          <div className="text-center">
            <Typography
              variant="subhead-large"
              className="text-black/70 leading-relaxed max-w-4xl mx-auto py-4"
            >
              We&apos;re not adding AI to an old system — we&apos;re building
              the first operating system designed for the age of artificial
              intelligence. Every layer, every interaction, every pixel is
              intelligent by design.
            </Typography>
          </div>
        }
        align="center"
      >
        {/* Core principles */}
        <div className="space-y-20 mt-20 max-w-5xl mx-auto">
          {/* The paradigm shift visualization */}
          <div className="grid md:grid-cols-2 gap-16 items-center text-center">
            {/* Traditional OS */}
            <div className="space-y-6">
              <Typography
                variant="display-small"
                className="text-black/40 font-bold"
              >
                Traditional OS
              </Typography>

              <div className="bg-gray-100 rounded-2xl p-8 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <Typography
                      variant="label"
                      className="text-gray-500 text-xs"
                    >
                      App
                    </Typography>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <Typography
                      variant="label"
                      className="text-gray-500 text-xs"
                    >
                      App
                    </Typography>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <Typography
                      variant="label"
                      className="text-gray-500 text-xs"
                    >
                      App
                    </Typography>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <Typography
                      variant="label"
                      className="text-gray-500 text-xs"
                    >
                      App
                    </Typography>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <Typography variant="body-small" className="text-gray-500">
                    AI bolted on top
                  </Typography>
                </div>
              </div>

              <div className="space-y-3 text-left">
                <Typography variant="body" className="text-black/60">
                  • Learn multiple interfaces
                </Typography>
                <Typography variant="body" className="text-black/60">
                  • Switch between disconnected apps
                </Typography>
                <Typography variant="body" className="text-black/60">
                  • Manage complexity manually
                </Typography>
                <Typography variant="body" className="text-black/60">
                  • Adapt your workflow to the system
                </Typography>
              </div>
            </div>

            {/* Rhoda OS */}
            <div className="space-y-6">
              <Typography
                variant="display-small"
                className="text-black font-bold"
              >
                Rhoda OS
              </Typography>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                <div className="relative">
                  <div className="w-full h-32 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                    <Typography
                      variant="subhead"
                      className="text-blue-800 font-semibold"
                    >
                      Intelligent Core
                    </Typography>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-xl animate-pulse"></div>
                </div>
                <div className="text-center pt-4">
                  <Typography variant="body-small" className="text-blue-700">
                    Intelligence woven throughout
                  </Typography>
                </div>
              </div>

              <div className="space-y-3 text-left">
                <Typography variant="body" className="text-black font-medium">
                  • Speak your intentions naturally
                </Typography>
                <Typography variant="body" className="text-black font-medium">
                  • Get unified, adaptive interfaces
                </Typography>
                <Typography variant="body" className="text-black font-medium">
                  • Intelligence handles complexity
                </Typography>
                <Typography variant="body" className="text-black font-medium">
                  • System adapts to your workflow
                </Typography>
              </div>
            </div>
          </div>

          {/* Key insight */}
          <div className="bg-black/5 rounded-3xl p-12 border border-black/10 max-w-4xl mx-auto text-center">
            <Typography
              variant="display-small"
              className="text-black font-bold mb-6"
            >
              The fundamental difference
            </Typography>
            <Typography
              variant="subhead-large"
              className="text-black/80 leading-relaxed"
            >
              Every previous OS was built for the pre-AI era. Rhoda OS is
              designed from the ground up for a world where intelligence is
              abundant, accessible, and woven into every interaction.
            </Typography>
          </div>

          {/* Vision statement */}
          <div className="text-center space-y-8">
            <Typography
              variant="display"
              className="text-black font-bold leading-tight max-w-4xl mx-auto"
            >
              Computing that learns you,
              <br />
              not the other way around
            </Typography>

            <Typography
              variant="body-large"
              className="text-black/70 leading-relaxed max-w-3xl mx-auto"
            >
              This isn&apos;t just the next version of operating systems —
              it&apos;s an entirely new species. One that puts human
              intelligence at the center, amplified by artificial intelligence.
            </Typography>

            {/* Quote */}
            <div className="pt-12">
              <Typography
                variant="subhead-large"
                className="text-black/60 italic max-w-2xl mx-auto leading-relaxed"
              >
                &ldquo;The most profound technologies are those that disappear.
                They weave themselves into the fabric of everyday life until
                they are indistinguishable from it.&rdquo;
              </Typography>
              <Typography variant="body" className="text-black/40 mt-4">
                — Mark Weiser, Xerox PARC
              </Typography>
            </div>
          </div>
        </div>
      </ContentSection>
    </section>
  );
}
