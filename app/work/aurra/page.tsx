import AurraHero from "@/components/Aurra/AurraHero";
import Challenge from "@/components/Aurra/Challenge";
import Insight from "@/components/Aurra/Insight";
import VisualIdentity from "@/components/Aurra/VisualIdentity";
import LogoSection from "@/components/Aurra/LogoSection";
import PackagingSection from "@/components/Aurra/PackagingSection";
import CoffeeExperience from "@/components/Aurra/CoffeeExperience";
import WebsiteSection from "@/components/Aurra/WebsiteSection";
import StorefrontSection from "@/components/Aurra/StorefrontSection";
import Reflection from "@/components/Aurra/Reflection";
import EndCTA from "@/components/Aurra/EndCTA";

export default function AurraCaseStudy() {
  return (
    <main className="bg-[#F7F2EA]">
      <AurraHero />
      <Challenge />
      <Insight />
      <VisualIdentity />
      <LogoSection />
      <PackagingSection />
      <CoffeeExperience />
      <WebsiteSection />
      <StorefrontSection />
      <Reflection />
      <EndCTA />
    </main>
  );
}