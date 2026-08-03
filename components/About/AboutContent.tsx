import FadeUp from "../animations/FadeUp";
import Heading from "../ui/Heading";
import BodyText from "../ui/BodyText";

export default function AboutContent() {
  return (
    <div className="max-w-[620px]">
      {/* Label */}

      <FadeUp>
        <p className="text-sm uppercase tracking-[0.35em] text-[#4E315B]">
          ABOUT
        </p>
      </FadeUp>

      {/* Heading */}

      <div className="mt-8">
        <FadeUp delay={0.15}>
          <Heading>
            Understanding
            <br />
            comes before
            <br />
            every decision.
          </Heading>
        </FadeUp>
      </div>

      {/* Content */}

      <div className="mt-16 lg:mt-20">
        <FadeUp delay={0.3}>
          <h2 className="text-[30px] sm:text-[34px] font-medium leading-tight text-[#161616]">
            I&apos;m Sakshi.
          </h2>
        </FadeUp>

        <FadeUp delay={0.45}>
          <BodyText className="mt-8 max-w-md">
            I help ambitious brands uncover who they are before deciding how
            they look.
          </BodyText>
        </FadeUp>

        <FadeUp delay={0.6}>
          <BodyText className="mt-6 max-w-md">
            My process begins with listening, asking thoughtful questions, and
            building identities that feel intentional, memorable, and timeless.
          </BodyText>
        </FadeUp>
      </div>
    </div>
  );
}