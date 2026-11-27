import { container } from "@/components/home/constants";
import { CHAPTERS } from "./data";

export default function Story() {
  return (
    <section aria-label="Our story" className={`${container} py-[clamp(72px,9vw,128px)]`}>
      {CHAPTERS.map((c) => (
        <div key={c.n} className="flex flex-wrap gap-y-4 gap-x-[clamp(32px,5vw,80px)] py-12 border-t border-line">
          <div className="flex-[1_1_260px] min-w-0">
            <span className="font-serif text-[28px] text-accent">{c.n}</span>
            <h2 className="mt-1.5 mb-0 font-serif font-normal text-[clamp(32px,3.4vw,44px)] leading-[1.1]">
              {c.title}
            </h2>
          </div>
          <p className="m-0 flex-[2_1_480px] min-w-0 text-[#2C2622] text-lg leading-[1.7]">{c.text}</p>
        </div>
      ))}
    </section>
  );
}
