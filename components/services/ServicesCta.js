import Container from "@/components/Container";
import Button from "@/components/ui/Button";

export default function ServicesCta() {
  return (
    <Container as="section" className="py-section">
      <div className="flex flex-wrap justify-between items-center gap-7 py-12 border-y border-line">
        <p className="m-0 font-serif text-h2 max-w-[640px]">
          Prefer it at home? Every service is available as a <em className="text-accent">home visit</em> across Dubai.
        </p>
        <Button href="/pricing" variant="link" arrow>
          View full price list
        </Button>
      </div>
    </Container>
  );
}
