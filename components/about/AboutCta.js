import Link from "next/link";
import Container from "@/components/Container";

export default function AboutCta() {
  return (
    <Container as="section" className="py-section flex flex-wrap gap-7 justify-between items-center">
      <p className="m-0 font-serif text-h2 max-w-[720px]">
        Be part of the story. Book your first <em className="text-accent">VIP</em> cut.
      </p>
      <div className="flex flex-wrap gap-x-8 gap-y-5 items-center">
        <Link
          href="/services"
          className="text-accent hover:text-accent-hover text-[15px] border-b border-accent pt-3 pb-1 min-h-11 box-border inline-flex items-end"
        >
          Our services →
        </Link>
        <Link
          href="/contact"
          className="bg-accent hover:bg-accent-hover text-bone px-[30px] py-[18px] min-h-14 box-border inline-flex items-center text-[15px]"
        >
          Book now
        </Link>
      </div>
    </Container>
  );
}
