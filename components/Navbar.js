"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container, { containerClass } from "@/components/Container";
import s from "@/components/navbar/Navbar.module.css";

const BOOK_URL =
  "https://wa.me/971501374524?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20your%20salon.";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

// Pages that open with a full-bleed video hero: the pill floats over it there.
const HERO_ROUTES = ["/", "/services", "/pricing", "/about", "/contact", "/faq"];

const DESKTOP = 1024;

// Mobile panel rows line up with the page container.
const rowCls = "max-lg:w-full max-lg:max-w-[1240px] max-lg:mx-auto max-lg:px-[clamp(20px,5vw,48px)]";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const burgerRef = useRef(null);
  const menuRef = useRef(null);
  const wasOpen = useRef(false);

  const close = useCallback(() => setIsOpen(false), []);
  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);
  const overHero = HERO_ROUTES.includes(pathname);

  // Close on route change.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Scroll lock + focus management while the panel is open.
  useEffect(() => {
    const root = document.documentElement;
    if (isOpen) {
      root.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      menuRef.current?.querySelector(`.${s.link}`)?.focus();
    } else {
      root.style.overflow = "";
      document.body.style.overflow = "";
      if (wasOpen.current) burgerRef.current?.focus();
    }
    wasOpen.current = isOpen;
  }, [isOpen]);

  // Escape closes; widening past the breakpoint closes.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && close();
    const onResize = () => window.innerWidth >= DESKTOP && close();
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [isOpen, close]);

  const onLinkClick = () => {
    if (window.innerWidth < DESKTOP) close();
  };

  return (
    <header className={`${s.header} ${overHero ? s.overHero : s.inFlow}`}>
      <Container>
        <nav aria-label="Main" className={s.pill}>
          <Link href="/" className={s.logo}>
            <Image src="/logo.jpg.svg" alt="Scissors VIP Salon" width={44} height={44} className={s.logoImg} />
          </Link>

          <ul id="main-menu" ref={menuRef} className={`${s.links} ${isOpen ? s.open : ""}`}>
            {/* Panel's own copy of the logo, in the same spot as the pill's */}
            <li className={s.mobileBar} aria-hidden="true">
              <div className={containerClass}>
                <Link href="/" className={s.logo} tabIndex={-1} onClick={onLinkClick}>
                  <Image src="/logo.jpg.svg" alt="" width={44} height={44} className={s.logoImg} />
                </Link>
              </div>
            </li>
            {LINKS.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <li key={href} className={rowCls}>
                  <Link
                    href={href}
                    onClick={onLinkClick}
                    aria-current={active ? "page" : undefined}
                    className={`${s.link} ${active ? s.active : ""}`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className={`${s.ctaItem} ${rowCls}`}>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className={s.cta} onClick={onLinkClick}>
                Book now
              </a>
            </li>
          </ul>

          <button
            ref={burgerRef}
            type="button"
            className={`${s.burger} ${isOpen ? s.burgerOpen : ""}`}
            aria-expanded={isOpen}
            aria-controls="main-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className={s.burgerLine} />
            <span className={s.burgerLine} />
            <span className={s.burgerLine} />
          </button>
        </nav>
      </Container>
    </header>
  );
}
