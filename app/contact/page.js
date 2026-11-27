import Link from "next/link";
import Container from "@/components/Container";
import BookingForm from "@/components/contact/BookingForm";
import SalonDetails from "@/components/contact/SalonDetails";
import JsonLd, { breadcrumbLd, pageMetadata } from "@/components/JsonLd";

export const metadata = pageMetadata({
  path: "/contact",
  title: "Book a Men's Haircut in Al Lisaili, Dubai | Scissors VIP",
  description: "Visit us at Rashid Building, Saih Al Salam Street, Al Lisaili, or book a home visit. Open daily 10 am to 10 pm. Call or WhatsApp +971 50 137 4524.",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Contact", "/contact")} />
      <Container as="section" className="pt-section pb-section">
        <nav aria-label="Breadcrumb" className="text-[13px] text-muted mb-7">
          <Link href="/" className="text-muted hover:text-ink inline-flex items-center min-h-11">
            Home
          </Link>{" "}
          / <span className="text-ink" aria-current="page">Contact</span>
        </nav>
        <h1 className="m-0 font-serif font-normal text-display tracking-[-0.02em]">
          Book your <em className="text-accent">appointment</em>
        </h1>
        <p className="mt-6 mb-0 text-muted text-body max-w-[560px]">
          Visit us in Al Lisaili or book a home visit anywhere in Dubai. We usually confirm on WhatsApp within minutes.
        </p>
      </Container>

      <Container as="section" className="pb-section flex flex-wrap gap-[clamp(40px,6vw,96px)] items-start">
        <BookingForm />
        <SalonDetails />
      </Container>
    </>
  );
}
