"use client";

import Container from "../ui/Container";
import Principle from "./Principle";

export default function WorkingTogether() {
  return (
    <section className="relative bg-[#F8F5F1]">

      {/* Sticky Header */}

      <div className="sticky top-0 z-20 bg-[#F8F5F1]/90 backdrop-blur-sm border-b border-[#E5DED5]">
        <Container>

          <div className="py-12">

            <p className="text-sm uppercase tracking-[0.35em] text-[#4E315B]">
              WORKING TOGETHER
            </p>

            <h2 className="mt-6 max-w-5xl text-5xl font-medium leading-[1.05] text-[#161616] lg:text-7xl">
              Good design starts
              <br />
              with good collaboration.
            </h2>

          </div>

        </Container>
      </div>

      {/* Scroll Cards */}

      <Container>

        <Principle
          number="01"
          title="Listen before designing"
          description="Every project begins with understanding your goals, your audience, and your story before making any design decisions."
        />

        <Principle
          number="02"
          title="Design with intention"
          description="Every colour, every typeface and every interaction has a purpose. Nothing is added simply because it looks good."
        />

        <Principle
          number="03"
          title="Refine the details"
          description="The smallest refinements often leave the strongest impression. Great brands aren't rushed—they're carefully crafted."
        />

      </Container>

    </section>
  );
}