"use client";

import FadeUp from "../animations/FadeUp";

export default function Insight() {
  return (
    <section className="bg-[#F8F5F1] py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        {/* Label */}

        <FadeUp>
          <p className="text-sm uppercase tracking-[0.35em] text-[#A67C52]">
            THE INSIGHT
          </p>
        </FadeUp>

        {/* Intro */}

        <FadeUp delay={0.15}>
          <p className="mt-10 max-w-xl text-2xl leading-relaxed text-[#5A3E2B] lg:mt-14 lg:text-3xl">
            People don&apos;t remember
            <br />
            the coffee itself.
          </p>
        </FadeUp>

        {/* Hero Statement */}

        <FadeUp delay={0.3}>
          <h2 className="mt-20 max-w-5xl text-[clamp(4rem,10vw,8rem)] font-medium leading-[0.92] tracking-tight text-[#2D211B] lg:mt-24">
            They remember
            <br />
            the ritual.
          </h2>
        </FadeUp>

        {/* Divider */}

        <FadeUp delay={0.45}>
          <div className="mt-12 border-t border-[#DDD6CC] lg:mt-24" />
        </FadeUp>

        {/* Supporting Copy */}

        <FadeUp delay={0.55}>
          <div className="mt-8 grid grid-cols-12 lg:mt-12">
            <div className="col-span-12 lg:col-span-7">
              <p className="max-w-none text-lg leading-relaxed text-[#5A3E2B] lg:max-w-2xl lg:text-xl">
                That idea became the foundation of Aurra. Every design decision
                was made to celebrate the quiet rituals surrounding coffee —
                from the warm, earthy palette to the tactile packaging and calm
                digital experience. Rather than encouraging people to rush,
                Aurra invites them to slow down and enjoy the moment.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}