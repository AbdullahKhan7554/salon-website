import PricingHero from "@/components/pricing/PricingHero";
import PriceList from "@/components/pricing/PriceList";
import HomeVisitBand from "@/components/pricing/HomeVisitBand";
import PricingNotes from "@/components/pricing/PricingNotes";

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PriceList />
      <HomeVisitBand />
      <PricingNotes />
    </>
  );
}
