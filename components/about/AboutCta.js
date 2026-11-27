import Link from "next/link";
import { container } from "@/components/home/constants";

export default function AboutCta() {
  return (
    <section
      className={`${container} py-[clamp(72px,9vw,120px)] flex flex-wrap gap-7 justify-between items-center`}
    >
      <p className="m-0 font-serif text-[clamp(32px,3.8vw,52px)] leading-[1.1] max-w-[720px]">
        Be part of the story. Book your first <em className="text-accent">VIP</em> cut.
      </p>
      <div className="flex flex-wrap gap-x-8 gap-y-5 items-center">
        <Link
          href="/services"
          className="text-accent hover:text-accent-hover text-[15px] border-b border-accent pt-3 pb-1 min-h-11 box-border inline-flex items-end"
        >
          Our services →
        </Link>
        <Link
          href="/contact"
          className="bg-accent hover:bg-accent-hover text-bone px-[30px] py-[18px] min-h-14 box-border inline-flex items-center text-[15px]"
        >
          Book now
        </Link>
      </div>
    </section>
  );
}
