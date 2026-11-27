import Image from "next/image";
import Link from "next/link";
import { container } from "@/components/home/constants";

const s = (name, price, desc, img, alt) => ({ name, price, desc, img: `/services/${img}`, alt });

const GROUPS = [
  {
    id: "hair",
    no: "01",
    title: "Hair",
    intro: "Cuts, colour and styling, from classic to modern fades.",
    items: [
      s("Hair Cut", "80", "Classic, fade or modern styles crafted by an experienced barber.", "hair.jpg", "Men's haircut in Dubai"),
      s("Hair Trimming", "80", "Maintain your look with a clean, precise trim.", "hairtriming.jpg", "Men's hair trim"),
      s("Kids Hair Cut", "80", "Gentle and stylish cuts for kids of all ages.", "kid.jpg", "Kids haircut in Dubai"),
      s("Hair Dye", "100", "Vibrant colour using safe and lasting formulas.", "dye.jpg", "Men's hair dye"),
      s("Hair Colouring", "100", "Customised colouring for a new, fresh look.", "hair-color.jpg", "Men's hair colouring"),
      s("Hair Straightening", "130", "Sleek, smooth styles with long-lasting results.", "straightening.jpg", "Men's hair straightening"),
      s("Hair Wash & Blow Dry", "80", "A fresh wash followed by expert blow drying and styling.", "blowdry.jpg", "Hair wash and blow dry"),
    ],
  },
  {
    id: "beard",
    no: "02",
    title: "Beard & shave",
    intro: "Sharp lines and smooth shaves with premium tools.",
    items: [
      s("Shaving / Trimming", "80", "A smooth shave or a neat trim using premium tools.", "shave.jpg", "Beard shave and trim"),
      s("Beard Styling with Scissors", "130", "Detailed beard sculpting using professional techniques.", "beardstyling.jpg", "Beard styling with scissors"),
      s("Beard Colouring", "100", "Custom beard shades to match your style.", "beard-color.jpg", "Beard colouring"),
    ],
  },
  {
    id: "face",
    no: "03",
    title: "Face & skin",
    intro: "Facials, masks and clean, precise hair removal.",
    items: [
      s("Facial", "140", "Deep cleansing and hydration for healthy skin.", "facial.jpg", "Men's facial in Dubai"),
      s("Facial (No Steam)", "130", "A gentle facial without steam for sensitive skin.", "facial-no-steam.jpg", "Facial without steam"),
      s("Facial Mask", "80", "Skin-rejuvenating masks for a fresh glow.", "facial-mask.jpg", "Men's facial mask"),
      s("Nose Mask", "60", "A cleansing mask for a clear, blackhead-free nose.", "nose-mask.jpg", "Nose mask treatment"),
      s("Nose Wax", "60", "Quick hair removal for a clean look.", "nose-wax.jpg", "Nose wax hair removal"),
      s("Sticky Hair Removal", "60", "Effective sticky wax for smooth skin.", "sticky-wax.jpg", "Sticky wax hair removal"),
    ],
  },
];

const JUMP = [
  { href: "#hair", label: "Hair" },
  { href: "#beard", label: "Beard" },
  { href: "#face", label: "Face & skin" },
];

const lightLink = "text-bone border-b border-[#6B6258] pt-3 pb-1 min-h-11 box-border inline-flex items-end";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink text-bone">
        <div className={`${container} py-[clamp(56px,7vw,96px)]`}>
          <nav aria-label="Breadcrumb" className="text-[13px] text-ink-muted mb-7">
            <Link href="/" className="text-ink-muted hover:text-bone inline-flex items-center min-h-11">
              Home
            </Link>{" "}
            / <span className="text-bone" aria-current="page">Services</span>
          </nav>
          <h1 className="m-0 font-serif font-normal text-[clamp(52px,7.4vw,108px)] leading-[0.95] tracking-[-0.02em]">
            Men&apos;s grooming services
            <br />
            in <em className="text-[#D9B9A8]">Dubai</em>
          </h1>
          <p className="mt-7 mb-0 text-ink-text text-lg max-w-[600px]">
            Hair, beard and facial care by an expert barber with 18+ years of experience. Every service is available in
            our salon or at your home.
          </p>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm tracking-[0.12em] uppercase">
            {JUMP.map((j) => (
              <a key={j.href} href={j.href} className={lightLink}>
                {j.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {GROUPS.map((g) => (
        <section
          key={g.id}
          id={g.id}
          aria-labelledby={`${g.id}-title`}
          className={`${container} pt-[clamp(64px,8vw,104px)] scroll-mt-6`}
        >
          <div className="flex flex-wrap justify-between items-end gap-4 pb-7 border-b border-ink mb-10">
            <h2
              id={`${g.id}-title`}
              className="m-0 font-serif font-normal text-[clamp(40px,4.6vw,64px)] leading-none"
            >
              <span className="text-accent text-[0.5em] align-middle mr-4">{g.no}</span>
              {g.title}
            </h2>
            <p className="m-0 text-muted max-w-[380px]">{g.intro}</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-x-7 gap-y-12">
            {g.items.map((item) => (
              <article key={item.name} className="flex flex-col gap-3.5">
                <div className="relative aspect-[4/3] bg-placeholder overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 400px"
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-between items-baseline gap-3">
                  <h3 className="m-0 font-serif font-normal text-[27px] leading-[1.15]">{item.name}</h3>
                  <span className="text-accent font-medium text-[15px] whitespace-nowrap">AED {item.price}</span>
                </div>
                <p className="m-0 text-muted text-[15px]">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className={`${container} py-[clamp(80px,9vw,128px)]`}>
        <div className="flex flex-wrap justify-between items-center gap-7 py-12 border-y border-line">
          <p className="m-0 font-serif text-[clamp(30px,3.4vw,46px)] leading-[1.1] max-w-[640px]">
            Prefer it at home? Every service is available as a <em className="text-accent">home visit</em> across Dubai.
          </p>
          <Link
            href="/pricing"
            className="text-accent hover:text-accent-hover text-[15px] border-b border-accent pt-3 pb-1 min-h-11 box-border inline-flex items-end"
          >
            View full price list →
          </Link>
        </div>
      </section>
    </>
  );
}
