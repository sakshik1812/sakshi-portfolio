import Container from "../ui/Container";
import Reveal from "../animations/Reveal";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center pt-24 md:pt-28 lg:pt-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Content */}

          <div className="order-1 max-w-[620px]">
            <HeroContent />
          </div>

          {/* Image */}

          <Reveal
            delay={0.4}
            className="order-2 flex justify-center lg:justify-end"
          >
            <HeroImage />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}