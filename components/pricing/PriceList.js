import Container from "@/components/Container";
import { PRICE_GROUPS } from "./data";

export default function PriceList() {
  return (
    <Container as="section" aria-label="Price list" className="py-section grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-x-16 gap-y-14">
      {PRICE_GROUPS.map((g) => (
        <div key={g.id}>
          <h2 id={`${g.id}-prices`} className="m-0 mb-2 font-serif font-normal text-h2">
            {g.title}
          </h2>
          <p className="text-label m-0 mb-5 text-muted">{g.items.length} services</p>
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
    </Container>
  );
}
