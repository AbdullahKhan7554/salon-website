import Link from "next/link";
import Container from "@/components/Container";
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
    <Container className="pt-section pb-section flex flex-wrap gap-[clamp(40px,6vw,96px)]">
      <JsonLd data={FAQ_LD} />
      <JsonLd data={breadcrumbLd("FAQ", "/faq")} />
      <div className="flex-[1_1_320px] min-w-0">
        <nav aria-label="Breadcrumb" className="text-[13px] text-muted mb-7">
          <Link href="/" className="text-muted hover:text-ink inline-flex items-center min-h-11">
            Home
          </Link>{" "}
          / <span className="text-ink" aria-current="page">FAQ</span>
        </nav>
        <h1 className="m-0 font-serif font-normal text-display tracking-[-0.02em]">
          Questions, <em className="text-accent">answered.</em>
        </h1>
        <p className="mt-6 mb-8 text-muted text-body max-w-[340px]">
          Everything about our salon, home visits and booking. Still unsure? Message us.
        </p>
        <a
          href={ASK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent hover:bg-accent-hover text-bone px-[26px] py-4 min-h-[52px] box-border inline-flex items-center gap-2.5 text-[15px]"
        >
          Ask on WhatsApp <span aria-hidden="true">→</span>
        </a>
      </div>
      <FaqList />
    </Container>
  );
}
