import Image from "next/image";
import Container from "@/components/Container";

export default function Intro() {
  return (
    <Container
      as="section"
      aria-label="Introduction"
      className="py-section flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16"
    >
      <p className="m-0 font-heading text-intro lg:flex-1 min-w-0">
        One barber who listens first, cuts with precision and treats every client as a{" "}
        <span className="text-accent">VIP</span>. In the salon, or in your living room.
      </p>
      <div className="lg:flex-1 min-w-0 w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-placeholder">
        <Image
          src="/home/scissors-vip-salon-dubai.jpg"
          alt="Inside Scissors VIP Salon, Dubai"
          width={1024}
          height={1536}
          loading="lazy"
          sizes="(max-width: 1023px) 100vw, 580px"
          className="w-full h-full object-cover"
        />
      </div>
    </Container>
  );
}
