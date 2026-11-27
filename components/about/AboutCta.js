import Container from "@/components/Container";
import Button from "@/components/ui/Button";

export default function AboutCta() {
  return (
    <Container as="section" className="py-section flex flex-wrap gap-7 justify-between items-center">
      <p className="m-0 font-heading text-h2 max-w-[720px]">
        Be part of the story. Book your first <em className="text-accent">VIP</em> cut.
      </p>
      <div className="flex flex-wrap gap-x-8 gap-y-5 items-center">
        <Button href="/services" variant="secondary" arrow>
          Our services
        </Button>
        <Button href="/contact">Book now</Button>
      </div>
    </Container>
  );
}
