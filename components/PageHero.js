import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

export const HERO_MEDIA = {
  // Close-up scissor work and a fade, ending on the logo card.
  cut: { video: "/IMG_0702.MP4", poster: "/hero/barber-at-work-poster.jpg" },
  // Salon interior walk-through.
  salon: { video: "/IMG_0703.MP4", poster: "/hero/hammad-portrait-poster.jpg" },
};

/**
 * Full-bleed hero with a muted looping background video.
 * The poster is rendered with next/image (priority) underneath the video instead of
 * the <video poster> attribute, so the LCP element is the optimised image (a poster
 * attribute makes the video itself the LCP candidate) and the video never shifts layout.
 */
export default function PageHero({
  media,
  size = "page",
  crumb,
  label,
  labelAs: LabelTag = "p",
  title,
  titleAs: TitleTag = "h1",
  subtitle,
  actions,
}) {
  const minHeight = size === "home" ? "min-h-[min(92vh,900px)]" : "min-h-[min(64vh,640px)]";

  return (
    <section className={`relative isolate overflow-hidden bg-ink text-bone flex items-end ${minHeight}`}>
      <Image src={media.poster} alt="" fill priority sizes="100vw" className="object-cover -z-30" />
      <video
        className="absolute inset-0 w-full h-full object-cover -z-20 motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={media.video} type="video/mp4" />
      </video>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/62" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[80%] -z-10 bg-linear-to-t from-ink/85 to-transparent" />

      <Container className="py-section">
        {crumb && (
          <nav aria-label="Breadcrumb" className="text-[13px] text-bone mb-6">
            <Link href="/" className="text-bone underline-offset-4 hover:underline inline-flex items-center min-h-11">
              Home
            </Link>{" "}
            <span aria-hidden="true">/</span> <span aria-current="page">{crumb}</span>
          </nav>
        )}
        {label && <LabelTag className="text-label m-0 mb-6 font-medium text-bone">{label}</LabelTag>}
        <TitleTag className="m-0 font-heading font-normal text-display tracking-[-0.02em] text-bone">{title}</TitleTag>
        {subtitle && <p className="mt-6 mb-0 text-body text-bone max-w-[52ch]">{subtitle}</p>}
        {actions && <div className="mt-9 flex flex-wrap gap-x-9 gap-y-4 items-center">{actions}</div>}
      </Container>
    </section>
  );
}
