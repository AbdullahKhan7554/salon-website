import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

const BOOK_URL =
  "https://wa.me/971501374524?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20your%20salon.";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

const label = "text-label text-ink-muted/80 mb-2.5";
const link = "no-underline inline-flex items-center min-h-11 hover:text-bone";

export default function Footer() {
  return (
    <footer className="bg-ink text-ink-muted text-[15px] leading-[1.7]">
      <Container className="pt-section pb-24">
        <div className="flex flex-wrap justify-between items-end gap-6 pb-12 border-b border-ink-line">
          <p className="m-0 font-serif text-h2 text-bone">
            Your chair is waiting.
          </p>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-hover text-bone no-underline px-7 py-[18px] min-h-14 box-border inline-flex items-center gap-3"
          >
            Book on WhatsApp <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 py-12">
          <address className="not-italic">
            <div className={label}>Visit</div>
            <span className="text-bone">Scissors VIP Salon</span>
            <br />
            Rashid Building, Saih Al Salam Street
            <br />
            Al Lisaili, Dubai, UAE
          </address>

          <div>
            <div className={label}>Hours</div>
            <span className="text-bone">Monday – Sunday</span>
            <br />
            10:00 am – 10:00 pm
          </div>

          <div className="flex flex-col items-start">
            <div className={label}>Contact</div>
            <a href="tel:+971501374524" className={`${link} text-bone`}>
              +971 50 137 4524
            </a>
            <a href="mailto:scissorsvipsalon@gmail.com" className={`${link} text-ink-text`}>
              scissorsvipsalon@gmail.com
            </a>
            <a
              href="https://www.instagram.com/scissorsvipsaloon"
              target="_blank"
              rel="noopener noreferrer"
              className={`${link} text-ink-text`}
            >
              Instagram
            </a>
          </div>

          <nav aria-label="Footer">
            <div className={label}>Explore</div>
            <div className="grid grid-cols-2 gap-x-4">
              {LINKS.map(({ href, label: text }) => (
                <Link key={href} href={href} className={`${link} text-ink-text`}>
                  {text}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-3 text-[13px] pt-6 border-t border-ink-line">
          <span>© 2026 Scissors VIP Salon. All rights reserved.</span>
          <span className="inline-flex items-center gap-2">
            Designed &amp; developed by
            <a
              href="https://www.avenixstudios.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${link} gap-2 text-ink-text`}
            >
              <Image src="/avenix-logo.png" alt="" width={20} height={20} className="w-5 h-5 object-contain" />
              Avenix Studio
            </a>
          </span>
        </div>
      </Container>
    </footer>
  );
}
