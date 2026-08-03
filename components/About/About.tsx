import Container from "../ui/Container";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import Reveal from "../animations/Reveal";
import Section from "../ui/Section";

export default function About() {
  return (
    <Section
  id="about"
  className="bg-[#F8F5F1]"
>
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">

          {/* Content */}

          <div className="order-1">
            <AboutContent />
          </div>

          {/* Image */}

          <Reveal
            delay={0.4}
            className="order-2 flex justify-center lg:justify-end lg:pt-24"
          >
            <AboutImage />
          </Reveal>

        </div>
      </Container>
    </Section>
  );
}