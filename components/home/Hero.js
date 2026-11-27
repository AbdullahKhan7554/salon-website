import Link from "next/link";
import PageHero, { HERO_MEDIA } from "@/components/PageHero";
import { BOOK_URL } from "./constants";

export default function Hero() {
  return (
    <PageHero
      media={HERO_MEDIA.cut}
      size="home"
      label={<>Premium men&apos;s salon &amp; home grooming in Dubai</>}
      labelAs="h1"
      titleAs="p"
      title={
        <>
          The gentleman&apos;s cut, <em>perfected</em> in Dubai.
        </>
      }
      actions={
        <>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-hover text-bone px-[30px] py-[18px] min-h-14 box-border inline-flex items-center gap-3 text-[15px] font-medium"
          >
            Book on WhatsApp <span aria-hidden="true">→</span>
          </a>
          <Link
            href="/pricing"
            className="text-bone text-[15px] border-b border-bone/60 hover:border-bone pt-3 pb-1 min-h-11 box-border inline-flex items-end"
          >
            Haircut from AED 80
          </Link>
        </>
      }
    />
  );
}
