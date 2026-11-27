import Container from "@/components/Container";
import PageHero, { HERO_MEDIA } from "@/components/PageHero";
import FaqList, { FAQS } from "@/components/faq/FaqList";
import JsonLd, { breadcrumbLd, pageMetadata } from "@/components/JsonLd";

export const metadata = pageMetadata({
  path: "/faq",
  title: "Men's Salon & Home Barber FAQ | Scissors VIP Salon Dubai",
  description: "Home service areas, hygiene, booking, walk-ins, haircut time and packages. Answers to the most common questions about Scissors VIP Salon Dubai.",
});

const ASK_URL = "https://wa.me/971501374524?text=Hi%2C%20I%20have%20a%20question.";

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={FAQ_LD} />
      <JsonLd data={breadcrumbLd("FAQ", "/faq")} />
      <PageHero
        media={HERO_MEDIA.salon}
        crumb="FAQ"
        title={
          <>
            Questions, <em>answered.</em>
          </>
        }
        subtitle="Everything about our salon, home visits and booking. Still unsure? Message us."
        actions={
          <a
            href={ASK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-hover text-bone px-[26px] py-4 min-h-[52px] box-border inline-flex items-center gap-2.5 text-[15px]"
          >
            Ask on WhatsApp <span aria-hidden="true">→</span>
          </a>
        }
      />
      <Container as="section" aria-label="Frequently asked questions" className="py-section">
        <FaqList />
      </Container>
    </>
  );
}
