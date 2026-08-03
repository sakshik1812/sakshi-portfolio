import ShowcaseSection from "./ShowcaseSection";

export default function PackagingSection() {
  return (
    <>
      {/* Section Introduction */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-8 lg:px-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#A67C52]">
            Packaging
          </p>

          <h2 className="mt-6 text-6xl font-medium leading-tight text-[#2D211B]">
            Designed as a collection.
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#5A3E2B]">
            Rather than creating individual products, the goal was to design a
            cohesive packaging system where every blend feels unique while still
            belonging to one premium coffee brand.
          </p>
        </div>
      </section>

      <ShowcaseSection
        title="Morning Bloom"
        description="A bright and welcoming blend created to bring warmth and optimism to the beginning of every day."
        image="/images/aurra/bags-morning-bloom.png"
        alt="Morning Bloom Coffee Bag"
      />

      <ShowcaseSection
        title="House Blend"
        description="Balanced and familiar, crafted to become the coffee people reach for every single morning."
        image="/images/aurra/bags-house-blend.png"
        alt="House Blend Coffee Bag"
      />

      <ShowcaseSection
        title="Golden Harvest"
        description="Rich notes inspired by slow afternoons, bringing comfort and depth to every cup."
        image="/images/aurra/bags-golden-harvest.png"
        alt="Golden Harvest Coffee Bag"
      />

      <ShowcaseSection
        title="Midnight Roast"
        description="Bold, refined and deeply roasted for moments of quiet reflection after sunset."
        image="/images/aurra/bags-midnight-roast.png"
        alt="Midnight Roast Coffee Bag"
      />
    </>
  );
}