import PageHero, { HERO_MEDIA } from "@/components/PageHero";

export default function PricingHero() {
  return (
    <PageHero
      media={HERO_MEDIA.salon}
      crumb="Pricing"
      title={
        <>
          Men&apos;s salon
          <br />
          <em>price list</em>
        </>
      }
      subtitle="Clear prices, no surprises. All prices in AED and include 5% UAE VAT."
    />
  );
}
