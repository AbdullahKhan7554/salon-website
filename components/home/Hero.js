import Image from "next/image";
import Link from "next/link";
import { BOOK_URL, container, eyebrow } from "./constants";

export default function Hero() {
  return (
    <section className="bg-ink text-bone">
      <div
        className={`${container} pt-[clamp(48px,7vw,96px)] pb-[clamp(56px,8vw,112px)] flex flex-wrap gap-[clamp(32px,5vw,72px)] items-end`}
      >
        <div className="flex-[1_1_520px] min-w-0">
          <h1 className={`${eyebrow} mb-7`}>Premium men&apos;s salon &amp; home grooming in Dubai</h1>
          <p className="m-0 font-serif text-[clamp(52px,8.4vw,124px)] leading-[0.95] tracking-[-0.02em]">
            The gentleman&apos;s cut, <em className="text-[#D9B9A8]">perfected</em> in Dubai.
          </p>
          <div className="mt-11 flex flex-wrap gap-x-9 gap-y-5 items-center">
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
              className="text-bone text-[15px] border-b border-[#6B6258] pt-3 pb-1 min-h-11 box-border inline-flex items-end"
            >
              Haircut from AED 80
            </Link>
          </div>
        </div>
        <figure className="flex-[1_1_380px] min-w-0 m-0 flex flex-col gap-3.5">
          <div className="aspect-[4/5] bg-[#241F1B] overflow-hidden">
            <Image
              src="/home/scissors-vip-salon-dubai.jpg"
              alt="Men's haircut at Scissors VIP Salon, Dubai"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 940px) 100vw, 520px"
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="text-[13px] text-ink-muted flex justify-between gap-3">
            <span>Hammad &quot;Ahmad&quot;, founder</span>
            <span>18+ years of craft</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
