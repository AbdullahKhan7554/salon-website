export const FAQS = [
  {
    q: "What services do you offer?",
    a: "Men's haircuts, beard grooming, facials, hair colouring and home grooming services across Dubai. See the full list on our Services page.",
  },
  {
    q: "Do you offer home service?",
    a: "Yes. Book an appointment and the barber comes to your doorstep with professional tools.",
  },
  {
    q: "Which areas do you cover for home service?",
    a: "Most areas within Dubai. Message us your location to confirm.",
  },
  {
    q: "Is home service safe and hygienic?",
    a: "Yes. We follow strict hygiene protocols, and every tool is sanitised before each visit.",
  },
  {
    q: "How can I book an appointment?",
    a: "Through WhatsApp, a phone call, our social media pages or this website.",
  },
  {
    q: "Do you accept walk-ins?",
    a: "Walk-ins are welcome, but we recommend booking in advance to avoid waiting.",
  },
  {
    q: "How long does a haircut take?",
    a: "Usually 30 to 45 minutes, depending on the style and service.",
  },
  {
    q: "How experienced is your barber?",
    a: "Our founder Hammad Ahmad has over 18 years of experience, and every team member is trained for a high standard of service.",
  },
  {
    q: "What products do you use?",
    a: "Professional-grade grooming and haircare products.",
  },
  {
    q: "Do you offer packages or memberships?",
    a: "Yes, we offer grooming packages and loyalty discounts. Ask in the salon or message us for details.",
  },
];

export default function FaqList() {
  return (
    <div className="flex-[2_1_560px] min-w-0 border-t border-ink">
      {FAQS.map((f) => (
        <details key={f.q} className="group border-b border-line">
          <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex justify-between items-center gap-6 py-[26px] min-h-11 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
            <h2 className="m-0 font-serif font-normal text-[clamp(24px,2.4vw,30px)] leading-[1.2]">{f.q}</h2>
            <span
              aria-hidden="true"
              className="flex-none text-[26px] leading-none text-accent transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="m-0 mb-7 max-w-[640px] text-[#2C2622] text-[17px]">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
