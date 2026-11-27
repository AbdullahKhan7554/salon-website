import Image from "next/image";
import Link from "next/link";
import { eyebrow } from "./constants";
import Container from "@/components/Container";

export default function Story() {
  return (
    <section aria-labelledby="barber-title" className="bg-ink text-bone">
      <Container className="py-section flex flex-wrap gap-[clamp(32px,5vw,80px)] items-center">
        <div className="flex-[1_1_520px] min-w-0">
          <h2 id="barber-title" className={`${eyebrow} mb-8`}>
            Our story
          </h2>
          <p className="m-0 font-serif text-h2">
            It began with a pair of scissors and a dream.
          </p>
          <p className="mt-8 mb-0 text-ink-text text-body max-w-[560px]">
            Nearly two decades ago, Hammad, known to his clients as Ahmad, started shaping cuts and confidence. Clients
            kept coming back for the precision and the VIP treatment, and that loyalty became Scissors VIP Salon.
          </p>
          <Link
            href="/about"
            className="mt-8 text-bone border-b border-ink-border pt-3 pb-1 min-h-11 box-border inline-flex items-end"
          >
            Read our story →
          </Link>
        </div>
        <div className="flex-[1_1_340px] min-w-0 aspect-[3/4] bg-ink-raised overflow-hidden">
          <Image
            src="/hammad-founder-scissors-vip-salon.jpg"
            alt="Hammad, founder of Scissors VIP Salon"
            width={1024}
            height={1536}
            loading="lazy"
            sizes="(max-width: 940px) 100vw, 460px"
            className="w-full h-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
