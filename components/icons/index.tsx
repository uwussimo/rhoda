"use client";

import { motion, Variants } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        type: "spring",
        duration: 1.5,
        bounce: 0,
        delay: i * 0.2,
      },
      opacity: { duration: 0.2, delay: i * 0.2 },
    },
  }),
};

const pulse = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export function NetworkIcon() {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="32"
        cy="32"
        r="24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 4"
        variants={draw}
        custom={0}
      />
      <motion.path
        d="M32 8C18.745 8 8 18.745 8 32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={draw}
        custom={1}
      />
      <motion.path
        d="M56 32C56 18.745 45.255 8 32 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={draw}
        custom={2}
      />
      <motion.circle
        cx="32"
        cy="32"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={pulse as Variants}
      />
    </motion.svg>
  );
}

export function AdaptiveIcon() {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="32"
        cy="32"
        r="24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 4"
        variants={draw}
        custom={0}
      />
      <motion.path
        d="M32 8C18.745 8 8 18.745 8 32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={draw}
        custom={1}
      />
      <motion.path
        d="M56 32C56 18.745 45.255 8 32 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={draw}
        custom={2}
      />
      <motion.circle
        cx="32"
        cy="32"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={pulse as Variants}
      />
    </motion.svg>
  );
}

export function BrainIcon() {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M16 24C16 16 22 10 32 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={draw}
        custom={0}
      />
      <motion.path
        d="M48 24C48 16 42 10 32 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={draw}
        custom={1}
      />
      <motion.path
        d="M16 40C16 48 22 54 32 54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={draw}
        custom={2}
      />
      <motion.path
        d="M48 40C48 48 42 54 32 54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={draw}
        custom={3}
      />
      <motion.circle
        cx="16"
        cy="32"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={draw}
        custom={4}
      />
      <motion.circle
        cx="48"
        cy="32"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={draw}
        custom={4}
      />
      <motion.path
        d="M24 32H40"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={pulse as Variants}
      />
    </motion.svg>
  );
}

export function SystemIcon() {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.rect
        x="8"
        y="8"
        width="48"
        height="48"
        rx="24"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={draw}
        custom={0}
      />
      <motion.path
        d="M32 16V48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={draw}
        custom={1}
      />
      <motion.path
        d="M16 32H48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={draw}
        custom={2}
      />
      <motion.circle
        cx="32"
        cy="32"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={pulse as Variants}
      />
    </motion.svg>
  );
}

export function EvolutionIcon() {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M32 56C45.255 56 56 45.255 56 32C56 18.745 45.255 8 32 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={draw}
        custom={0}
      />
      <motion.path
        d="M32 8C18.745 8 8 18.745 8 32C8 45.255 18.745 56 32 56"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 4"
        variants={draw}
        custom={1}
      />
      <motion.path
        d="M32 20L44 32L32 44"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        custom={2}
      />
      <motion.circle
        cx="32"
        cy="32"
        r="2"
        fill="currentColor"
        variants={pulse as Variants}
      />
    </motion.svg>
  );
}

export function IntentIcon() {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M32 16C23.163 16 16 23.163 16 32C16 40.837 23.163 48 32 48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={draw}
        custom={0}
      />
      <motion.path
        d="M32 48C40.837 48 48 40.837 48 32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={draw}
        custom={1}
      />
      <motion.path
        d="M32 24L40 32L32 40"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        custom={2}
      />
      <motion.circle
        cx="40"
        cy="32"
        r="2"
        fill="currentColor"
        variants={pulse as Variants}
      />
    </motion.svg>
  );
}

export function ContextIcon() {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.rect
        x="16"
        y="16"
        width="32"
        height="32"
        rx="16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 4"
        variants={draw}
        custom={0}
      />
      <motion.circle
        cx="32"
        cy="32"
        r="12"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={draw}
        custom={1}
      />
      <motion.path
        d="M28 32H36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={draw}
        custom={2}
      />
      <motion.path
        d="M32 28V36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={draw}
        custom={2}
      />
      <motion.circle
        cx="32"
        cy="32"
        r="2"
        fill="currentColor"
        variants={pulse as Variants}
      />
    </motion.svg>
  );
}

export function EarlyAccessIcon() {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        custom={0}
      />
      <motion.circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={pulse as Variants}
      />
    </motion.svg>
  );
}

export function SupportIcon() {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        custom={0}
      />
      <motion.path
        d="M9 9h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={draw}
        custom={1}
      />
      <motion.path
        d="M9 13h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={draw}
        custom={2}
      />
    </motion.svg>
  );
}

export function UpdatesIcon() {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        custom={0}
      />
      <motion.path
        d="M22 6l-10 7L2 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        custom={1}
      />
      <motion.circle
        cx="18"
        cy="8"
        r="2"
        fill="currentColor"
        variants={pulse as Variants}
      />
    </motion.svg>
  );
}
