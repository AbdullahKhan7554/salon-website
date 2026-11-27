import { sectionTitle, eyebrow } from "./constants";
import Container from "@/components/Container";

const REVIEWS = [
  {
    name: "Yaqoob Al Suwadi",
    tag: "Client for 5+ years",
    text: "Hammad has been cutting my hair for over 5 years now. His attention to detail is unmatched. Every cut feels personal and perfect.",
  },
  {
    name: "Muhammad Al Mehari",
    tag: "Salon client",
    text: "I have tried many salons in Dubai, but nothing compares to the service at Scissors VIP. Hammad really knows his craft — precise, professional, and genuinely kind.",
  },
  {
    name: "Obaid Khamis",
    tag: "Home visit",
    text: "I booked their home service and was blown away. Same premium quality as the salon, but in the comfort of my living room. Game-changer.",
  },
  {
    name: "Khalid Ibn Saeed",
    tag: "Home visit",
    text: "Booked a last-minute home visit and was amazed by how smoothly everything went. On time, fully equipped, and left me looking sharp.",
  },
  {
    name: "Mansoor Meshar",
    tag: "Salon client",
    text: "Finally, a men's salon in Dubai that understands premium service. The vibe, the professionalism, the results — 10/10.",
  },
];

// Keyframes live here so the marquee stays self-contained in this component.
const MARQUEE_CSS = `
@keyframes reviews-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.reviews-track { animation: reviews-marquee 40s linear infinite; }
.reviews-viewport:hover .reviews-track,
.reviews-viewport:focus-within .reviews-track { animation-play-state: paused; }
.reviews-viewport {
  -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
}
@media (prefers-reduced-motion: reduce) {
  .reviews-track { animation: none; }
  .reviews-viewport {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-mask-image: none;
    mask-image: none;
  }
  .reviews-card { scroll-snap-align: start; }
  .reviews-copy { display: none; }
}
`;

function Card({ r }) {
  return (
    <figure className="reviews-card m-0 flex-none w-[85vw] lg:w-[420px] box-border flex flex-col bg-[#211D1A] border border-[#2B2622] rounded-[20px] p-8">
      <span aria-hidden="true" className="font-serif text-[64px] leading-[0.6] text-accent mb-4 h-8">
        &ldquo;
      </span>
      <blockquote className="m-0 text-[19px] leading-[1.6] text-bone flex-1 whitespace-normal">{r.text}</blockquote>
      <figcaption className="mt-6 flex flex-wrap gap-x-3 gap-y-1 items-baseline">
        <span className="text-[13px] uppercase tracking-[0.12em] font-medium text-bone">{r.name}</span>
        <span className="text-[13px] text-ink-muted">{r.tag}</span>
      </figcaption>
    </figure>
  );
}

function List({ copy = false }) {
  return (
    <div
      className={`flex gap-6 pr-6 ${copy ? "reviews-copy" : ""}`}
      {...(copy ? { "aria-hidden": true } : {})}
    >
      {REVIEWS.map((r) => (
        <Card key={r.name} r={r} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section aria-labelledby="words-title" className="bg-[var(--ink)] text-bone py-section overflow-hidden">
      <style>{MARQUEE_CSS}</style>
      <Container>
        <p className={`${eyebrow} mb-4`}>Client reviews</p>
        <h2 id="words-title" className={`${sectionTitle} mb-12`}>
          In their words
        </h2>
      </Container>
      <div
        className="reviews-viewport overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-soft"
        tabIndex={0}
        role="region"
        aria-label="Client reviews"
      >
        <div className="reviews-track flex w-max">
          <List />
          <List copy />
        </div>
      </div>
    </section>
  );
}
