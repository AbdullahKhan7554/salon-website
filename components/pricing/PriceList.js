import { container } from "@/components/home/constants";
import { PRICE_GROUPS } from "./data";

export default function PriceList() {
  return (
    <section
      aria-label="Price list"
      className={`${container} py-[clamp(48px,6vw,80px)] grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-x-16 gap-y-14`}
    >
      {PRICE_GROUPS.map((g) => (
        <div key={g.id}>
          <h2 id={`${g.id}-prices`} className="m-0 mb-2 font-serif font-normal text-[40px] leading-[1.1]">
            {g.title}
          </h2>
          <p className="m-0 mb-5 text-xs tracking-[0.2em] uppercase text-muted">{g.items.length} services</p>
          <ul aria-labelledby={`${g.id}-prices`} className="m-0 p-0 list-none">
            {g.items.map((item) => (
              <li key={item.name} className="flex items-baseline gap-2.5 py-3.5 border-b border-line">
                <span className="text-base">{item.name}</span>
                <span aria-hidden="true" className="flex-auto border-b border-dotted border-ink-muted -translate-y-1" />
                <span className="font-medium text-accent whitespace-nowrap">{item.price} AED</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
