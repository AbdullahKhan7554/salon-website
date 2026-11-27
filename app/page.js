import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import SignatureServices from "@/components/home/SignatureServices";
import HomeVisit from "@/components/home/HomeVisit";
import Story from "@/components/home/Story";
import Testimonials from "@/components/home/Testimonials";
import JsonLd, { SITE_URL, pageMetadata } from "@/components/JsonLd";

export const metadata = pageMetadata({
  path: "/",
  title: "Men's Salon in Dubai & Home Barber | Scissors VIP Salon",
  description: "Premium men's haircuts, beard styling and facials in Al Lisaili, Dubai, or at your home. Haircut from AED 80. Open daily, book on WhatsApp today.",
});

const HOME_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HairSalon",
      "@id": `${SITE_URL}/#salon`,
      name: "Scissors VIP Salon",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/home/scissors-vip-salon-dubai.jpg`,
      logo: `${SITE_URL}/logo.jpg.svg`,
      telephone: "+971501374524",
      email: "scissorsvipsalon@gmail.com",
      priceRange: "AED 60 - AED 140",
      currenciesAccepted: "AED",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rashid Building, Saih Al Salam Street",
        addressLocality: "Al Lisaili, Dubai",
        addressCountry: "AE",
      },
      geo: { "@type": "GeoCoordinates", latitude: 24.9359022, longitude: 55.4767034 },
      areaServed: { "@type": "City", name: "Dubai" },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "10:00",
          closes: "22:00",
        },
      ],
      founder: { "@type": "Person", name: "Hammad Ahmad" },
      sameAs: ["https://www.instagram.com/scissorsvipsaloon"],
    },
    {
      "@type": "WebSite",
      name: "Scissors VIP Salon",
      url: `${SITE_URL}/`,
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={HOME_LD} />
      <Hero />
      <Intro />
      <SignatureServices />
      <HomeVisit />
      <Story />
      <Testimonials />
    </>
  );
}
