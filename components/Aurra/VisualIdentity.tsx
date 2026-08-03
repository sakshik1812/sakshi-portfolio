"use client";

import FadeUp from "../animations/FadeUp";

export default function VisualIdentity() {
  return (
    <section className="bg-[#3A2F28] py-40">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">

        <FadeUp>
          <p className="text-sm uppercase tracking-[0.35em] text-[#C8A06D]">
            VISUAL IDENTITY
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <h2 className="mt-14 max-w-5xl text-[clamp(4rem,8vw,7rem)] font-medium leading-[0.95] tracking-tight text-[#F8F5F1]">
            Warm.
            <br />
            Calm.
            <br />
            Timeless.
          </h2>
        </FadeUp>

      </div>
    </section>
  );
}