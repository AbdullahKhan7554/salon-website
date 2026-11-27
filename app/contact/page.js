import Container from "@/components/Container";
import PageHero, { HERO_MEDIA } from "@/components/PageHero";
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
      <PageHero
        media={HERO_MEDIA.salon}
        crumb="Contact"
        title={
          <>
            Book your <em>appointment</em>
          </>
        }
        subtitle="Visit us in Al Lisaili or book a home visit anywhere in Dubai. We usually confirm on WhatsApp within minutes."
      />

      <Container as="section" className="py-section flex flex-wrap gap-[clamp(40px,6vw,96px)] items-start">
        <BookingForm />
        <SalonDetails />
      </Container>
    </>
  );
}
