import { container } from "@/components/home/constants";
import { VALUES } from "./data";

export default function Values() {
  return (
    <section aria-labelledby="values-title" className="bg-ink text-bone">
      <div className={`${container} py-[clamp(72px,9vw,128px)]`}>
        <h2 id="values-title" className="m-0 mb-14 font-serif font-normal text-[clamp(44px,5vw,72px)] leading-none">
          What we stand for
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10">
          {VALUES.map((v) => (
            <div key={v.title} className="pt-5 border-t border-[#4A433B]">
              <h3 className="m-0 mb-2 font-serif font-normal text-[28px]">{v.title}</h3>
              <p className="m-0 text-ink-text text-[15px]">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
