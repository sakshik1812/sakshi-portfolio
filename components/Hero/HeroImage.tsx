"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        mx-auto
        h-[420px]
        w-full
        max-w-[320px]
        overflow-hidden
        rounded-3xl
        shadow-xl

        sm:h-[500px]
        sm:max-w-[360px]

        lg:h-[620px]
        lg:max-w-[420px]
      "
    >
      <Image
        src="/images/hero/profile.jpg"
        alt="Portrait of Sakshi"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
    </motion.div>
  );
}