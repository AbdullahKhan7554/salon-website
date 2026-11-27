import Link from "next/link";
import { container } from "@/components/home/constants";

const note = "m-0 pt-5 border-t border-line";
const lead = "text-ink font-semibold";

export default function PricingNotes() {
  return (
    <section
      aria-label="Pricing notes"
      className={`${container} py-[clamp(56px,7vw,88px)] grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-8 text-[15px] text-muted`}
    >
      <p className={note}>
        <strong className={lead}>VAT included.</strong> Every price includes 5% UAE VAT.
      </p>
      <p className={note}>
        <strong className={lead}>Custom requests.</strong> Prices may vary slightly with hair length, thickness or
        special requests.
      </p>
      <p className={note}>
        <strong className={lead}>Cancellations.</strong> Please give at least 12 hours&apos; notice.{" "}
        <Link href="/terms" className="text-accent hover:text-accent-hover inline-flex items-center min-h-11">
          Terms
        </Link>
      </p>
    </section>
  );
}
