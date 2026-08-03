"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import FadeUp from "../animations/FadeUp";
import { imageReveal } from "../animations/motion";

export default function AurraHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#3A2F28]">
      <div className="mx-auto max-w-7xl px-8 pt-32 lg:px-16 lg:pt-44">
        {/* Label */}

        <FadeUp>
          <p className="text-sm uppercase tracking-[0.35em] text-[#C8A06D]">
            CASE STUDY
          </p>
        </FadeUp>

        {/* Title */}

        <FadeUp delay={0.15}>
          <h1 className="mt-8 text-[96px] font-medium leading-none tracking-tight text-[#F8F5F1] sm:text-[110px] lg:text-[140px]">
            Aurra
          </h1>
        </FadeUp>

        {/* Description */}

        <FadeUp delay={0.3}>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#D8CFC6] sm:text-2xl">
            Crafted for slow mornings and meaningful conversations.
          </p>
        </FadeUp>
      </div>

      {/* Hero Image */}

      <motion.div
        variants={imageReveal}
        initial="hidden"
        animate="visible"
        className="mt-16 px-8 pb-12 lg:mt-28 lg:px-16 lg:pb-16"
      >
        <div className="relative h-[60vh] overflow-hidden rounded-3xl lg:h-[85vh]">
          <Image
            src="/images/aurra/hero.png"
            alt="Aurra Coffee"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[65%_center]"
          />
        </div>
      </motion.div>
    </section>
  );
}