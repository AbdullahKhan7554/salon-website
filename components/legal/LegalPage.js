import Link from "next/link";
import { container } from "@/components/home/constants";

/**
 * Shared layout for Terms and Privacy: breadcrumb, title, intro,
 * then numbered sections with the heading on the left and bullets on the right.
 */
export default function LegalPage({ title, intro, sections }) {
  return (
    <div className={`${container} pt-[clamp(56px,7vw,96px)] pb-[clamp(72px,9vw,128px)]`}>
      <nav aria-label="Breadcrumb" className="text-[13px] text-muted mb-7">
        <Link href="/" className="text-muted hover:text-ink inline-flex items-center min-h-11">
          Home
        </Link>{" "}
        / <span className="text-ink" aria-current="page">{title}</span>
      </nav>
      <h1 className="m-0 font-serif font-normal text-[clamp(48px,6vw,88px)] leading-[0.95]">{title}</h1>
      <p className="mt-5 mb-14 text-muted text-[17px] max-w-[640px]">{intro}</p>
      <div className="flex flex-col border-t border-ink">
        {sections.map((s) => (
          <section
            key={s.n}
            aria-labelledby={`section-${s.n}`}
            className="flex flex-wrap gap-y-3 gap-x-[clamp(32px,5vw,80px)] py-9 border-b border-line"
          >
            <h2
              id={`section-${s.n}`}
              className="m-0 flex-[1_1_260px] min-w-0 font-serif font-normal text-[30px] leading-[1.15]"
            >
              <span className="text-accent mr-3">{s.n}</span>
              {s.title}
            </h2>
            <ul className="m-0 flex-[2_1_480px] min-w-0 pl-5 list-disc text-ink-body">
              {s.points.map((p, i) => (
                <li key={i} className="mb-2">
                  {p}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
