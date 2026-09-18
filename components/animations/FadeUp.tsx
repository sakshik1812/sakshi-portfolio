"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ease, durations } from "./motion";
import { useReveal } from "./useReveal";

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
};

export default function FadeUp({ children, delay = 0 }: FadeUpProps) {
  const { ref, inView } = useReveal<HTMLDivElement>({ amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      data-reveal
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 40,
      }}
      transition={{
        duration: durations.normal,
        delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}
