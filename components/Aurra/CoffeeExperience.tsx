"use client";

import Image from "next/image";
import FadeUp from "../animations/FadeUp";

export default function CoffeeExperience() {
  return (
    <section className="bg-[#F8F5F1] pt-24 pb-12 lg:pt-40 lg:pb-20">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        {/* Intro */}

        <FadeUp>
          <p className="text-sm uppercase tracking-[0.35em] text-[#A67C52]">
            COFFEE EXPERIENCE
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <h2 className="mt-10 max-w-4xl text-5xl font-medium leading-tight text-[#2D211B] lg:text-6xl">
            Designed for
            <br />
            everyday rituals.
          </h2>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5A3E2B] lg:mt-8 lg:text-xl">
            Whether enjoyed quietly at home or carried through a busy morning,
            every touchpoint was designed to feel unmistakably Aurra.
          </p>
        </FadeUp>

        {/* At Home */}

        <FadeUp delay={0.45}>
          <div className="mt-20 border-t border-[#DDD6CC] pt-10 lg:mt-24 lg:pt-14">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#A67C52]">
                AT HOME
              </p>

              <h3 className="mt-4 text-3xl font-medium text-[#2D211B] lg:text-4xl">
                A slower coffee ritual.
              </h3>
            </div>

            <div className="relative mt-10 h-[52vh] overflow-hidden rounded-3xl bg-[#EFE7DD] lg:mt-12 lg:h-[520px]">
              <Image
                src="/images/aurra/ceramic-cup.png"
                alt="Aurra Ceramic Mug"
                fill
                className="object-contain p-8 transition-transform duration-700 hover:scale-105 lg:p-10"
              />
            </div>
          </div>
        </FadeUp>

        {/* On The Go */}

        <FadeUp delay={0.6}>
          <div className="mt-20 border-t border-[#DDD6CC] pt-10 lg:mt-24 lg:pt-14">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#A67C52]">
                ON THE GO
              </p>

              <h3 className="mt-4 text-3xl font-medium text-[#2D211B] lg:text-4xl">
                Take the ritual with you.
              </h3>
            </div>

            <div className="relative mt-10 h-[52vh] overflow-hidden rounded-3xl bg-[#EFE7DD] lg:mt-12 lg:h-[520px]">
              <Image
                src="/images/aurra/to-go-cup.png"
                alt="Aurra Takeaway Cups"
                fill
                className="object-contain p-8 transition-transform duration-700 hover:scale-105 lg:p-10"
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}