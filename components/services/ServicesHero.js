import PageHero, { HERO_MEDIA } from "@/components/PageHero";

const JUMP = [
  { href: "#hair", label: "Hair" },
  { href: "#beard", label: "Beard" },
  { href: "#face", label: "Face & skin" },
];

const lightLink =
  "text-bone text-sm tracking-[0.12em] uppercase border-b border-bone/60 hover:border-bone pt-3 pb-1 min-h-11 box-border inline-flex items-end";

export default function ServicesHero() {
  return (
    <PageHero
      media={HERO_MEDIA.cut}
      crumb="Services"
      title={
        <>
          Men&apos;s grooming services
          <br />
          in <em>Dubai</em>
        </>
      }
      subtitle="Hair, beard and facial care by an expert barber with 18+ years of experience. Every service is available in our salon or at your home."
      actions={JUMP.map((j) => (
        <a key={j.href} href={j.href} className={lightLink}>
          {j.label}
        </a>
      ))}
    />
  );
}
