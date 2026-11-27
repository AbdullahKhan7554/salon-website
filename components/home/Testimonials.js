import { sectionTitle } from "./constants";
import Container from "@/components/Container";

const FEATURED = {
  name: "Yaqoob Al Suwadi",
  text: "Hammad has been cutting my hair for over 5 years now. His attention to detail is unmatched. Every cut feels personal and perfect.",
};

const REVIEWS = [
  {
    name: "Muhammad Al Mehari",
    text: "I have tried many salons in Dubai, but nothing compares to the service at Scissors VIP. Hammad really knows his craft — precise, professional, and genuinely kind.",
  },
  {
    name: "Obaid Khamis",
    text: "I booked their home service and was blown away. Same premium quality as the salon, but in the comfort of my living room. Game-changer.",
  },
  {
    name: "Khalid Ibn Saeed",
    text: "Booked a last-minute home visit and was amazed by how smoothly everything went. On time, fully equipped, and left me looking sharp.",
  },
  {
    name: "Mansoor Meshar",
    text: "Finally, a men's salon in Dubai that understands premium service. The vibe, the professionalism, the results — 10/10.",
  },
];

export default function Testimonials() {
  return (
    <Container as="section" aria-labelledby="words-title" className="py-section">
      <h2 id="words-title" className={`${sectionTitle} mb-12`}>
        In their words
      </h2>
      <figure className="m-0 mb-14 pb-14 border-b border-line">
        <blockquote className="m-0 font-serif text-h2 max-w-[1000px]">
          &ldquo;{FEATURED.text}&rdquo;
        </blockquote>
        <figcaption className="text-label mt-5 text-muted">
          {FEATURED.name} · Client for 5+ years
        </figcaption>
      </figure>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="m-0">
            <blockquote className="m-0 text-base text-ink-body">&ldquo;{r.text}&rdquo;</blockquote>
            <figcaption className="text-label mt-4 text-muted">{r.name}</figcaption>
          </figure>
        ))}
      </div>
    </Container>
  );
}
