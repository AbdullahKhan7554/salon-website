import { container } from "@/components/home/constants";
import { HOME_VISIT_URL } from "./data";

export default function HomeVisitBand() {
  return (
    <section aria-labelledby="home-visit-title" className="bg-ink text-bone">
      <div
        className={`${container} py-[clamp(64px,8vw,104px)] flex flex-wrap gap-10 justify-between items-center`}
      >
        <div className="flex-[1_1_480px] min-w-0">
          <h2
            id="home-visit-title"
            className="m-0 font-serif font-normal text-[clamp(40px,4.6vw,64px)] leading-none"
          >
            Home visits across Dubai
          </h2>
          <p className="mt-5 mb-0 text-ink-text text-[17px] max-w-[520px]">
            Any service on this list can be booked at your home, office or hotel. Message us your location and we will
            confirm the visit.
          </p>
        </div>
        <a
          href={HOME_VISIT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent hover:bg-accent-hover text-bone px-[30px] py-[18px] min-h-14 box-border inline-flex items-center gap-3 text-[15px]"
        >
          Book a home visit <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
