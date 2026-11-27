import Link from "next/link";
import Container from "@/components/Container";

export default function PricingHero() {
  return (
    <Container as="section" className="pt-section">
      <nav aria-label="Breadcrumb" className="text-[13px] text-muted mb-7">
        <Link href="/" className="text-muted hover:text-ink inline-flex items-center min-h-11">
          Home
        </Link>{" "}
        / <span className="text-ink" aria-current="page">Pricing</span>
      </nav>
      <div className="flex flex-wrap justify-between items-end gap-7 pb-10 border-b border-ink">
        <h1 className="m-0 font-serif font-normal text-display tracking-[-0.02em]">
          Men&apos;s salon
          <br />
          <em className="text-accent">price list</em>
        </h1>
        <p className="m-0 text-muted max-w-[360px] text-body">
          Clear prices, no surprises. All prices in AED and include 5% UAE VAT.
        </p>
      </div>
    </Container>
  );
}
