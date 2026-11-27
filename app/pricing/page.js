import PricingHero from "@/components/pricing/PricingHero";
import PriceList from "@/components/pricing/PriceList";
import HomeVisitBand from "@/components/pricing/HomeVisitBand";
import PricingNotes from "@/components/pricing/PricingNotes";
import JsonLd, { SITE_URL, breadcrumbLd, pageMetadata } from "@/components/JsonLd";
import { PRICE_GROUPS } from "@/components/pricing/data";

export const metadata = pageMetadata({
  path: "/pricing",
  title: "Men's Salon Prices in Dubai | Haircut AED 80 | Scissors VIP",
  description: "Full price list: haircut AED 80, shave AED 60, beard styling AED 130, facial AED 140. All prices include 5% VAT. Salon or home visit in Dubai.",
});

const OFFER_CATALOG_LD = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": `${SITE_URL}/#salon`,
  name: "Scissors VIP Salon",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Men's salon price list",
    itemListElement: PRICE_GROUPS.flatMap((g) =>
      g.items.map((i) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: i.name },
        price: i.price,
        priceCurrency: "AED",
      }))
    ),
  },
};

export default function PricingPage() {
  return (
    <>
      <JsonLd data={OFFER_CATALOG_LD} />
      <JsonLd data={breadcrumbLd("Pricing", "/pricing")} />
      <PricingHero />
      <PriceList />
      <HomeVisitBand />
      <PricingNotes />
    </>
  );
}
