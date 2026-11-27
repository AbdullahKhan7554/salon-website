"use client";

import PageHero, { HERO_MEDIA } from "@/components/PageHero";

const JUMP = [
  { id: "hair", label: "Hair" },
  { id: "beard", label: "Beard" },
  { id: "face", label: "Face & skin" },
];

const chip =
  "inline-flex items-center justify-center h-11 px-5 rounded-full box-border bg-[rgba(239,232,220,0.12)] border border-[rgba(239,232,220,0.28)] text-bone text-[13px] font-medium uppercase tracking-[0.14em] no-underline backdrop-blur-[6px] transition-[color,background-color,border-color,transform] duration-200 ease-[ease] hover:bg-[var(--bone)] hover:text-[var(--ink)] hover:border-[var(--bone)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

function jump(e, id) {
  const target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

export default function ServicesHero() {
  return (
    <PageHero
      media={HERO_MEDIA.cut}
      crumb="Services"
      title={
        <>
          Men&apos;s grooming services
          <br />
          in <span>Dubai</span>
        </>
      }
      subtitle="Hair, beard and facial care by an expert barber with 18+ years of experience. Every service is available in our salon or at your home."
      actions={
        <div className="flex flex-wrap gap-3 -my-1">
          {JUMP.map((j) => (
            <a key={j.id} href={`#${j.id}`} className={chip} onClick={(e) => jump(e, j.id)}>
              {j.label}
            </a>
          ))}
        </div>
      }
    />
  );
}
