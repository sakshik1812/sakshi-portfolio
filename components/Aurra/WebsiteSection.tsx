"use client";

import Image from "next/image";
import FadeUp from "../animations/FadeUp";
import { motion } from "framer-motion";
import { imageReveal } from "../animations/motion";
import { useReveal } from "../animations/useReveal";

export default function WebsiteSection() {
  // This image is 1800x4800. Rendered full width it is roughly 3200px tall,
  // several times the viewport. Observer thresholds are a bad fit for that;
  // the hook's viewport cap handles it.
  const { ref, inView } = useReveal<HTMLDivElement>({ amount: 0.15 });

  return (
    <section className="bg-[#F8F5F1] pt-12 pb-24 lg:pt-20 lg:pb-40">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        {/* Label */}

        <FadeUp>
          <p className="text-sm uppercase tracking-[0.35em] text-[#A67C52]">
            DIGITAL EXPERIENCE
          </p>
        </FadeUp>

        {/* Heading */}

        <FadeUp delay={0.15}>
          <h2 className="mt-10 max-w-5xl text-5xl font-medium leading-tight text-[#2D211B] lg:text-6xl">
            The same warmth,
            <br />
            thoughtfully translated
            <br />
            into digital.
          </h2>
        </FadeUp>

        {/* Website Mockup */}

        <motion.div
          ref={ref}
          data-reveal
          variants={imageReveal}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 overflow-hidden rounded-3xl bg-[#F1E8DC] p-4 lg:mt-20 lg:p-8"
        >
          <Image
            src="/images/aurra/website.png"
            alt="Aurra Website"
            width={1800}
            height={4800}
            priority
            className="h-auto w-full rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
