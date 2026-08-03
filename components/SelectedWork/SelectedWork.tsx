import Container from "../ui/Container";
import FadeUp from "../animations/FadeUp";
import AurraHero from "./AurraHero";

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="bg-[#F7F2EA] py-24 lg:py-40"
    >
      <Container>
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.35em] text-[#A67C52]">
            CASE STUDY
          </p>
        </FadeUp>

        <FadeUp delay={0.25}>
          <h2 className="mt-4 text-5xl font-medium leading-none text-[#2D211B] sm:text-6xl lg:text-7xl">
            Aurra
          </h2>
        </FadeUp>

        <FadeUp delay={0.4}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5A3E2B] sm:mt-8 sm:text-xl lg:mt-10 lg:text-2xl">
            Crafted for slow mornings and meaningful conversations.
          </p>
        </FadeUp>

        <div className="mt-10 lg:mt-16">
          <AurraHero />
        </div>
      </Container>
    </section>
  );
}