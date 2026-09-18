"use client";

import { motion } from "framer-motion";
import { useReveal } from "../animations/useReveal";

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
  // Was amount: 0.65 on a min-h-[50vh] element. If the content ever pushed that
  // element past ~1.5x the viewport height, 65% could never be satisfied and it
  // would sit at opacity 0.25 forever. Lowered, and the hook caps it as well.
  const { ref, inView } = useReveal<HTMLDivElement>({
    amount: 0.5,
    once: false,
  });

  return (
    <motion.div
      ref={ref}
      data-reveal
      initial={{ opacity: 0.25, y: 80, scale: 0.96 }}
      animate={{
        opacity: inView ? 1 : 0.25,
        y: inView ? 0 : 80,
        scale: inView ? 1 : 0.96,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex min-h-[50vh] items-center py-12 lg:py-0"
    >
      {/* Mobile */}

      <div className="block w-full lg:hidden">
        <p className="text-7xl font-medium text-[#B48858]">{number}</p>

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
          <p className="text-8xl font-medium text-[#B48858]">{number}</p>
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
