import Link from "next/link";
import Container from "@/components/Container";

export default function ServicesCta() {
  return (
    <Container as="section" className="py-section">
      <div className="flex flex-wrap justify-between items-center gap-7 py-12 border-y border-line">
        <p className="m-0 font-serif text-h2 max-w-[640px]">
          Prefer it at home? Every service is available as a <em className="text-accent">home visit</em> across Dubai.
        </p>
        <Link
          href="/pricing"
          className="text-accent hover:text-accent-hover text-[15px] border-b border-accent pt-3 pb-1 min-h-11 box-border inline-flex items-end"
        >
          View full price list →
        </Link>
      </div>
    </Container>
  );
}
