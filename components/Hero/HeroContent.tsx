import AnimatedWord from "./AnimatedWord";
import FadeUp from "../animations/FadeUp";
import Heading from "../ui/Heading";
import BodyText from "../ui/BodyText";

export default function HeroContent() {
  return (
    <div>
      <FadeUp>
        <Heading
          className="
            text-[52px]
            leading-[0.92]

            sm:text-[64px]

            lg:text-[96px]

            xl:text-[112px]
          "
        >
          Every memorable
          <br />
          brand begins with
          <br />
          <AnimatedWord />
        </Heading>
      </FadeUp>

      <FadeUp delay={0.2}>
        <BodyText
          className="
            mt-8
            max-w-[320px]
            text-lg

            sm:max-w-[420px]
            sm:text-xl

            lg:mt-10
            lg:max-w-[520px]
            lg:text-2xl
          "
        >
          Helping ambitious brands uncover their identity and transform it into
          thoughtful digital experiences.
        </BodyText>
      </FadeUp>
    </div>
  );
}