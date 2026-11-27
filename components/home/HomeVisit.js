import Image from "next/image";
import { sectionTitle } from "./constants";
import Container from "@/components/Container";

const STEPS = [
  { n: "I", title: "Message us on WhatsApp", desc: "Service, location and a time that suits you." },
  { n: "II", title: "Get a quick confirmation", desc: "Last-minute bookings welcome." },
  { n: "III", title: "We arrive fully equipped", desc: "Sanitised professional tools, clean setup." },
];

export default function HomeVisit() {
  return (
    <Container as="section" aria-labelledby="home-title" className="pb-section flex flex-wrap gap-[clamp(32px,5vw,80px)] items-center">
      <div className="flex-[1_1_420px] min-w-0 aspect-[5/4] bg-placeholder overflow-hidden">
        <Image
          src="/services/beard-shave-trim.jpg"
          alt="Barber giving a shave during a home grooming visit in Dubai"
          width={736}
          height={920}
          loading="lazy"
          sizes="(max-width: 940px) 100vw, 580px"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-[1_1_440px] min-w-0">
        <h2 id="home-title" className={sectionTitle}>
          The salon,
          <br />
          <span className="text-accent">at your door.</span>
        </h2>
        <p className="mt-6 mb-9 text-muted text-body max-w-[460px]">
          Home grooming across most areas of Dubai. Same tools, same standard, every tool sanitised for every visit.
        </p>
        <ol className="m-0 p-0 list-none border-t border-line">
          {STEPS.map((st) => (
            <li key={st.n} className="flex gap-6 py-5 border-b border-line">
              <span className="font-heading text-h3 text-accent flex-[0_0_40px]">{st.n}</span>
              <div>
                <h3 className="m-0 mb-0.5 font-sans text-base font-semibold">{st.title}</h3>
                <p className="m-0 text-muted text-[15px]">{st.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Container>
  );
}
