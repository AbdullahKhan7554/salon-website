import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import { HOME_VISIT_URL } from "./data";

export default function HomeVisitBand() {
  return (
    <section aria-labelledby="home-visit-title" className="bg-ink text-bone">
      <Container className="py-section flex flex-wrap gap-10 justify-between items-center">
        <div className="flex-[1_1_480px] min-w-0">
          <h2
            id="home-visit-title"
            className="m-0 font-serif font-normal text-h2"
          >
            Home visits across Dubai
          </h2>
          <p className="mt-5 mb-0 text-ink-text text-body max-w-[520px]">
            Any service on this list can be booked at your home, office or hotel. Message us your location and we will
            confirm the visit.
          </p>
        </div>
        <Button href={HOME_VISIT_URL} tone="dark" arrow>
          Book a home visit
        </Button>
      </Container>
    </section>
  );
}
