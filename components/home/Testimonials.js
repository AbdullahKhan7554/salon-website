import Container from "@/components/Container";
import Button from "@/components/ui/Button";

const REVIEWS = {
  yaqoob: {
    name: "Yaqoob Al Suwadi",
    tag: "Client for 5+ years",
    text: "Hammad has been cutting my hair for over 5 years now. His attention to detail is unmatched. Every cut feels personal and perfect.",
  },
  muhammad: {
    name: "Muhammad Al Mehari",
    tag: "Salon client",
    text: "I have tried many salons in Dubai, but nothing compares to the service at Scissors VIP. Hammad really knows his craft — precise, professional, and genuinely kind.",
  },
  obaid: {
    name: "Obaid Khamis",
    tag: "Home service",
    text: "I booked their home service and was blown away. Same premium quality as the salon, but in the comfort of my living room. Game-changer.",
  },
  khalid: {
    name: "Khalid Ibn Saeed",
    tag: "Last-minute home visit",
    text: "Booked a last-minute home visit and was amazed by how smoothly everything went. On time, fully equipped, and left me looking sharp.",
  },
  mansoor: {
    name: "Mansoor Meshar",
    tag: "Salon client",
    text: "Finally, a men's salon in Dubai that understands premium service. The vibe, the professionalism, the results — 10/10.",
  },
};

const ROW_ONE = ["yaqoob", "muhammad", "obaid", "khalid", "mansoor"].map((k) => REVIEWS[k]);
const ROW_TWO = ["khalid", "mansoor", "yaqoob", "obaid", "muhammad"].map((k) => REVIEWS[k]);

// Keyframes live here so the marquee stays self-contained in this component.
const MARQUEE_CSS = `
@keyframes tm-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes tm-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
.tm-viewport {
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
}
.tm-track { display: flex; width: max-content; animation: var(--tm-anim); }
.tm-viewport:hover .tm-track,
.tm-viewport:focus-within .tm-track { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .tm-viewport {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    -webkit-mask-image: none;
    mask-image: none;
  }
  .tm-viewport::-webkit-scrollbar { display: none; }
  .tm-track { animation: none; transform: none; }
  .tm-card { scroll-snap-align: start; }
  .tm-copy { display: none; }
}
`;

const initials = (name) =>
  name
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w))
    .map((w) => w[0])
    .filter((_, i, a) => i === 0 || i === a.length - 1)
    .join("");

function Card({ r }) {
  return (
    <figure className="tm-card m-0 flex-none w-[82vw] lg:w-[440px] box-border flex flex-col gap-6 bg-[#1E1A17] border border-[#2B2622] rounded-[20px] p-8 transition-[border-color,transform] duration-200 hover:border-[var(--accent)] hover:-translate-y-1 motion-reduce:hover:translate-y-0">
      <span aria-hidden="true" className="block font-serif text-[64px] leading-[0.6] h-[38px] text-[var(--accent)]">
        &ldquo;
      </span>
      <blockquote className="m-0 flex-1 text-[18px] leading-[1.65] text-[var(--bone)] whitespace-normal line-clamp-6">
        {r.text}
      </blockquote>
      <figcaption className="flex items-center gap-4 pt-5 border-t border-[#2B2622]">
        <span
          aria-hidden="true"
          className="flex-none w-11 h-11 rounded-full bg-[var(--accent)] text-bone font-sans font-semibold text-[15px] inline-flex items-center justify-center"
        >
          {initials(r.name)}
        </span>
        <span className="flex flex-col min-w-0">
          <span className="text-[15px] font-semibold leading-snug text-bone">{r.name}</span>
          <span className="text-[13px] leading-snug text-[var(--ink-muted)]">{r.tag}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function Group({ items, copy = false }) {
  return (
    <div className={`flex gap-6 pr-6 ${copy ? "tm-copy" : ""}`} {...(copy ? { "aria-hidden": true } : {})}>
      {items.map((r) => (
        <Card key={r.name} r={r} />
      ))}
    </div>
  );
}

function Row({ items, anim, label }) {
  return (
    <div
      className="tm-viewport focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-soft"
      tabIndex={0}
      role="region"
      aria-label={label}
    >
      {/* vertical padding leaves room for the card hover lift */}
      <div className="tm-track py-1" style={{ "--tm-anim": anim }}>
        <Group items={items} />
        <Group items={items} copy />
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      aria-labelledby="words-title"
      className="bg-[var(--ink)] text-[var(--bone)] py-[clamp(80px,10vw,140px)] overflow-hidden"
    >
      <style>{MARQUEE_CSS}</style>
      <Container className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-end">
        <div className="min-w-0">
          <p className="m-0 mb-4 text-[12px] font-medium uppercase tracking-[0.2em] text-[var(--ink-muted)]">
            Client reviews
          </p>
          <h2 id="words-title" className="m-0 font-serif font-normal text-[clamp(36px,4vw,56px)] leading-[1.1]">
            Trusted by Dubai&apos;s gentlemen
          </h2>
        </div>
        <div className="flex flex-col items-start gap-5 lg:items-end lg:text-right">
          <p className="m-0 text-ink-text text-body max-w-[36ch]">Real words from clients in the salon and at home.</p>
          <Button href="/contact" variant="secondary" tone="dark">
            Book your visit
          </Button>
        </div>
      </Container>

      <div className="mt-14 flex flex-col gap-6">
        <Row items={ROW_ONE} anim="tm-left 50s linear infinite" label="Client reviews, row 1" />
        <Row items={ROW_TWO} anim="tm-right 60s linear infinite" label="Client reviews, row 2" />
      </div>
    </section>
  );
}
