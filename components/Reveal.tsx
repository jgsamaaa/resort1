"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.9,
  className,
}: {
  children: ReactNode;
  direction?: keyof typeof variants;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration, delay, ease: [0.22, 0.61, 0.36, 1] }}
      variants={reduceMotion ? variants.fade : variants[direction]}
    >
      {children}
    </motion.div>
  );
}
