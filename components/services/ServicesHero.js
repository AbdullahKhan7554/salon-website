import Link from "next/link";
import { container } from "@/components/home/constants";

const JUMP = [
  { href: "#hair", label: "Hair" },
  { href: "#beard", label: "Beard" },
  { href: "#face", label: "Face & skin" },
];

const lightLink = "text-bone border-b border-[#6B6258] pt-3 pb-1 min-h-11 box-border inline-flex items-end";

export default function ServicesHero() {
  return (
    <section className="bg-ink text-bone">
      <div className={`${container} py-[clamp(56px,7vw,96px)]`}>
        <nav aria-label="Breadcrumb" className="text-[13px] text-ink-muted mb-7">
          <Link href="/" className="text-ink-muted hover:text-bone inline-flex items-center min-h-11">
            Home
          </Link>{" "}
          / <span className="text-bone" aria-current="page">Services</span>
        </nav>
        <h1 className="m-0 font-serif font-normal text-[clamp(52px,7.4vw,108px)] leading-[0.95] tracking-[-0.02em]">
          Men&apos;s grooming services
          <br />
          in <em className="text-[#D9B9A8]">Dubai</em>
        </h1>
        <p className="mt-7 mb-0 text-ink-text text-lg max-w-[600px]">
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
      </div>
    </section>
  );
}
