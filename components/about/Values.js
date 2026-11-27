import Container from "@/components/Container";
import { VALUES } from "./data";

export default function Values() {
  return (
    <section aria-labelledby="values-title" className="bg-ink text-bone">
      <Container className="py-section">
        <h2 id="values-title" className="m-0 mb-14 font-serif font-normal text-h2">
          What we stand for
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10">
          {VALUES.map((v) => (
            <div key={v.title} className="pt-5 border-t border-ink-rule">
              <h3 className="m-0 mb-2 font-serif font-normal text-h3">{v.title}</h3>
              <p className="m-0 text-ink-text text-[15px]">{v.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
