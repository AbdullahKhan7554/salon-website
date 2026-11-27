import Button from "@/components/ui/Button";
import PageHero, { HERO_MEDIA } from "@/components/PageHero";
import { BOOK_URL } from "./constants";

export default function Hero() {
  return (
    <PageHero
      media={HERO_MEDIA.cut}
      size="home"
      label={<>Premium men&apos;s salon &amp; home grooming in Dubai</>}
      labelAs="h1"
      titleAs="p"
      title={
        <>
          The gentleman&apos;s cut, <span>perfected</span> in Dubai.
        </>
      }
      actions={
        <>
          <Button href={BOOK_URL} tone="dark" arrow>
            Book on WhatsApp
          </Button>
          <Button href="/pricing" variant="secondary" tone="dark">
            Haircut from AED 80
          </Button>
        </>
      }
    />
  );
}
