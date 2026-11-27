import Container from "@/components/Container";

export default function Intro() {
  return (
    <Container as="section" aria-label="Introduction" className="py-section">
      <p className="m-0 font-serif text-intro">
        One barber who listens first, cuts with precision and treats every client as a{" "}
        <em className="text-accent">VIP</em>. In the salon, or in your living room.
      </p>
    </Container>
  );
}
