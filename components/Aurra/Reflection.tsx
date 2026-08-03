"use client";

import FadeUp from "../animations/FadeUp";

export default function Reflection() {
  return (
    <section className="bg-[#F8F5F1] pt-32 pb-20 lg:pt-40 lg:pb-24">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.35em] text-[#A67C52]">
            LOOKING BACK
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <h2 className="mt-10 max-w-5xl text-5xl font-medium leading-tight text-[#2D211B] lg:text-6xl">
            Every memorable brand
            <br />
            begins with understanding.
          </h2>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-16 border-t border-[#DDD6CC] pt-10 lg:mt-20 lg:pt-12">
            <p className="max-w-3xl text-lg leading-relaxed text-[#5A3E2B] lg:text-xl">
              Aurra reinforced something I believe every great brand has in
              common. The strongest identities aren&apos;t built by adding
              more—they&apos;re built by understanding what truly matters and
              designing with intention.
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#5A3E2B] lg:mt-10 lg:text-xl">
              That belief continues to guide every project I create, shaping
              experiences that feel thoughtful, timeless and meaningful.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}