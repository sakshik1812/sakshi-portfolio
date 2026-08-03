"use client";

import Image from "next/image";
import FadeUp from "../animations/FadeUp";

export default function LogoSection() {
  return (
    <section className="bg-[#3A2F28] pb-24 lg:pb-40">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.35em] text-[#C8A06D]">
            LOGO SYSTEM
          </p>
        </FadeUp>

        {/* Primary Logo */}

        <FadeUp delay={0.15}>
          <div className="mt-16 rounded-3xl bg-[#4A3C34] p-8 lg:mt-20 lg:p-20">
            <p className="mb-8 text-sm uppercase tracking-[0.3em] text-[#C8A06D] lg:mb-12">
              Primary Mark
            </p>

            <div className="flex justify-center">
              <Image
                src="/images/aurra/logo-1.png"
                alt="Aurra Primary Logo"
                width={700}
                height={220}
                className="h-auto w-full max-w-[500px] object-contain lg:w-[650px]"
              />
            </div>
          </div>
        </FadeUp>

        {/* Supporting Logos */}

        <FadeUp delay={0.3}>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-10 lg:grid-cols-2">
            {/* Secondary */}

            <div className="rounded-3xl bg-[#4A3C34] p-10 lg:p-16">
              <p className="mb-8 text-sm uppercase tracking-[0.3em] text-[#C8A06D] lg:mb-10">
                Secondary
              </p>

              <Image
                src="/images/aurra/logo-2.png"
                alt="Aurra Secondary Logo"
                width={400}
                height={200}
                className="mx-auto h-auto w-full max-w-[260px] lg:w-[320px]"
              />
            </div>

            {/* Wordmark */}

            <div className="rounded-3xl bg-[#4A3C34] p-10 lg:p-16">
              <p className="mb-8 text-sm uppercase tracking-[0.3em] text-[#C8A06D] lg:mb-10">
                Wordmark
              </p>

              <Image
                src="/images/aurra/logo-3.png"
                alt="Aurra Wordmark"
                width={400}
                height={200}
                className="mx-auto h-auto w-full max-w-[260px] lg:w-[320px]"
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}