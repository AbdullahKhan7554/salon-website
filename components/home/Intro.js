import { container } from "./constants";

export default function Intro() {
  return (
    <section aria-label="Introduction" className={`${container} py-[clamp(72px,9vw,128px)]`}>
      <p className="m-0 max-w-[1000px] font-serif text-[clamp(30px,3.8vw,52px)] leading-[1.2]">
        One barber who listens first, cuts with precision and treats every client as a{" "}
        <em className="text-accent">VIP</em>. In the salon, or in your living room.
      </p>
    </section>
  );
}
