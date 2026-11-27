import Image from "next/image";
import Link from "next/link";
import { container } from "@/components/home/constants";

export default function AboutHero() {
  return (
    <section className="bg-ink text-bone">
      <div
        className={`${container} pt-[clamp(56px,7vw,96px)] pb-[clamp(64px,8vw,112px)] flex flex-wrap gap-[clamp(32px,5vw,72px)] items-end`}
      >
        <div className="flex-[1_1_520px] min-w-0">
          <nav aria-label="Breadcrumb" className="text-[13px] text-ink-muted mb-7">
            <Link href="/" className="text-ink-muted hover:text-bone inline-flex items-center min-h-11">
              Home
            </Link>{" "}
            / <span className="text-bone" aria-current="page">About</span>
          </nav>
          <h1 className="m-0 font-serif font-normal text-[clamp(52px,7.4vw,108px)] leading-[0.95] tracking-[-0.02em]">
            A pair of scissors
            <br />
            and a <em className="text-[#D9B9A8]">dream.</em>
          </h1>
          <p className="mt-7 mb-0 text-ink-text text-lg max-w-[540px]">
            The story of Hammad &quot;Ahmad&quot; and Scissors VIP Salon, Dubai.
          </p>
        </div>
        <div className="flex-[1_1_380px] min-w-0 aspect-[4/5] bg-[#241F1B] overflow-hidden">
          <Image
            src="/hammad-founder-scissors-vip-salon.jpg"
            alt="Hammad, founder of Scissors VIP Salon, at work"
            width={1024}
            height={1536}
            priority
            sizes="(max-width: 940px) 100vw, 520px"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
