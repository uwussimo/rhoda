"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FloatingOrbs } from "@/components/ui/floating-orbs";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
      }
    } catch {
      // Handle error silently for now
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="relative py-32 bg-white overflow-hidden">
      {/* Floating orbs background */}
      <FloatingOrbs className="opacity-10" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Typography
              as="h2"
              variant="display"
              className="text-black font-bold leading-tight mb-6 text-display-small"
            >
              Experience the future
            </Typography>

            <Typography
              variant="subhead-large"
              className="text-black/70 leading-relaxed"
            >
              Rhoda OS launches in 2026. Be among the first to experience the
              world&apos;s first AI-native operating system.
            </Typography>
          </motion.div>

          {/* Form */}
          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
                scale: {
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                },
              }}
              viewport={{ once: true }}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 px-4 text-base border border-black/20 focus:border-black bg-white rounded-lg"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black hover:bg-black/90 text-white px-8 h-12 text-base font-semibold border-0 shadow-lg shadow-black/20 rounded-lg whitespace-nowrap"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </Button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-black/5 rounded-2xl border border-black/10 p-8">
                <Typography
                  variant="subhead"
                  className="text-black font-bold mb-2"
                >
                  Welcome to the future
                </Typography>
                <Typography variant="body" className="text-black/70">
                  You&apos;re now on the Rhoda OS waitlist. We&apos;ll be in
                  touch soon.
                </Typography>
              </div>
            </motion.div>
          )}

          {/* Simple note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Typography variant="body-small" className="text-black/40">
              Early access • Development updates • Shape the future
            </Typography>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
