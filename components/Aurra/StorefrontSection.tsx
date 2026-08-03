"use client";

import Image from "next/image";
import FadeUp from "../animations/FadeUp";

export default function StorefrontSection() {
  return (
    <section className="bg-[#3A2F28] py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        {/* Label */}

        <FadeUp>
          <p className="text-sm uppercase tracking-[0.35em] text-[#C8A06D]">
            IN STORE
          </p>
        </FadeUp>

        {/* Heading */}

        <FadeUp delay={0.15}>
          <h2 className="mt-10 max-w-5xl text-5xl font-medium leading-tight text-[#F8F5F1] lg:text-6xl">
            Where the brand
            <br />
            comes to life.
          </h2>
        </FadeUp>

        {/* Image */}

        <FadeUp delay={0.3}>
          <div className="relative mt-16 h-[60vh] overflow-hidden rounded-3xl lg:mt-24 lg:h-[1100px]">
            <Image
              src="/images/aurra/storefront.png"
              alt="Aurra Storefront"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[65%_center] transition-transform duration-700 hover:scale-[1.02] lg:object-center"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}