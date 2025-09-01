"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

interface ContentSectionProps {
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ContentSection({
  title,
  subtitle,
  children,
  align = "left",
  className,
}: ContentSectionProps) {
  return (
    <Container as="section" className={`py-16 md:py-24 ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={`max-w-[720px] ${
          align === "center" ? "mx-auto text-center" : ""
        }`}
      >
        {/* Render title directly if it's a React node, otherwise wrap in motion.div */}
        {typeof title === "string" ? (
          <motion.h2
            variants={fadeInUp}
            className="text-display-small text-primary mb-6"
          >
            {title}
          </motion.h2>
        ) : (
          <div>{title}</div>
        )}

        {/* Render subtitle directly if it's a React node, otherwise wrap in motion.div */}
        {typeof subtitle === "string" ? (
          <motion.p
            variants={fadeInUp}
            className="text-subhead text-secondary mb-12 md:mb-16"
          >
            {subtitle}
          </motion.p>
        ) : (
          <div>{subtitle}</div>
        )}

        <motion.div
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </Container>
  );
}
