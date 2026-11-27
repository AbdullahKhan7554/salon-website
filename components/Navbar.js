"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";

const BOOK_URL =
  "https://wa.me/971501374524?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20your%20salon.";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile panel whenever the route changes.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="bg-ink text-bone border-b border-ink-line">
      <Container
        as="nav"
        aria-label="Main"
        className="py-4 flex flex-wrap items-center justify-between gap-x-7 gap-y-4"
      >
        <Link
          href="/"
          aria-label="Scissors VIP Salon home"
          className="text-bone no-underline leading-none inline-flex flex-col justify-center min-h-11"
        >
          <span className="block font-serif text-[30px]">Scissors</span>
          <span className="block text-[10px] tracking-[0.5em] text-ink-muted mt-1">
            VIP SALON · DUBAI
          </span>
        </Link>

        <button
          type="button"
          className="md:hidden min-h-11 min-w-11 px-4 border border-ink-line text-bone text-[13px] tracking-[0.14em] uppercase"
          aria-expanded={isOpen}
          aria-controls="main-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        <div
          id="main-menu"
          className={`${isOpen ? "flex" : "hidden"} md:flex basis-full md:basis-auto flex-col md:flex-row md:flex-wrap md:items-center gap-y-2 md:gap-x-7 bg-ink -mx-[clamp(20px,5vw,48px)] md:mx-0 px-[clamp(20px,5vw,48px)] md:px-0 pb-6 md:pb-0 text-[13px] tracking-[0.14em] uppercase`}
        >
          {LINKS.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`no-underline pt-3 pb-1 min-h-11 box-border inline-flex items-end self-start border-b ${
                  active ? "text-bone border-bone" : "text-ink-text border-transparent hover:text-bone"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-hover text-bone no-underline px-[22px] py-[13px] min-h-11 box-border inline-flex items-center justify-center gap-2.5 mt-2 md:mt-0"
          >
            Book now <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </header>
  );
}
