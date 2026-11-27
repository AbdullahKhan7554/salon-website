import Container from "@/components/Container";
import { CHAPTERS } from "./data";

export default function Story() {
  return (
    <Container as="section" aria-label="Our story" className="py-section">
      {CHAPTERS.map((c) => (
        <div key={c.n} className="flex flex-wrap gap-y-4 gap-x-[clamp(32px,5vw,80px)] py-12 border-t border-line">
          <div className="flex-[1_1_260px] min-w-0">
            <span className="font-serif text-h3 text-accent">{c.n}</span>
            <h2 className="mt-1.5 mb-0 font-serif font-normal text-h2">
              {c.title}
            </h2>
          </div>
          <p className="m-0 flex-[2_1_480px] min-w-0 text-ink-body text-body">{c.text}</p>
        </div>
      ))}
    </Container>
  );
}
