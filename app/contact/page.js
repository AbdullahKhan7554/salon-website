import Link from "next/link";
import { container } from "@/components/home/constants";
import BookingForm from "@/components/contact/BookingForm";
import SalonDetails from "@/components/contact/SalonDetails";

export default function ContactPage() {
  return (
    <>
      <section className={`${container} pt-[clamp(56px,7vw,96px)] pb-[clamp(48px,6vw,72px)]`}>
        <nav aria-label="Breadcrumb" className="text-[13px] text-muted mb-7">
          <Link href="/" className="text-muted hover:text-ink inline-flex items-center min-h-11">
            Home
          </Link>{" "}
          / <span className="text-ink" aria-current="page">Contact</span>
        </nav>
        <h1 className="m-0 font-serif font-normal text-[clamp(52px,7.4vw,108px)] leading-[0.95] tracking-[-0.02em]">
          Book your <em className="text-accent">appointment</em>
        </h1>
        <p className="mt-6 mb-0 text-muted text-lg max-w-[560px]">
          Visit us in Al Lisaili or book a home visit anywhere in Dubai. We usually confirm on WhatsApp within minutes.
        </p>
      </section>

      <section
        className={`${container} pb-[clamp(72px,9vw,120px)] flex flex-wrap gap-[clamp(40px,6vw,96px)] items-start`}
      >
        <BookingForm />
        <SalonDetails />
      </section>
    </>
  );
}
