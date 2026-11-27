import Image from "next/image";
import Link from "next/link";
import { Clock, FileText, Instagram, Mail, MapPin, MessageCircle, Phone, Shield } from "lucide-react";
import Container from "@/components/Container";

const WHATSAPP_URL =
  "https://wa.me/971501374524?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20your%20salon.";

const NAVIGATION = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const SERVICES = [
  { href: "/pricing", label: "Hair Cut" },
  { href: "/pricing", label: "Beard Styling" },
  { href: "/pricing", label: "Facial" },
  { href: "/pricing", label: "Hair Colouring" },
  { href: "/pricing", label: "Kids Hair Cut" },
  { href: "/services", label: "All services" },
];

const CONNECT = [
  { href: "https://www.instagram.com/scissorsvipsaloon", label: "Instagram", Icon: Instagram },
  { href: WHATSAPP_URL, label: "WhatsApp", Icon: MessageCircle },
  { href: "mailto:scissorsvipsalon@gmail.com", label: "scissorsvipsalon@gmail.com", Icon: Mail },
  { href: "/terms", label: "Terms", Icon: FileText },
  { href: "/privacy", label: "Privacy", Icon: Shield },
];

const NOTES = ["Home visits across Dubai", "Walk-ins welcome", "Reply on WhatsApp within minutes"];

const label = "m-0 mb-5 font-label text-[12px] font-medium uppercase tracking-[0.2em] text-ink-muted";
const linkCls =
  "inline-flex items-center gap-2.5 min-h-11 text-bone no-underline underline-offset-4 decoration-1 transition-colors duration-200 hover:text-accent-hover hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function FooterLink({ href, children }) {
  if (/^(https?:|mailto:|tel:)/.test(href)) {
    const external = href.startsWith("http");
    return (
      <a href={href} className={linkCls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={linkCls}>
      {children}
    </Link>
  );
}

function LinkGroup({ title, links, className = "" }) {
  return (
    <nav aria-label={title} className={`min-w-0 ${className}`}>
      <h2 className={label}>{title}</h2>
      <ul className="m-0 p-0 list-none">
        {links.map(({ href, label: text, Icon }) => (
          <li key={text}>
            <FooterLink href={href}>
              {Icon && <Icon aria-hidden="true" size={16} strokeWidth={1.75} className="flex-none" />}
              <span className="break-all">{text}</span>
            </FooterLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--bone)] text-[15px] leading-[1.7] overflow-hidden">
      <Container className="pt-section">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-[clamp(40px,6vw,96px)] pb-14">
          {/* Brand */}
          <div className="lg:flex-[1.3_1_0] min-w-0">
            <Link href="/" className="inline-flex items-center gap-5 no-underline text-bone">
              <span className="flex-none w-24 h-24 rounded-[20px] bg-black inline-flex items-center justify-center overflow-hidden">
                <Image src="/logo.jpg.svg" alt="" width={72} height={72} className="w-[72px] h-[72px] object-contain" />
              </span>
              <span className="font-heading text-[40px] leading-[1.05]">Scissors VIP Salon</span>
            </Link>
            <p className="mt-6 mb-10 text-[18px] text-ink-text max-w-[44ch]">
              Premium men&apos;s grooming in Dubai, in our salon or at your doorstep.
            </p>

            <h2 className={label}>Scissors VIP Salon</h2>
            <address className="not-italic flex flex-col gap-3 text-ink-text">
              <span className="flex gap-3 items-start">
                <MapPin aria-hidden="true" size={18} strokeWidth={1.75} className="flex-none mt-1 text-bone" />
                Rashid Building, Saih Al Salam Street, Al Lisaili, Dubai
              </span>
              <span className="flex gap-3 items-center">
                <Phone aria-hidden="true" size={18} strokeWidth={1.75} className="flex-none text-bone" />
                <a
                  href="tel:+971501374524"
                  className="text-bone no-underline underline-offset-4 min-h-11 inline-flex items-center hover:text-accent-hover hover:underline"
                >
                  +971 50 137 4524
                </a>
              </span>
              <span className="flex gap-3 items-center">
                <Clock aria-hidden="true" size={18} strokeWidth={1.75} className="flex-none text-bone" />
                Mon – Sun, 10 am – 10 pm
              </span>
            </address>

            <ul className="m-0 mt-8 p-0 list-none flex flex-col gap-1.5 font-label text-[12px] uppercase tracking-[0.2em] text-ink-muted">
              {NOTES.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>

          {/* Link groups */}
          <div className="lg:flex-[1.7_1_0] min-w-0 grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            <LinkGroup title="Navigation" links={NAVIGATION} />
            <LinkGroup title="Services" links={SERVICES} />
            <LinkGroup title="Connect" links={CONNECT} className="col-span-2 lg:col-span-1" />
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-3 py-6 border-t border-ink-line text-[13px] text-ink-muted">
          <span>© 2026 Scissors VIP Salon</span>
          <span className="inline-flex items-center gap-2">
            Designed &amp; developed by
            <a
              href="https://www.avenixstudios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-h-11 text-ink-text no-underline underline-offset-4 hover:text-accent-hover hover:underline"
            >
              <Image src="/avenix-logo.png" alt="" width={20} height={20} className="w-5 h-5 object-contain" />
              Avenix Studio
            </a>
          </span>
        </div>
      </Container>

      <div aria-hidden="true" className="w-full overflow-hidden select-none pointer-events-none">
        <p className="m-0 text-center whitespace-nowrap font-sans font-bold text-[clamp(80px,18vw,300px)] leading-[0.8] tracking-[-0.02em] text-[#2B2622] translate-y-[0.12em]">
          SCISSORS
        </p>
      </div>
    </footer>
  );
}
