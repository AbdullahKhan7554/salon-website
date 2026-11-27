import AboutHero from "@/components/about/AboutHero";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import AboutCta from "@/components/about/AboutCta";
import JsonLd, { breadcrumbLd, pageMetadata } from "@/components/JsonLd";

export const metadata = pageMetadata({
  path: "/about",
  title: "About Scissors VIP Salon | Barber Hammad, 18+ Years in Dubai",
  description: "Meet Hammad \"Ahmad\", the barber behind Scissors VIP Salon. Nearly two decades of precise men's grooming and VIP service in Dubai, in salon or at home.",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("About", "/about")} />
      <AboutHero />
      <Story />
      <Values />
      <AboutCta />
    </>
  );
}
