"use client";

import { motion } from "framer-motion";

type PrincipleProps = {
  number: string;
  title: string;
  description: string;
};

export default function Principle({
  number,
  title,
  description,
}: PrincipleProps) {
  return (
    <motion.div
      initial={{ opacity: 0.25, y: 80, scale: 0.96 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        amount: 0.65,
        once: false,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex min-h-[50vh] items-center py-12 lg:py-0"
    >
      {/* Mobile */}

      <div className="block w-full lg:hidden">
        <p className="text-7xl font-medium text-[#B48858]">
          {number}
        </p>

        <h3 className="mt-4 text-4xl font-medium leading-tight text-[#161616]">
          {title}
        </h3>

        <p className="mt-6 text-lg leading-relaxed text-[#5A3E2B]">
          {description}
        </p>
      </div>

      {/* Desktop */}

      <div className="hidden w-full grid-cols-12 gap-10 lg:grid">
        <div className="col-span-2">
          <p className="text-8xl font-medium text-[#B48858]">
            {number}
          </p>
        </div>

        <div className="col-span-10">
          <h3 className="text-5xl font-medium leading-tight text-[#161616]">
            {title}
          </h3>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#5A3E2B]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}