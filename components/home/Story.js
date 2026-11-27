import Image from "next/image";
import Link from "next/link";
import { container, eyebrow } from "./constants";

export default function Story() {
  return (
    <section aria-labelledby="barber-title" className="bg-ink text-bone">
      <div className={`${container} py-[clamp(72px,9vw,128px)] flex flex-wrap gap-[clamp(32px,5vw,80px)] items-center`}>
        <div className="flex-[1_1_520px] min-w-0">
          <h2 id="barber-title" className={`${eyebrow} mb-8`}>
            Our story
          </h2>
          <p className="m-0 font-serif text-[clamp(34px,4.2vw,58px)] leading-[1.12]">
            It began with a pair of scissors and a dream.
          </p>
          <p className="mt-8 mb-0 text-ink-text text-[17px] max-w-[560px]">
            Nearly two decades ago, Hammad, known to his clients as Ahmad, started shaping cuts and confidence. Clients
            kept coming back for the precision and the VIP treatment, and that loyalty became Scissors VIP Salon.
          </p>
          <Link
            href="/about"
            className="mt-8 text-bone border-b border-[#6B6258] pt-3 pb-1 min-h-11 box-border inline-flex items-end"
          >
            Read our story →
          </Link>
        </div>
        <div className="flex-[1_1_340px] min-w-0 aspect-[3/4] bg-[#241F1B] overflow-hidden">
          <Image
            src="/Non.jpg"
            alt="Hammad, founder of Scissors VIP Salon"
            width={1024}
            height={1536}
            loading="lazy"
            sizes="(max-width: 940px) 100vw, 460px"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
