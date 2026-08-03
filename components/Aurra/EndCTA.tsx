"use client";

import Link from "next/link";
import FadeUp from "../animations/FadeUp";

export default function EndCTA() {
  return (
    <section className="bg-[#F8F5F1] pt-16 pb-32 lg:pt-24 lg:pb-40">
      <div className="mx-auto max-w-4xl px-8 lg:px-16">
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.35em] text-[#A67C52]">
            END OF CASE STUDY
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <h2 className="mt-8 text-5xl font-medium leading-tight text-[#2D211B] lg:mt-10 lg:text-6xl">
            Thanks for
            <br />
            exploring Aurra.
          </h2>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#5A3E2B] lg:mt-10 lg:text-xl">
            Every brand tells a different story. Aurra explored the beauty of
            slowing down, designing with intention, and creating meaningful
            rituals through coffee.
          </p>
        </FadeUp>

        <FadeUp delay={0.45}>
          <div className="mt-16 border-t border-[#DDD6CC] pt-8 lg:mt-24 lg:pt-10">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 text-xl font-medium text-[#2D211B] lg:text-2xl"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-2">
                ←
              </span>

              Back to Portfolio
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}