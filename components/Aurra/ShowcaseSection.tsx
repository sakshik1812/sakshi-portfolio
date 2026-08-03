"use client";

import Image from "next/image";
import FadeUp from "../animations/FadeUp";

type ShowcaseSectionProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export default function ShowcaseSection({
  title,
  description,
  image,
  alt,
}: ShowcaseSectionProps) {
  return (
    <section className="bg-[#3A2F28] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        {/* Title */}

        <FadeUp>
          <h3 className="text-5xl font-medium leading-none tracking-tight text-[#F8F5F1] lg:text-6xl">
            {title}
          </h3>
        </FadeUp>

        {/* Description */}

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#D8CFC6] lg:mt-8 lg:text-xl">
            {description}
          </p>
        </FadeUp>

        {/* Product */}

        <FadeUp delay={0.3}>
          <div className="relative mt-12 h-[52vh] rounded-3xl bg-[#4A3C34] p-6 lg:mt-16 lg:h-[68vh] lg:p-6">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src={image}
                alt={alt}
                fill
                sizes="100vw"
                className="object-contain transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}