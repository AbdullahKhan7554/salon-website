import Container from "@/components/Container";
import Button from "@/components/ui/Button";

export const metadata = {
  title: { absolute: "Page not found | Scissors VIP Salon" },
  robots: { index: false, follow: true },
};

const BOOK_URL =
  "https://wa.me/971501374524?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20your%20salon.";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <div className="bg-bone text-ink">
      <Container className="py-section">
        <h1 className="m-0 font-heading font-normal text-display tracking-[-0.02em]">
          This page has moved.
        </h1>
        <p className="mt-6 mb-8 text-muted text-body max-w-[520px]">
          The page you are looking for doesn&apos;t exist. Try one of these:
        </p>
        <ul className="m-0 p-0 list-none flex flex-wrap gap-x-8 gap-y-2 mb-10">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Button href={l.href} variant="link">
                {l.label}
              </Button>
            </li>
          ))}
        </ul>
        <Button href={BOOK_URL} arrow>
          Book on WhatsApp
        </Button>
      </Container>
    </div>
  );
}
