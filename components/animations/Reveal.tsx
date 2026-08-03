"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  return (
    <motion.div
  className={className}
  initial={{
    opacity: 0,
    clipPath: "inset(100% 0 0 0)",
  }}
  animate={{
    opacity: 1,
    clipPath: "inset(0% 0 0 0)",
  }}
  transition={{
    duration: 1,
    delay,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  {children}
</motion.div>
  );
}