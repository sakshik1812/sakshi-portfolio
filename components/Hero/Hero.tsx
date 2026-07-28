import Container from "../ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="min-h-screen">
      <Container>
        <div className="flex min-h-screen items-center justify-between">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}