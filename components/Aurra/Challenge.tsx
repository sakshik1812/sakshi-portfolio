"use client";

import FadeUp from "../animations/FadeUp";

export default function Challenge() {
  return (
    <section className="bg-[#3A2F28] py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.35em] text-[#C8A06D]">
            THE BRIEF
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <>
            {/* Mobile */}
            <h2 className="mt-8 block text-[44px] font-medium leading-[1.05] tracking-tight text-[#F8F5F1] lg:hidden">
              Create a premium coffee brand that values ritual over routine.
            </h2>

            {/* Desktop */}
            <h2 className="mt-8 hidden max-w-5xl text-6xl font-medium leading-[1.1] tracking-tight text-[#F8F5F1] lg:block">
              Create a premium coffee brand
              <br />
              that values ritual
              <br />
              over routine.
            </h2>
          </>
        </FadeUp>

        <div className="mt-16 h-px w-full bg-white/10 lg:mt-20" />

        <FadeUp delay={0.3}>
          <div className="mt-12 lg:mt-14">
            <p className="max-w-none text-lg leading-relaxed text-[#D8CFC6] lg:max-w-2xl lg:text-xl">
              Aurra was created to move away from fast coffee culture. The goal
              was to build a brand that feels calm, intentional, and crafted for
              slow mornings, meaningful conversations, and everyday rituals.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}