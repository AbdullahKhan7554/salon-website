import ServicesHero from "@/components/services/ServicesHero";
import ServiceGroups from "@/components/services/ServiceGroups";
import ServicesCta from "@/components/services/ServicesCta";
import JsonLd, { breadcrumbLd, pageMetadata } from "@/components/JsonLd";

export const metadata = pageMetadata({
  path: "/services",
  title: "Men's Grooming Services in Dubai | Scissors VIP Salon",
  description: "Haircuts, kids cuts, beard styling, colouring, facials and nose wax by a barber with 18+ years of experience. In salon or at home across Dubai.",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Services", "/services")} />
      <ServicesHero />
      <ServiceGroups />
      <ServicesCta />
    </>
  );
}
