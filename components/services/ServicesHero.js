import Link from "next/link";
import Container from "@/components/Container";

const JUMP = [
  { href: "#hair", label: "Hair" },
  { href: "#beard", label: "Beard" },
  { href: "#face", label: "Face & skin" },
];

const lightLink = "text-bone border-b border-ink-border pt-3 pb-1 min-h-11 box-border inline-flex items-end";

export default function ServicesHero() {
  return (
    <section className="bg-ink text-bone">
      <Container className="py-section">
        <nav aria-label="Breadcrumb" className="text-[13px] text-ink-muted mb-7">
          <Link href="/" className="text-ink-muted hover:text-bone inline-flex items-center min-h-11">
            Home
          </Link>{" "}
          / <span className="text-bone" aria-current="page">Services</span>
        </nav>
        <h1 className="m-0 font-serif font-normal text-display tracking-[-0.02em]">
          Men&apos;s grooming services
          <br />
          in <em className="text-accent-soft">Dubai</em>
        </h1>
        <p className="mt-7 mb-0 text-ink-text text-body max-w-[600px]">
          Hair, beard and facial care by an expert barber with 18+ years of experience. Every service is available in
          our salon or at your home.
        </p>
        <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm tracking-[0.12em] uppercase">
          {JUMP.map((j) => (
            <a key={j.href} href={j.href} className={lightLink}>
              {j.label}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
