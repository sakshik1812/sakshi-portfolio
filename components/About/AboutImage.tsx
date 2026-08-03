"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutImage() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative h-[560px] w-[420px] overflow-hidden rounded-2xl shadow-xl"
    >
      <Image
        src="/images/about/workspace.jpg"
        alt="Creative workspace"
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
        priority
      />

      {/* Soft gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
    </motion.div>
  );
}