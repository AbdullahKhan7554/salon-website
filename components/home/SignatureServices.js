import Link from "next/link";
import { container, sectionTitle } from "./constants";

const MENU = [
  { name: "Hair Cut", desc: "Classic, fade or modern styles.", price: "80" },
  { name: "Beard Styling with Scissors", desc: "Detailed beard sculpting.", price: "130" },
  { name: "Shaving", desc: "A smooth, clean shave.", price: "60" },
  { name: "Hair Colouring", desc: "Customised colour for a fresh look.", price: "100" },
  { name: "Facial", desc: "Deep cleansing and hydration.", price: "140" },
  { name: "Kids Hair Cut", desc: "Gentle, stylish cuts for kids.", price: "80" },
];

export default function SignatureServices() {
  return (
    <section aria-labelledby="menu-title" className="border-t border-line">
      <div className={`${container} py-[clamp(64px,8vw,112px)] flex flex-wrap gap-[clamp(32px,5vw,80px)]`}>
        <div className="flex-[1_1_280px] min-w-0">
          <h2 id="menu-title" className={sectionTitle}>
            Signature services
          </h2>
          <p className="mt-5 mb-7 text-muted max-w-[300px]">Hair, beard and facial care. Prices include 5% VAT.</p>
          <Link
            href="/pricing"
            className="text-accent hover:text-accent-hover text-[15px] border-b border-accent pt-3 pb-1 min-h-11 box-border inline-flex items-end"
          >
            See the full price list →
          </Link>
        </div>
        <div className="flex-[3_1_560px] min-w-0">
          {MENU.map((s) => (
            <div key={s.name} className="py-6 border-b border-line flex flex-wrap gap-x-6 gap-y-1.5 items-baseline">
              <h3 className="m-0 flex-[1_1_240px] font-serif font-normal text-[30px] leading-[1.15]">{s.name}</h3>
              <p className="m-0 flex-[2_1_260px] text-muted text-[15px]">{s.desc}</p>
              <span className="flex-none text-accent font-medium text-[15px]">AED {s.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
